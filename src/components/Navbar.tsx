import { useState } from "react";
import { Menu, X, Download, Languages, Sun, Moon } from "lucide-react";
import { translations } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";

const links = [
  { key: "projects", href: "#projets" },
  { key: "skills", href: "#competences" },
  { key: "experience", href: "#parcours" },
  { key: "about", href: "#apropos" },
  { key: "contact", href: "#contact" },
] as const;

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const t = translations.nav;

  return (
    <header className="glass-nav fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#accueil" className="font-serif text-lg font-semibold text-ink">
          F<span className="text-bordeaux">.</span>EM
        </a>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-bordeaux"
            >
              {t[link.key][lang]}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
            className="flex items-center justify-center rounded-full border border-ink/15 p-2 text-ink-soft transition-colors hover:border-blue hover:text-blue"
          >
            {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
          </button>
          <button
            onClick={toggleLang}
            aria-label="Changer de langue"
            className="flex items-center gap-1 rounded-full border border-ink/15 px-3 py-1.5 text-xs font-mono text-ink-soft transition-colors hover:border-blue hover:text-blue"
          >
            <Languages size={14} />
            {lang.toUpperCase()}
          </button>
          <a
            href="/cv/CV_EBATA-MOMBOULI_Ferol.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-bordeaux px-4 py-2 text-sm font-medium text-smoke transition-transform hover:scale-[1.03]"
          >
            <Download size={15} />
            {t.cv[lang]}
          </a>
        </nav>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <nav className="glass-nav flex flex-col gap-1 border-t border-ink/10 px-6 pb-5 pt-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-ink-soft"
            >
              {t[link.key][lang]}
            </a>
          ))}
          <div className="mt-1 flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
              className="flex items-center gap-1 rounded-full border border-ink/15 px-3 py-1.5 text-xs text-ink-soft"
            >
              {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
              {theme === "light" ? "Sombre" : "Clair"}
            </button>
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 rounded-full border border-ink/15 px-3 py-1.5 text-xs font-mono text-ink-soft"
            >
              <Languages size={14} />
              {lang.toUpperCase()}
            </button>
          </div>
          <a
            href="/cv/CV_EBATA-MOMBOULI_Ferol.pdf"
            download
            className="mt-2 flex w-fit items-center gap-2 rounded-full bg-bordeaux px-4 py-2 text-sm font-medium text-smoke"
          >
            <Download size={15} />
            {t.cv[lang]}
          </a>
        </nav>
      )}
    </header>
  );
}
