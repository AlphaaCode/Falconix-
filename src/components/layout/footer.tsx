"use client"
{
  /** this is the footer section you can find here the privacy policy and terms of use also the links of main falconix platforms there's problem in twitter aka x icon if you find any problem mention it here : */
}
import { useState, useEffect, useRef } from "react"
import { PrivacyPolicyModal } from "@/components/modals/privacy-policy-modal"
import { TermsOfUseModal } from "@/components/modals/terms-of-use-modal"

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

export function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = rect.height

      let progress = 0
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const visibleTop = Math.max(0, windowHeight - rect.top)
        const visibleBottom = Math.min(windowHeight, windowHeight - (rect.bottom - windowHeight))
        const visibleHeight = Math.min(visibleTop, sectionHeight, visibleBottom)
        progress = Math.max(0, Math.min(1, visibleHeight / (windowHeight * 0.8)))
      }

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <footer
        ref={sectionRef}
        className="relative bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] overflow-hidden"
      >
        {/* Grid pattern overlay */}
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

        {/* Top border line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01c38e] to-transparent opacity-60"></div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          {/* Main content section */}
          <div
            className="text-center mb-16 transition-all duration-700 ease-out"
            style={{
              opacity: scrollProgress,
              transform: `translateY(${(1 - scrollProgress) * 50}px)`,
            }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-4xl font-saira font-bold text-white mb-6 leading-tight tracking-tight">
              Fastest Lifesaver, Revolutionising Emergency Care
            </h2>
            <p className="text-lg font-saira text-gray-300 font-medium">Trusted Innovation for Life-Saving Missions.</p>
          </div>

          {/* Bottom border line */}
          <div
            className="w-full h-px bg-gradient-to-r from-transparent via-[#01c38e] to-transparent opacity-60 mb-12 transition-all duration-700 ease-out"
            style={{
              opacity: scrollProgress * 0.6,
              transform: `scaleX(${scrollProgress})`,
              transitionDelay: "200ms",
            }}
          ></div>

          {/* Footer bottom section */}
          <div
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 transition-all duration-700 ease-out"
            style={{
              opacity: scrollProgress,
              transform: `translateY(${(1 - scrollProgress) * 30}px)`,
              transitionDelay: "300ms",
            }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-gray-400">
              <span className="font-saira">© 2025 Falconix Inc.</span>
              <div className="flex gap-6">
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="font-saira hover:text-gray-200 transition-colors"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setIsTermsModalOpen(true)}
                  className="font-saira hover:text-gray-200 transition-colors"
                >
                  Terms of Use
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors group text-gray-300 hover:text-white"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/falconix-group"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors group text-gray-300 hover:text-white"
              >
                <LinkedinIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors group text-gray-300 hover:text-white"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Legal text sections */}
          <div
            className="mt-12 space-y-4 text-xs text-gray-400 leading-relaxed max-w-4xl transition-all duration-700 ease-out"
            style={{
              opacity: scrollProgress * 0.8,
              transform: `translateY(${(1 - scrollProgress) * 20}px)`,
              transitionDelay: "400ms",
            }}
          >
            <p className="font-saira">
              FalconX is a trademark of FalconX Technologies. All other trademarks are the property of their respective
              owners. Unless otherwise noted, use of third-party names or logos does not imply endorsement or
              affiliation with FalconX.
            </p>
            <p className="font-saira">
              FalconX is an innovation company specializing in drone-powered medical logistics and emergency systems,
              not a healthcare provider. Medical services are carried out exclusively by licensed professionals and
              partner institutions.
            </p>
          </div>
        </div>
      </footer>

      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <TermsOfUseModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
