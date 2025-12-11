"use client";
import React from "react";
import { motion } from "framer-motion";
import StatusBadge from "@/app/components/atoms/StatusBadge";
import Button from "@/app/components/atoms/Button";
import TypewriterText from "@/app/components/atoms/TypewriterText";
import AvatarCard from "@/app/components/atoms/AvatarCard";
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
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StatusBadge text="DISPONIBLE PARA PROYECTOS" />
          </motion.div>

          <div className="space-y-2">
            <h2 className="text-xl font-mono text-sage-600 font-semibold tracking-wide">
              Hola, soy
            </h2>
            
            <div className="text-5xl md:text-7xl font-extrabold text-forest-900 tracking-tight leading-none">
               <TypewriterText text="Miguel Solis" delay={5} />
            </div>

            <div className="h-16 md:h-20 flex items-center">
               <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-coffee-500 to-blush-500">
                 Desarrollador Full Stack
               </span>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg text-forest-700 max-w-lg leading-relaxed"
          >
            Creo experiencias digitales bonitas y funcionales. Me especializo en 
            llevar ideas a la vida a través de código limpio y diseño bien pensado.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 2, duration: 0.5 }}
             className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-4"
          >
            <div className="flex gap-4">
              <Button variant="primary" size="lg">Contratame</Button>
              <Button variant="outline" size="lg">Descargar CV</Button>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-sage-300 mx-2"></div>
            
            <div className="flex gap-4 text-forest-700">
               <a href="#" className="hover:text-sage-600 transition-colors hover:scale-110 transform"><Github size={24}/></a>
               <a href="#" className="hover:text-coffee-600 transition-colors hover:scale-110 transform"><Linkedin size={24}/></a>
               <a href="#" className="hover:text-blush-600 transition-colors hover:scale-110 transform"><Instagram size={24}/></a>
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
           <AvatarCard />
        </div>

      </div>
    </section>
  );
}