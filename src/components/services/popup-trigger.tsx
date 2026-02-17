"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import DigitalExcellencePopup from "./popups";
import { useRouter } from "next/navigation";

interface PopupTriggerProps {
  buttonText?: string;
  showSocialLinks?: boolean;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  bg?: boolean;
  isPopupOpen?: boolean;
}

export default function PopupTrigger({
  buttonText = "Open Form",
  showSocialLinks,
  variant = "default",
  size = "default",
  bg = false,
  isPopupOpen,
}: PopupTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true);
          if (!isPopupOpen) {
            router.push("#form");
          }
        }}
        variant={variant}
        size={size}
        style={{
          display: "inline-flex",
          padding: "12.5px 25px 12.5px 25px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
          fontFamily: "Futuru",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "19.968px",
          textTransform: "uppercase",
        }}
        className={`tracking-wider lg:text-[16.615px] transition-all duration-500 text-black bg-white ${
          !bg ? "hover:bg-[#00AA71] hover:text-white" : "hover:bg-gray-300"
        }`}
      >
        {buttonText}
      </Button>
      {isPopupOpen && (
        <DigitalExcellencePopup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          showSocialLinks={showSocialLinks}
        />
      )}
    </>
  );
}
