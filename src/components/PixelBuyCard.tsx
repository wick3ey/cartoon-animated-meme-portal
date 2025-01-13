import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export const PixelBuyCard = () => {
  const { toast } = useToast();

  const handleBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`https://pump.fun/coin/H8XPbZdXakPSSzAcmNvo8vHoZ1ji59F21UHwga4rpump`, '_blank');
  };

  return (
    <div className="max-w-md mx-auto">
      <motion.div
        className="mc-panel bg-gradient-to-br from-white to-mcchicken-cream p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="font-pixel text-2xl text-mcchicken-red mb-6 text-center mc-shadow mc-glow">
          Join The McChicken Revolution
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white/80 p-4 rounded-lg border-2 border-mcchicken-red/20">
            <p className="font-pixel text-sm text-mcchicken-red/80 mb-2">Current Price</p>
            <p className="font-pixel text-2xl text-mcchicken-brown mc-glow">$0.0001</p>
          </div>
          
          <div className="bg-white/80 p-4 rounded-lg border-2 border-mcchicken-yellow/20">
            <p className="font-pixel text-sm text-mcchicken-orange/80 mb-2">24h Volume</p>
            <p className="font-pixel text-2xl text-mcchicken-brown mc-glow">$150,000</p>
          </div>
          
          <motion.button
            onClick={handleBuy}
            className="mc-button w-full bg-gradient-to-r from-mcchicken-red to-mcchicken-yellow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy $BAWK 🍗
          </motion.button>
        </div>

        <div className="mt-6 text-center">
          <p className="font-pixel text-xs text-mcchicken-brown/70">
            Contract: H8XPbZdXakPSSzAcmNvo8vHoZ1ji59F21UHwga4rpump
          </p>
        </div>
      </motion.div>
    </div>
  );
};