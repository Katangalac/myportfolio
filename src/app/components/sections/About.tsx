"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseBusiness,
  UserSearch,
  Brain,
  GraduationCap,
  Repeat2,
  Eye,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/app/hooks/useLanguage";
import { TranslationKeys } from "@/app/data/translations";

/**
 * Section : À propos
 */
export default function About() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("hero");

  //Liens du tab menu de la section à propos
  const tabs = [
    {
      id: "hero",
      label: t.about.tab.overview,
      icon: <Eye className="size-4 md:size-5" />,
    },
    {
      id: "description",
      label: t.about.tab.about,
      icon: <UserSearch className="size-4 md:size-5" />,
    },
    {
      id: "skills",
      label: t.about.tab.skills,
      icon: <Brain className="size-4 md:size-5" />,
    },
    {
      id: "experience",
      label: t.about.tab.experience,
      icon: <BriefcaseBusiness className="size-4 md:size-5" />,
    },
    {
      id: "education",
      label: t.about.tab.education,
      icon: <GraduationCap className="size-4 md:size-5" />,
    },
    {
      id: "method",
      label: t.about.tab.approach,
      icon: <Repeat2 className="size-4 md:size-5" />,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20"
    >
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
                    ? "text-cyan-500"
                    : "text-gray-500 hover:text-cyan-500"
                }`}
              >
                <span className="flex items-center gap-1">
                  {tab.icon}
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
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
            {activeTab === "hero" && <HeroContent t={t} />}
            {activeTab === "description" && <DescriptionContent t={t} />}
            {activeTab === "skills" && <SkillsContent t={t} />}
            {activeTab === "experience" && <ExperienceContent t={t} />}
            {activeTab === "education" && <EducationContent t={t} />}
            {activeTab === "method" && <MethodContent t={t} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/**
 * Courte introduction
 */
function HeroContent(props: { t: TranslationKeys }) {
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
        <h1 className="text-2xl md:text-5xl text-white font-bold mb-4">
          {props.t.hero.name}
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-6">
          {props.t.hero.title}
        </p>
        <p className="text-base text-gray-400 md:text-lg leading-relaxed">
          {props.t.hero.subtitle}
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="#contact"
            className="px-3 py-1.5 text-sm md:text-base md:px-6 md:py-3 font-medium bg-gradient-to-b from-slate-300 via-cyan-600 to-cyan-900 text-white rounded-lg hover:to-cyan-500 transition"
          >
            {props.t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Présentation détaillée
 */
function DescriptionContent(props: { t: TranslationKeys }) {
  return (
    <div className="max-w-3xl py-8">
      <h2 className="text-2xl md:text-4xl text-white font-bold mb-8">
        {props.t.about.me.title}
      </h2>
      <div className="space-y-6 text-base md:text-lg max-w-prose  text-left text-gray-400 leading-relaxed">
        <p>{props.t.about.me.description.p1}</p>
        <p>{props.t.about.me.description.p2}</p>
        <p>{props.t.about.me.description.p3}</p>
      </div>
    </div>
  );
}

/**
 * Compétences
 */
function SkillsContent(props: { t: TranslationKeys }) {
  //Mes compétences
  const skills = props.t.about.skills.skills;
  return (
    <div className="py-8">
      <h2 className="text-2xl md:text-4xl text-white font-bold mb-8">
        {props.t.about.skills.title}
      </h2>
      <div className="grid md:grid-cols-4 gap-6 text-gray-400">
        <div>
          <h3 className="text-lg md:text-2xl font-semibold mb-4 text-sky-500">
            {props.t.about.skills.categories.frontend}
          </h3>
          <div className="space-y-3">
            {skills.frontend.map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                <span className="text-base  md:text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-2xl font-semibold mb-4 text-pink-600">
            {props.t.about.skills.categories.backend}
          </h3>
          <div className="space-y-3">
            {skills.backend.map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-base  md:text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-2xl font-semibold mb-4 text-green-600">
            {props.t.about.skills.categories.tools}
          </h3>
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
          <h3 className="text-lg md:text-2xl font-semibold mb-4 text-yellow-600">
            {props.t.about.skills.categories.other}
          </h3>
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
  );
}

/**
 * Expériences
 */
function ExperienceContent(props: { t: TranslationKeys }) {
  //Mes expériences
  const experiences = props.t.about.experience.experiences;

  return (
    <div className="py-8">
      <h2 className="text-2xl text-white md:text-4xl font-bold mb-8">
        {props.t.about.experience.title}
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-8 shadow-md hover:shadow-lg transition"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-300">
                  {exp.role}
                </h3>
                <p className="text-base md:text-lg text-cyan-500 font-medium">
                  {exp.company}
                </p>
              </div>
              <span className="text-sm md:text-base text-gray-400 mt-2 md:mt-0">
                {exp.period}
              </span>
            </div>
            <div className="mb-3 flex gap-1">
              <label className="text-sm md:text-base text-white font-semibold">
                {props.t.about.experience.sections.project} :
              </label>
              <p className="text-sm md:text-base text-gray-300 font-medium">
                {exp.projectName}
              </p>
            </div>
            <p className="text-sm md:text-base text-gray-400 mb-4 text-justify">
              {exp.description}
            </p>
            <div className="mb-3 flex items-center gap-1">
              <label className="text-white text-sm md:text-base font-semibold">
                {props.t.about.experience.sections.tools} :
              </label>
              <p className="text-sm md:text-base text-gray-300">{exp.tech}</p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-4">
              <h4 className="text-sm md:text-base text-white font-semibold mb-2">
                {props.t.about.experience.sections.achievements} :
              </h4>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, j) => (
                  <li key={j} className="text-sm md:text-base text-gray-400">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Éducation/Formations
 */
function EducationContent(props: { t: TranslationKeys }) {
  //Mes differentes formations
  const education = props.t.about.education.items;

  return (
    <div className="py-8">
      <h2 className="text-2xl text-white md:text-4xl font-bold mb-8">
        {props.t.about.education.title}
      </h2>
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-300">
                  {edu.degree}
                </h3>
                <p className="text-base md:text-lg text-green-600 font-medium">
                  {edu.school}
                </p>
              </div>
              <span className="text-sm md:text-base text-gray-400 mt-2 md:mt-0">
                {edu.year}
              </span>
            </div>
            <p className="text-gray-400">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Méthode de travail
 * @param props
 * @returns
 */
function MethodContent(props: { t: TranslationKeys }) {
  // Ma méthode de travail
  const approaches = props.t.about.approach.items;

  return (
    <div className="py-8">
      <h2 className="text-2xl md:text-4xl text-white font-bold mb-8">
        {props.t.about.approach.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {approaches.map((approach) => (
          <div
            key={approach.title}
            className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 shadow-md"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl text-white font-bold mb-3">
              {approach.title}
            </h3>
            <p className="text-gray-400">{approach.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
