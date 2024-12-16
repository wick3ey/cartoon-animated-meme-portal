import { motion } from "framer-motion";
import { useState } from "react";

interface PixelStatProps {
  label: string;
  value: string;
  icon: string;
  color: string;
  description: string;
}

const PixelStat = ({ label, value, icon, color, description }: PixelStatProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="pixel-panel cursor-pointer relative overflow-hidden group min-h-[200px] flex flex-col justify-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative z-10">
        <motion.div
          className="absolute -top-2 -right-2 w-10 h-10 rounded-lg flex items-center justify-center text-xl"
          style={{ backgroundColor: color }}
          animate={isHovered ? { rotate: 360 } : {}}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          className="font-pixel text-lg mb-4 glow-text"
          style={{ color }}
        >
          {label}
        </motion.h3>
        
        <motion.p 
          className="font-pixel text-2xl md:text-3xl break-words mb-4 text-white"
          animate={isHovered ? { 
            scale: [1, 1.1, 1],
            transition: { duration: 0.3 }
          } : {}}
        >
          {value}
        </motion.p>

        <motion.p
          className="text-sm text-gray-400 font-pixel"
          initial={{ opacity: 0, y: 20 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      </div>

      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(135deg, ${color}40 0%, transparent 100%)`,
          borderRadius: '8px'
        }}
        animate={isHovered ? { opacity: 0.4 } : { opacity: 0.2 }}
      />
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
        description="Total token supply with anti-whale mechanics"
      />
      <PixelStat 
        label="Holders" 
        value="Loading.." 
        icon="👾" 
        color="#F97316"
        description="Growing community of diamond hands"
      />
      <PixelStat 
        label="Market Cap" 
        value="Loading.." 
        icon="🕹️" 
        color="#D946EF"
        description="Real-time market capitalization"
      />
    </div>
  );
};