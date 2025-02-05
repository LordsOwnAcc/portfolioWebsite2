"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end">
            <motion.div
              className="flex space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
            >
              {["Upcoming", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`relative px-3 py-2 text-sm font-medium text-white transition-colors hover:text-gray-300 ${
                      isScrolled ? "text-gray-200" : "text-white"
                    }`}
                  >
                    {item}
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-white"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        {isScrolled && (
          <motion.div
            className="absolute inset-0 -z-10 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.nav>
    </AnimatePresence>
  )
}