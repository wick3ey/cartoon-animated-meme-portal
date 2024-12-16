import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export const PixelBuyCard = () => {
  const { toast } = useToast();
  const contractAddress = "B5jVmWqF26DYCznsjWRKwiiqEN675pZsrAMG1jnJpump";

  const handleBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Coming Soon!",
      description: "Buy function will be available soon",
      className: "bg-secondary/90 border-2 border-black text-black font-pixel",
      duration: 3000,
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <motion.div
        className="pixel-panel bg-gradient-to-br from-[#2A3040] to-[#1A1F2C] p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="font-pixel text-2xl text-primary mb-6 text-center pixel-shadow glow-text">
          Join The Pudgy Revolution
        </h2>
        
        <div className="space-y-6">
          <div className="bg-[#2A3040]/80 p-4 rounded-lg border-2 border-primary/20">
            <p className="font-pixel text-sm text-primary/80 mb-2">Current Price</p>
            <p className="font-pixel text-2xl text-white glow-text">$0.0001</p>
          </div>
          
          <div className="bg-[#2A3040]/80 p-4 rounded-lg border-2 border-secondary/20">
            <p className="font-pixel text-sm text-secondary/80 mb-2">24h Volume</p>
            <p className="font-pixel text-2xl text-white glow-text">$150,000</p>
          </div>
          
          <motion.button
            onClick={handleBuy}
            className="pixel-button w-full bg-gradient-to-r from-primary to-secondary text-white font-pixel text-lg pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy Now 🚀
          </motion.button>
        </div>

        <div className="mt-6 text-center">
          <p className="font-pixel text-xs text-primary/60">
            Available on Raydium Soon
          </p>
        </div>
      </motion.div>
    </div>
  );
};
