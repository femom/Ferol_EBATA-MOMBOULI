import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Fine barre horizontale sous la nav qui suit la progression de lecture.
 * Dégradé bordeaux -> bleu, animation adoucie par un spring (pas de saccades).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-bordeaux to-blue"
    />
  );
}
