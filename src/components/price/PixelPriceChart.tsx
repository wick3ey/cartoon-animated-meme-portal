import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const PixelPriceChart = () => {
  const [priceData, setPriceData] = useState([
    { time: '1d', price: 0.5 },
    { time: '2d', price: 0.7 },
    { time: '3d', price: 0.6 },
    { time: '4d', price: 0.8 },
    { time: '5d', price: 1.2 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPriceData(prev => {
        const newPrice = prev[prev.length - 1].price * (0.9 + Math.random() * 0.2);
        return [...prev.slice(1), { time: '5d', price: Number(newPrice.toFixed(2)) }];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pixel-panel h-[400px] p-6"
    >
      <h3 className="font-pixel text-2xl mb-4 text-primary">Live Price Chart</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={priceData}>
          <XAxis 
            dataKey="time" 
            stroke="#8B5CF6"
            tick={{ fontFamily: 'Press Start 2P' }}
          />
          <YAxis 
            stroke="#8B5CF6"
            tick={{ fontFamily: 'Press Start 2P' }}
          />
          <Tooltip 
            contentStyle={{ 
              background: '#1F2937',
              border: '2px solid #8B5CF6',
              fontFamily: 'Press Start 2P'
            }}
          />
          <Line 
            type="stepAfter" 
            dataKey="price" 
            stroke="#8B5CF6" 
            strokeWidth={3}
            dot={{ fill: '#D946EF', r: 6 }}
            activeDot={{ r: 8, fill: '#F97316' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};