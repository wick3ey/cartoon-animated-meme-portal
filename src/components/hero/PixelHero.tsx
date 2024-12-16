import { motion } from "framer-motion";
import { ComicButton } from "../ComicButton";
import { useToast } from "@/components/ui/use-toast";

export const PixelHero = () => {
  const { toast } = useToast();

  const handleBuyClick = () => {
    toast({
      title: "🎮 Coming Soon!",
      description: "Token purchase will be available soon!",
      duration: 3000,
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Pixel Art Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.2)_1px,transparent_0),linear-gradient(rgba(0,0,0,.2)_1px,transparent_0)] bg-[length:24px_24px]" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <motion.img
              src="/lovable-uploads/c95895da-6bed-46c8-9fd9-bf3705e70d54.png"
              alt="Pudgy Pixel Mascot"
              className="w-32 h-32 md:w-48 md:h-48"
              animate={{ 
                y: [0, -10, 0],
                rotate: [-5, 5, -5]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <h1 className="font-pixel text-6xl md:text-8xl text-primary mb-6 pixel-shadow">
            Pudgy Pixel
          </h1>

          <p className="font-pixel text-xl md:text-2xl mb-8 text-gray-700">
            The Most Epic Pixel Token on Solana! 🎮
          </p>

          <div className="flex gap-4 justify-center">
            <ComicButton 
              onClick={handleBuyClick}
              className="pixel-button bg-primary"
            >
              Buy Now! 💎
            </ComicButton>
            <ComicButton 
              onClick={() => window.open("https://discord.gg", "_blank")}
              className="pixel-button bg-secondary"
            >
              Join Discord 🎮
            </ComicButton>
          </div>
        </motion.div>
      </div>

      {/* Floating Pixel Characters */}
      <motion.img
        src="/lovable-uploads/81218589-3608-4a7c-9a1b-0e39d51cd9de.png"
        alt="Floating Penguin"
        className="absolute top-1/4 right-[10%] w-20 h-20 md:w-32 md:h-32"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};