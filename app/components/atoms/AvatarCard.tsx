"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function AvatarCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  const rotateX = useTransform(mouseY, [-100, 100], [15, -15]);
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15]);

  return (
    <motion.div
      style={{ perspective: 1000 }}
      className="w-full max-w-sm mx-auto"
    >
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY }}
        className="relative aspect-square rounded-3xl bg-ivory-200 border-4 border-ivory-100 shadow-2xl overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-forest-800 to-sage-500 opacity-90 mix-blend-multiply z-10"></div>
        
        <Image 
          src="/tu-foto-pixelart.png" 
          alt="Miguel Solis"
          fill
          className="object-cover z-0 grayscale contrast-125" 
        />
        
        <div className="absolute bottom-4 left-4 z-20">
             <span className="bg-white/20 backdrop-blur-md text-ivory-50 px-3 py-1 rounded-full text-xs font-mono border border-white/30">
               Based in Peru 🇵🇪
             </span>
        </div>
      </motion.div>
    </motion.div>
  );
}