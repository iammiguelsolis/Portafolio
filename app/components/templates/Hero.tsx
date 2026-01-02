"use client";
import React from "react";
import { motion } from "framer-motion";
import StatusBadge from "@/app/components/atoms/StatusBadge";
import Button from "@/app/components/atoms/Button";
import TypewriterText from "@/app/components/atoms/TypewriterText";
import PixelArtAvatar from "@/app/components/atoms/PixelArtAvatar";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ivory-50 px-6 py-20 overflow-hidden">

      <div className="absolute top-0 right-0 -z-10 opacity-30">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] bg-gradient-to-br from-sage-200 to-blush-200 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="space-y-8 order-2 lg:order-1">

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <StatusBadge text="DISPONIBLE PARA TRABAJAR" />
          </motion.div>

          <div className="space-y-2">
            <h2 className="text-xl font-mono text-sage-600 font-semibold tracking-wide">
              Hola, mi nombre es
            </h2>

            <h1 className="text-5xl md:text-7xl font-extrabold text-forest-900 tracking-tight leading-none mb-4">
              Miguel Solis
            </h1>

            <div className="py-2 flex items-center text-3xl md:text-5xl font-bold leading-normal overflow-visible">
              <span className="text-forest-700 mr-3">Soy</span>

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-500 to-blush-500">
                <TypewriterText
                  words={[
                    "Software Engineer",
                    "Full Stack Developer",
                  ]}
                  typingSpeed={100}
                  deletingSpeed={50}
                  pauseTime={1500}
                />
              </span>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-forest-700 max-w-lg leading-relaxed"
          >
            Creo experiencias digitales hermosas y funcionales. Me especializo en dar vida a las ideas a través de código limpio y diseño cuidadoso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-4"
          >
            <div className="flex gap-4">
              <a
                href="https://wa.me/51950755220?text=Hola%20Miguel,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 active:scale-95 bg-sage-600 text-ivory-50 hover:bg-sage-700 hover:shadow-lg px-8 py-4 text-lg"
              >
                Contáctame
              </a>
              <a
                href="/Miguel_Solis_CV.pdf"
                download="Miguel_Solis_CV.pdf"
                className="inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 active:scale-95 border-2 border-sage-600 text-sage-700 hover:bg-sage-50 px-8 py-4 text-lg"
              >
                Descargar CV
              </a>
            </div>

            <div className="hidden sm:block w-px h-12 bg-sage-300 mx-2"></div>

            <div className="flex gap-4 text-forest-700">
              <a href="https://github.com/iammiguelsolis" target="_blank" rel="noopener noreferrer" className="hover:text-blush-600 transition-colors hover:scale-110 transform"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/miguel-solis-cunza/" target="_blank" rel="noopener noreferrer" className="hover:text-blush-600 transition-colors hover:scale-110 transform"><Linkedin size={24} /></a>
              <a href="https://www.instagram.com/soli.smiguel" target="_blank" rel="noopener noreferrer" className="hover:text-blush-600 transition-colors hover:scale-110 transform"><Instagram size={24} /></a>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:flex order-1 lg:order-2 justify-center lg:justify-end">
          <PixelArtAvatar />
        </div>

      </div>
    </section>
  );
}