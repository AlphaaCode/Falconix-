"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const features = [
    {
      icon: "/icons/blend.svg",
      title: "Competitive Edge",
      description:
        "FalconiX delivers modular systems, rapid land/sea/air deployment, and smooth integration with existing networks.",
    },
    {
      icon: "/icons/handshake.svg",
      title: "Partnership Model",
      description: "We co-develop secure and adaptable solutions with public and private partners.",
    },
    {
      icon: "/icons/users.svg",
      title: "Open to Collaboration",
      description:
        "FalconiX works with UAV experts, health-tech innovators, logistics operators, and defense networks to enhance emergency response.",
    },
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const threshold = isMobile ? 0.3 : 0.5
          setIsVisible(entry.intersectionRatio > threshold)
        })
      },
      {
        threshold: isMobile ? [0, 0.3, 0.6, 1] : [0, 0.5, 0.8, 1],
        rootMargin: isMobile ? "0px 0px -20% 0px" : "0px 0px -10% 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  const animationDuration = isMobile ? 400 : 600

  return (
    <section id="why-us" ref={sectionRef} className="py-24 bg-[#0C0E0C] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div
          className={`text-center mb-20 transition-all ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          <h2
            className="font-saira font-[700] uppercase mb-4"
            style={{
              fontSize: "45.13px",
              lineHeight: "60.48px",
              verticalAlign: "bottom",
              textAlign: "center",
              background: "linear-gradient(0deg, #6A6E79 -6.56%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "0%",
            }}
          >
            WHY CHOOSE US ?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center group cursor-pointer transition-all ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDuration: `${animationDuration}ms`,
                transitionDelay: `${index * (isMobile ? 50 : 100)}ms`,
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-10">
                <div
                  className={`w-24 h-24 flex items-center justify-center feature-icon transition-all ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(20,184,166,0.5)] ${
                    isVisible ? "scale-100" : "scale-80"
                  }`}
                  style={{
                    transitionDuration: `${animationDuration}ms`,
                    transitionDelay: `${index * (isMobile ? 75 : 150)}ms`,
                  }}
                >
                  <Image
                    src={feature.icon || "/placeholder.svg"}
                    alt={feature.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain teal-icon-filter group-hover:brightness-125 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className={`font-saira font-[700] mb-8 transition-all ease-out group-hover:text-teal-400 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${index % 2 === 0 ? "-translate-x-4" : "translate-x-4"}`
                }`}
                style={{
                  fontSize: "22px",
                  lineHeight: "38.36px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  letterSpacing: "4%",
                  background: "linear-gradient(180deg, #FFFFFF 11.01%, #999999 98.51%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  transitionDuration: `${animationDuration}ms`,
                  transitionDelay: `${(isMobile ? 100 : 200) + index * (isMobile ? 50 : 100)}ms`,
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className={`font-saira font-[300] max-w-xs mx-auto transition-all ease-out ${
                  isVisible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  fontSize: "16px",
                  lineHeight: "28px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  letterSpacing: "4%",
                  color: "#FFFFFF",
                  transitionDuration: `${animationDuration}ms`,
                  transitionDelay: `${(isMobile ? 150 : 300) + index * (isMobile ? 50 : 100)}ms`,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
