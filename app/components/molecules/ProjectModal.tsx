"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { getIcon } from "@/app/lib/iconMap";
import { urlFor } from "@/sanity/lib/image";

interface Technology {
  _id: string;
  name: string;
  iconKey: string;
  category: string;
}

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  image: object;
  description: string;
  technologies: Technology[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Block body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-forest-900/60 backdrop-blur-sm z-[9999]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl md:max-h-[85vh] bg-white rounded-2xl shadow-2xl z-[9999] overflow-hidden flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-sage-100 rounded-full transition-colors shadow-md cursor-pointer"
            >
              <X className="w-5 h-5 text-forest-900" />
            </button>

            {/* Image */}
            <div className="relative w-full h-48 md:h-64 flex-shrink-0">
              {project.image ? (
                <Image
                  src={urlFor(project.image).width(1200).height(600).url()}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-sage-200 to-coffee-200 flex items-center justify-center">
                  <span className="text-6xl">🖼️</span>
                </div>
              )}

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-amber-400 text-forest-900 text-sm font-bold rounded-full shadow-lg">
                  ⭐ Destacado
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-forest-900 mb-4">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-forest-700 leading-relaxed mb-6 text-base md:text-lg">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-sage-600 uppercase tracking-wide mb-3">
                  Tecnologías
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map((tech) => (
                    <span
                      key={tech._id}
                      className="flex items-center gap-2 px-3 py-1.5 bg-ivory-100 border border-sage-200 rounded-lg text-sm font-medium text-forest-700"
                    >
                      <span className="w-4 h-4 text-coffee-500">
                        {getIcon(tech.iconKey, "w-4 h-4")}
                      </span>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-coffee-500 hover:bg-coffee-600 text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl"
                  >
                    Ver Demo
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-ivory-50 font-semibold rounded-xl transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Ver Código
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
