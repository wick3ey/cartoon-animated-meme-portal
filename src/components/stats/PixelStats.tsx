import { motion } from "framer-motion";
import { useState } from "react";

interface PixelStatProps {
  label: string;
  value: string;
  icon: string;
  color: string;
}

const PixelStat = ({ label, value, icon, color }: PixelStatProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="pixel-panel cursor-pointer relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute -top-2 -right-2 w-8 h-8 rounded-lg flex items-center justify-center text-white"
        style={{ backgroundColor: color }}
        animate={isHovered ? { rotate: 360 } : {}}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        className="font-pixel text-2xl mb-2"
        style={{ color }}
      >
        {label}
      </motion.h3>
      
      <motion.p 
        className="font-pixel text-4xl"
        animate={isHovered ? { 
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0]
        } : {}}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.p>

      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-white/10"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 0] }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.div>
  );
};

export const PixelStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <PixelStat 
        label="Supply" 
        value="1B" 
        icon="🎮" 
        color="#8B5CF6"
      />
      <PixelStat 
        label="Holders" 
        value="10K+" 
        icon="👾" 
        color="#F97316"
      />
      <PixelStat 
        label="Market Cap" 
        value="$1M+" 
        icon="🕹️" 
        color="#D946EF"
      />
    </div>
  );
};