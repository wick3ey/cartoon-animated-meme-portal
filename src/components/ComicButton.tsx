import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ComicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ComicButton = ({ children, className = "", ...props }: ComicButtonProps) => {
  return (
    <motion.button
      className={`comic-button ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};