import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { translations } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

export default function Distinctions() {
  const { lang } = useLanguage();
  const t = translations.distinctions;

  return (
    <section id="distinctions" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle number="06" title={t.title[lang]} />

      <div className="space-y-4">
        {t.items.map((item, i) => (
          <motion.div
            key={item.fr}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-3 border-t border-ink/10 pt-4"
          >
            <Sparkles size={16} className="mt-0.5 shrink-0 text-bordeaux" />
            <p className="text-sm text-ink-soft">{item[lang]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
