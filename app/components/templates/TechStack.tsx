"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Wrench, Flame, Code2, Database, Server, Palette, Cloud, Settings } from "lucide-react";

// 1. Lenguajes y Frameworks (Simple Icons)
import {
  SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiMysql, SiPostgresql, SiMongodb, SiOracle,
  SiSpringboot, SiNodedotjs, SiExpress, SiFastapi, SiFlask,
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap,
  SiDocker, SiVercel, SiGit, SiGithub,
  SiIntellijidea, SiPostman
} from "react-icons/si";

// 2. Iconos alternativos
import { FaJava, FaAws } from "react-icons/fa";
import { VscAzure, VscVscode } from "react-icons/vsc";

// Mapa de iconos
const iconMap: Record<string, React.ReactNode> = {
  // Lenguajes
  java: <FaJava className="w-8 h-8" />,
  python: <SiPython className="w-8 h-8" />,
  js: <SiJavascript className="w-8 h-8" />,
  ts: <SiTypescript className="w-8 h-8" />,

  // Bases de datos
  mysql: <SiMysql className="w-8 h-8" />,
  postgres: <SiPostgresql className="w-8 h-8" />,
  mongodb: <SiMongodb className="w-8 h-8" />,

  // Backend
  spring: <SiSpringboot className="w-8 h-8" />,
  nodejs: <SiNodedotjs className="w-8 h-8" />,
  express: <SiExpress className="w-8 h-8" />,
  fastapi: <SiFastapi className="w-8 h-8" />,
  flask: <SiFlask className="w-8 h-8" />,

  // Frontend
  react: <SiReact className="w-8 h-8" />,
  nextjs: <SiNextdotjs className="w-8 h-8" />,
  tailwind: <SiTailwindcss className="w-8 h-8" />,
  bootstrap: <SiBootstrap className="w-8 h-8" />,

  // Cloud
  aws: <FaAws className="w-8 h-8" />,
  azure: <VscAzure className="w-8 h-8" />,
  docker: <SiDocker className="w-8 h-8" />,
  vercel: <SiVercel className="w-8 h-8" />,
  git: <SiGit className="w-8 h-8" />,
  github: <SiGithub className="w-8 h-8" />,

  // Herramientas
  vscode: <VscVscode className="w-8 h-8" />,
  idea: <SiIntellijidea className="w-8 h-8" />,
  postman: <SiPostman className="w-8 h-8" />,
};

const categoryColors: Record<string, string> = {
  languages: "from-amber-400 to-orange-500",
  databases: "from-blue-400 to-cyan-500",
  backend: "from-green-400 to-emerald-500",
  frontend: "from-pink-400 to-rose-500",
  cloud: "from-violet-400 to-purple-500",
  tools: "from-slate-400 to-zinc-500",
};

// Definición de tecnologías
const techCategories = {
  all: {
    name: "Todas",
    icon: <Flame className="w-5 h-5" />,
  },
  languages: {
    name: "Lenguajes",
    icon: <Code2 className="w-5 h-5" />,
    techs: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
    ],
  },
  databases: {
    name: "Bases de Datos",
    icon: <Database className="w-5 h-5" />,
    techs: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  backend: {
    name: "Backend",
    icon: <Server className="w-5 h-5" />,
    techs: [
      { name: "Spring Boot", icon: "spring" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Flask", icon: "flask" },
    ],
  },
  frontend: {
    name: "Frontend",
    icon: <Palette className="w-5 h-5" />,
    techs: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  cloud: {
    name: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    techs: [
      { name: "AWS", icon: "aws" },
      { name: "Azure", icon: "azure" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ],
  },
  tools: {
    name: "Herramientas",
    icon: <Settings className="w-5 h-5" />,
    techs: [
      { name: "VS Code", icon: "vscode" },
      { name: "IntelliJ", icon: "idea" },
      { name: "Postman", icon: "postman" },
    ],
  },
};

type CategoryKey = keyof typeof techCategories;

function TechCard({
  name,
  icon,
  category,
  index
}: {
  name: string;
  icon: string;
  category: string;
  index: number;
}) {
  const gradientClass = categoryColors[category] || "from-sage-400 to-forest-500";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{
        duration: 0.3,
        delay: index * 0.03,
        layout: { duration: 0.3 }
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex flex-col items-center gap-3 p-5 bg-white rounded-2xl border border-sage-200 hover:border-coffee-400 hover:shadow-xl transition-shadow cursor-pointer group"
    >
      <div className={`p-3 rounded-xl bg-gradient-to-br ${gradientClass} text-white shadow-lg group-hover:scale-110 transition-transform`}>
        {iconMap[icon] || <Code2 className="w-8 h-8" />}
      </div>
      <span className="text-sm font-semibold text-forest-800 group-hover:text-coffee-600 transition-colors text-center">
        {name}
      </span>
    </motion.div>
  );
}

export default function TechStack() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const getVisibleTechs = () => {
    if (activeCategory === "all") {
      const allTechs: { name: string; icon: string; category: string }[] = [];
      Object.entries(techCategories).forEach(([key, category]) => {
        if (key !== "all" && "techs" in category) {
          category.techs.forEach((tech) => {
            allTechs.push({ ...tech, category: key });
          });
        }
      });
      return allTechs;
    }

    const category = techCategories[activeCategory];
    if ("techs" in category) {
      return category.techs.map((tech) => ({ ...tech, category: activeCategory }));
    }
    return [];
  };

  const visibleTechs = getVisibleTechs();

  return (
    <section id="tecnologias" ref={sectionRef} className="relative py-20 px-6 bg-ivory-50 overflow-hidden">
      <div className="absolute top-1/2 left-0 -z-10 opacity-20">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] bg-gradient-to-br from-blush-200 to-coffee-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <Wrench className="w-8 h-8 text-coffee-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900">
            Tech Stack
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-56 flex-shrink-0"
          >
            <div className="sticky top-24 space-y-2">
              <p className="text-sm font-semibold text-sage-600 mb-4 uppercase tracking-wider">
                Filtrar por
              </p>
              {Object.entries(techCategories).map(([key, category]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key as CategoryKey)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${activeCategory === key
                    ? "bg-forest-900 text-ivory-50 shadow-lg"
                    : "bg-white text-forest-700 hover:bg-sage-100 border border-sage-200"
                    }`}
                >
                  <span className={activeCategory === key ? "text-ivory-50" : "text-coffee-500"}>
                    {category.icon}
                  </span>
                  <span className="font-medium">{category.name}</span>
                  {"techs" in category && (
                    <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${activeCategory === key ? "bg-ivory-50/20 text-ivory-100" : "bg-sage-100 text-sage-600"
                      }`}>
                      {category.techs.length}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1"
          >
            <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {visibleTechs.map((tech, index) => (
                  <TechCard
                    key={`${tech.icon}-${tech.category}`}
                    name={tech.name}
                    icon={tech.icon}
                    category={tech.category}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}