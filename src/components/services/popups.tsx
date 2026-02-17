/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { CheckIcon, X } from "lucide-react";
import Image from "next/image";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  showSocialLinks?: boolean;
}

export default function DigitalExcellencePopup({
  isOpen,
  onClose,
  showSocialLinks,
}: PopupProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [competitorInput, setCompetitorInput] = useState("");
  const [socialLinkInput, setSocialLinkInput] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    // Step 1 fields
    name: "",
    phone: "",
    email: "",
    website: "",
    socialLinks: [] as string[],
    // Step 2 fields
    primaryObjective: "",
    competitors: [] as string[],
    usp: "",
    orderValue: "",
    userGoals: "",
    marketingCampaigns: [] as string[],
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  // Validation function for Step 1
  const isStep1Valid = () => {
    const isPersonalInfoFilled =
      formData.name.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.email.trim() !== "";

    if (showSocialLinks) {
      return isPersonalInfoFilled;
    }
    return isPersonalInfoFilled && formData.website.trim() !== "";
  };

  // Validation function for Step 2
  const isStep2Valid = () => {
    return (
      formData.primaryObjective.length > 0 &&
      formData.competitors.length > 0 &&
      formData.usp.trim() !== "" &&
      formData.orderValue.trim() !== "" &&
      formData.userGoals.trim() !== "" &&
      formData.marketingCampaigns.length > 0
    );
  };

  // Determine if the current step is valid
  const isStepValid = () => {
    if (currentStep === 1) return isStep1Valid();
    if (currentStep === 2) return isStep2Valid();
    return true; // Step 3 has no fields to validate
  };

  const handleNext = async () => {
    if (!isStepValid()) {
      setError("Please fill in all required fields before proceeding.");
      return;
    }
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // Map formData to API-expected field names
      const apiData = {
        name: formData.name,
        email: formData.email,
        number: formData.phone, // 'phone' mapped to 'number'
        webLink: formData.website, // 'website' mapped to 'webLink'
        primaryObjective: formData.primaryObjective,
        competitors: formData.competitors,
        usp: formData.usp,
        averageValueCustomerLifetime: formData.orderValue, // 'orderValue' mapped to 'averageValueCustomerLifetime'
        mainGoals: formData.userGoals, // 'userGoals' mapped to 'mainGoals'
        marketingCampaigns: formData.marketingCampaigns,
        socialLinks: formData.socialLinks,
      };

      try {
        const response = await fetch("/api/audit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiData),
        });

        if (!response.ok) {
          throw new Error("Failed to send data to the API");
        }
        // On success, proceed to step 3
        setCurrentStep(3);
      } catch (error) {
        console.error("Error submitting form:", error);
        // Even if there's an error, proceed to step 3 for now
        setCurrentStep(3);
      }
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    setCompetitorInput("");
    setSocialLinkInput("");
    setFormData({
      name: "",
      phone: "",
      email: "",
      website: "",
      socialLinks: [],
      primaryObjective: "",
      competitors: [],
      usp: "",
      orderValue: "",
      userGoals: "",
      marketingCampaigns: [],
    });
    onClose();
  };

  const handleCheckboxChange = (
    field: string,
    value: string,
    checked: boolean
  ) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: checked
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter((item) => item !== value),
    }));
  };

  const addCompetitor = () => {
    if (competitorInput.trim() && formData.competitors.length < 3) {
      setFormData((prev) => ({
        ...prev,
        competitors: [...prev.competitors, competitorInput.trim()],
      }));
      setCompetitorInput("");
    }
  };

  const removeCompetitor = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      competitors: prev.competitors.filter((_, i) => i !== index),
    }));
  };

  const addSocialLink = () => {
    if (socialLinkInput.trim() && formData.socialLinks.length < 5) {
      setFormData((prev) => ({
        ...prev,
        socialLinks: [...prev.socialLinks, socialLinkInput.trim()],
      }));
      setSocialLinkInput("");
    }
  };

  const removeSocialLink = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: prev.socialLinks.filter((_, i) => i !== index),
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose} >
      <DialogContent className="w-[90%] md:max-w-[550px] overflow-y-scroll hide-scrollbar p-0 bg-[#101010] border-[#3BE29A]/50 z-[9999999] rounded-[14px] max-h-[70vh]">
        <style>{`
          .hide-scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* WebKit browsers */
          }
        `}</style>
        <div className="flex flex-col h-full">
          <div className="md:px-6 md:py-6 py-4 px-3 flex-1">
            {/* Header */}
            <DialogHeader className="text-left mb-6">
              <h2 className="text-white md:text-[30px] font-semibold leading-tight tracking нос-wider text-center">
                {currentStep === 1 ? (
                  <>
                    TAKE THE <span className="text-[#00AA71]">FIRST STEP</span>{" "}
                    TOWARD
                    <br />
                    DIGITAL EXCELLENCE
                  </>
                ) : currentStep === 2 ? (
                  <>
                    LET&apos;S TALK ABOUT YOUR{" "}
                    <span className="text-[#00AA71]">WEBSITE</span>
                  </>
                ) : (
                  <></>
                )}
              </h2>
            </DialogHeader>

            {/* Progress Steps */}
            {currentStep < 3 && (
              <div className="bg-[#ECFFF9] rounded-[10px] px-3 py-2 md:py-4 mb-10 relative">
                <Image
                  src="/service-inner/Bar.png"
                  alt=""
                  width={120}
                  height={50}
                  className="absolute w-[40px] md:w-[120px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <div className="flex items-center justify-between ">
                  {/* First Step: Personal Info */}
                  <div
                    onClick={() => setCurrentStep(1)}
                    className="flex items-center gap-2 cursor-pointer "
                  >
                    <div
                      className={`w-4 md:w-5 h-4 md:h-5 text-[13px] flex items-center justify-center rounded-[5px] ${
                        currentStep === 1
                          ? "bg-gradient-to-tr from-[#BBFFE8] to-[#00AA71] text-white"
                          : " text-[#00AA71] bg-white"
                      }`}
                    >
                      {currentStep === 1 ? "1" : "1"}
                    </div>
                    <span
                      className={`text-[12px] md:text-[16px] font-medium tracking-widest ${
                        currentStep === 1 ? "text-[#00AA71]" : "text-black"
                      }`}
                    >
                      Personal Info
                    </span>
                  </div>
                  {/* Second Step: Website Details */}
                  <div
                    onClick={() => setCurrentStep(2)}
                    className="flex items-center gap-2 cursor-pointer "
                  >
                    <div
                      className={`w-4 md:w-5 h-4 md:h-5 text-[13px] flex items-center justify-center rounded-[5px] ${
                        currentStep === 2
                          ? "bg-gradient-to-tr from-[#BBFFE8] to-[#00AA71] text-white"
                          : "bg-white text-[#00AA71]"
                      }`}
                    >
                      2
                    </div>
                    <span
                      className={`text-[12px] md:text-[16px] tracking-widest ${
                        currentStep === 2
                          ? "text-[#00AA71] font-medium"
                          : "text-black"
                      }`}
                    >
                      Website Details
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Form Content */}
            <div className="space-y-4">
              {currentStep === 1 ? (
                <div className="space-y-8">
                  {/* Name and Phone Row */}
                  <div className="grid  md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <Label
                        htmlFor="name"
                        className="text-[#00AA71] text-[14px] md:text-[16px] tracking-wider font-semibold"
                      >
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => {
                          handleInputChange("name", e.target.value);
                          setError("");
                        }}
                        className="bg-[#262626]  border-[#262626] rounded-[8px] tracking-widest text-white placeholder:tracking-widest placeholder:text-[16px] placeholder:font-light placeholder:text-[white]/40 h-14"
                      />
                    </div>
                    <div className="space-y-4">
                      <Label
                        htmlFor="phone"
                        className="text-[#00AA71] text-[14px] md:text-[16px] tracking-wider font-semibold"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={(e) => {
                          setError("");
                          handleInputChange("phone", e.target.value);
                        }}
                        className="bg-[#262626]  border-[#262626] rounded-[8px] tracking-widest text-white placeholder:tracking-widest placeholder:text-[16px] placeholder:font-light placeholder:text-[white]/40 h-14 "
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-4">
                    <Label
                      htmlFor="email"
                      className="text-[#00AA71] text-[14px] md:text-[16px] tracking-wider font-semibold"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => {
                        setError("");
                        handleInputChange("email", e.target.value);
                      }}
                      className="bg-[#262626]  border-[#262626] rounded-[8px] tracking-widest text-white placeholder:tracking-widest placeholder:text-[16px] placeholder:font-light placeholder:text-[white]/40 h-14 "
                    />
                  </div>

                  {/* Social Links or Website - Conditional */}
                  {showSocialLinks ? (
                    <div className="space-y-4">
                      <Label
                        htmlFor="socialLinks"
                        className="text-[#00AA71] text-[14px] md:text-[16px] tracking-wider font-semibold"
                      >
                        Your Social Links
                      </Label>
                      <div className="flex gap-2 rounded-[8px] bg-[#262626]  border-[#262626]">
                        <Input
                          id="socialLinks"
                          placeholder="Paste Your Social Link"
                          value={socialLinkInput}
                          onChange={(e) => {
                            setError("");
                            setSocialLinkInput(e.target.value);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              addSocialLink();
                            }
                          }}
                          className=" rounded-[8px] focus:outline-none outline-none border-none tracking-widest text-white placeholder:tracking-widest  placeholder:text-[16px] placeholder:font-light placeholder:text-[white]/40 h-14 flex-1"
                        />
                        <Button
                          type="button"
                          onClick={addSocialLink}
                          disabled={
                            !socialLinkInput.trim() ||
                            formData.socialLinks.length >= 5
                          }
                          variant="outline"
                          className="border-none text-lg text-[#00AA71] hover:bg-white20 bg-[#1d1d1d] hover:text-white px-4 mr-2 relative top-2  disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Add
                        </Button>
                      </div>

                      {/* Display added social links */}
                      {formData.socialLinks.length > 0 && (
                        <div className="space-y-4 mt-3 max-h-32 overflow-y-auto hide-scrollbar">
                          {formData.socialLinks.map((link, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between bg-[#101010] p-2 border-[#262626] rounded-[8px]"
                            >
                              <span className="text-white tracking-widest text-sm truncate flex-1 mr-2">
                                {link}
                              </span>
                              <Button
                                type="button"
                                onClick={() => removeSocialLink(index)}
                                variant="ghost"
                                size="sm"
                                className="text-red-400 hover:text-red-400 hover:bg-red-400 hover:bg-red-400/10 p-1 h-auto min-w-0"
                              >
                                <X className="w-3 h-3" />
                              </Button>
                            </div>
                          ))}
                          <p className="text-gray-400 tracking-wider text-sm">
                            {formData.socialLinks.length}/5 social links added
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Label
                        htmlFor="website"
                        className="text-[#00AA71] text-[14px] md:text-[16px] tracking-wider font-semibold"
                      >
                        Your Website
                      </Label>
                      <Input
                        id="website"
                        placeholder="Paste Your Website Link"
                        value={formData.website}
                        required
                        onChange={(e) => {
                          setError("");
                          handleInputChange("website", e.target.value);
                        }}
                        className="bg-[#262626]  border-[#262626] rounded-[8px] text-white placeholder:tracking-widest placeholder:text-[16px] placeholder:font-light placeholder:text-[white]/40 h-14 "
                      />
                    </div>
                  )}
                </div>
              ) : currentStep === 2 ? (
                <div className="space-y-6">
                  {/* Primary Objective */}
                  <div className="space-y-3">
                    <Label className="text-[#00AA71] text-[14px] md:text-[16px] tracking-wider font-semibold">
                      What is the primary objective of your website?
                    </Label>
                    <div className="flex flex-wrap gap-4">
                      {["Lead Generation", "Sales", "Information"].map(
                        (option) => (
                          <label
                            key={option}
                            className="relative flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              name="primaryObjective"
                              value={option}
                              required
                              checked={formData.primaryObjective.includes(
                                option
                              )}
                              onChange={(e) => {
                                handleCheckboxChange(
                                  "primaryObjective",
                                  option,
                                  e.target.checked
                                );
                                setError("");
                              }}
                              className={`
      peer w-4 h-4 rounded-full border border-gray-600 
      bg-[#101010] appearance-none cursor-pointer 
      checked:bg-[#00AA71] checked:border-[#00AA71]
      transition-all duration-200 focus:outline-none
    `}
                            />
                            {/* Conditionally shown check icon */}
                            <CheckIcon className="absolute   left-[2.5px] top-[6px] w-3 h-3 text-white hidden peer-checked:block pointer-events-none" />
                            <span className="text-white font-light text-md tracking-widest">
                              {option}
                            </span>
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  {/* Competitors */}
                  <div className="space-y-4">
                    <Label
                      htmlFor="competitors"
                      className="text-[#00AA71] text-[14px] md:text-[16px] tracking-wider font-semibold"
                    >
                      Who are your 3 main competitors?
                    </Label>
                    <div className="flex gap-2 items-center bg-[#262626]  border-[#262626] rounded-[8px]">
                      <Input
                        id="competitors"
                        placeholder="Your Answer (eg: amazon.com)"
                        value={competitorInput}
                        required
                        onChange={(e) => {
                          setError("");
                          setCompetitorInput(e.target.value);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addCompetitor();
                          }
                        }}
                        className=" text-white border-none placeholder:tracking-widest placeholder:text-[16px] placeholder:font-light placeholder:text-[white]/40 h-14 flex-1"
                      />
                      <Button
                        type="button"
                        onClick={addCompetitor}
                        disabled={
                          !competitorInput.trim() ||
                          formData.competitors.length >= 3
                        }
                        className="text-[#00AA71] border-none hover:text-white px-4 bg-none mr-2 z-[999] text-[18px] cursor-pointer"
                      >
                        Add
                      </Button>
                    </div>

                    {/* Display added competitors */}
                    {formData.competitors.length > 0 && (
                      <div className="space-y-4 mt-3">
                        {formData.competitors.map((competitor, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-[#101010] p-2 border-[#262626] rounded-[8px]"
                          >
                            <span className="text-white tracking-widest text-sm truncate flex-1 mr-2">
                              {competitor}
                            </span>
                            <Button
                              type="button"
                              onClick={() => removeCompetitor(index)}
                              variant="ghost"
                              size="sm"
                              className="text-red-400 hover:text-red-300 hover:bg-red-400/10 p-1 h-auto min-w-0"
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </div>
                        ))}
                        <p className="text-gray-400 text-xs tracking-wide">
                          {formData.competitors.length}/3 competitors added
                        </p>
                      </div>
                    )}
                  </div>

                  {/* USP */}
                  <div className="space-y-4">
                    <Label
                      htmlFor="usp"
                      className="text-[#00AA71] font-semibold text-[16px] tracking-wider"
                    >
                      What is your unique selling proposition (USP)?
                    </Label>
                    <textarea
                      id="usp"
                      required
                      placeholder="Your Answer"
                      value={formData.usp}
                      onChange={(e) => {
                        setError("");
                        handleInputChange("usp", e.target.value);
                      }}
                      className="w-full bg-[#262626] outline-none border-[#262626] border rounded-[8px] text-white placeholder:tracking-widest placeholder:text-[16px] placeholder:font-light placeholder:text-[white]/40 p-3 h-20 resize-none"
                    />
                  </div>
     
                  {/* Order Value */}
                  <div className="space-y-4">
                    <Label
                      htmlFor="orderValue"
                      className="text-[#00AA71] text-[14px] md:text-[16px] tracking-wider font-semibold"
                    >
                      What is your average order value and customer lifetime
                      value?
                    </Label>
                    <textarea
                      id="orderValue"
                      placeholder="Your Answer"
                      value={formData.orderValue}
                      required
                      onChange={(e) => {
                        setError("");
                        handleInputChange("orderValue", e.target.value);
                      }}
                      className="w-full bg-[#262626] outline-none border-[#262626] border rounded-[8px] text-white placeholder:tracking-widest placeholder:text-[16px] placeholder:font-light placeholder:text-[white]/40 p-3 h-20 resize-none"
                    />
                  </div>

                  {/* User Goals */}
                  <div className="space-y-4">
                    <Label
                      htmlFor="userGoals"
                      className="text-[#00AA71] text-[14px] md:text-[16px] tracking-wider font-semibold"
                    >
                      What are the main goals for your users on the site?
                    </Label>
                    <textarea
                      id="userGoals"
                      placeholder="Your Answer"
                      value={formData.userGoals}
                      required
                      onChange={(e) => {
                        setError("");
                        handleInputChange("userGoals", e.target.value);
                      }}
                      className="w-full bg-[#262626] outline-none  border-[#262626] border rounded-[8px] text-white placeholder:tracking-widest placeholder:text-[16px] placeholder:font-light placeholder:text-[white]/40 p-3 h-20 resize-none"
                    />
                  </div>

                  {/* Marketing Campaigns */}
                  <div className="space-y-3">
                    <Label className="text-[#00AA71] text-[14px] md:text-[16px] tracking-wider">
                      Are you currently running any paid marketing campaigns?
                    </Label>
                    <div className="flex md:flex-row flex-col gap-3">
                      {[
                        "Google Ads",
                        "Meta Ads",
                        "Snapchat Ads",
                        "TikTok Ads",
                      ].map((option) => (
                        <label key={option} className="relative flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            value={option}
                            checked={formData.marketingCampaigns.includes(
                              option
                            )}
                            required
                            onChange={(e) => {
                              setError("");
                              handleCheckboxChange(
                                "marketingCampaigns",
                                option,
                                e.target.checked
                              );
                            }}
                            className={`
      peer w-4 h-4 rounded-full border border-gray-600 
      bg-[#101010] appearance-none cursor-pointer 
      checked:bg-[#00AA71] checked:border-[#00AA71]
      transition-all duration-200 focus:outline-none
    `}
                          />
                          {/* Conditionally shown check icon */}
                          <CheckIcon className="absolute left-[2px] top-[6px] w-3 h-3 text-white hidden peer-checked:block pointer-events-none" />
                          <span className="text-white font-light text-md tracking-widest">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Thank You Screen
                <div className="text-center space-y-6 md:pb-10">
                  <div className="flex justify-center relative left-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="170"
                      height="170"
                      viewBox="0 0 170 170"
                      fill="none"
                      className="md:w-[170px] w-[100px] md:h-[170px] h-[100px] "
                    >
                      <path
                        d="M68.1694 152.022C100.041 152.022 125.878 126.185 125.878 94.3139C125.878 62.4424 100.041 36.6055 68.1694 36.6055C36.2979 36.6055 10.4609 62.4424 10.4609 94.3139C10.4609 126.185 36.2979 152.022 68.1694 152.022Z"
                        fill="white"
                      />
                      <path
                        d="M68.8216 138.92L68.0896 137.673C56.9089 118.623 27.1975 78.1961 26.8973 77.7901L26.4688 77.2079L36.5913 67.204L68.6337 89.5783C88.8084 63.3986 107.63 45.4172 119.907 34.9168C133.338 23.4303 142.08 18.1423 142.168 18.0917L142.367 17.9727H159.538L157.897 19.4333C115.715 57.0053 69.9933 136.861 69.5379 137.663L68.8216 138.92Z"
                        fill="#00AA71"
                      />
                    </svg>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white text-3xl font-bold tracking-wider">
                      THANK <span className="text-green-400">YOU!</span>
                    </h3>

                    <p className="text-white/50 font-light text-[14px] md:text-xl tracking-widest md:tracking-wider leading-relaxed">
                      We appreciate you taking the time to provide your
                      information. Our team will carefully review your details
                      and get back to you within the next few business days. We
                      look forward to helping you unlock new opportunities for
                      your digital growth!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {<p className="text-red-500 text-center tracking-wider">{error}</p>}

          {/* Fixed Footer with Button */}
          <div className="p-6 rounded-[8px]">
            {currentStep < 3 && (
              <Button
                type="button"
                onClick={currentStep === 3 ? handleClose : handleNext}
                className="w-full text-white font-semibold transition-colors duration-500 group hover:bg-red-400 bg-gradient-to-r hover:from-[#00442D] hover:to-[#006645]  from-[#00AA71] to-[#00442D] h-[55px] md:h-[65px] rounded-[10px] flex items-center justify-center gap-5 text-[18px] tracking-widest"
              >
                <>
                  <div className="w-[45px] h-[45px] group-hover:rotate-45 transition-all duration-500 ">
                    <Image
                      src={"/service-inner/arr.svg"}
                      alt=""
                      width={1000}
                      height={1000}
                      className="w-full h-full"
                    />
                  </div>
                  {currentStep === 1 ? "NEXT" : "SUBMIT"}
                </>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
