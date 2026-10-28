import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiMysql,
  SiHtml5,
  SiCss,
  SiTypescript,
  SiVite,
  SiJsonwebtokens,
  SiPwa,
} from "react-icons/si";
import { Code2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { translations } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

const skills = [
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiReact, label: "React" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express" },
  { icon: Code2, label: "API REST" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiVite, label: "Vite" },
  { icon: SiJsonwebtokens, label: "JWT" },
  { icon: SiHtml5, label: "HTML5" },
  { icon: SiCss, label: "CSS3" },
  { icon: SiMysql, label: "SQL" },
  { icon: SiPwa, label: "PWA" },
  { icon: SiGit, label: "Git" },
  { icon: SiGithub, label: "GitHub" },
];

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations.skills;

  return (
    <section id="competences" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle number="02" title={t.title[lang]} />
      <p className="-mt-4 mb-10 max-w-lg text-ink-soft">{t.subtitle[lang]}</p>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
        {skills.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="flex flex-col items-center gap-2 rounded-xl border border-ink/10 bg-surface/70 py-5 transition-colors hover:border-blue/40"
          >
            <Icon size={26} className="text-ink-soft" />
            <span className="text-xs text-ink-soft">{label}</span>
          </motion.div>
        ))}
      </div>

      {/* Preuve d'activité réelle plutôt qu'une simple liste de logos */}
      <motion.a
        href="https://github.com/femom"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="mt-8 block overflow-hidden rounded-xl border border-ink/10 bg-surface/70 p-4 transition-colors hover:border-blue/40"
      >
        <img
          src="https://ghchart.rshah.org/7a1f3f/femom"
          alt="Graphique des contributions GitHub de Ferol (femom)"
          className="w-full"
          loading="lazy"
        />
      </motion.a>
    </section>
  );
}
