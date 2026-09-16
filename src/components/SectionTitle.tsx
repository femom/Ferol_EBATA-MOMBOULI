import { motion } from "framer-motion";

interface SectionTitleProps {
  number: string;
  title: string;
}

// En-tête de section réutilisé partout : numéro en bleu + titre serif + trait bordeaux
export default function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 flex items-baseline gap-3 border-b border-ink/10 pb-3"
    >
      <span className="font-mono text-sm text-blue">{number}</span>
      <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">{title}</h2>
    </motion.div>
  );
}