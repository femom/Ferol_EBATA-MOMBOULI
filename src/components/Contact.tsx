import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, Github, Linkedin, CheckCircle2, AlertCircle } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { translations } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

// URL FORMSPREE
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzebkqrb";
type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations.contact;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle number="07" title={t.title[lang]} />

      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        {/* Coordonnées directes */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-6 max-w-sm text-ink-soft">{t.subtitle[lang]}</p>
          <div className="space-y-3">
            <a href="mailto:fmombouli532@gmail.com" className="flex items-center gap-3 text-sm text-ink-soft hover:text-bordeaux">
              <Mail size={16} className="text-blue" /> fmombouli532@gmail.com
            </a>
            <a href="tel:+242064646965" className="flex items-center gap-3 text-sm text-ink-soft hover:text-bordeaux">
              <Phone size={16} className="text-blue" /> +242 06 46 46 965
            </a>
            <a href="https://github.com/femom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-ink-soft hover:text-bordeaux">
              <Github size={16} className="text-blue" /> github.com/femom
            </a>
            <a href="https://linkedin.com/in/ferol-jeansmy-ebata-mombouli" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-ink-soft hover:text-bordeaux">
              <Linkedin size={16} className="text-blue" /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Formulaire */}
        <motion.form
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-xs font-mono text-ink-soft">
              {t.name[lang]}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-ink/15 bg-surface/70 px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-blue"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-mono text-ink-soft">
              {t.email[lang]}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-ink/15 bg-surface/70 px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-blue"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-xs font-mono text-ink-soft">
              {t.message[lang]}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full resize-none rounded-lg border border-ink/15 bg-surface/70 px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-blue"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center gap-2 rounded-full bg-bordeaux px-5 py-3 text-sm font-medium text-smoke transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            <Send size={15} />
            {status === "sending" ? t.sending[lang] : t.send[lang]}
          </button>

          {status === "success" && (
            <p className="flex items-center gap-2 text-sm text-blue">
              <CheckCircle2 size={16} /> {t.success[lang]}
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center gap-2 text-sm text-bordeaux">
              <AlertCircle size={16} /> {t.error[lang]}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
