"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [messageLength, setMessageLength] = useState(0)
  const [toast, setToast] = useState<{ title: string; description: string; variant?: string } | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const inViewRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const animationDurationMs = isMobile ? 400 : 600

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
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

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  const showToast = (toastData: { title: string; description: string; variant?: string }) => {
    setToast(toastData)
    setTimeout(() => setToast(null), 5000)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = rect.height

      let progress = 0
      if (rect.top <= windowHeight * 0.8 && rect.bottom >= windowHeight * 0.2) {
        const visibleHeight =
          Math.min(rect.bottom, windowHeight - windowHeight * 0.2) - Math.max(rect.top, windowHeight * 0.8)
        const totalScrollableHeight = sectionHeight + windowHeight * 0.8 - windowHeight * 0.2
        progress = Math.max(0, Math.min(1, visibleHeight / totalScrollableHeight))
      } else if (rect.bottom < windowHeight * 0.2) {
        progress = 1
      }

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "message" && value.length > 5000) {
      return
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (name === "message") {
      setMessageLength(value.length)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        showToast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
        setMessageLength(0)
      } else {
        showToast({
          title: "Error sending message",
          description: data.error || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch {
      // ignore
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} className="bg-[#0C0E0C] py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30 contact-grid-bg" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#01c38e] rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Laser Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#01c38e]/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#01c38e]/20 to-transparent" />
      
      {toast && (
        <div className="fixed top-8 right-8 z-50 bg-black/95 backdrop-blur-md border border-[#01c38e]/30 rounded-xl p-6 max-w-sm shadow-2xl shadow-[#01c38e]/10">
          <h4 className="font-saira font-semibold text-white mb-2 text-lg">{toast.title}</h4>
          <p className="font-saira text-gray-300">{toast.description}</p>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#01c38e] to-teal-400 rounded-t-xl" />
        </div>
      )}

      <div ref={inViewRef} className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Mission Control Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: animationDurationMs / 1000, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#01c38e]" />
            <div className="mx-6 text-[#01c38e] font-saira text-sm font-medium tracking-[0.2em]">
              MISSION CONTROL
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#01c38e]" />
          </div>
          
          <motion.h1
            className="font-saira font-[700] mb-6 tracking-tight text-center uppercase"
            style={{ fontSize: "45.13px", lineHeight: "60.48px", verticalAlign: "bottom", letterSpacing: "0%" }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: animationDurationMs / 1000, delay: 0.1, ease: "easeOut" }}
          >
            <span style={{ background: "linear-gradient(0deg, #6A6E79 -6.56%, #FFFFFF 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", display: "block" }}>CONTACT</span>
            <span style={{ background: "linear-gradient(0deg, #6A6E79 -6.56%, #FFFFFF 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", display: "block" }}>GROUND CONTROL</span>
          </motion.h1>
          
          <motion.p
            className="text-xl font-saira text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: animationDurationMs / 1000, delay: 0.15, ease: "easeOut" }}
          >
            Initiate communication protocols. Our mission specialists are standing by to discuss 
            strategic operations and transformational objectives.
          </motion.p>
        </motion.div>

        {/* Command Console */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Side Panel - Mission Brief */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              className="bg-black/60 backdrop-blur-sm border border-[#01c38e]/20 rounded-2xl p-8 hover:border-[#01c38e]/40 transition-all duration-500"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: animationDurationMs / 1000, ease: "easeOut" }}
            >
              <h3 className="font-saira mb-6 flex items-center" style={{ fontWeight: 700, fontSize: "22px", lineHeight: "38.36px", letterSpacing: "4%", background: "linear-gradient(180deg, #FFFFFF 11.01%, #999999 98.51%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                <div className="w-2 h-2 bg-[#01c38e] rounded-full mr-3 animate-pulse" />
                MISSION STATUS
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-saira" style={{ fontWeight: 300, fontSize: "16px", lineHeight: "28px", letterSpacing: "4%", color: "#FFFFFF" }}>Response Time</span>
                  <span className="font-saira" style={{ fontWeight: 300, fontSize: "16px", lineHeight: "28px", letterSpacing: "4%", color: "#01c38e" }}>{'<'} 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-saira" style={{ fontWeight: 300, fontSize: "16px", lineHeight: "28px", letterSpacing: "4%", color: "#FFFFFF" }}>Availability</span>
                  <span className="font-saira" style={{ fontWeight: 300, fontSize: "16px", lineHeight: "28px", letterSpacing: "4%", color: "#01c38e" }}>24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-saira" style={{ fontWeight: 300, fontSize: "16px", lineHeight: "28px", letterSpacing: "4%", color: "#FFFFFF" }}>Success Rate</span>
                  <span className="font-saira" style={{ fontWeight: 300, fontSize: "16px", lineHeight: "28px", letterSpacing: "4%", color: "#01c38e" }}>99.9%</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-black/60 backdrop-blur-sm border border-[#01c38e]/20 rounded-2xl p-8 hover:border-[#01c38e]/40 transition-all duration-500"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: animationDurationMs / 1000, ease: "easeOut", delay: 0.08 }}
            >
              <h3 className="font-saira mb-6 flex items-center" style={{ fontWeight: 700, fontSize: "22px", lineHeight: "38.36px", letterSpacing: "4%", background: "linear-gradient(180deg, #FFFFFF 11.01%, #999999 98.51%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                <div className="w-2 h-2 bg-[#01c38e] rounded-full mr-3 animate-pulse" />
                DIRECT LINK
              </h3>
              <p className="font-saira mb-4" style={{ fontWeight: 300, fontSize: "16px", lineHeight: "28px", letterSpacing: "4%", color: "#FFFFFF" }}>
                Emergency communication channel
              </p>
              <a
                href="mailto:bensefiayazid@gmail.com"
                className="font-saira hover:text-[#01c38e]/80 transition-colors duration-300"
                style={{ color: "#01c38e", fontSize: "16px", fontWeight: 300, lineHeight: "28px", letterSpacing: "4%" }}
              >
                contact@falcon-ix.com
              </a>
            </motion.div>
          </div>

          {/* Main Console - Communication Interface */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-black/40 backdrop-blur-sm border border-[#01c38e]/20 rounded-3xl p-8 hover:border-[#01c38e]/40 transition-transform duration-500 relative overflow-hidden"
              style={{
                // keep minor opacity control for scroll feel but avoid layout shifts
                opacity: Math.max(0.95, scrollProgress),
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: animationDurationMs / 1000, ease: "easeOut", delay: 0.05 }}
            >
              {/* Console Header */}
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="font-saira" style={{ fontWeight: 700, fontSize: "22px", lineHeight: "38.36px", letterSpacing: "4%", color: "#FFFFFF", marginBottom: "0.5rem" }}>TRANSMISSION INTERFACE</h2>
                  <p className="font-saira" style={{ fontWeight: 300, fontSize: "16px", lineHeight: "28px", letterSpacing: "4%", color: "#01c38e" }}>Secure communication protocol activated</p>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-[#01c38e] rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-[#01c38e]/50 rounded-full" />
                  <div className="w-3 h-3 bg-[#01c38e]/20 rounded-full" />
                </div>
              </div>

              <div className="space-y-8">
                {/* Command Input Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="form-field group">
                    <label htmlFor="name" className="block font-saira font-medium text-[#01c38e] mb-4 text-sm tracking-wider">
                      Full name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-black/80 border-2 border-[#01c38e]/30 text-white placeholder-gray-500 focus:border-[#01c38e] focus:ring-0 focus:outline-none rounded-xl h-14 px-6 font-saira text-lg transition-all duration-300 hover:border-[#01c38e]/50 group-hover:border-[#01c38e]/50"
                        placeholder="Your full name"
                        aria-label="Full name"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#01c38e] rounded-full opacity-50" />
                    </div>
                  </div>

                  <div className="form-field group">
                    <label htmlFor="email" className="block font-saira font-medium text-[#01c38e] mb-4 text-sm tracking-wider">
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-black/80 border-2 border-[#01c38e]/30 text-white placeholder-gray-500 focus:border-[#01c38e] focus:ring-0 focus:outline-none rounded-xl h-14 px-6 font-saira text-lg transition-all duration-300 hover:border-[#01c38e]/50 group-hover:border-[#01c38e]/50"
                        placeholder="you@example.com"
                        aria-label="Email address"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#01c38e] rounded-full opacity-50" />
                    </div>
                  </div>
                </div>

                {/* Message Terminal */}
                  <div className="form-field group">
                  <div className="flex items-center justify-between mb-4">
                    <label htmlFor="message" className="block font-saira font-medium text-[#01c38e] text-sm tracking-wider">
                      Message
                    </label>
                    <div className="flex items-center space-x-4">
                      <span
                        className={`font-saira text-sm ${
                          messageLength > 4500 
                            ? "text-yellow-400" 
                            : messageLength === 5000 
                            ? "text-red-400" 
                            : "text-gray-400"
                        }`}
                      >
                        {messageLength}/5000 characters
                      </span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-4 bg-[#01c38e] rounded-full opacity-80" />
                        <div className="w-1 h-3 bg-[#01c38e] rounded-full opacity-60" />
                        <div className="w-1 h-2 bg-[#01c38e] rounded-full opacity-40" />
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={8}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-black/80 border-2 border-[#01c38e]/30 text-white placeholder-gray-500 focus:border-[#01c38e] focus:ring-0 focus:outline-none rounded-xl resize-none font-saira text-lg p-6 transition-all duration-300 hover:border-[#01c38e]/50 group-hover:border-[#01c38e]/50"
                      placeholder="Transmit your mission objectives, operational challenges, or collaboration requirements..."
                      aria-label="Message"
                    />
                    <div className="absolute bottom-4 right-4 flex space-x-1">
                      <div className="w-1 h-1 bg-[#01c38e] rounded-full animate-pulse" />
                      <div className="w-1 h-1 bg-[#01c38e] rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                      <div className="w-1 h-1 bg-[#01c38e] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                    </div>
                  </div>
                </div>

                {/* Launch Button */}
                <div className="flex justify-center pt-8">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.03 }}
                    className="group relative bg-[#01c38e] hover:bg-[#01c38e]/90 text-black font-saira font-bold py-6 px-16 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#01c38e]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-[#01c38e]/50 text-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-6 h-6 border-3 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <span>SEND MESSAGE</span>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full group-hover:animate-spin" />
                      </div>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  )
}