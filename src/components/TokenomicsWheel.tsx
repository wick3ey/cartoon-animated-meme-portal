import { motion } from "framer-motion";
import { useState } from "react";

interface TokenomicsItem {
  label: string;
  percentage: number;
  color: string;
}

const tokenomicsData: TokenomicsItem[] = [
  { label: "Community Rewards", percentage: 40, color: "#8B5CF6" },
  { label: "Liquidity Pool", percentage: 30, color: "#F97316" },
  { label: "Development", percentage: 20, color: "#D946EF" },
  { label: "Marketing", percentage: 10, color: "#0EA5E9" },
];

export const TokenomicsWheel = () => {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  let cumulativeAngle = 0;

  return (
    <div className="relative w-80 h-80 mx-auto">
      <svg viewBox="0 0 100 100" className="transform -rotate-90">
        {tokenomicsData.map((item, index) => {
          const angle = (item.percentage / 100) * 360;
          const startAngle = cumulativeAngle;
          cumulativeAngle += angle;
          
          const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
          const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
          const x2 = 50 + 40 * Math.cos(((startAngle + angle) * Math.PI) / 180);
          const y2 = 50 + 40 * Math.sin(((startAngle + angle) * Math.PI) / 180);
          
          const largeArcFlag = angle > 180 ? 1 : 0;

          return (
            <motion.path
              key={index}
              d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
              fill={item.color}
              initial={{ scale: 1, opacity: 0.8 }}
              whileHover={{ scale: 1.05, opacity: 1 }}
              onHoverStart={() => setHoveredSegment(index)}
              onHoverEnd={() => setHoveredSegment(null)}
              className="cursor-pointer transition-all duration-300"
            />
          );
        })}
      </svg>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          {hoveredSegment !== null ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-handwriting"
            >
              <p className="text-2xl font-bold">{tokenomicsData[hoveredSegment].label}</p>
              <p className="text-xl">{tokenomicsData[hoveredSegment].percentage}%</p>
            </motion.div>
          ) : (
            <p className="text-xl font-handwriting">Hover segments<br/>for details</p>
          )}
        </div>
      </div>
    </div>
  );
};