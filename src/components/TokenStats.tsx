import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

interface StatProps {
  label: string;
  value: string;
  delay?: number;
  icon: string;
}

const Stat = ({ label, value, delay = 0, icon }: StatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="comic-panel relative cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white"
        animate={isHovered ? { rotate: 360 } : {}}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      
      <h3 className="font-handwriting text-2xl text-primary mb-2">{label}</h3>
      <motion.p 
        className="font-comic text-4xl font-bold text-secondary"
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
      >
        {value}
      </motion.p>

      <motion.div
        className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none"
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

export const TokenStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <Stat label="Total Supply" value="1,000,000,000" delay={0.2} icon="💰" />
      <Stat label="Holders" value="10,000+" delay={0.4} icon="👥" />
      <Stat label="Market Cap" value="$1M+" delay={0.6} icon="📈" />
    </div>
  );
};