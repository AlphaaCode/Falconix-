'use client'
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative w-full min-h-[519px] bg-black overflow-hidden" 
      id="about"
    >
      {/* Grid Background Layers */}
      <motion.div 
        className="aboutus-grid-container absolute z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* First Grid Layer - Fine Grid Pattern */}
        <motion.div
          className="absolute w-full h-full aboutus-grid-layer-1"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.08 } : { scale: 1.06, opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        {/* Second Grid Layer - Overlay Pattern */}
        <motion.div
          className="absolute w-full h-full aboutus-grid-layer-2"
          initial={{ scale: 1.04, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.05 } : { scale: 1.04, opacity: 0 }}
          transition={{ duration: 0.95, delay: 0.12, ease: "easeOut" }}
        />

        {/* Third Grid Layer - Ultra Fine Detail */}
        <motion.div
          className="absolute w-full h-full aboutus-grid-layer-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.03 } : { opacity: 0 }}
          transition={{ duration: 1.1, delay: 0.18, ease: "easeOut" }}
        />
      </motion.div>

      {/* Complex Bloom Background Layers */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
      >
        {/* 7th Layer - Main covering gradient */}
        <motion.div 
          className="absolute w-[1917px] h-[1940px] -top-[1144px] -left-[306px] rounded-full bloom-7"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.95, delay: 0.06, ease: "easeOut" }}
        />
        
        {/* 6th Layer - Top right coverage */}
        <motion.div 
          className="absolute w-[1917px] h-[1879px] -top-[1705px] left-[341px] rounded-full bloom-6"
          initial={{ x: 40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 0.4 } : { x: 40, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: "easeOut" }}
        />
        
        {/* 5th Layer - Middle right coverage */}
        <motion.div 
          className="absolute w-[1101px] h-[1114px] -top-[702px] left-[332px] rounded-full bloom-5"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.8 } : { scale: 1.06, opacity: 0 }}
          transition={{ duration: 0.95, delay: 0.12, ease: "easeOut" }}
        />
        
        {/* 4th Layer - Top left coverage - Brightened */}
        <motion.div 
          className="absolute w-[1059px] h-[1072px] -top-[665px] -left-[112px] rounded-full bloom-4"
          initial={{ x: -30, y: -16, opacity: 0 }}
          animate={isInView ? { x: 0, y: 0, opacity: 0.6 } : { x: -30, y: -16, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.14, ease: "easeOut" }}
        />
        
        {/* 3rd Layer - Bottom right crescent - Reduced darkness */}
        <motion.div 
          className="absolute w-[1541px] h-[558px] top-[425px] -left-[200px] bloom-3"
          initial={{ y: 20, opacity: 0, rotate: 0 }}
          animate={isInView ? { y: 0, opacity: 0.7, rotate: 7.68 } : { y: 20, opacity: 0, rotate: 0 }}
          transition={{ duration: 0.95, delay: 0.18, ease: "easeOut" }}
        />
        
        {/* 2nd Layer - Top right crescent */}
        <motion.div 
          className="absolute w-[1294px] h-[362px] -top-[873px] left-[1012px] bloom-2"
          initial={{ x: 32, y: -16, opacity: 0, rotate: -100 }}
          animate={isInView ? { x: 0, y: 0, opacity: 1, rotate: -112.2 } : { x: 32, y: -16, opacity: 0, rotate: -100 }}
          transition={{ duration: 0.95, delay: 0.22, ease: "easeOut" }}
        />
        
        {/* 1st Layer - Bottom center crescent */}
        <motion.div 
          className="absolute w-[1343px] h-[254px] top-[325px] -left-[340px] bloom-1"
          initial={{ y: 12, opacity: 0, rotate: 0 }}
          animate={isInView ? { y: 0, opacity: 1, rotate: 15 } : { y: 12, opacity: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.26, ease: "easeOut" }}
        />
      </motion.div>

      {/* Content Container */}
        <motion.div 
        className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[99px] py-8 lg:py-[134px]"
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.85, delay: 0.28, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[120px] max-w-[1243px]">
          
          {/* Left Frame - Logo Section */}
          <motion.div 
            className="w-full lg:w-[600px] flex flex-col items-center lg:items-start"
            initial={{ x: -18, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -18, opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.36, ease: "easeOut" }}
          >
            {/* Large Logo */}
            <motion.div 
              className="w-full max-w-[600px] h-auto mb-4"
              initial={{ scale: 0.98, opacity: 0, y: 6 }}
              animate={isInView ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.98, opacity: 0, y: 6 }}
              transition={{ type: 'spring', stiffness: 110, damping: 16, mass: 0.7, delay: 0.32 }}
            >
              <Image
                src="/icons/NavBar Logo.svg"
                alt="FalconiX Logo"
                width={600}
                height={142}
                className="w-full h-auto"
                priority
              />
            </motion.div>
            
            {/* Underline */}
            <motion.div 
              className="w-full max-w-[600px] h-auto"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.6, delay: 0.38 }}
              style={{ transformOrigin: "left center" }}
            >
              <svg 
                width="600" 
                height="74" 
                viewBox="0 0 600 74" 
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="500" height="0.409093" transform="translate(50 42.0271)" fill="url(#paint0_linear_84_119)"/>
                <rect width="600" height="73.1063" transform="translate(0 0.840576)" fill="url(#paint1_radial_84_119)"/>
                <defs>
                  <linearGradient id="paint0_linear_84_119" x1="0" y1="0.204546" x2="500" y2="0.204546" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0C0E0C" stopOpacity="0"/>
                    <stop offset="0.5" stopColor="white"/>
                    <stop offset="1" stopColor="#0C0E0C" stopOpacity="0"/>
                  </linearGradient>
                  <radialGradient id="paint1_radial_84_119" cx="0" cy="0" r="1" gradientTransform="matrix(300 36.5532 -300 36.5532 300 36.5532)" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C7C7C7" stopOpacity="0.05"/>
                    <stop offset="0.7" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>

          {/* Right Frame - Text Content */}
          <motion.div 
            className="w-full lg:w-[605px] lg:h-[252px] flex items-center"
            initial={{ x: 18, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 18, opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.44, ease: "easeOut" }}
          >
            <motion.p 
              className="font-saira font-light text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-relaxed lg:leading-[42px] text-white capitalize tracking-[-0.02em]"
              initial={{ y: 8, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 8, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.56, ease: "easeOut" }}
            >
              <motion.span 
                className="font-light"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
              >
                FalconiX is redefining <span 
                  className="font-saira font-normal text-[24px] leading-[42px] tracking-[-0.02em] capitalize text-[#01C38E]"
                  style={{ 
                    fontWeight: 400,
                    verticalAlign: 'bottom'
                  }}
                >Emergency Care</span> with drone-powered medical logistics. Based in Abu Dhabi, we design autonomous systems that deliver life-saving support with speed and precision.
              </motion.span>
              <motion.span 
                className="font-normal"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.82, ease: "easeOut" }}
              >
                {" "}By merging drone technology with medical innovation, FalconiX ensures critical care reaches any location — faster and smarter.
              </motion.span>
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
