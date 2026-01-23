'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Information sommaire de chaque projet
const projects = [
    {
        id: 1,
        title: 'Application de suivi des projets et tâches',
        imgSrc:"/projectFlow/dashboard.webp",
        category: 'Web App / Productivité',
        description: 'Création et suivi de tâches avec communication en temps réel entre les membres d’équipe.',
        tags: ['React', 'TailwindCSS', 'PostgreSQL', 'Zustand', 'WebSocket', 'Redis']
    },
    {
        id: 2,
        title: 'Application de collecte de données',
        imgSrc:'/PCMC/schema.png',
        category: 'Web App / Data / IoT',
        description: 'Collecte et gestion en temps réel de données de capteurs routiers avec stockage et diffusion.',
        tags: ['Blazor (ASP.NET Core)', 'Entity Framework Core', 'SQL', 'HTML & CSS', 'IIS', 'CI/CD']
    },
    {
        id: 3,
        title: "Application de partage d'images",
        category: 'Web App / Sociale',
        imgSrc:"/Uimages/all-imgs.webp",
        description: 'Publier, liker et commenter des images pour favoriser l’interaction entre utilisateurs.',
        tags: ['Next.js', 'TailwindCSS', 'Prisma', 'PostgreSQL', 'Vercel', 'CI/CD', 'Docker']
    },
    {
        id: 4,
        title: 'Application de suivi des restaurants',
        category: 'Web App / Sociale',
        imgSrc:"/Ufood/uf-home.webp",
        description: 'Découverte, notation et organisation de visites de restaurants avec suivi des listes et activités d’autres utilisateurs.',
        tags: ['Vue.js', 'TailwindCSS', 'HTML & CSS', 'Google Maps API']
    },
];


export default function ProjectsOverview() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    }

    const swipeConfidenceThreshold = 10000
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity
    }

    const paginate = (newDirection: number) => {
        setDirection(newDirection)
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex + newDirection
            if (newIndex < 0) newIndex = projects.length - 1
            if (newIndex >= projects.length) newIndex = 0
            return newIndex
        })
    }

    return (
        <section id="projects" className="min-h-screen bg-gradient-to-b from-slate-800 via-cyan-900 to-slate-950 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl md:text-4xl text-white font-bold mb-4 text-left">Mes Projets</h2>
                <p className="text-gray-300 text-left mb-12 text-base md:text-lg">
                    Découvrez mes réalisations
                </p>

                <div className="relative max-w-5xl mx-auto">
                    {/* Carrousel */}
                    <div className="relative h-[450px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x)

                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1)
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1)
                                    }
                                }}
                                className="absolute w-full h-full"
                            >
                                <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden h-full shadow-xl">
                                    <div className="grid md:grid-cols-2 gap-0 rounded-2xl h-full">
                                        {/* Image du projet */}
                                        <div className="h-full w-full aspect-video hidden md:flex  bg-white border-r border-gray-300 relative">

                                            <Image
                                                src={projects[currentIndex].imgSrc}
                                                alt={projects[currentIndex].description}
                                                fill
                                                className="object-contain max-w-full"
                                            />

                                        </div>

                                        {/* Contenu */}
                                        <div className="p-8 flex flex-col justify-between">
                                            <div>
                                        <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs md:text-sm font-medium mb-4">
                                            {projects[currentIndex].category}
                                        </span>
                                                <h3 className="text-xl md:text-3xl text-white font-bold mb-4">{projects[currentIndex].title}</h3>
                                                <p className="text-gray-400 mb-6 text-base md:text-lg text-left leading-relaxed">
                                                    {projects[currentIndex].description}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {projects[currentIndex].tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-3 py-1 bg-gray-300 text-gray-800 rounded-lg text-xs md:text-sm"
                                                        >
                                                    {tag}
                                                </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <a
                                                href={`#project-${projects[currentIndex].id}`}
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-b from-slate-300 via-cyan-600 to-cyan-900 hover:to-cyan-500 text-white font-medium rounded-lg transition group w-fit"
                                            >
                                                Voir les détails
                                                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Boutons de navigation */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/80 opacity-80 shadow-lg hover:shadow-xl hover:opacity-100 transition flex items-center justify-center group z-10"
                        aria-label="Projet précédent"
                    >
                        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white/80 opacity-80 shadow-lg hover:shadow-xl hover:opacity-100 transition flex items-center justify-center group z-10"
                        aria-label="Projet suivant"
                    >
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Indicateurs */}
                    <div className="flex justify-center gap-2 mt-8">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1)
                                    setCurrentIndex(index)
                                }}
                                className={`h-2 rounded-full transition-all ${
                                    index === currentIndex
                                        ? 'w-8 bg-cyan-500'
                                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Aller au projet ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}