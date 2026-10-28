import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { translations } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations.projects;

  return (
    <section id="projets" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle number="01" title={t.title[lang]} />

      <div className="grid gap-6 sm:grid-cols-2">
        {t.items.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group overflow-hidden rounded-2xl border border-ink/10 bg-surface/70 transition-colors hover:border-bordeaux/40"
          >
            <div className="aspect-[16/9] w-full border-b border-ink/10 bg-smoke">
              <img
                src={project.image}
                alt={`${t.preview[lang]} ${project.name}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col justify-between p-6">
              <div>
                <h3 className="mb-2 font-serif text-lg font-medium text-ink">{project.name}</h3>
                <p className="text-sm text-ink-soft">{project.desc[lang]}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-smoke-dim px-3 py-1 font-mono text-[11px] text-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.link || project.github) && (
                <div className="mt-5 flex items-center gap-4 border-t border-ink/10 pt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-bordeaux"
                    >
                      {t.viewProject[lang]}
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-bordeaux"
                    >
                      <Github size={14} />
                      {t.viewGithub[lang]}
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Preuve d'activité : renvoie vers le profil complet plutôt que d'inventer des liens de repo */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        href="https://github.com/femom"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex w-fit items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm text-ink-soft transition-colors hover:border-bordeaux hover:text-bordeaux"
      >
        <Github size={15} />
        {t.allProjects[lang]}
      </motion.a>
    </section>
  );
}
