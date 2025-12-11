"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

// Tipo para los datos de experiencia
export interface ExperienceItem {
  _id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate?: string | null;
  description?: string;
  link?: string;
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

// Componente individual de experiencia con animación
function ExperienceCard({
  experience,
  index
}: {
  experience: ExperienceItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Formatear fechas en español
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
  };

  const startFormatted = formatDate(experience.startDate);
  const endFormatted = experience.endDate ? formatDate(experience.endDate) : "Actualidad";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-10 pb-12 last:pb-0"
    >
      {/* Punto del timeline con animación */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
        className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-coffee-500 border-4 border-ivory-50 shadow-lg z-10"
      />

      {/* Contenido de la experiencia */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {/* Lado izquierdo - Info del trabajo */}
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-coffee-600">
            {experience.jobTitle}
          </h3>
          <p className="text-forest-900 font-semibold text-lg">
            {experience.company}
          </p>
          <p className="text-sage-600 text-sm">
            {startFormatted} - {endFormatted}
          </p>
        </div>

        {/* Lado derecho - Descripción */}
        <div className="space-y-4">
          {experience.description && (
            <p className="text-forest-700 leading-relaxed text-sm lg:text-base">
              {experience.description}
            </p>
          )}

          {experience.link && (
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-coffee-600 hover:text-blush-600 transition-colors font-medium group"
            >
              Más información
              <ChevronRight
                size={18}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience({ experiences }: ExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Scroll progress for the timeline animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      className="relative py-20 px-6 bg-ivory-50 overflow-hidden"
    >
      {/* Fondo decorativo animado - igual que Hero */}
      <div className="absolute top-0 left-0 -z-10 opacity-30">
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-[500px] h-[500px] bg-gradient-to-br from-sage-200 to-blush-200 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/4"
        />
      </div>
      <div className="absolute bottom-0 right-0 -z-10 opacity-25">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.15, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-[400px] h-[400px] bg-gradient-to-br from-coffee-200 to-sage-200 rounded-full blur-3xl translate-x-1/3 translate-y-1/4"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <Briefcase className="w-8 h-8 text-coffee-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900">
            Experiencia
          </h2>
        </motion.div>

        {/* Timeline container */}
        <div className="relative" ref={timelineRef}>
          {/* Línea de fondo del timeline (gris claro) */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-sage-200" />

          {/* Línea animada del timeline (se llena con scroll) */}
          <motion.div
            style={{ height: timelineHeight }}
            className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-coffee-500 via-coffee-400 to-blush-400 origin-top"
          />

          {/* Lista de experiencias */}
          {experiences.length > 0 ? (
            experiences.map((experience, index) => (
              <ExperienceCard
                key={experience._id}
                experience={experience}
                index={index}
              />
            ))
          ) : (
            // Mensaje si no hay experiencias en Sanity
            <div className="text-center py-12 pl-10">
              <p className="text-forest-700">
                No se encontraron experiencias. Añade algunas en Sanity Studio.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
