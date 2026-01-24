'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {BriefcaseBusiness, UserSearch,Brain,GraduationCap,Repeat2,Eye}from "lucide-react"
import Image from "next/image";

//Liens du tab menu de la section à propos
const tabs = [
    { id: 'hero', label: 'Aperçu', icon:<Eye className="size-4 md:size-5"/> },
    { id: 'description', label: 'À propos', icon:<UserSearch className="size-4 md:size-5"/> },
    { id: 'skills', label: 'Compétences', icon:<Brain className="size-4 md:size-5"/> },
    { id: 'experience', label: 'Expériences', icon:<BriefcaseBusiness className="size-4 md:size-5"/> },
    { id: 'education', label: 'Formations', icon:<GraduationCap className="size-4 md:size-5"/> },
    { id: 'method', label: 'Méthode', icon:<Repeat2 className="size-4 md:size-5"/> },
]

//Mes compétences
const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS','HTML/CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Authentification(JWT)'],
    tools: ['Git', 'Docker', 'VS Code', 'Azure DevOps', 'Render', 'Supabase'],
    other:['Vue','Blazor(.Net)','Java']
}

//Mes expériences
const experiences = [
    {
        role: 'Stagiaire en Systèmes de Transports Intelligents',
        company: 'Ministère des Transports et de la Mobilité Durable (MTMD)',
        period: 'Janvier 2025 - Août 2025',
        projectName: 'Plateforme de collecte multicapteurs',
        description: "Développement d’une application Web modulaire de collecte et filtrage de données en temps réel, avec stockage local, en base de données et diffusion via MQTT. Solution robuste, maintenable et performante, respectant les bonnes pratiques de développement.",
        tech: ".NET Core, HTML, CSS, Azure DevOps, MQTT, IIS, WireShark",
        achievements: [
            "Analyse des besoins et choix des technologies",
            "Conception de l'architecture et de la base de données",
            "Modélisation et formatage des données",
            "Développement du backend et frontend",
            "Implémentation du multi-threading pour la collecte de données en temps réel",
            "Mise en place d’un système de logs",
            "Réalisation de tests unitaires et fonctionnels",
            "Assurance de la qualité du code et respect des normes de sécurité",
            "Mise en place de CI/CD avec Azure DevOps et déploiement via IIS",
            "Rédaction de la documentation technique et des rapports"
        ]
    }
]

//Mes differentes formations
const education = [
    {
        degree: 'Baccalauréat en Informatique',
        school: 'Université Laval',
        year: '2021 - 2025',
        details: 'Concentration en Génie logiciel et Développement Web',
    },
    {
        degree: 'Certification Scrum Fundamentals',
        school: 'ScrumStudy',
        year: '2026',
        details: 'Compréhension des principes Scrum et de l’organisation Agile des projets logiciels.',
    },
]

export default function About() {
    const [activeTab, setActiveTab] = useState('hero')

    return (
        <section id="about" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20">
            <div className="container mx-auto px-6">
                {/* Tabs Navigation */}
                <div className="mb-12 overflow-x-auto">
                    <div className="flex gap-2 border-b border-gray-500 min-w-max">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                                    activeTab === tab.id
                                        ? 'text-cyan-500'
                                        : 'text-gray-500 hover:text-cyan-500'
                                }`}
                            >
                                <span className="flex items-center gap-1">{tab.icon}{tab.label}</span>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeTab === 'hero' && <HeroContent />}
                        {activeTab === 'description' && <DescriptionContent />}
                        {activeTab === 'skills' && <SkillsContent />}
                        {activeTab === 'experience' && <ExperienceContent />}
                        {activeTab === 'education' && <EducationContent />}
                        {activeTab === 'method' && <MethodContent />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

function HeroContent() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-12 py-12">
            <div className="w-48 h-48 rounded-full bg-white flex-shrink-0 overflow-hidden">
                <img
                    src="/user/photo.png"
                    alt="My photo"
                    className="object-contain w-full h-full"
                />
            </div>
            <div className="flex-1">
                <h1 className="text-2xl md:text-5xl text-white font-bold mb-4">Christian Kayembe Katangala</h1>
                <p className="text-lg md:text-2xl text-gray-300 mb-6">Développeur Backend & Frontend (Full-Stack Junior)</p>
                <p className="text-base text-gray-400 md:text-lg leading-relaxed">
                    Motivé par le développement d’applications web, performantes et maintenables, avec une solide pratique
                    acquise via des projets concrets et des stages professionnels.
                </p>
                <div className="flex gap-4 mt-8">
                    <a href="#contact" className="px-3 py-1.5 text-sm md:text-base md:px-6 md:py-3 font-medium bg-gradient-to-b from-slate-300 via-cyan-600 to-cyan-900 text-white rounded-lg hover:to-cyan-500 transition">
                        Me contacter
                    </a>
                </div>
            </div>
        </div>
    )
}

function DescriptionContent() {
    return (
        <div className="max-w-3xl py-8">
            <h2 className="text-2xl md:text-4xl text-white font-bold mb-8">Qui suis-je ?</h2>
            <div className="space-y-6 text-base md:text-lg text-justify text-gray-400 leading-relaxed">
                <p>
                    Développeur web basé au Québec, je transforme des idées en applications web robustes,
                    performantes et élégantes. Mon parcours en développement m’a permis d’acquérir une solide
                    compréhension des enjeux frontend et backend, ainsi que de l’architecture globale des applications.
                </p>
                <p>
                    Ce qui me motive avant tout, c’est la conception d’architectures applicatives fiables, scalables,
                    maintenables et résilientes, en m’efforçant de respecter au mieux les bonnes pratiques du développement logiciel.
                    L’optimisation des performances fait également partie de mes préoccupations, sans jamais compromettre
                    la clarté et la qualité du code.
                </p>
                <p>
                    Au-delà du code, je maintiens une veille technologique constante afin d’améliorer continuellement
                    mes compétences. Je crois fermement en l’importance du travail d’équipe et d’une communication
                    claire pour mener à bien des projets de qualité.
                </p>
            </div>
        </div>
    )
}

function SkillsContent() {
    return (
        <div className="py-8">
            <h2 className="text-2xl md:text-4xl text-white font-bold mb-8">Mes Compétences</h2>
            <div className="grid md:grid-cols-4 gap-6 text-gray-400">
                <div>
                    <h3 className="text-lg md:text-2xl font-semibold mb-4 text-blue-600">Front-end</h3>
                    <div className="space-y-3">
                        {skills.frontend.map((skill) => (
                            <div key={skill} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-base  md:text-lg">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div >
                    <h3 className="text-lg md:text-2xl font-semibold mb-4 text-purple-600">Back-end</h3>
                    <div className="space-y-3">
                        {skills.backend.map((skill) => (
                            <div key={skill} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                <span className="text-base  md:text-lg">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg md:text-2xl font-semibold mb-4 text-green-600">Outils et Cloud</h3>
                    <div className="space-y-3">
                        {skills.tools.map((skill) => (
                            <div key={skill} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                <span className="text-base md:text-lg">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg md:text-2xl font-semibold mb-4 text-yellow-600">Autres expériences</h3>
                    <div className="space-y-3">
                        {skills.other.map((skill) => (
                            <div key={skill} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                                <span className="text-base md:text-lg">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function ExperienceContent() {
    return (
        <div className="py-8">
            <h2 className="text-2xl text-white md:text-4xl font-bold mb-8">Expériences Professionnelles</h2>
            <div className="space-y-8">
                {experiences.map((exp, i) => (
                    <div key={i} className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-8 shadow-md hover:shadow-lg transition">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-300">{exp.role}</h3>
                                <p className="text-base md:text-lg text-cyan-500 font-medium">{exp.company}</p>
                            </div>
                            <span className="text-sm md:text-base text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                        </div>
                        <div className="mb-3 flex gap-1">
                            <label className="text-sm md:text-base text-white font-semibold">Projet :</label>
                            <p className="text-sm md:text-base text-gray-300 font-medium">{exp.projectName}</p>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 mb-4 text-justify">{exp.description}</p>
                        <div className="mb-3 flex items-center gap-1">
                            <label className="text-white text-sm md:text-base font-semibold">Outils :</label>
                            <p className="text-sm md:text-base text-gray-300">{exp.tech}</p>
                        </div>
                        <div className="border-l-4 border-cyan-500 pl-4">
                            <h4 className="text-sm md:text-base text-white font-semibold mb-2">Réalisations clés :</h4>
                            <ul className="space-y-1">
                                {exp.achievements.map((achievement, j) => (
                                    <li key={j} className="text-sm md:text-base text-gray-400">• {achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function EducationContent() {
    return (
        <div className="py-8">
            <h2 className="text-2xl text-white md:text-4xl font-bold mb-8">Formations</h2>
            <div className="space-y-6">
                {education.map((edu, i) => (
                    <div key={i} className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-300">{edu.degree}</h3>
                                <p className="text-base md:text-lg text-green-600 font-medium">{edu.school}</p>
                            </div>
                            <span className="text-sm md:text-base text-gray-400 mt-2 md:mt-0">{edu.year}</span>
                        </div>
                        <p className="text-gray-400">{edu.details}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function MethodContent() {
    return (
        <div className="py-8">
            <h2 className="text-2xl md:text-4xl text-white font-bold mb-8">Ma Méthode de Travail</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl text-white font-bold mb-3">Approche Stratégique</h3>
                    <p className="text-gray-400">
                        Comprendre le problème, analyser les besoins, définir l’architecture, puis développer itérativement.
                    </p>
                </div>

                <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-xl text-white font-bold mb-3">Agile mindset</h3>
                    <p className="text-gray-400">
                        Priorisation des fonctionnalités, livraison continue, feedback régulier.
                    </p>
                </div>

                <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">💡</span>
                    </div>
                    <h3 className="text-xl text-white font-bold mb-3">Code Propre</h3>
                    <p className="text-gray-400">
                        Code maintenable et documenté, respect des conventions et revue de code systématique et refactoring régulier.
                    </p>
                </div>

                <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🤝</span>
                    </div>
                    <h3 className="text-xl text-white font-bold mb-3">Communication</h3>
                    <p className="text-gray-400">
                        Transparence sur l’avancement et les défis,
                        Collaboration étroite avec l’équipe produit et les développeurs.
                    </p>
                </div>
            </div>
        </div>
    )
}