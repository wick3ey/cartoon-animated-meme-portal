import { motion } from "framer-motion";

interface FloatingCharacterProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export const FloatingCharacter = ({ src, alt, className = "", delay = 0 }: FloatingCharacterProps) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`floating-character ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
  );
};