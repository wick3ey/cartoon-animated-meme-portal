import { motion } from "framer-motion";
import { ComicButton } from "../ComicButton";
import { useToast } from "@/components/ui/use-toast";

export const PixelHero = () => {
  const { toast } = useToast();

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`https://pump.fun/coin/H8XPbZdXakPSSzAcmNvo8vHoZ1ji59F21UHwga4rpump`, '_blank');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-8 md:pt-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.h1 
          className="font-pixel text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-mcchicken-red mc-shadow mc-glow mb-8"
          animate={{
            textShadow: [
              "0 0 10px rgba(218,41,28,0.5)",
              "0 0 20px rgba(218,41,28,0.7)",
              "0 0 10px rgba(218,41,28,0.5)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          McChicken
        </motion.h1>

        <p className="font-pixel text-lg sm:text-xl md:text-2xl mb-12 text-mcchicken-brown mc-glow">
          The Most Epic Token on Solana! 🐔
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="mc-panel bg-gradient-to-br from-mcchicken-cream to-white">
            <h3 className="font-pixel text-mcchicken-red mb-2">Liquidity</h3>
            <p className="font-pixel text-mcchicken-orange">LOCKED</p>
          </div>
          <div className="mc-panel bg-gradient-to-br from-mcchicken-cream to-white">
            <h3 className="font-pixel text-mcchicken-red mb-2">Contract</h3>
            <p className="font-pixel text-mcchicken-orange">REVOKED</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ComicButton 
            onClick={handleBuyClick}
            className="mc-button bg-gradient-to-r from-mcchicken-red to-mcchicken-orange"
          >
            Buy Now! 🍗
          </ComicButton>
          <ComicButton 
            onClick={() => window.open('https://t.me/bawkmcchicken', '_blank')}
            className="mc-button bg-gradient-to-r from-mcchicken-yellow to-mcchicken-orange"
          >
            Join Telegram 🐓
          </ComicButton>
        </div>
      </motion.div>
    </div>
  );
};