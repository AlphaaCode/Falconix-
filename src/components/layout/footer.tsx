"use client"

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

// Enhanced drone icon for FalconiX branding
const DroneIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L10 7H14L12 2ZM3 7C2.45 7 2 7.45 2 8S2.45 9 3 9C3.55 9 4 8.55 4 8S3.55 7 3 7ZM21 7C20.45 7 20 7.45 20 8S20.45 9 21 9C21.55 9 22 8.55 22 8S21.55 7 21 7ZM8 8H10V10H8V8ZM14 8H16V10H14V8ZM12 11C10.9 11 10 11.9 10 13S10.9 15 12 15S14 14.1 14 13S13.1 11 12 11ZM3 17C2.45 17 2 17.45 2 18S2.45 19 3 19C3.55 19 4 18.55 4 18S3.55 17 3 17ZM21 17C20.45 17 20 17.45 20 18S20.45 19 21 19C21.55 19 22 18.55 22 18S21.55 17 21 17ZM8 18H10V20H8V18ZM14 18H16V20H14V18Z"/>
  </svg>
)

// Medical heartbeat icon
const HeartbeatIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"/>
    <path d="M7 12H9L10.5 8.5L13.5 15.5L15 12H17V14H15.5L14.5 16.5L11.5 9.5L10 14H7V12Z"/>
  </svg>
)

// Speed/lightning icon
const SpeedIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7,2V13H10V22L17,10H13L17,2H7Z"/>
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
        className="relative bg-gradient-to-br from-[var(--very-dark-bg)] via-zinc-900 to-black overflow-hidden"
        style={{ backgroundColor: 'var(--very-dark-bg)' }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Technical grid pattern using brand teal accent */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(var(--teal-accent) 1px, transparent 1px),
                linear-gradient(90deg, var(--teal-accent) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          
          {/* Hexagonal pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M30 5l20 12v26l-20 12L10 43V17z' fill='none' stroke='%23${encodeURIComponent('01c38e')}' stroke-width='1'/%3e%3c/svg%3e")`,
            }}
          />
          
          {/* Floating particles with brand colors */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full opacity-30 animate-pulse" style={{ backgroundColor: 'var(--teal-accent)' }} />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/3 left-1/5 w-2.5 h-2.5 rounded-full opacity-25 animate-pulse" style={{ backgroundColor: 'var(--teal-accent)', animationDelay: '3s' }} />
          <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-white rounded-full opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
        </div>

        {/* Top accent line with brand color */}
        <div className="absolute top-0 left-0 right-0 h-0.5">
          <div 
            className="w-full h-full opacity-60 animate-pulse"
            style={{ 
              background: `linear-gradient(90deg, transparent, var(--teal-accent), transparent)` 
            }} 
          />
        </div>

        <div className="container mx-auto px-6 py-28 relative z-10">
          {/* Brand identity section */}
          <div
            className="text-center mb-24 transition-all duration-1000 ease-out"
            style={{
              opacity: scrollProgress,
              transform: `translateY(${(1 - scrollProgress) * 80}px)`,
            }}
          >
            {/* Brand iconography */}
            <div className="flex justify-center items-center gap-12 mb-12">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 group hover:border-white/20 transition-all duration-500">
                <DroneIcon className="text-white group-hover:scale-110 transition-transform duration-300" style={{ color: 'var(--teal-accent)' }} />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px opacity-40" style={{ backgroundColor: 'var(--teal-accent)' }} />
                <SpeedIcon className="w-6 h-6 text-white/60" />
                <div className="w-8 h-px opacity-40" style={{ backgroundColor: 'var(--teal-accent)' }} />
              </div>
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 group hover:border-white/20 transition-all duration-500">
                <HeartbeatIcon className="text-white group-hover:scale-110 transition-transform duration-300" style={{ color: 'var(--teal-accent)' }} />
              </div>
            </div>

            {/* Main headline */}
            <div className="space-y-6 mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight font-saira">
                <span className="block mb-2">
                  <span 
                    className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, white 0%, var(--teal-accent) 50%, white 100%)` 
                    }}
                  >
                    FalconiX
                  </span>
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-white/90 font-light">
                  Emergency Care Redefined
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide font-saira">
                  Drone-Powered Medical Logistics
                </p>
                <p className="text-lg text-white/60 max-w-4xl mx-auto leading-relaxed font-saira">
                  Autonomous systems delivering life-saving support with speed and precision. 
                  By merging drone technology with medical innovation, critical care reaches any location — faster and smarter.
                </p>
              </div>
            </div>

            {/* Location and mission statement */}
            <div className="flex flex-col items-center gap-6">
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
                <div className="w-3 h-3 rounded-full animate-pulse mr-4" style={{ backgroundColor: 'var(--teal-accent)' }} />
                <span className="text-white/90 font-medium tracking-wider font-saira text-lg">Based in Abu Dhabi</span>
              </div>
            </div>
          </div>

          {/* Divider with sophisticated design */}
          <div
            className="relative mb-20 transition-all duration-1000 ease-out"
            style={{
              opacity: scrollProgress * 0.8,
              transform: `scaleX(${scrollProgress})`,
              transitionDelay: "400ms",
            }}
          >
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div 
              className="absolute inset-0 w-full h-px opacity-60 animate-pulse"
              style={{ 
                background: `linear-gradient(90deg, transparent, var(--teal-accent), transparent)` 
              }} 
            />
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--teal-accent)' }} />
              </div>
            </div>
          </div>

          {/* Footer content */}
          <div
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 transition-all duration-1000 ease-out"
            style={{
              opacity: scrollProgress,
              transform: `translateY(${(1 - scrollProgress) * 40}px)`,
              transitionDelay: "500ms",
            }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 text-sm text-white/60">
              <span className="font-medium tracking-wide font-saira text-base">© 2025 FalconiX Inc.</span>
              <div className="flex gap-8">
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="hover:text-white/90 transition-colors duration-300 tracking-wide hover:underline underline-offset-4 font-saira relative group"
                >
                  Privacy Policy
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: 'var(--teal-accent)' }} />
                </button>
                <button
                  onClick={() => setIsTermsModalOpen(true)}
                  className="hover:text-white/90 transition-colors duration-300 tracking-wide hover:underline underline-offset-4 font-saira relative group"
                >
                  Terms of Use
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: 'var(--teal-accent)' }} />
                </button>
              </div>
            </div>

            <div className="flex gap-5">
              <a
                href="#"
                className="group w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 text-white/60 hover:text-white transform hover:scale-105 hover:-translate-y-1"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/falconix-group"
                className="group w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 text-white/60 hover:text-white transform hover:scale-105 hover:-translate-y-1"
              >
                <LinkedinIcon />
              </a>
              <a
                href="#"
                className="group w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 text-white/60 hover:text-white transform hover:scale-105 hover:-translate-y-1"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Legal disclaimers */}
          <div
            className="space-y-6 text-sm text-white/40 leading-relaxed max-w-6xl transition-all duration-1000 ease-out font-saira"
            style={{
              opacity: scrollProgress * 0.8,
              transform: `translateY(${(1 - scrollProgress) * 30}px)`,
              transitionDelay: "600ms",
            }}
          >
            <p className="leading-loose">
              FalconiX is a trademark of FalconiX Technologies. All other trademarks are the property of their respective
              owners. Unless otherwise noted, use of third-party names or logos does not imply endorsement or
              affiliation with FalconiX.
            </p>
            <p className="leading-loose">
              FalconiX is an innovation company specializing in drone-powered medical logistics and emergency systems,
              not a healthcare provider. Medical services are carried out exclusively by licensed professionals and
              partner institutions.
            </p>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5">
          <div 
            className="w-full h-full opacity-40"
            style={{ 
              background: `linear-gradient(90deg, transparent, var(--teal-accent), transparent)` 
            }} 
          />
        </div>
      </footer>

      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <TermsOfUseModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}