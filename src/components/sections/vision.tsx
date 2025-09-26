'use client'

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import VisionCard from "../ui/VisionCard";

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const visionCards = [
    {
      image: "/assets/Card1.svg",
      title: "Mobile Tactical Nodes",
      description: "Command & Comms with secure energy & data"
    },
    {
      image: "/assets/Card2.svg", 
      title: "Autonomous Systems",
      description: "Smart deployment and mission execution"
    },
    {
      image: "/assets/Card3.svg",
      title: "Medical Logistics", 
      description: "Life-saving supply chain optimization"
    }
  ];


  return (
    <section id="vision" ref={ref} className="py-24 bg-[#0C0E0C] relative overflow-hidden">
      {/* Content Frame */}
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 py-14">
        <div className="w-full max-w-[1280px] mx-auto p-6 flex flex-col gap-16">
          
          {/* Text Frame */}
          <motion.div 
            className="w-full max-w-[612px] h-auto flex flex-col gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Title */}
            <motion.h2 
              className="font-saira font-medium text-3xl sm:text-4xl lg:text-[40px] leading-tight lg:leading-[67px] uppercase bg-gradient-to-r from-[#6A6E79] via-white to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Our Vision
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              className="font-saira font-light text-lg sm:text-xl lg:text-[22px] leading-relaxed lg:leading-[42px] text-white capitalize tracking-[-0.03em] max-w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              To revolutionize mobile healthcare and logistics with intelligent, secure, and modular systems that enhance resilience and operational continuity
            </motion.p>
          </motion.div>

          {/* Cards Container */}
          <div className="w-full mt-4 flex flex-col gap-8">
            
            {/* Three Cards Row */}
            <motion.div 
              className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {visionCards.map((card, index) => (
                <VisionCard
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  delay={0.8 + (index * 0.2)}
                />
              ))}
            </motion.div>

            {/* Wide Card */}
            <motion.div
              className="w-full max-w-[1216px] h-auto lg:h-[480px] rounded-2xl bg-zinc-900/50 border border-gray-50/10 overflow-hidden relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            >
              {/* Grid Background */}
              <motion.div 
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
              >
                <Image
                  src="/assets/GridBack.svg"
                  alt="Grid Background"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="relative w-full h-full flex flex-col lg:flex-row z-10">
                
                {/* Text Frame - Positioned at bottom left */}
                <motion.div 
                  className="relative z-10 w-full lg:w-[696px] h-auto lg:h-[114px] flex flex-col gap-4 p-8 lg:px-8 lg:py-0 lg:absolute lg:bottom-8 lg:left-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
                >
                  <h3 className="font-saira font-bold text-lg leading-[18px] text-gray-200">
                    Field Infrastructure
                  </h3>
                  <p className="font-saira font-bold text-sm leading-6 text-gray-400/80 max-w-[384px]">
                    IT, energy, and connectivity in remote zones
                  </p>
                </motion.div>

                {/* Image Container - Positioned at right */}
                <motion.div 
                  className="relative w-full lg:w-[695px] h-64 lg:h-[607px] lg:absolute lg:right-0 lg:-top-24 overflow-hidden"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                >
                  <Image
                    src="/assets/DroneBigCard.svg"
                    alt="Field Infrastructure"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}