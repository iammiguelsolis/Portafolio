"use client";
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

const avatarImages = ["/1.png", "/2.png", "/3.png"];

export default function AvatarCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-100, 100], [15, -15]);
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15]);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % avatarImages.length);
    }, 600);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ perspective: 1000 }}
      className="w-full max-w-sm mx-auto h-full flex items-center justify-center"
    >
      <motion.div
        onMouseMove={onMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative aspect-square w-full cursor-pointer z-10"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        

        <div className="relative h-full w-full z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 h-full w-full"
            >
               <Image 
                 src={avatarImages[currentImageIndex]} 
                 alt={`Miguel Solis avatar ${currentImageIndex + 1}`}
                 fill
                 className="object-contain contrast-110 pixelated drop-shadow-2xl" 
                 priority={currentImageIndex === 0}
               />
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30">
             <span className="bg-forest-900/80 backdrop-blur-md text-ivory-50 px-3 py-1 rounded-full text-xs font-mono border border-white/20 flex items-center gap-2 shadow-lg">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500"></span>
               </span>
               Lima, Perú
             </span>
        </div>
      </motion.div>
    </motion.div>
  );
}