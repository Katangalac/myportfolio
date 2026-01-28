"use client";

import { useLanguage } from "@/app/hooks/useLanguage";

/**
 * Section : Contact
 */
export default function Contact() {
  const { t } = useLanguage();
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-gradient-to-b from-slate-900 via-slate-950 to-cyan-950 text-white"
    >
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">
          {t.contact.title}
        </h2>
        <p className="text-lg md:text-xl mb-8">{t.contact.subtitle}</p>
        <a
          href="mailto:katangalachristian@yahoo.com"
          className="inline-block px-8 py-3 bg-gradient-to-b from-slate-300 text-white via-cyan-600 to-cyan-900 rounded-full hover:to-cyan-500 transition"
        >
          {t.contact.cta}
        </a>
      </div>
    </section>
  );
}
