/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { interests } from "@/data/form-section";
import React, { useState } from "react";
import AnimatedButtons from "@/components/ui/AnimatedButton";
import { ToastContainer, toast, Bounce } from "react-toastify";
const Form = ({ setIsSubmitted }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aboutProject: "",
    number: "",
    interests: [] as string[],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Name and Email are required.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else if (
      (typeof formData.number !== "number" && formData.number.length < 8) ||
      formData.number.length > 20
    ) {
      toast.error("Invalid Number", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    const data = { ...formData, interests: formData.interests.join(",") };
    try {
      const response = await fetch("/api/contactusform", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true)
        toast.success("Mail Sent Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        toast.error(
          `Failed to send mail: ${response.statusText || "Unknown error"}`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="text-white px-4 sm:px-10 rounded-lg flex justify-center min-h-screen 2xl:min-h-[90vh] 3xl:min-h-[95vh] font-futuru">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="sm:w-[95%] flex flex-col">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Interests */}
          <div className="space-y-10">
            <div className="mb-10">
              <h2 className="text-[#3be29a] text-xl font-semibold">
                Tell us about your project
              </h2>
              <p className="text-white text-sm sm:text-base tracking-widest">
                Have a vision in mind?. Share your details,and let&apos;s craft
                a masterpiece together!
              </p>
            </div>
            <label className="text-[#3be29a] text-sm font-semibold tracking-wider">
              I&apos;m Interested In
            </label>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {interests.map((interest) => (
                <button
                  type="button"
                  key={interest}
                  className={`sm:h-[50px] px-3 tracking-wider sm:px-6 py-2 rounded-full text-sm sm:text-base border-2 ${formData.interests.includes(interest)
                    ? "bg-green-400 text-black border-white"
                    : "bg-transparent text-white border-white"
                    } hover:bg-green-400 hover:text-black transition-all`}
                  onClick={() => handleInterestToggle(interest)}
                >
                  {interest}
                </button>
              ))}
            </div>

            {/* Name & Company */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-[#3be29a] text-sm font-semibold tracking-wider"
              >
                Name & Company
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name & Company"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white tracking-wide p-3 border-b border-white/15 focus:outline-none placeholder:text-white"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-[#3be29a] text-sm font-semibold tracking-wider"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white tracking-wide p-3 border-b border-white/15 focus:outline-none placeholder:text-white"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="budget"
                className="text-[#3be29a] text-sm font-semibold tracking-wider"
              >
                Enter you Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                // placeholder="+92 314-2324455"
                placeholder="Enter your number"
                onChange={handleInputChange}
                className="w-full bg-transparent text-white tracking-wide p-3 border-b border-white/15 focus:outline-none placeholder:text-white"
              />
            </div>
            {/* About Project */}
            <div className="flex flex-col">
              <label
                htmlFor="aboutProject"
                className="text-[#3be29a] text-sm font-semibold tracking-wider"
              >
                Tell Us a Bit About Your Project
              </label>
              <input
                type="text"
                id="aboutProject"
                name="aboutProject"
                placeholder="For example; Our Project is about Branding and LMS System"
                value={formData.aboutProject}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white tracking-wide p-3 border-b border-white/15 focus:outline-none placeholder:text-white"
              />
            </div>
            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                required
                id="aboutProject"
                name="aboutProject"
                className="bg-transparent text-black p-3 border-b border-white/15 focus:outline-none placeholder:text-white"
              />
              <label
                htmlFor="aboutProject"
                className="text-white text-sm font-semibold font-futuru tracking-widest"
              >
                When sending this form you agree to our privacy policy.
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start">
            <AnimatedButtons buttonTitle="Submit Your Request" variant="neon" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
