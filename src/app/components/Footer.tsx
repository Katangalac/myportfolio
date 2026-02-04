"use client";

import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/hooks/useLanguage";

/**
 * Footer
 */
export default function Footer() {
  const { t } = useLanguage();

  //Menu de navigation du footer
  const navLinks = [
    { name: `${t.nav.home}`, href: "#hero" },
    { name: `${t.nav.about}`, href: "#about" },
    { name: `${t.nav.projects}`, href: "#projects" },
    { name: `${t.nav.contact}`, href: "#contact" },
  ];

  //Lien vers mes plateformes sociales
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/christian-kayembe-katangala-45311a391/",
      icon: Linkedin,
      color: "hover:text-sky-500",
    },
    {
      name: "GitHub",
      href: "https://github.com/katangalac",
      icon: Github,
      color: "hover:text-gray-200",
    },
    {
      name: "Email",
      href: "mailto:katangalachristian@email.com",
      icon: Mail,
      color: "hover:text-indigo-500",
    },
  ];

  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-cyan-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 mb-8">
          {/* Colonne 1 : Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t.footer.titles.navigation}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm md:text-base text-gray-400 hover:text-cyan-500 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 2 : Réseaux sociaux */}
          <div>
            <h4 className="text-white text-sm md:text-base font-semibold mb-4">
              {t.footer.titles.contact}
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-gray-400 transition ${social.color}`}
                  >
                    <Icon size={20} />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-500 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-xs md:text-sm text-center">
            © {new Date().getFullYear()} {t.footer.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
