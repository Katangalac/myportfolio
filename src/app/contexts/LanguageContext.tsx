"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { translations, Language, TranslationKeys } from "../data/translations";

/**
 * Structure des informations stockées dans le contexte pour la langue
 */
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
};

/**
 * Contexte de la langue
 */
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

/**
 * Provider de la langue
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Langue par défaut : anglais
  const [language, setLanguageState] = useState<Language>("en");

  // Charger la langue sauvegardée au démarrage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Sauvegarder la langue quand elle change
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    // Optionnel : mettre à jour l'attribut lang du HTML
    document.documentElement.lang = lang;
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
