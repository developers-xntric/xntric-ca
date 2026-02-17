/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
// import { useWindowWidth } from "../ai/ai-hero"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import 'swiper/css'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export interface Service {
    imgSrc: string
    title: string
    description: string
}

interface ServicesOfferProps {
    heading?: any
    subtext?: string
    services?: Service[]
    backgroundImage?: string
}

const defaultServices: Service[] = [
    {
        imgSrc: "/service-inner/c5.png",
        title: "CUSTOM WEBSITE DEVELOPMENT",
        description: "Pixel-perfect, goal-focused websites from scratch.",
    },
    {
        imgSrc: "/service-inner/c3.png",
        title: "E-COMMERCE DEVELOPMENT",
        description: "Conversion-optimized stores with seamless UX and inventory management.",
    },
    {
        imgSrc: "/service-inner/c4.png",
        title: "WEB PORTALS & DASHBOARDS",
        description: "Internal platforms, CRM dashboards, and more—built for performance.",
    },
    {
        imgSrc: "/service-inner/c3.png",
        title: "CMS DEVELOPMENT",
        description: "Custom WordPress, Webflow, or headless CMS that's easy to manage.",
    },
    {
        imgSrc: "/service-inner/c1.png",
        title: "WEBSITE MAINTENANCE & OPTIMIZATION",
        description: "From load times to SEO, we keep your site running at peak performance.",
    },
    {
        imgSrc: "/service-inner/c5.png",
        title: "CUSTOM WEBSITE DEVELOPMENT",
        description: "Pixel-perfect, goal-focused websites from scratch.",
    },
];

export default function ServicesOffer({
    heading = (
        <>
            SERVICES <span className="text-[#00AA71] font-futuru">WE</span> OFFER
        </>
    ),
    subtext = "From frontend finesse to backend brains — we build robust, secure, and scalable digital products.",
    services = defaultServices,
}: ServicesOfferProps) {
    const sectionRef = useRef<HTMLDivElement>(null)
    const pinnedRef = useRef<HTMLDivElement>(null)
    const carouselRef = useRef<HTMLDivElement>(null)
    const cardsContainerRef = useRef<HTMLDivElement>(null)
    const swiperRef = useRef<any>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    // const width = useWindowWidth();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)

        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    useEffect(() => {
        if (typeof window === "undefined" || isMobile) return

        const section = sectionRef.current
        const pinned = pinnedRef.current
        const carousel = carouselRef.current
        const cardsContainer = cardsContainerRef.current

        if (!section || !pinned || !carousel || !cardsContainer) return

        const cardWidth = 366
        const gap = 32
        const containerPadding = 24
        const viewportWidth = window.innerWidth
        const containerWidth = Math.min(viewportWidth - containerPadding * 2, 1440)

        const totalWidth = services.length * cardWidth + (services.length - 1) * gap
        const maxScroll = Math.max(0, totalWidth - containerWidth)

        if (maxScroll <= 0) {
            section.style.height = "100vh"
            return
        }

        const viewportHeight = window.innerHeight
        const scrollDistance = maxScroll

        section.style.height = `${viewportHeight + scrollDistance}px`

        const st = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: `+=${scrollDistance}px`,
            pin: pinned,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            onUpdate: (self) => {
                const progress = self.progress
                const xPos = -progress * maxScroll

                gsap.to(carousel, {
                    x: xPos,
                    ease: "power3.out",
                    overwrite: "auto",
                    duration: 0.4,
                })

                const cards = carousel.children
                Array.from(cards).forEach((card, index) => {
                    const cardCenter = index * (cardWidth + gap) + cardWidth / 2
                    const viewportCenter = -xPos + containerWidth / 2
                    const distance = Math.abs(cardCenter - viewportCenter)
                    const maxDistance = containerWidth / 2 + cardWidth

                    const scale = Math.max(0.9, 1 - (distance / maxDistance) * 0.1)
                    const opacity = Math.max(0.6, 1 - (distance / maxDistance) * 0.4)

                    gsap.to(card, {
                        scale,
                        opacity,
                        ease: "power3.out",
                        overwrite: "auto",
                        duration: 0.4,
                    })
                })
            },
        })

        return () => {
            st.kill()
            section.style.height = "auto"
        }
    }, [services.length, isMobile])

    const handleDotClick = (index: number) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index)
            setActiveIndex(index)
        }
    }

    if (isMobile) {
        return (
            <div className="relative md:py-16 pt-16 bg-top bg-cover md:pt-0 font-futuru bg-[url('/service-inner/swom.png')]">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                <div className="w-full px-3 md:px-6 mx-auto max-w-[1440px] relative z-20">
                    <div className="mb-12 text-center">
                        <h2 className="text-[30px] md:text-4xl font-semibold text-white mb-4 leading-tight tracking-wide">
                            {heading}
                        </h2>
                        <p className="text-white/60 text-[14px] max-w-2xl mx-auto tracking-wider font-medium">{subtext}</p>
                    </div>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="w-full"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[#111111] rounded-xl p-6 border border-[#00D4AA]/30 hover:border-[#00D4AA] transition-all duration-300 h-[250px] w-full">
                                    <div className="w-16 h-16 mb-4">
                                        <Image
                                            src={service.imgSrc || "/placeholder.svg"}
                                            alt={service.title}
                                            className="w-full h-full object-contain"
                                            draggable={false}
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <h3 className="text-white font-semibold text-[20px] leading-[24px] tracking-wide mb-3 min-h-14">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#FFFFFF] text-[14px] font-medium tracking-wider leading-[18px]">{service.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="mt-6 flex justify-center">
                        {services.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`inline-block w-2.5 h-2.5 rounded-full mx-1 transition-colors duration-300 ${activeIndex === index ? 'bg-[#00D4AA]' : 'bg-white'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div ref={sectionRef} className="relative bg-black min-h-[95vh]">
            <div ref={pinnedRef} className="relative">
                <div
                    className={`absolute top-0 right-0 w-1/2 h-full bg-cover bg-center bg-no-repeat opacity-80 lg:bg-[url('/service-inner/bg.png')]`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                <div className="w-full min-h-[95vh] mx-auto max-w-[1440px] 2xl:max-w-full flex flex-col justify-center relative z-10 gap-16">
                    <div className="font-['Futuru'] w-[90%] 2xl:w-full mx-auto 2xl:ms-20 2xl:max-w-[1740px] relative left-4">
                        <h2 className="text-4xl md:text-[60px] tracking-wide font-semibold text-white mb-4 leading-tight">{heading}</h2>
                        <p className="text-white text-[18px] font-light tracking-widest max-w-xl">{subtext}</p>
                    </div>
                    <div className="relative flex items-center">
                        <div ref={cardsContainerRef} className="w-full overflow-x-hidden">
                            <div
                                ref={carouselRef}
                                className="flex gap-8 will-change-transform"
                                style={{ width: `${services.length * 352}px` }}
                            >
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-[300px] 2xl:w-[350px] h-[300px] 2xl:h-[330px] bg-[#101010] rounded-xl p-6  group relative border border-[#3BE29A]/50 transition-all duration-500 will-change-transform font-['Futuru']"
                                    >
                                        <div className="w-16 h-16 mb-6 relative z-10">
                                            <Image
                                                src={service.imgSrc || "/placeholder.svg"}
                                                alt={service.title}
                                                className="w-full h-full object-contain filter transition-all duration-300"
                                                draggable={false}
                                                width={1000}
                                                height={1000}
                                            />
                                        </div>
                                        <h3 className="text-white font-semibold text-[22px] leading-snug mb-3 transition-colors duration-300 relative z-10 tracking-wider min-h-20 2xl:min-h-24 uppercase">
                                            {service.title}
                                        </h3>
                                        <p className="text-white text-[13px] 2xl:text-[15px] tracking-widest font-extralight leading-relaxed relative z-10">{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}