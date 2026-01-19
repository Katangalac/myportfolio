'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
    { id: 'hero', label: 'Aperçu' },
    { id: 'description', label: 'À propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'experience', label: 'Expériences' },
    { id: 'education', label: 'Formations' },
    { id: 'method', label: 'Méthode' },
]

const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    tools: ['Git', 'Docker', 'Figma', 'VS Code', 'Vercel'],
}

const experiences = [
    {
        role: 'Développeur Full Stack',
        company: 'Entreprise Tech Inc.',
        period: '2023 - Présent',
        description: 'Développement d\'applications web modernes avec React et Node.js. Collaboration avec une équipe de 5 développeurs sur des projets clients.',
        achievements: ['Migration vers Next.js 14', 'Amélioration des performances de 40%', 'Mise en place de CI/CD'],
    },
    {
        role: 'Développeur Front-end',
        company: 'Startup Digital',
        period: '2021 - 2023',
        description: 'Création d\'interfaces utilisateur réactives et accessibles. Participation active aux décisions d\'architecture.',
        achievements: ['Refonte complète du design system', 'Réduction du bundle de 30%'],
    },
]

const education = [
    {
        degree: 'DEC en Informatique',
        school: 'Cégep de...',
        year: '2021',
        details: 'Spécialisation en développement web et bases de données',
    },
    {
        degree: 'Formation Développeur Web',
        school: 'École en ligne',
        year: '2020',
        details: 'JavaScript avancé, React, Node.js',
    },
]

export default function About() {
    const [activeTab, setActiveTab] = useState('hero')

    return (
        <section id="about" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
            <div className="container mx-auto px-6">
                {/* Tabs Navigation */}
                <div className="mb-12 overflow-x-auto">
                    <div className="flex gap-2 border-b border-gray-200 min-w-max">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                                    activeTab === tab.id
                                        ? 'text-blue-600'
                                        : 'text-gray-600 hover:text-blue-500'
                                }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
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
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0"></div>
            <div className="flex-1">
                <h1 className="text-5xl font-bold mb-4">Votre Nom</h1>
                <p className="text-2xl text-gray-700 mb-6">Développeur Full Stack</p>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Passionné par la création d'expériences web modernes et performantes.
                    Spécialisé en React, Next.js et Node.js avec 3+ années d'expérience.
                </p>
                <div className="flex gap-4 mt-8">
                    <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Me contacter
                    </a>
                    <a href="/cv.pdf" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-white transition">
                        Télécharger CV
                    </a>
                </div>
            </div>
        </div>
    )
}

function DescriptionContent() {
    return (
        <div className="max-w-3xl py-8">
            <h2 className="text-4xl font-bold mb-8">Qui suis-je ?</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                    Développeur web passionné basé à Blainville, Québec, je transforme des idées
                    en applications web performantes et élégantes. Mon parcours dans le développement
                    m'a permis d'acquérir une expertise solide tant en front-end qu'en back-end.
                </p>
                <p>
                    Ce qui me motive ? Créer des solutions techniques qui ont un impact réel sur
                    l'expérience utilisateur. J'aime particulièrement travailler sur l'optimisation
                    des performances et l'architecture d'applications scalables.
                </p>
                <p>
                    Au-delà du code, je suis constamment en veille technologique et j'apprécie
                    partager mes connaissances avec la communauté. Je crois fermement en l'importance
                    du travail d'équipe et de la communication claire dans tout projet.
                </p>
            </div>
        </div>
    )
}

function SkillsContent() {
    return (
        <div className="py-8">
            <h2 className="text-4xl font-bold mb-8">Mes Compétences</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-blue-600">Front-end</h3>
                    <div className="space-y-3">
                        {skills.frontend.map((skill) => (
                            <div key={skill} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-lg">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-purple-600">Back-end</h3>
                    <div className="space-y-3">
                        {skills.backend.map((skill) => (
                            <div key={skill} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                <span className="text-lg">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-green-600">Outils</h3>
                    <div className="space-y-3">
                        {skills.tools.map((skill) => (
                            <div key={skill} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                <span className="text-lg">{skill}</span>
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
            <h2 className="text-4xl font-bold mb-8">Expériences Professionnelles</h2>
            <div className="space-y-8">
                {experiences.map((exp, i) => (
                    <div key={i} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                                <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                            </div>
                            <span className="text-gray-600 mt-2 md:mt-0">{exp.period}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{exp.description}</p>
                        <div className="border-l-4 border-blue-600 pl-4">
                            <h4 className="font-semibold mb-2">Réalisations clés :</h4>
                            <ul className="space-y-1">
                                {exp.achievements.map((achievement, j) => (
                                    <li key={j} className="text-gray-700">• {achievement}</li>
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
            <h2 className="text-4xl font-bold mb-8">Formations</h2>
            <div className="space-y-6">
                {education.map((edu, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                                <p className="text-lg text-purple-600 font-medium">{edu.school}</p>
                            </div>
                            <span className="text-gray-600 mt-2 md:mt-0">{edu.year}</span>
                        </div>
                        <p className="text-gray-700">{edu.details}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function MethodContent() {
    return (
        <div className="py-8">
            <h2 className="text-4xl font-bold mb-8">Ma Méthode de Travail</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Approche Stratégique</h3>
                    <p className="text-gray-700">
                        Je commence toujours par comprendre le problème en profondeur avant de
                        coder. Analyse des besoins, définition de l'architecture, puis développement itératif.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Livraison Continue</h3>
                    <p className="text-gray-700">
                        Je privilégie les petites itérations fréquentes avec feedback régulier.
                        Tests automatisés et déploiement continu pour garantir la qualité.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">💡</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Code Propre</h3>
                    <p className="text-gray-700">
                        J'écris du code maintenable et documenté. Respect des conventions,
                        revues de code systématiques et refactoring régulier.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🤝</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Communication</h3>
                    <p className="text-gray-700">
                        Transparence totale sur l'avancement, les défis et les solutions.
                        Collaboration étroite avec les designers, product owners et autres développeurs.
                    </p>
                </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Technologies & Best Practices</h3>
                <ul className="space-y-2 text-gray-700">
                    <li>• Git Flow pour la gestion de versions</li>
                    <li>• Tests unitaires et d'intégration (Jest, React Testing Library)</li>
                    <li>• CI/CD avec GitHub Actions ou GitLab CI</li>
                    <li>• Documentation technique claire (README, commentaires, Storybook)</li>
                    <li>• Accessibilité (WCAG 2.1) et performance web (Core Web Vitals)</li>
                </ul>
            </div>
        </div>
    )
}