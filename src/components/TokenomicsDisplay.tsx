import { motion } from "framer-motion";
import { useState } from "react";

interface TokenomicsSectionProps {
  label: string;
  percentage: string;
  color: string;
  description: string;
  icon: string;
}

const TokenomicsSection = ({ label, percentage, color, description, icon }: TokenomicsSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="pixel-panel relative cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-10 p-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{icon}</span>
          <h3 className="font-pixel text-lg glow-text" style={{ color }}>
            {label}
          </h3>
        </div>
        
        <p className="font-pixel text-3xl text-white mb-2">{percentage}</p>
        
        <motion.p
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
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
        animate={{ opacity: isHovered ? 0.4 : 0.2 }}
      />
    </motion.div>
  );
};

export const TokenomicsDisplay = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="font-pixel text-2xl text-center text-primary mb-8 glow-text">
        Tokenomics Distribution
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <TokenomicsSection
          label="Community"
          percentage="40%"
          color="#8B5CF6"
          description="Reserved for community rewards and initiatives"
          icon="👥"
        />
        <TokenomicsSection
          label="Liquidity"
          percentage="30%"
          color="#F97316"
          description="Locked for price stability"
          icon="💧"
        />
        <TokenomicsSection
          label="Development"
          percentage="20%"
          color="#D946EF"
          description="Future development and improvements"
          icon="⚙️"
        />
        <TokenomicsSection
          label="Marketing"
          percentage="10%"
          color="#06B6D4"
          description="Marketing and partnerships"
          icon="📢"
        />
      </div>
    </div>
  );
};