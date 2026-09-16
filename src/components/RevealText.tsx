import { motion, type Variants } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "p" | "span";
}

// Variants du conteneur : décale l'apparition de chaque mot enfant
const container: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
};

// Variants d'un mot : léger fondu + remontée
const word: Variants = {
  hidden: { opacity: 0, y: "0.6em" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Découpe un texte en mots et les fait apparaître un par un au montage.
 * Utilisé pour le titre et l'accroche du Hero (effet éditorial, sobre).
 */
export default function RevealText({ text, className, delay = 0, as = "span" }: RevealTextProps) {
  const words = text.split(" ");
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block will-change-transform">
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
