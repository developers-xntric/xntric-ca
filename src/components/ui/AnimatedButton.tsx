"use client";
import { useState } from "react";

type Button_Type = {
    buttonTitle: string;
    variant?: "white" | "black" | "neon" | "blackNeon" | "blackWhite";
    className?: string;
    fontSize?: string;
    isAnimation?: boolean; 
};

const AnimatedButtons: React.FC<Button_Type> = (props) => {
    const [hover, setHover] = useState<boolean>(false);
    console.log(hover);


    return (
        <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`px-4 py-2 md:py-3 ${props.className} rounded-3xl  font-medium tracking-wide transition-all duration-225 ${props.variant === "white" ? "text-black bg-white " :
                    props.variant === "black" ? "text-white bg-black hover:bg-white hover:text-black" :
                        props.variant === "neon" ? "bg-[#00AA71] text-black hover:bg-white" :
                            props.variant === "blackNeon" ? "bg-black text-[#00AA71] hover:bg-white hover:text-black" :
                                props.variant === "blackWhite" ? "bg-black text-white border border-white hover:bg-white hover:text-black" :
                                    "bg-black text-white hover:bg-white hover:text-black" // Default case
                }`}
        // style={{ fontSize: props.fontSize || "15px" }}
        >
            <div className={`flex items-center justify-center ${props.fontSize ? { fontSize: props.fontSize } : "text-[11px] md:text-[15px]"}`}>
                <span>{props.buttonTitle}</span>
            </div>
        </button>
    );
};

export default AnimatedButtons;