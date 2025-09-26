"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function ReachStrategicSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const engagements = [
    {
      image: "/images/lock.png",
      title: "Defence & Security",
      description: "Enhancing rapid medical response and secure logistics in non-critical environments",
    },
    {
      image: "/images/bag.png",
      title: "Emergency Preparedness Systems",
      description: "Supporting disaster response with fast-deployable medical and logistics platforms",
    },
    {
      image: "/images/boats.png",
      title: "Maritime & Island-Based Operations",
      description: "Providing reliable medical and supply connectivity across sea routes and remote islands",
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
    <section ref={sectionRef} className="py-24 bg-[#0C0E0C] relative">
      <div className="absolute inset-0 opacity-20 bg-grid-80"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          <h2
            className="font-saira font-[700] uppercase mb-4 tracking-normal"
            style={{
              fontSize: "45.13px",
              lineHeight: "60.48px",
              verticalAlign: "bottom",
              background: "linear-gradient(0deg, #6A6E79 -6.56%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            REACH & STRATEGIC ENGAGEMENT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {engagements.map((engagement, index) => (
            <div
              key={index}
              className={`text-center group transition-all ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDuration: `${animationDuration}ms`,
                transitionDelay: `${index * (isMobile ? 50 : 100)}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-transparent border border-gray-700/30 backdrop-blur-sm transition-all duration-500 hover:border-[#01c38e]/50 hover:shadow-[0_0_30px_rgba(1,195,142,0.3)] hover:bg-[#01c38e]/5">
                <div className="aspect-[4/3] flex items-center justify-center p-6">
                  <Image
                    src={engagement.image || "/placeholder.svg"}
                    alt={engagement.title}
                    width={300}
                    height={225}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-saira font-[500] mb-4"
                style={{
                  fontSize: "18px",
                  lineHeight: "18px",
                  verticalAlign: "middle",
                  color: "#E4E4E7",
                }}
              >
                {engagement.title}
              </h3>

              {/* Description */}
              <p
                className="font-saira font-[400]"
                style={{
                  fontSize: "14px",
                  lineHeight: "24px",
                  verticalAlign: "middle",
                  color: "#A1A1AACC",
                }}
              >
                {engagement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
