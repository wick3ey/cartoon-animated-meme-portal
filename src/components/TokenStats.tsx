import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

interface StatProps {
  label: string;
  value: string;
  delay?: number;
  icon: string;
  color: string;
}

const Stat = ({ label, value, delay = 0, icon, color }: StatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="comic-panel relative cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white"
        style={{ backgroundColor: color }}
        animate={isHovered ? { rotate: 360 } : {}}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        className="font-handwriting text-2xl mb-2"
        style={{ color }}
      >
        {label}
      </motion.h3>
      
      <motion.p 
        className="font-comic text-4xl font-bold"
        animate={isClicked ? { 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        } : {}}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.p>

      <motion.div
        className="absolute inset-0 border-2 rounded-lg pointer-events-none"
        style={{ borderColor: color }}
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
      />
      
      {isClicked && (
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 0] }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.div>
  );
};

export const TokenStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <Stat 
        label="Total Supply" 
        value="1,000,000,000" 
        delay={0.2} 
        icon="💰" 
        color="#8B5CF6"
      />
      <Stat 
        label="Holders" 
        value="10,000+" 
        delay={0.4} 
        icon="👥" 
        color="#F97316"
      />
      <Stat 
        label="Market Cap" 
        value="$1M+" 
        delay={0.6} 
        icon="📈" 
        color="#D946EF"
      />
    </div>
  );
};