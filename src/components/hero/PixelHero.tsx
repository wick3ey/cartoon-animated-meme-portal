import { motion } from "framer-motion";
import { ComicButton } from "../ComicButton";
import { useToast } from "@/components/ui/use-toast";
import { FloatingCharacter } from "../FloatingCharacter";

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
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_0),linear-gradient(rgba(139,92,246,0.05)_1px,transparent_0)] bg-[length:24px_24px]" />
      
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
              className="w-32 h-32 md:w-48 md:h-48 pulse-glow"
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

          <motion.h1 
            className="font-pixel text-6xl md:text-8xl text-primary mb-6 pixel-shadow glow-text"
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
            Pudgy Pixel
          </motion.h1>

          <p className="font-pixel text-xl md:text-2xl mb-8 text-white glow-text">
            The Most Epic Pixel Token on Solana! 🎮
          </p>

          <div className="flex gap-4 justify-center">
            <ComicButton 
              onClick={handleBuyClick}
              className="pixel-button bg-gradient-to-r from-primary to-accent pulse-glow"
            >
              Buy Now! 💎
            </ComicButton>
            <ComicButton 
              onClick={() => window.open("https://discord.gg", "_blank")}
              className="pixel-button bg-gradient-to-r from-secondary to-accent"
            >
              Join Discord 🎮
            </ComicButton>
          </div>
        </motion.div>
      </div>

      {/* Floating Pixel Characters - Strategically placed with z-index control */}
      <FloatingCharacter
        src="/lovable-uploads/81218589-3608-4a7c-9a1b-0e39d51cd9de.png"
        alt="Floating Penguin"
        className="absolute top-[20%] right-[20%] w-20 h-20 md:w-32 md:h-32 z-10"
        delay={0.2}
      />

      <FloatingCharacter
        src="/lovable-uploads/cf0d077f-2871-4ef8-9433-b94ef305665a.png"
        alt="Floating Penguin 2"
        className="absolute bottom-[25%] left-[20%] w-20 h-20 md:w-32 md:h-32 z-10"
        delay={0.4}
      />

      <FloatingCharacter
        src="/lovable-uploads/e109ba2f-0796-4ec3-a94b-b4d9295126ed.png"
        alt="Floating Penguin 3"
        className="absolute top-[35%] left-[30%] w-16 h-16 md:w-24 md:h-24 z-10"
        delay={0.6}
      />
    </div>
  );
};