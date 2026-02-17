/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useLayoutEffect, useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import Image from "next/image"

const techStack = [
  { id: 1, name: "Generative AI ", icon: "/ai/i1.png" },
  { id: 5, name: "Agentic AI", icon: "/ai/i5.png" },
  { id: 2, name: "Workflow Automation", icon: "/ai/i2.png" },
  { id: 4, name: "AI Powered Assistants", icon: "/ai/i4.png" },
  { id: 3, name: "Intelligent Integrations", icon: "/ai/i3.png" },
]

export default function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useLayoutEffect(() => {
    const section = sectionRef.current
    const cardsContainer = cardsContainerRef.current
    const cards: any = cardsRef.current.filter(Boolean)

    if (!section || !cardsContainer || cards.length === 0) return

    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    const containerRect = cardsContainer.getBoundingClientRect()
    const containerCenterX = containerRect.width / 2
    const containerCenterY = containerRect.height / 2

    const cardRect = cards[0].getBoundingClientRect()
    const cardWidth = cardRect.width
    const cardHeight = cardRect.height

    if (isMobile) {
      const gapX = 8
      const gapY = 16

      // Available width inside container (with padding)
      const availableWidth = containerRect.width - 40
      const topRowSpacing = (availableWidth - cardWidth * 3) / 2
      const topRowStartX = 20 + cardWidth / 2

      const bottomRowTotalWidth = cardWidth * 2 + gapX
      const bottomRowStartX = (containerRect.width - bottomRowTotalWidth) / 2 + cardWidth / 2

      const mobilePositions = [
        // Top row - 3 cards
        { x: topRowStartX, y: containerCenterY - cardHeight - gapY },
        { x: topRowStartX + cardWidth + topRowSpacing, y: containerCenterY - cardHeight - gapY },
        { x: topRowStartX + (cardWidth + topRowSpacing) * 2, y: containerCenterY - cardHeight - gapY },
        // Bottom row - 2 cards
        { x: bottomRowStartX, y: containerCenterY + gapY },
        { x: bottomRowStartX + cardWidth + gapX, y: containerCenterY + gapY },
      ]

      // Set initial state
      gsap.set(cards, {
        x: containerCenterX - cardWidth / 2,
        y: containerCenterY - cardHeight / 2,
        opacity: 0,
        scale: 0.8,
      })

      // Create mobile timeline
      const tl = gsap.timeline({ paused: true })

      tl.to(cards, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.1,
      })

      tl.to(
        cards,
        {
          x: (index) => mobilePositions[index].x - cardWidth / 2,
          y: (index) => mobilePositions[index].y - cardHeight / 2,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.2",
      )

      timelineRef.current = tl
    } else {
      // Desktop Layout - overlapping horizontal
      const spacing = 0
      const totalWidth = cardWidth * cards.length + spacing * (cards.length - 1)
      const startX = (containerRect.width - totalWidth) / 2

      const finalPositions = cards.map((_: string, index: number) => startX + index * (cardWidth + spacing))

      gsap.set(cards, {
        x: containerCenterX - cardWidth / 2,
        opacity: 0,
        scale: 0.8,
      })

      const tl = gsap.timeline({ paused: true })

      tl.to(cards, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.1,
      })

      tl.to(
        cards,
        {
          x: (index) => finalPositions[index],
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.2",
      )

      tl.set(
        cards,
        {
          y: 0,
          marginTop: (index) => `${(techStack.length - index) * 15}px`,
        },
        "0.01",
      )

      timelineRef.current = tl
    }

    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timelineRef.current?.play()
        } else {
          timelineRef.current?.reverse()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
      timelineRef.current?.kill()
    }
  }, [isMobile])


  return (
    <div className="bg-black text-white lg:pb-20 flex items-center">
      <div
        ref={sectionRef}
        className="max-w-[1040px] w-full mx-auto flex flex-col lg:items-start justify-center pt-10 lg:pt-0 pb-10 lg:pb-0 sm:px-3 lg:px-6"
      >
        <h2
          style={{
            fontSize: isMobile ? 40 : 65,
            fontFamily: "Futuru",
            fontWeight: "600",
            background: "linear-gradient(264deg, #00AA71 0%, #FFF 66.57%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-4xl lg:text-5xl font-bold mb-16 lg:mb-10 text-center md:text-start"
        >
          What we offer <span className="text-emerald-400">with AI</span>
        </h2>

        <div
          ref={cardsContainerRef}
          className={`relative w-full overflow-visible ${isMobile ? "h-[400px] mt-10 right-4" : "h-[300px]"}`}
        >
          {techStack.map((tech, index) => (
            <div
              key={tech.id}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={`absolute ${index >= 3 && "mt-16 lg:mt-0"} ${isMobile && (index === 0 ? "mt-10" : index === 1 ? "mt-5" : index === 3 ? "pt-5" : "")}`}
              style={{
                perspective: "900px",
                zIndex: techStack.length - index,
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
                transform: "rotateX(20deg) rotateY(15deg) rotateZ(1deg)",
              }}
            >
              <div
                className={`relative rounded-[16px] border border-[#FFFFFF33] flex flex-col items-center justify-center text-center transition-all duration-300 ${isMobile ? "h-[180px] w-[140px] p-3" : "h-[248.686px] w-[221.495px] p-8"}`}
                style={{
                  background: "linear-gradient(149deg, #181818 4.39%, #030303 110.77%)",
                }}
              >
                <div
                  className={`absolute left-[7%] top-[5%] h-6 origin-top-left opacity-20 text-start w-full justify-start text-white font-futuru font-light leading-normal ${isMobile ? "text-xs" : "text-sm"}`}
                >
                  [ 0 {index + 1} ]
                </div>

                <div className="transition-transform duration-300 opacity-80 rotate-2">
                  <Image
                    src={tech.icon || "/placeholder.svg?height=100&width=100"}
                    alt={tech.name}
                    width={isMobile ? 60 : 100}
                    height={isMobile ? 60 : 100}
                    className="object-contain w-[170px] lg:w-[200px]"
                  />
                </div>

                <h3
                  className={`font-semibold transition-colors duration-300 tracking-wide text-end w-full leading-4 min-h-10 ${isMobile ? "text-sm" : "text-lg"}`}
                  style={{
                    fontFamily: "Futuru",
                    fontWeight: "600",
                    background: "linear-gradient(264deg, #00AA71 0%, #FFF 30.57%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}