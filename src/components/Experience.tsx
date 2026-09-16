import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { translations } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

export default function Experience() {
  const { lang } = useLanguage();
  const t = translations.experience;

  return (
    <section id="parcours" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle number="03" title={t.title[lang]} />

      <div className="relative ml-3 border-l border-ink/15 pl-8">
        {t.items.map((role, i) => (
          <motion.div
            key={role.role.fr}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="relative mb-12 last:mb-0"
          >
            <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-bordeaux bg-smoke" />
            <h3 className="font-serif text-lg font-medium text-ink">{role.role[lang]}</h3>
            <p className="mb-3 font-mono text-xs text-blue">
              {role.org[lang]}
              {role.period[lang] ? ` · ${role.period[lang]}` : ""}
            </p>
            <ul className="space-y-1.5">
              {role.bullets.map((b) => (
                <li key={b.fr} className="flex gap-2 text-sm text-ink-soft">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-soft/60" />
                  {b[lang]}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
