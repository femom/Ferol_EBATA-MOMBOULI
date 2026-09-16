import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Lang } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// Détecte la langue du navigateur au premier chargement, sinon fallback FR
function detectInitialLang(): Lang {
  if (typeof navigator === "undefined") return "fr";
  return navigator.language.toLowerCase().startsWith("en") ? "en" : "fr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectInitialLang());

  // Garde <html lang="..."> synchronisé : important pour les lecteurs d'écran et le SEO
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function toggleLang() {
    setLang((current) => (current === "fr" ? "en" : "fr"));
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook pratique pour lire la langue courante ailleurs dans l'app
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage doit être utilisé dans un LanguageProvider");
  return ctx;
}
