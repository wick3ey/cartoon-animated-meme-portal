import { ButtonHTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type ComicButtonProps = HTMLMotionProps<"button"> & {
  children: React.ReactNode;
  className?: string;
};

export const ComicButton = ({ children, className = "", ...props }: ComicButtonProps) => {
  return (
    <motion.button
      className={`comic-button ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};