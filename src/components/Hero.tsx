import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { translations } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";
import RevealText from "./RevealText";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations.hero;

  // Parallaxe douce : la photo se déplace un peu moins vite que le scroll
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section id="accueil" ref={sectionRef} className="mx-auto max-w-5xl px-6 pb-20 pt-36 md:pt-44">
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        {/* Texte */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-sm text-blue"
          >
            {t.kicker[lang]}
          </motion.p>

          <h1 className="font-serif text-4xl leading-tight text-ink md:text-6xl">
            <RevealText as="span" text={t.title1[lang]} />
            <br />
            <RevealText as="span" text={t.title2[lang]} delay={0.25} className="italic text-bordeaux" />
          </h1>

          <RevealText
            as="p"
            text={t.tagline[lang]}
            delay={0.55}
            className="mt-6 block max-w-lg text-lg text-ink-soft"
          />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projets"
              className="flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-smoke transition-all hover:scale-[1.03] hover:shadow-lg"
            >
              {t.ctaProjects[lang]}
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-bordeaux hover:text-bordeaux"
            >
              <Mail size={16} />
              {t.ctaContact[lang]}
            </a>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            href="/cv/CV_EBATA-MOMBOULI_Ferol.pdf"
            download
            className="mt-6 flex w-fit items-center gap-2 text-sm text-ink-soft underline decoration-blue-soft decoration-2 underline-offset-4 transition-colors hover:text-blue"
          >
            <Download size={14} />
            {t.ctaCv[lang]}
          </motion.a>
        </div>

        {/* Photo avec parallaxe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ y: photoY }}
          className="relative mx-auto w-full max-w-xs"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-soft/25 via-transparent to-bordeaux/25" />
          <img
            src="/images/hero.png"
            alt="Portrait de Ferol Ebata-Mombouli"
            className="aspect-[4/5] w-full rounded-[1.75rem] border border-ink/10 object-cover shadow-[0_20px_60px_-25px_rgba(32,31,29,0.35)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
