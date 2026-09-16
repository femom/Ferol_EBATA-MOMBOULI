import { translations } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-xs text-ink-soft sm:flex-row">
        <span>© {year} Ebata-Mombouli Ferol — {t.rights[lang]}</span>
        <span className="font-mono">Brazzaville, Congo</span>
      </div>
    </footer>
  );
}
