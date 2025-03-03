"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function BouncingBasketball() {
  const [isPlaying, setIsPlaying] = useState(true)

  // Reset animation when clicked
  const handleClick = () => {
    setIsPlaying(false)
    setTimeout(() => setIsPlaying(true), 10)
  }

  return (
    <div className="flex flex-col items-center justify-center h-[300px] w-full relative">
      {/* Basketball */}
      {isPlaying && (
        <motion.div
          className="relative"
          animate={{
            y: [0, 100, 0, 80, 0, 60, 0, 40, 0, 20, 0, 10, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 0.98, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0.5,
          }}
          onClick={handleClick}
        >
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 cursor-pointer relative overflow-hidden"
            animate={{
              scaleY: [1, 0.8, 1, 0.85, 1, 0.9, 1, 0.95, 1, 0.98, 1, 0.99, 1],
              scaleX: [1, 1.1, 1, 1.08, 1, 1.05, 1, 1.03, 1, 1.01, 1, 1.005, 1],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 0.98, 1],
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 0.5,
            }}
          >
            {/* Basketball lines */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-black opacity-70 -translate-x-1/2"></div>
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-black opacity-70 -translate-y-1/2"></div>
            <div className="absolute w-full h-full rounded-full border-2 border-black opacity-70"></div>

            {/* Basketball shine effect */}
            <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white opacity-30"></div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

