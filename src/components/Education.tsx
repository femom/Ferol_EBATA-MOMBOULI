import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { translations } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

export default function Education() {
  const { lang } = useLanguage();
  const t = translations.education;

  return (
    <section id="formation" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle number="05" title={t.title[lang]} />

      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
        >
          {t.degrees.map((d) => (
            <div key={d.title.fr} className="mb-5 flex gap-3">
              <GraduationCap size={18} className="mt-0.5 shrink-0 text-bordeaux" />
              <div>
                <h3 className="text-sm font-medium text-ink">{d.title[lang]}</h3>
                <p className="font-mono text-xs text-ink-soft">
                  {d.org}
                  {d.period ? ` · ${d.period}` : ""}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          {t.certifications.map((c) => (
            <div key={c} className="mb-3 flex gap-3">
              <BadgeCheck size={18} className="mt-0.5 shrink-0 text-blue" />
              <p className="text-sm text-ink-soft">{c}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
