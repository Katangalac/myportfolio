// components/sections/ProjectDetails.tsx
'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github, ShieldAlert } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Informations détaillées de chaque projet
const projectsDetails = [
    {
        id: 1,
        title: 'Application de suivi des projets et tâches',
        description: "Application de gestion des projets et tâches permettant de suivre la progression, gérer les priorités et communiquer en temps réel avec les coéquipiers. Le backend a été conçu avec une architecture en couches afin de garantir un code clair, maintenable et facilement extensible. ",
        technologies: ['React','Typescript', 'Node.js', 'Express', 'TailwindCSS', 'Prisma', 'PostgreSQL', 'Redis', 'WebSocket'],
        skills: ['Temps réel avec WebSocket', 'Zustand', 'Authentification avec JWT', 'Déploiement sur Render'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/katangalac/projectManager',
        images: [
            {src:'/projectFlow/project-page.webp', alt:'project-page'},
            {src:'/projectFlow/project-detail.webp', alt:'project-detail'},
            {src:'/projectFlow/task-kanban.webp', alt:'task-kanban'},
            {src:'/projectFlow/task-detail.webp', alt:'task-detail'},
            {src:'/projectFlow/conv.webp', alt:'conversation'},
            {src:'/projectFlow/scheduler.webp', alt:'scheduler'},
        ],
        confidential:false,
        deploy:true,
        code:true,
    },
    {
        id: 2,
        title: 'Plateforme de collecte de données',
        description: "Application multithreadée et temps réel dédiée à la gestion de capteurs, incluant la collecte, " +
            "le filtrage, le stockage et la diffusion des données, avec carte interactive.\n" +
            "Collecte journalière et automatique des rapports avec possibilité de collecter mauellement les rapports d'une date spécifique." +
            "La plateforme est entièrement paramétrable et repose sur une architecture modulaire permettant l’ajout facile de nouveaux capteurs.",
        technologies: ['Blazor (ASP.NET Core)','JavaScript', 'Entity Framework Core', 'CI/CD', 'HTML & CSS', 'IIS', 'SQL', 'Leaflet','Azure DevOps'],
        skills: ['Développement IoT', 'Temps réel', 'Gestion de projet', 'Architecture modulaire, robuste et évolutive', 'Déploiement sur IIS','Tests automatisés'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/project',
        images: [
            {src:'/PCMC/dashboard.webp', alt:'dashboard'},
            {src:'/PCMC/sensor-detail.webp', alt:'sensor-detail'},
            {src:'/PCMC/Collect-1.webp', alt:'data-collect-1'},
            {src:'/PCMC/Collect-2.webp', alt:'data-collect-2'},
            {src:'/PCMC/setting-1.webp', alt:'app-setting-1'},
            {src:'/PCMC/Setting-2.webp', alt:'app-setting-2'},
            {src:'/PCMC/map.webp', alt:'map'},
        ],
        confidential:true,
        deploy:false,
        code:false,
    },
    {
        id: 3,
        title: "Application de partage d'images",
        description:  "Plateforme de partage d’images permettant aux utilisateurs de publier, liker et commenter des contenus, avec mentions d’utilisateurs et hashtags.\n" +
            "L’application favorise l’interaction et l’engagement autour des images.",
        technologies: ['Next.js', 'TypeScript', 'Clerk', 'tRPC', 'TailwindCSS', 'Prisma', 'PostgreSQL', 'Uploadcare', 'CI/CD', 'Docker', 'Vercel Analytics', 'Sentry'],
        skills: ['Authentification OAuth (Clerk)', 'Utilisation d\'ORM', 'Optimisation des performances web', 'Conteneurisation', 'Monitoring d\'application', 'Pipeline CI/CD avec GitHub Actions','Responsive design', 'Déploiement sur Vercel'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/Katangalac/Images-Publication-App',
        images: [
            {src:'/Uimages/upload-page.webp', alt:'upload-page'},
            {src:'/Uimages/img-upload.webp', alt:'image-uploading'},
            {src:'/Uimages/user-profile.webp', alt:'uer profile'},
            {src:'/Uimages/img-det.webp', alt:'image details'},
            {src:'/Uimages/comment-sec.webp', alt:'comment section'},
            {src:'/Uimages/img-form.webp', alt:'image form'},
        ],
        confidential:false,
        deploy:false,
        code:true,
    },
    {
        id: 4,
        title: 'Application de suivi des restaurants',
        description: "Le site permet aux utilisateurs de parcourir un catalogue de restaurants, les noter et créer des listes de favoris. Il permet également de suivre les visites d'autres utilisateurs et propose une carte interactive avec itinéraires.",
        technologies: ['Vue.js', 'JavaScript', 'TailwindCSS', 'HTML & CSS', 'Google Maps API'],
        skills: ['Consommation d\'API REST', 'UI/UX Design', 'Gestion sécurisée de sessions', 'Gestion d\'état avec des stores', 'Intégration API (Google Maps)'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/Katangalac/Restaurant-Tracking-App',
        images: [
            {src:'/Ufood/res-list.webp', alt:'restaurants list'},
            {src:'/Ufood/res-map.webp', alt:'restaurants map'},
            {src:'/Ufood/res-det.webp', alt:'restaurant detail'},
            {src:'/Ufood/res-direct.webp', alt:'restaurant direction'},
            {src:'/Ufood/user-prof.webp', alt:'user profile'},
            {src:'/Ufood/rate-visit.webp', alt:'visit rating'},
        ],
        confidential:false,
        deploy:false,
        code:true,
    },
]

export default function ProjectDetails() {
    return (
        <section className="bg-white">
            {projectsDetails.map((project) => (
                <ProjectCarousel key={project.id} project={project} />
            ))}
        </section>
    )
}

function ProjectCarousel({ project }: { project: typeof projectsDetails[0] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
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
        setCurrentImageIndex((prevIndex) => {
            let newIndex = prevIndex + newDirection
            if (newIndex < 0) newIndex = project.images.length - 1
            if (newIndex >= project.images.length) newIndex = 0
            return newIndex
        })
    }

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
                            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">{project.title}</h2>
                            {project.confidential && <span className="flex items-center gap-1 rounded-full bg-red-200 text-red-600 font-medium text-xs md:text-sm px-4 py-1 w-fit mb-4"><ShieldAlert className="size-4 md:size-5"/>Confidentiel! Infos limitées.</span>}
                            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Technologies */}
                        <div>
                            <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-200">Technologies utilisées</h3>
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
                            <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-300">Compétences acquises</h3>
                            <ul className="space-y-2">
                                {project.skills.map((skill) => (
                                    <li key={skill} className="flex items-start gap-2 text-sm md:text-base text-gray-400">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Boutons CTA */}
                        <div className="flex gap-4 pt-4">
                            {project.deploy &&
                                <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm md:text-base md:px-6 md:py-3 bg-gradient-to-b from-slate-300 via-cyan-600 to-cyan-900 text-white rounded-lg hover:to-cyan-500 transition group"
                                >
                                <ExternalLink size={18} />
                                Voir le site
                                </a>
                            }
                            {project.code &&
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-gray-200 gap-2 px-3 py-1.5 text-sm md:text-base md:px-6 md:py-3 border border-gray-300 rounded-lg hover:bg-slate-800 transition"
                                >
                                    <Github size={18} />
                                    Code source
                                </a>
                            }
                        </div>
                    </div>

                    {/* Colonne droite : Carrousel d'images (3/5 de l'écran) */}
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
                                    className="absolute inset-0"
                                >
                                    {/*<div
                                        className={`w-full h-full bg-gradient-to-br from-${project.images[currentImageIndex].from} to-${project.images[currentImageIndex].to}`}
                                    />*/}
                                    <div className="relative h-full w-full items-center flex">
                                        <img src={project.images[currentImageIndex].src} alt={project.images[currentImageIndex].alt} className="object-cover"/>
                                    </div>

                                </motion.div>
                            </AnimatePresence>

                            {/* Boutons de navigation - seulement si plus d'une image */}
                            {project.images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => paginate(-1)}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/70 backdrop-blur-sm rounded-full shadow-lg hover:opacity-100 hover:bg-white transition flex items-center justify-center group z-10"
                                        aria-label="Image précédente"
                                    >
                                        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={() => paginate(1)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/70 backdrop-blur-sm rounded-full shadow-lg hover:opacity-100 hover:bg-white transition flex items-center justify-center group z-10"
                                        aria-label="Image suivante"
                                    >
                                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                                    </button>

                                    {/* Indicateurs */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                        {project.images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    setDirection(index > currentImageIndex ? 1 : -1)
                                                    setCurrentImageIndex(index)
                                                }}
                                                className={`h-2 rounded-full transition-all ${
                                                    index === currentImageIndex
                                                        ? 'w-8 bg-white'
                                                        : 'w-2 bg-white/50 hover:bg-white/75'
                                                }`}
                                                aria-label={`Aller à l'image ${index + 1}`}
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
    )
}