import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export const PixelBuyCard = () => {
  const { toast } = useToast();

  const handleBuy = () => {
    toast({
      title: "🐧 Coming Soon!",
      description: "Pudgy Pixel token launch is approaching!",
      duration: 3000,
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <motion.div
        className="pixel-panel bg-pixel-dark p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-pixel text-2xl text-primary mb-6 text-center pixel-shadow">
          Join The Pudgy Revolution
        </h2>
        
        <div className="space-y-6">
          <div className="bg-pixel-gray/10 p-4 rounded-lg">
            <p className="font-pixel text-sm text-pixel-white mb-2">Current Price</p>
            <p className="font-pixel text-2xl text-primary">$0.0001</p>
          </div>
          
          <div className="bg-pixel-gray/10 p-4 rounded-lg">
            <p className="font-pixel text-sm text-pixel-white mb-2">24h Volume</p>
            <p className="font-pixel text-2xl text-secondary">$150,000</p>
          </div>
          
          <button
            onClick={handleBuy}
            className="pixel-button w-full bg-primary text-pixel-white font-pixel text-lg"
          >
            Buy Now 🚀
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="font-pixel text-xs text-pixel-gray">
            Available on Raydium Soon
          </p>
        </div>
      </motion.div>
    </div>
  );
};