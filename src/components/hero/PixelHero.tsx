import { motion } from "framer-motion";
import { ComicButton } from "../ComicButton";
import { useToast } from "@/components/ui/use-toast";

export const PixelHero = () => {
  const { toast } = useToast();
  const contractAddress = "H8XPbZdXakPSSzAcmNvo8vHoZ1ji59F21UHwga4rpump";
  const truncatedAddress = `${contractAddress.slice(0, 4)}..${contractAddress.slice(-4)}`;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      toast({
        title: "Copied!",
        description: "Contract address copied to clipboard",
        duration: 2000,
        className: "bg-primary/90 border-2 border-black text-white font-pixel",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Could not copy the address",
        duration: 2000,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-4 md:pt-16 px-2 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-4xl mx-auto"
      >
        <motion.h1 
          className="font-pixel text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-primary pixel-shadow glow-text mb-4 md:mb-8"
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

        <p className="font-pixel text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-white glow-text">
          The Most Epic Token on Solana! 🍟
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 max-w-lg mx-auto px-4">
          <div className="pixel-panel">
            <h3 className="font-pixel text-sm md:text-base text-primary mb-2">Liquidity</h3>
            <p className="font-pixel text-sm md:text-base text-green-500">LOCKED</p>
          </div>
          <div className="pixel-panel cursor-pointer" onClick={handleCopyAddress}>
            <h3 className="font-pixel text-sm md:text-base text-primary mb-2">Contract</h3>
            <p className="font-pixel text-sm md:text-base text-green-500 truncate hover:text-green-400 transition-colors">
              {truncatedAddress}
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mb-8 md:mb-16 relative"
        >
          <img
            src="/lovable-uploads/cad35cd2-c8fc-4390-b961-d4ec8bcac9e3.png"
            alt="McChicken Mascot"
            className="w-full h-full object-contain animate-float"
          />
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
          <a 
            href="https://pump.fun/coin/H8XPbZdXakPSSzAcmNvo8vHoZ1ji59F21UHwga4rpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <ComicButton 
              className="pixel-button bg-gradient-to-r from-primary to-accent pulse-glow w-full sm:w-auto"
            >
              Buy Now! 💎
            </ComicButton>
          </a>
          <a 
            href="https://t.me/bawkmcchicken" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <ComicButton 
              className="pixel-button bg-gradient-to-r from-secondary to-accent w-full sm:w-auto"
            >
              Join Telegram 🍗
            </ComicButton>
          </a>
        </div>
      </motion.div>
    </div>
  );
};