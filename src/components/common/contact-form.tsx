"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ContactForm({
  isPaddingTop,
}: {
  isPaddingTop?: boolean;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleInterestToggle = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setStatusMessage("All fields are required.");
      setIsSuccess(false);
      return;
    }

    const data = {
      name,
      phone,
      email,
      message,
      interests: interests.join(","),
    };

    try {
      const response = await fetch("/api/contactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        setIsSuccess(true);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setInterests([]);
      } else {
        setStatusMessage(`❌ Failed to send: ${response.statusText}`);
        setIsSuccess(false);
      }
    } catch (error) {
      setStatusMessage("❌ An error occurred. Please try again.");
      setIsSuccess(false);
      console.log(error)
    }
  };

  return (
    <div
      id="form"
      className={`w-full xl:max-w-[1050px] max-w-[90%] ${isPaddingTop ? "pb-20" : "py-16"
        } mx-auto`}
    >

      <div className="text-center md:mb-24 mb-12 mx-auto md:max-w-[100%]  ">
        <p className="text-white text-[15px] md:text-[18px] md:mb-5 mb-3 ">
          Let &apos;s get started
        </p>
        <h2 className="text-white text-[16px] md:text-[40px] font-medium  leading-[36px] md:leading-[85px] uppercase">
          Start Your{" "}
          <span className="text-[#00AA71] ">
            360° Journey
          </span>{" "}
          with Us!
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12 font-futuru ">
        <div id="fill-form" className="space-y-3 md:space-y-5 " >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 ">
            <div className="space-y-3">
              <Label
                htmlFor="name"
                className="text-[#00AA71] font-futuru  text-[16px]"
              >
                Name & company
              </Label>
              <Input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#24242480] md:px-8 text-[13px] md:text-[14px] placeholder:text-[11px] md:placeholder:text-[13px] border-[#262626] font-futuru font-light tracking-widest border rounded-[8px] text-[#FFFFFF] placeholder:text-[#FFFFFF88] h-12"
                placeholder="John From Example"
              />
            </div>
            <div className="space-y-3">
              <Label
                htmlFor="phone"
                className="text-[#00AA71] font-futuru  text-[16px]"
              >
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                pattern="^\+?\d{0,15}$"
                required
                value={phone}
                onChange={(e) => {
                  const rawValue = e.target.value;

                  // Allow only + at the start and digits after
                  if (/^(\+)?\d*$/.test(rawValue)) {
                    setPhone(rawValue);
                  }
                }}
                className="bg-[#24242480] md:px-8 text-[13px] md:text-[14px] placeholder:text-[11px] md:placeholder:text-[13px] border-[#262626] font-futuru font-light tracking-widest border rounded-[8px] text-[#FFFFFF] placeholder:text-[#FFFFFF88] h-12"
                placeholder="E.G 971 00 000 0000"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="space-y-3">
              <Label
                htmlFor="email"
                className="text-[#00AA71] font-futuru  text-[16px]"
              >
                Your email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#24242480] md:px-8 text-[13px] md:text-[14px] placeholder:text-[11px] md:placeholder:text-[13px] border-[#262626] font-futuru font-light tracking-widest border rounded-[8px] text-[#FFFFFF] placeholder:text-[#FFFFFF88] h-12"
                placeholder="John@example.com"
              />
            </div>
            <div className="space-y-3 flex flex-col md:mt-3">
              <Label
                htmlFor="message"
                className="text-[#00AA71] font-futuru  text-[16px]"
              >
                Your Message
              </Label>
              <textarea
                id="message"
                value={message}
                rows={5}
                required
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#24242480] px-3 md:px-8 py-3 md:py-6 text-[13px] md:text-[14px] placeholder:text-[11px] md:placeholder:text-[13px] border-[#262626] outline-none font-futuru font-light tracking-widest border rounded-[8px] text-[#FFFFFF] placeholder:text-[#FFFFFF88]"
                placeholder="Enter Your Message Here"
              />
            </div>
          </div>

          <div className="space-y-2 relative top-2">
            <div className="bg-[#24242480] border-[#262626] border rounded-[8px] md:px-8 px-6 py-4 md:py-6">
              <Label className="text-[#00AA71] font-futuru  text-[16px]">
                I&apos;m Interested in
              </Label>
              <div className="md:hidden">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="absolute right-3 top-5"
                >
                  {isOpen ? (
                    <ChevronUp color="white" />
                  ) : (
                    <ChevronDown color="white" />
                  )}
                </button>
              </div>

              <div
                className={`
                grid grid-cols-1 gap-1 md:gap-1 md:mt-8
                md:grid-cols-3 
                transition-all duration-500 ease-in-out overflow-hidden
                ${isOpen ? "max-h00px] opacity-100" : "max-h-0 opacity-0"} 
                md:max-h-full md:opacity-100
              `}
              >
                {[
                  "Branding",
                  "UI/UX design",
                  "Web development",
                  "Mobile App development",
                  "Search Engine Optimization",
                  "Search Engine Marketing",
                  "App Store Optimization",
                  "Production",
                  "Social Media Marketing",
                  "Digital Marketing",
                  "Game Marketing",
                  "Artificial Intelligence",
                ].map((item) => (
                  <InterestOption
                    key={item}
                    label={item}
                    selected={interests.includes(item)}
                    onClick={() => handleInterestToggle(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {statusMessage && (
          <p
            className={`text-center text-sm ${isSuccess ? "text-green-400" : "text-red-600"
              }`}
          >
            {statusMessage}
          </p>
        )}

        <div className="flex justify-center mt-10">
          <Button
            type="submit"
            className="bg-[#00AA71] text-[14px] hover:bg-white hover:text-black transition-all duration-500 text-white tracking-wider font-medium py-5 px-6 rounded-[8px] uppercase"
          >
            Submit Your Request
          </Button>
        </div>
      </form>
    </div>
  );
}

interface InterestOptionProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

function InterestOption({ label, selected, onClick }: InterestOptionProps) {
  return (
    <div
      className={`flex items-center gap-2 p-2 ${label === "Branding" ? "mt-8 md:mt-0" : ""
        } rounded cursor-pointer`}
      onClick={onClick}
    >
      <div className="w-6 h-6 rounded-[8px] border border-[#333333] flex items-center justify-center">
        {selected && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#00AA71]"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </div>
      <span className="text-[#FFFFFF] font-futuru tracking-widest font-light text-sm">
        {label}
      </span>
    </div>
  );
}
