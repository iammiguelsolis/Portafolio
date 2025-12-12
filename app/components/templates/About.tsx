"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { User, MapPin, Briefcase, GraduationCap, Heart, Sparkles } from "lucide-react";

interface AboutProps {
  name: string;
  role: string;
  location: string;
  yearsExperience: number;
  bio: string[];
  highlights: string[];
  imageUrl?: string;
}

// Componente para resaltar palabras clave en el texto
function HighlightText({ text, highlights }: { text: string; highlights: string[] }) {
  let result = text;

  highlights.forEach((highlight) => {
    const regex = new RegExp(`(${highlight})`, "gi");
    result = result.replace(
      regex,
      `<span class="font-mono font-semibold text-coffee-500 bg-coffee-100 px-1.5 py-0.5 rounded">$1</span>`
    );
  });

  return <span dangerouslySetInnerHTML={{ __html: result }} />;
}

export default function About({
  name = "Miguel Solis",
  role = "Software Engineer",
  location = "Perú",
  yearsExperience = 2,
  bio = [
    "Soy un desarrollador de software apasionado por crear experiencias digitales excepcionales. Mi experiencia incluye trabajar con tecnologías como React, Node.js, Python y servicios en la nube como AWS.",
    "Algunos de mis logros incluyen colaborar en proyectos innovadores, desarrollar software reconocido y trabajar con modelos de lenguaje (LLMs) para extender capacidades de sistemas.",
    "Más allá del trabajo profesional, me apasiona el voluntariado y explorar proyectos innovadores. Mi objetivo es aprovechar mis habilidades para crear soluciones que aborden problemas del mundo real.",
  ],
  highlights = ["React", "Node.js", "Python", "AWS", "LLMs"],
  imageUrl,
}: Partial<AboutProps>) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Stats cards
  const stats = [
    { icon: <Briefcase className="w-5 h-5" />, label: "Años de experiencia", value: `${yearsExperience}+` },
    { icon: <GraduationCap className="w-5 h-5" />, label: "Proyectos completados", value: "15+" },
    { icon: <Heart className="w-5 h-5" />, label: "Clientes satisfechos", value: "10+" },
  ];

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="relative py-20 px-6 bg-ivory-50 overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 -z-10 opacity-20">
        <motion.div
          animate={{ rotate: 180, scale: [1, 1.1, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="w-[500px] h-[500px] bg-gradient-to-br from-coffee-200 to-blush-300 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <User className="w-8 h-8 text-coffee-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900">
            Sobre Mí
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Intro card */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-sage-200 shadow-sm">
              <div className="p-3 rounded-xl bg-gradient-to-br from-coffee-400 to-blush-400">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-forest-900">{name}</h3>
                <p className="text-sage-600 flex items-center gap-2">
                  {role} <span className="text-sage-400">•</span>
                  <MapPin className="w-4 h-4" /> {location}
                </p>
              </div>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-4">
              {bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-forest-700 leading-relaxed text-lg"
                >
                  <HighlightText text={paragraph} highlights={highlights} />
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-coffee-400 to-blush-400 rounded-3xl rotate-3 opacity-20" />
              <div className="absolute -inset-4 bg-gradient-to-br from-sage-400 to-forest-400 rounded-3xl -rotate-3 opacity-20" />

              {/* Main image container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-sage-200 via-coffee-200 to-blush-200 flex items-center justify-center">
                    <User className="w-24 h-24 text-forest-400" />
                  </div>
                )}
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 px-4 py-2 bg-forest-900 text-ivory-50 rounded-xl font-semibold shadow-lg"
              >
                📖 Estudiando
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
