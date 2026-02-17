/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor({ type }: { type: string | null }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [cursorText, setCursorText] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);


    useEffect(() => {
        if (!isClient) return;

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", updatePosition);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isClient]);


    useEffect(() => {
        setCursorText(type);
    }, [type]);


    if (!isClient || !type || !isVisible) return null;

    return (
        <motion.div
            className="fixed pointer-events-none z-50 flex items-center justify-center"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: "translate(-50%, -50%)",
            }}
        >
            <motion.div
                className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-[#3BE29A] text-black shadow-lg"
                animate={{ scale: type ? 1 : 0, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0 }}
            >
                {type === "view" && <span className="text-sm font-semibold uppercase">View</span>}
            </motion.div>
        </motion.div>
    );
}