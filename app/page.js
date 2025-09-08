"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Youtube } from "lucide-react"

export default function Page() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="relative min-h-[100svh] bg-black text-white overflow-x-hidden">
      <a href="/contact" className="fixed top-4 left-6 z-40 hover:text-gray-400">Contact</a>
      <a href="/work" className="fixed top-4 right-6 z-40 hover:text-gray-400">Work</a>

      <div className="fixed inset-0 z-30 grid place-items-center pointer-events-none">
        <motion.img
          src="/logo.png"
          alt="Company Logo"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-[28vw] max-w-[16rem] min-w-[10rem]"
        />
      </div>

      <section className="relative min-h-[100svh] flex justify-center items-center text-center">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/0" />
      </section>

      <div className="h-16 md:h-24 bg-black" />

      <section className="relative min-h-[100svh] flex justify-center items-center text-center">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/background-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/0" />
      </section>

      <div className="h-16 md:h-24 bg-black" />

      <section className="relative min-h-[100svh] flex justify-center items-center text-center">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/background-3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/0" />
      </section>

      <div className="h-16 md:h-24 bg-black" />

      <section className="py-0 px-8 md:px-20 bg-black text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-6xl font-light mb-20">NAIN STUDIO</h2>
            <p className="text-lg leading-relaxed max-w-2xl">
              We are a creative visualization studio specializing in architectural imagery,
              animation, and realtime experiences.
            </p>
          </div>
          <div className="flex md:justify-end gap-6 mt-8 md:mt-0">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:opacity-80">
              <Instagram className="w-6 h-6" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:opacity-80">
              <Youtube className="w-6 h-6" />
              <span className="hidden sm:inline">YouTube</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
