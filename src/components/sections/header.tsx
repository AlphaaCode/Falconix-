'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden px-32">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <Image
          src="/images/header.png"
          alt="Medical drone background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay with specified opacity */}
        <motion.div 
          className="absolute inset-0 bg-[#1A1E29] overlay-43"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.43 }}
          transition={{ duration: 0.9, delay: 0.36 }}
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center lg:justify-start min-h-screen max-w-[1440px] mx-auto ">
        {/* Text Frame */}
        <motion.div 
          className="w-full pt-20 lg:pt-0 text-center lg:text-left"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-[900px] space-y-5 mx-auto lg:mx-0">
            {/* Main Heading with Gradient */}
            <motion.h1 
              className="font-saira font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] leading-tight sm:leading-[1.1] md:leading-[1.15] lg:leading-[67px] uppercase tracking-wide"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            >
              <motion.span 
                className="block bg-gradient-to-r from-[#6A6E79] to-[#FFFFFF] bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(342.07deg, #6A6E79 -42.84%, #FFFFFF 94.68%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
                initial={{ backgroundPosition: "200% 0" }}
                animate={{ backgroundPosition: "0% 0" }}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
              >
                Medical Support in Flight Ready on Site
              </motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              className="font-saira font-normal text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[30px] leading-relaxed sm:leading-[1.4] md:leading-[1.5] lg:leading-[42px] capitalize text-white max-w-[700px] mt-6 mx-auto lg:mx-0"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
            >
              Fastest Lifesaver, Revolutionising Emergency Care
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
