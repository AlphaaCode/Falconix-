"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface VisionCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

export default function VisionCard({ image, title, description, delay = 0 }: VisionCardProps) {
  return (
    <motion.div
      className="w-full max-w-sm h-[480px] rounded-2xl bg-zinc-900/50 border border-gray-50/10 overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
    >
      {/* Image Container */}
      <div className="relative w-full h-[326px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* Text Container */}
      <div className="w-full h-[154px] px-8 py-6 flex flex-col gap-4 mx-auto">
        <motion.h3
          className="font-saira font-bold text-lg leading-[18px] text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        
        <motion.p
          className="font-saira font-bold text-sm leading-6 text-gray-400/80 max-w-[320px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.6 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}