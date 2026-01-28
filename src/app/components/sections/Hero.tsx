"use client";

import { useLanguage } from "@/app/hooks/useLanguage";

/**
 * Section : Hero
 */
export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-6xl text-white font-bold mb-6">
          {t.hero.name}
        </h1>
        <p className="text-lg md:text-2xl  text-gray-400 mb-8">
          {t.hero.title}
        </p>
        <a
          href="#projects"
          className="inline-block text-sm md:text-base px-8 py-3 font-medium  border-2 border-white bg-gradient-to-b from-slate-300 via-cyan-600 to-cyan-900 hover:to-cyan-500 text-white rounded-full  transition"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
}
