"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { href: "#about", label: "About" },
    { href: "#vision", label: "Our Vision" },
    { href: "#impact", label: "Impact" },
    { href: "#why-us", label: "Why Us" },
  ];

  return (
    <motion.nav 
      className="absolute top-0 left-0 w-full z-50 bg-transparent"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between max-w-[1440px] mx-auto px-[102px] py-5 min-h-[138px]">
        {/* Logo Frame - Left */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Link href="/" className="block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/icons/NavBar Logo.svg"
                alt="FalconiX"
                width={179}
                height={26}
                className="h-auto"
                priority
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Navigation Links Frame - Center */}
        <motion.div 
          className="flex items-center gap-[30px] w-[408px] h-[42px] justify-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          {navigationLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.7 + (index * 0.1), 
                ease: "easeOut" 
              }}
            >
              <Link
                href={link.href}
                className="font-saira font-medium text-[22px] leading-[42px] text-white capitalize hover:text-[#01C38E] transition-colors duration-300"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Right spacer for balance */}
        <div className="flex-shrink-0 w-[179px]" />
      </div>

      {/* Tablet Navigation (md to lg) */}
      <div className="hidden md:flex lg:hidden items-center justify-between px-8 py-5 min-h-[100px]">
        {/* Logo */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Link href="/" className="block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/icons/NavBar Logo.svg"
                alt="FalconiX"
                width={150}
                height={22}
                className="h-auto"
                priority
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <motion.div 
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {navigationLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.6 + (index * 0.1), 
                ease: "easeOut" 
              }}
            >
              <Link
                href={link.href}
                className="font-saira font-medium text-lg text-white capitalize hover:text-[#01C38E] transition-colors duration-300"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <Link href="/" className="block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/icons/NavBar Logo.svg"
                  alt="FalconiX"
                  width={120}
                  height={18}
                  className="h-auto"
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:text-[#01C38E] transition-colors duration-300"
            aria-label="Toggle navigation menu"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Mobile Menu */}
              <motion.div 
                className="fixed top-0 right-0 h-full w-80 bg-background shadow-2xl z-50"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                  <motion.span 
                    className="font-saira font-semibold text-lg text-foreground"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    Menu
                  </motion.span>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-foreground hover:text-[#01C38E] transition-colors duration-300"
                    aria-label="Close navigation menu"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                
                <nav className="px-6 py-8">
                  <div className="space-y-6">
                    {navigationLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.3 + (index * 0.1),
                          ease: "easeOut" 
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block font-saira font-medium text-xl text-foreground capitalize hover:text-[#01C38E] transition-colors duration-300 py-2"
                        >
                          <motion.span
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.label}
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}