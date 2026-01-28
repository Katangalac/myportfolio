"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  ShieldAlert,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/hooks/useLanguage";
import { TranslationKeys } from "@/app/data/translations";

/**
 * Structure des détails d'un projet
 */
type ProjectDetails = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  skills: string[];
  liveUrl: string;
  githubUrl: string;
  images: {
    src: string;
    alt: string;
  }[];
  confidential: boolean;
  deploy: boolean;
  code: boolean;
};

/**
 * Section : Détails des projets
 */
export default function ProjectDetails() {
  const { t } = useLanguage();

  // Informations détaillées de chaque projet
  const projectsDetails = t.projects.details.items;

  return (
    <section className="bg-white">
      {projectsDetails.map((project) => (
        <ProjectCarousel key={project.id} project={project} t={t} />
      ))}
    </section>
  );
}

/**
 * Carrousel d'images d'un projet
 */
function ProjectCarousel({
  project,
  t,
}: {
  project: ProjectDetails;
  t: TranslationKeys;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentImageIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = project.images.length - 1;
      if (newIndex >= project.images.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <div
      id={`project-${project.id}`}
      className="min-h-screen flex items-center bg-slate-950 last:bg-gradient-to-b last:from-bg-slate-950 last:to-slate-900  border-b border-slate-900 last:border-b-0"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Colonne gauche : Informations (2/5 de l'écran) */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
                {project.title}
              </h2>
              {project.confidential && (
                <span className="flex items-center gap-1 rounded-full bg-red-200 text-red-600 font-medium text-xs md:text-sm px-4 py-1 w-fit mb-4">
                  <ShieldAlert className="size-4 md:size-5" />
                  {t.projects.details.titles.confidential}
                </span>
              )}
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-200">
                {t.projects.details.titles.tech}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-lg text-xs md:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Compétences acquises */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-300">
                {t.projects.details.titles.skills}
              </h3>
              <ul className="space-y-2">
                {project.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 text-sm md:text-base text-gray-400"
                  >
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Site & Code source*/}
            <div className="flex gap-4 pt-4">
              {project.deploy && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm md:text-base md:px-6 md:py-3 bg-gradient-to-b from-slate-300 via-cyan-600 to-cyan-900 text-white rounded-lg hover:to-cyan-500 transition group"
                >
                  <ExternalLink size={18} />
                  {t.projects.details.cta.web}
                </a>
              )}
              {project.code && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-200 gap-2 px-3 py-1.5 text-sm md:text-base md:px-6 md:py-3 border border-gray-300 rounded-lg hover:bg-slate-800 transition"
                >
                  <Github size={18} />
                  {t.projects.details.cta.code}
                </a>
              )}
            </div>
          </div>

          {/* Colonne droite : Carrousel d'images*/}
          <div className="md:col-span-3 relative">
            <div className="flex items-center bg-black  relative h-[600px] border border-gray-300 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentImageIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full w-full items-center flex">
                    <img
                      src={project.images[currentImageIndex].src}
                      alt={project.images[currentImageIndex].alt}
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Boutons de navigation*/}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() => paginate(-1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-700 w-12 h-12 bg-white/10  rounded-full shadow-lg hover:bg-white/60 transition flex items-center justify-center group z-10"
                    aria-label={t.projects.details.cta.previous}
                  >
                    <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => paginate(1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-700 w-12 h-12 bg-white/10  rounded-full shadow-lg  hover:bg-white/60 transition flex items-center justify-center group z-10"
                    aria-label={t.projects.details.cta.next}
                  >
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Indicateurs */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentImageIndex ? 1 : -1);
                          setCurrentImageIndex(index);
                        }}
                        className={`h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "w-8 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`${t.projects.details.cta.moveTo} ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Compteur d'images */}
              {project.images.length > 1 && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm z-10">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
