import { motion } from "framer-motion";

interface FloatingCharacterProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export const FloatingCharacter = ({ src, alt, className = "", delay = 0 }: FloatingCharacterProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      whileHover={{ 
        scale: 1.2,
        rotate: [-5, 5, -5],
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.9 }}
      whileDrag={{ 
        scale: 1.3,
        zIndex: 50
      }}
    >
      <motion.div
        className="absolute -inset-2 bg-primary/20 rounded-full blur-lg"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.img
        src={src}
        alt={alt}
        className="relative w-full h-full object-contain pulse-glow"
        animate={{
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};