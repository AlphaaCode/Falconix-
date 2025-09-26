"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCircle, setActiveCircle] = useState<number | null>(null)
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  const impactItems = [
    {
      id: 1,
      title: "MULTI-SECTOR REACH ACROSS HEALTHTECH, LOGISTICS, AND EMERGENCY INFRASTRUCTURE",
      side: "right" // circle before text
    },
    {
      id: 2,
      title: "COLLABORATIVE PROJECTS IN MANY COUNTRIES ACROSS EUROPE, MENA AND SOUTHEAST ASIA",
      side: "left" // circle after text
    },
    {
      id: 3,
      title: "MULTIPLE ONGOING FIELD EVALUATIONS AND PILOT PROGRAMS IN SENSITIVE OPERATIONAL AREAS",
      side: "right" // circle before text
    },
    {
      id: 4,
      title: "RECOGNIZED IN STRATEGIC RESILIENCE INITIATIVES INVOLVING SOVEREIGN AND CORPORATE ACTORS",
      side: "left" // circle after text
    }
  ]

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLDivElement>(".impact-item"))
    const headerElements = document.querySelectorAll(".impact-header")

    // Header reveal observer (unchanged)
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -20% 0px",
      },
    )

    headerElements.forEach((header) => headerObserver.observe(header))

    // We'll compute the item closest to the viewport center and activate that one.
    const onScrollOrResize = () => {
      if (!items.length) return

      const viewportCenter = window.innerHeight / 2
      const activationThreshold = Math.max(80, window.innerHeight * 0.12) // ~80px or 12% of viewport
      const revealThreshold = Math.max(140, window.innerHeight * 0.18) // larger threshold for reveal animations

      let closestIndex: number | null = null
      let closestDistance = Infinity

      items.forEach((el, idx) => {
        const rect = el.getBoundingClientRect()
        const itemCenter = rect.top + rect.height / 2
        const distance = Math.abs(itemCenter - viewportCenter)

        // mark visible for reveal if within revealThreshold
        if (distance <= revealThreshold) {
          setVisibleItems((prev) => {
            if (prev.has(idx)) return prev
            const next = new Set(prev)
            next.add(idx)
            return next
          })
        }

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = idx
        }
      })

      // activate only if the closest item is within activation threshold
      if (closestIndex !== null && closestDistance <= activationThreshold) {
        setActiveCircle((prev) => (prev === closestIndex ? prev : closestIndex))
      } else {
        setActiveCircle(null)
      }
    }

    // run initially and bind listeners
    onScrollOrResize()
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)

    return () => {
      headerObserver.disconnect()
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
    }
  }, [])

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-[#0C0E0C] overflow-hidden py-16 md:py-24"
      id="impact"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(20,184,166,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.1)_1px,transparent_1px)] [background-size:40px_40px] md:[background-size:80px_80px]"
      />

      {/* Content Frame */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[93px] z-10">
        <div className="w-full max-w-[1254px] mx-auto flex flex-col gap-10 md:gap-16">
          
          {/* Header Section */}
          <motion.div 
            className="w-full max-w-4xl impact-header opacity-0 translate-y-8 transition-all duration-700 ease-out px-2 sm:px-0"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Title */}
            <motion.h2 
              className="font-saira font-bold text-[45.13px] leading-[60.48px] uppercase mb-4 sm:mb-6 bg-[linear-gradient(0deg,#6A6E79_-6.56%,#FFFFFF_100%)] bg-clip-text text-transparent align-bottom tracking-normal"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              IMPACT & KEY METRICS
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              className="font-saira font-light text-[16px] leading-[28px] sm:text-[18px] sm:leading-[32px] md:text-[22px] md:leading-[42px] text-white capitalize tracking-[-0.03em] align-bottom"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Measuring Our Reach, Strategic Collaborations, And Operational Performance Across Critical Sectors
              Worldwide.
            </motion.p>
          </motion.div>

          {/* Main Content Frame */}
          <div className="w-full max-w-7xl mx-auto px-2 sm:px-0">
            
            {/* Section Title */}
            <motion.div 
              className="text-center mb-10 sm:mb-16 md:mb-20 impact-header opacity-0 translate-y-8 transition-all duration-700 ease-out"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <h3 
                className="font-saira font-medium text-[22px] leading-[32px] sm:text-[32px] sm:leading-[44px] md:text-[45.13px] md:leading-[60.48px] uppercase text-center bg-gradient-to-r from-white to-[#6A6E79] bg-clip-text text-transparent align-bottom tracking-normal"
              >
                REACH & STRATEGIC ENGAGEMENT
              </h3>
            </motion.div>

            {/* Timeline Container */}
            <div className="relative max-w-7xl mx-auto">
              {/* Vertical Dashed Line */}
              <motion.div
                className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-10 [background-image:repeating-linear-gradient(to_bottom,#666_0px,#666_8px,transparent_8px,transparent_16px)]"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              />

              {/* Timeline Items */}
              <div className="space-y-16 sm:space-y-28 md:space-y-40">
                {impactItems.map((item, index) => (
                  <motion.div 
                    key={item.id} 
                    data-index={index} 
                    className="relative impact-item"
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.45, delay: 0.15 + (index * 0.06), ease: "easeOut" }}
                  >
                    {/* Circular Node */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="relative">
                        <motion.div
              className={`rounded-full transition-all duration-300 ease-out w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[40.57px] md:h-[40.57px] bg-[#D9D9D90A] backdrop-blur-[3.81px] ${(activeCircle ?? -1) >= index || visibleItems.has(index)
                ? 'shadow-[0px_0px_0.61px_0px_#FFFFFF,0px_1.23px_35.96px_0.61px_#01C38EC7,inset_0px_1.84px_5.47px_-1.23px_#01C38E]'
                : 'shadow-[0px_0px_0.61px_0px_rgba(255,255,255,0.3),0px_1.23px_35.96px_0.61px_rgba(1,195,142,0.3),inset_0px_1.84px_5.47px_-1.23px_rgba(1,195,142,0.3)]'} ${visibleItems.has(index) ? 'opacity-100' : 'opacity-0'}`}
                          style={{ transitionDelay: `${index * 100}ms` }}
                          initial={{ 
                            opacity: 0, 
                            scale: 0.9
                          }}
                          animate={isInView ? { 
                            opacity: visibleItems.has(index) ? 1 : 0, 
                            scale: activeCircle === index ? 1.05 : 1
                          } : { 
                            opacity: 0, 
                            scale: 0.9
                          }}
                          transition={{ duration: 0.25, delay: 0.1 + (index * 0.05), ease: "easeOut" }}
                        />
                        <div
                          className="absolute inset-0 m-auto w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-40 bg-gradient-to-tr from-white/30 to-transparent"
                          style={{ transform: 'translate(0, 0)' }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`${item.side === "right" ? "ml-auto pl-16" : "mr-auto pr-16"} ${item.side === "right" ? "w-1/2" : "w-1/2 flex justify-end"} transition-all duration-700 ease-out ${
                        visibleItems.has(index)
                          ? "opacity-100 translate-y-0 translate-x-0"
                          : `opacity-0 translate-y-8 ${item.side === "right" ? "translate-x-8" : "-translate-x-8"}`
                      }`}
                      style={{
                        transitionDelay: `${index * 200 + 100}ms`,
                      }}
                    >
                      <div className="p-0 max-w-[260px] sm:max-w-[320px] md:max-w-[360px]">
                        <p 
                          className="font-saira font-medium text-[18px] leading-[18px] md:text-[18px] uppercase break-words whitespace-normal text-left ltr"
                          style={{ color: '#E4E4E7', verticalAlign: 'middle' }}
                        >
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All styling is now handled by Tailwind classes above. */}
    </section>
  )
}
