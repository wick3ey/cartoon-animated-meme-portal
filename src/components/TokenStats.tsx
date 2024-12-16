import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StatProps {
  label: string;
  value: string;
  delay?: number;
}

const Stat = ({ label, value, delay = 0 }: StatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="comic-panel"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <h3 className="font-handwriting text-2xl text-primary mb-2">{label}</h3>
      <p className="font-comic text-4xl font-bold text-secondary">{value}</p>
    </motion.div>
  );
};

export const TokenStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <Stat label="Total Supply" value="1,000,000,000" delay={0.2} />
      <Stat label="Holders" value="10,000+" delay={0.4} />
      <Stat label="Market Cap" value="$1M+" delay={0.6} />
    </div>
  );
};