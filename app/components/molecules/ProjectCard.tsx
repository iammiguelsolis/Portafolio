"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { getIcon } from "@/app/lib/iconMap";
import { urlFor } from "@/sanity/lib/image";
import ProjectModal from "./ProjectModal";

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

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.article
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="group bg-white rounded-2xl border border-sage-200 overflow-hidden hover:shadow-2xl hover:border-coffee-300 transition-all duration-300 h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-sage-100 flex-shrink-0">
          {project.image ? (
            <Image
              src={urlFor(project.image).width(800).height(500).url()}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sage-200 to-coffee-200">
              <span className="text-4xl">🖼️</span>
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-amber-400 text-forest-900 text-xs font-bold rounded-full shadow-lg">
              ⭐ Destacado
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-xl font-bold text-forest-900 mb-2 group-hover:text-coffee-600 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-forest-700 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-5">
            {(project.technologies || []).slice(0, 4).map((tech) => (
              <span
                key={tech._id}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-ivory-100 border border-sage-200 rounded-lg text-xs font-medium text-forest-700"
              >
                <span className="w-3.5 h-3.5 text-coffee-500">
                  {getIcon(tech.iconKey, "w-3.5 h-3.5")}
                </span>
                {tech.name}
              </span>
            ))}
            {(project.technologies || []).length > 4 && (
              <span className="px-2.5 py-1 bg-sage-100 text-sage-600 rounded-lg text-xs font-medium">
                +{(project.technologies || []).length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-auto pt-2">
            {/* Ver más button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-1.5 px-3 py-2 bg-sage-100 hover:bg-sage-200 text-forest-700 font-medium rounded-xl transition-colors text-sm cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              Ver más
            </button>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-coffee-500 hover:bg-coffee-600 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg text-sm"
              >
                Demo
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border-2 border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-ivory-50 font-semibold rounded-xl transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
        </div>
      </motion.article>

      {/* Modal */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

