/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const cards = [
    {
        id: "01",
        title: "90%",
        description:
            "Pinpoint of Hidden Market Challenges",
        bgColor: "bg-black",
        textColor: "text-white",
    },
    {
        id: "02",
        title: "Analyze",
        description:
            "User Data to Uncover Key Insights ",
        bgColor: "bg-[#00AA71]",
        textColor: "text-white",
    },
    {
        id: "03",
        title: "40%",
        description:
            "Deploy strategies proven to boost growth by",
        bgColor: "bg-black",
        textColor: "text-white",
    },
    {
        id: "04",
        title: "3X",
        description:
            "Deliver solutions that increase ROI by",
        bgColor: "bg-[#00AA71]",
        textColor: "text-white",
    },
]

export default function ScrollCardsSection({ text, heading, headingClassName, cardsData }: {
    heading?: string; text?: string; headingClassName?: string,
    cardsData?: {
        id: string,
        title: string,
        description: string,
        bgColor: string,
        textColor: string
    }[]
}) {
    const containerRef = useRef(null)
    const sectionRef = useRef(null)
    const cardsContainerRef = useRef(null)
    const [isMobile, setIsMobile] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const cardItems = cardsData ? cardsData : cards

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024) // Adjust breakpoint as needed, using lg:1024px
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    useEffect(() => {
        if (!isMobile) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % cardItems.length)
        }, 3000) // Autoplay every 3 seconds; adjust as needed

        return () => clearInterval(interval)
    }, [isMobile, cardItems.length])

    useEffect(() => {
        const container = containerRef.current
        const cardsContainer = cardsContainerRef.current

        if (!container || !cardsContainer || isMobile) return

        const totalSteps = cardItems.length - 1
        const stepDistance = 250 // Distance between cards

        gsap.to(cardsContainer, {
            y: -totalSteps * stepDistance,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top 35%",
                end: `+=${totalSteps * 500}vh`,
                scrub: true,
                pin: true,
                markers: false,
            },
        })

        // Cleanup on unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [cardItems.length, isMobile])

    return (
        <div ref={sectionRef} className="font-Futuru font-futuru">
            <div ref={containerRef} className="w-[90%] mx-auto 2xl:max-w-[1740px]">
                <div className="w-full overflow-hidden">
                    <div className="h-full">
                        <div className="grid lg:grid-cols-2 h-full">
                            {/* Left Content */}
                            <div className="space-y-8 flex flex-col justify-start relative lg:top-[12%] 2xl:top-[12%]">
                                <div>
                                    {heading ? <h3 className={`text-4xl lg:text-6xl xl:text-[60px] font-semibold text-white uppercase ${headingClassName}`} dangerouslySetInnerHTML={{ __html: heading }}>
                                    </h3> : <h3 className="text-4xl lg:text-6xl xl:text-[60px] font-semibold">
                                        <span className="text-white">FROM MARKET</span>
                                        <br />
                                        <span className="text-white">PUZZLES TO</span>
                                        <br />
                                        <span className="text-[#00AA71]">PRACTICAL</span>
                                        <br />
                                        <span className="text-white">SOLUTIONS</span>
                                    </h3>}
                                </div>
                                <div className="max-w-[300px] xl:max-w-lg">
                                    <p className="text-[#FFFFFF] opacity-70 text-[18px] lg:text-base leading-relaxed font-light tracking-wider">
                                        {text ? text : "Too many websites are pretty facades with no real performance under the hood. We’ve seen it all—slow load times, low conversions, clunky CMS, poor mobile experience"}
                                    </p>
                                </div>
                            </div>

                            {/* Right Content - Cards */}
                            <div className="relative h-full mt-12 lg:mt-18 flex items-center justify-center">
                                <div className="relative w-full h-[50vh] lg:h-screen overflow-hidden">
                                    <div ref={cardsContainerRef} className="relative w-full h-full">
                                        {isMobile ? (
                                            <div
                                                className="flex flex-row transition-transform duration-500 ease-in-out"
                                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                            >
                                                {cardItems.map((card) => (
                                                    <div
                                                        key={card.id}
                                                        className={`min-w-full flex-shrink-0 ${card.bgColor} ${card.textColor} border-[#3C3C3C] border h-64`}
                                                    >
                                                        <div className="p-6 h-full flex flex-col">
                                                            <div className="text-left mb-4">
                                                                <span className={`text-lg font-light ${card.bgColor === "bg-black" ? "opacity-70" : ""}`}>{card.id}</span>
                                                            </div>
                                                            <div className="flex-1 space-y-3 flex flex-col justify-end">
                                                                <h3 className="text-[55px] font-semibold tracking-wide uppercase">{card.title}</h3>
                                                                <p className={`text-[16px] font-light tracking-wider text-white leading-[20px] ${card.bgColor === "bg-black" ? "opacity-60" : ""}  max-w-[40%] 2xl:max-w-[60%]`}>{card.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            cardItems.map((card, index) => {
                                                const isEven = index % 2 === 0
                                                const left = isEven ? "0px" : "50%"
                                                const top = `${index * 43}%`

                                                return (
                                                    <div
                                                        key={card.id}
                                                        className={`lg:absolute ${card.bgColor} ${card.textColor} border-[#3C3C3C] border lg:w-[50%] h-[43%] left-[${left}]`}
                                                        style={{
                                                            top,
                                                            zIndex: cardItems.length - index,
                                                        }}
                                                    >
                                                        <div className="p-6 h-full flex flex-col">
                                                            <div className="text-left mb-4">
                                                                <span className={`text-lg font-light ${card.bgColor === "bg-black" ? "opacity-70" : ""}`}>{card.id}</span>
                                                            </div>
                                                            <div className="flex-1 space-y-3 flex flex-col justify-end">
                                                                <h3 className="text-[55px] font-semibold tracking-wide uppercase">{card.title}</h3>
                                                                <p className={`text-[16px] font-light tracking-wider text-white leading-[20px] ${card.bgColor === "bg-black" ? "opacity-60" : ""}  max-w-[70%] 2xl:max-w-[60%]`}>{card.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}