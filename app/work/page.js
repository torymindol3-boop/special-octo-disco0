"use client"
import { motion } from "framer-motion"

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-20 py-20">
      <h1 className="text-4xl font-light mb-12">Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={`https://picsum.photos/1200/800?random=${i}`}
              alt={`project-${i}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
