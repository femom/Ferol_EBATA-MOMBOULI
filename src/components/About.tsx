import { motion } from "framer-motion";
import { Code2, PenLine, Users } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { translations } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = translations.about;

  const highlights = [
    { icon: Code2, label: t.highlight1[lang] },
    { icon: PenLine, label: t.highlight2[lang] },
    { icon: Users, label: t.highlight3[lang] },
  ];

  return (
    <section id="apropos" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle number="04" title={t.title[lang]} />

      <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          src="/images/about.png"
          alt="Ferol Ebata-Mombouli"
          className="mx-auto aspect-[4/5] w-full max-w-[280px] rounded-[1.5rem] border border-ink/10 object-cover"
        />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-lg leading-relaxed text-bordeaux">{t.body[lang]}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 rounded-full bg-smoke-dim px-4 py-2 text-sm text-ink-soft"
              >
                <Icon size={15} className="text-blue" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
