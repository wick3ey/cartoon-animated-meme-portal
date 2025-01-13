import { motion } from "framer-motion";
import { ComicButton } from "../ComicButton";
import { useToast } from "@/components/ui/use-toast";

export const PixelHero = () => {
  const { toast } = useToast();

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Coming Soon!",
      description: "Trading will be available soon",
      duration: 2000,
      className: "bg-primary/90 border-2 border-black text-white font-pixel",
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-8 md:pt-16 px-4">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_0),linear-gradient(rgba(139,92,246,0.05)_1px,transparent_0)] bg-[length:24px_24px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.h1 
          className="font-pixel text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary pixel-shadow glow-text mb-8"
          animate={{
            textShadow: [
              "0 0 10px rgba(139,92,246,0.5)",
              "0 0 20px rgba(139,92,246,0.7)",
              "0 0 10px rgba(139,92,246,0.5)"
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

        <p className="font-pixel text-lg sm:text-xl md:text-2xl mb-12 text-white glow-text">
          The Most Epic Token on Solana! 🎮
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="pixel-panel">
            <h3 className="font-pixel text-primary mb-2">Liquidity</h3>
            <p className="font-pixel text-green-500">LOCKED</p>
          </div>
          <div className="pixel-panel">
            <h3 className="font-pixel text-primary mb-2">Contract</h3>
            <p className="font-pixel text-green-500">REVOKED</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-96 h-96 mx-auto mb-16 relative"
        >
          <img
            src="/lovable-uploads/cad35cd2-c8fc-4390-b961-d4ec8bcac9e3.png"
            alt="McChicken Mascot"
            className="w-full h-full object-contain animate-float"
          />
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ComicButton 
            onClick={handleBuyClick}
            className="pixel-button bg-gradient-to-r from-primary to-accent pulse-glow"
          >
            Buy Now! 💎
          </ComicButton>
          <ComicButton 
            onClick={handleBuyClick}
            className="pixel-button bg-gradient-to-r from-secondary to-accent"
          >
            Join Telegram 🎮
          </ComicButton>
        </div>
      </motion.div>
    </div>
  );
};