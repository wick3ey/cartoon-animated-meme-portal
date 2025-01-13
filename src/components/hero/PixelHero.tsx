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
    <div className="relative min-h-[100svh] flex flex-col items-center justify-start pt-16 px-4 sm:px-6 md:px-8 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8"
      >
        <motion.h1 
          className="font-pixel text-xl sm:text-3xl md:text-5xl lg:text-7xl text-primary pixel-shadow glow-text leading-relaxed sm:leading-normal"
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

        <p className="font-pixel text-xs sm:text-sm md:text-xl lg:text-2xl text-white glow-text px-2 sm:px-4 max-w-2xl mx-auto">
          The Most Epic Token on Solana! 🍟
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto w-full px-4 sm:px-6">
          <div className="pixel-panel p-4 sm:p-5 md:p-6">
            <h3 className="font-pixel text-xs sm:text-sm text-primary mb-2">Liquidity</h3>
            <p className="font-pixel text-xs sm:text-sm text-green-500">LOCKED</p>
          </div>
          <div 
            className="pixel-panel p-4 sm:p-5 md:p-6 cursor-pointer hover:scale-[1.02] transition-transform" 
            onClick={handleCopyAddress}
          >
            <h3 className="font-pixel text-xs sm:text-sm text-primary mb-2">Contract</h3>
            <p className="font-pixel text-xs sm:text-sm text-green-500 truncate hover:text-green-400 transition-colors">
              {truncatedAddress}
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 mx-auto relative"
        >
          <img
            src="/lovable-uploads/cad35cd2-c8fc-4390-b961-d4ec8bcac9e3.png"
            alt="McChicken Mascot"
            className="w-full h-full object-contain animate-float drop-shadow-2xl"
          />
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full max-w-xl mx-auto px-4">
          <a 
            href="https://dexscreener.com/solana/h8xpbzdxakpsszacmnvo8vhoz1ji59f21uhwga4rpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <ComicButton 
              className="pixel-button text-sm sm:text-base bg-gradient-to-r from-primary to-accent pulse-glow w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-8"
            >
              Buy Now! 💎
            </ComicButton>
          </a>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a 
              href="https://t.me/bawkmcchicken" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <ComicButton 
                className="pixel-button text-sm sm:text-base bg-gradient-to-r from-secondary to-accent w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-8"
              >
                Join Telegram 🍗
              </ComicButton>
            </a>
            <a 
              href="https://x.com/Mcchickensoll" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <ComicButton 
                className="pixel-button text-sm sm:text-base bg-gradient-to-r from-secondary to-accent w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-8"
              >
                Join Twitter 🐦
              </ComicButton>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};