"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, UserSearch, Phone, Folder } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/app/hooks/useLanguage";

/**
 * Header
 */
export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const { t } = useLanguage();

  // Metadata des liens du navbar
  const navItems = [
    {
      name: `${t.nav.home}`,
      href: "#hero",
      icon: <Home className="size-4 md:size-5" />,
    },
    {
      name: `${t.nav.about}`,
      href: "#about",
      icon: <UserSearch className="size-4 md:size-5" />,
    },
    {
      name: `${t.nav.projects}`,
      href: "#projects",
      icon: <Folder className="size-4 md:size-5" />,
    },
    {
      name: `${t.nav.contact}`,
      href: "#contact",
      icon: <Phone className="size-4 md:size-5" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Détecter la section active
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <LanguageSwitcher />
          <ul className="flex gap-4 md:gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`relative text-sm md:text-base font-medium transition-colors ${
                    activeSection === item.href.replace("#", "")
                      ? "text-cyan-500"
                      : "text-gray-500 hover:text-cyan-500"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <span>{item.icon}</span>{" "}
                    <span className="hidden md:flex">{item.name}</span>
                  </span>
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-500"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
