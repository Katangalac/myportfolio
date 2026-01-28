"use client";

import { useLanguage } from "@/app/hooks/useLanguage";
import { Languages } from "lucide-react";
import { useState } from "react";

/**
 * Bouton de changement de langue
 */
export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setLanguage(language === "en" ? "fr" : "en")}
        className="flex items-center gap-2 px-2 py-0.5 md:px-3 md:py-1 text-cyan-500 bg-transparent hover:bg-slate-800 hover:text-cyan-600 rounded-lg border border-gray-500 transition shadow-sm cursor-pointer"
        aria-label={t.common.language}
      >
        <span className="text-sm md:text-base font-medium uppercase">
          {language}
        </span>
      </button>
    </div>
  );
}

// Version avec dropdown
export function LanguageSwitcherDropdown() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 rounded-lg border border-gray-300 transition shadow-sm"
      >
        <Languages className="size-4" />
        <span className="text-2xl">
          {languages.find((l) => l.code === language)?.flag}
        </span>
        <span className="font-medium">
          {languages.find((l) => l.code === language)?.name}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Overlay pour fermer le dropdown */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as "en" | "fr");
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition first:rounded-t-lg last:rounded-b-lg ${
                  language === lang.code ? "bg-blue-50 text-blue-600" : ""
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {language === lang.code && (
                  <span className="ml-auto text-blue-600">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
