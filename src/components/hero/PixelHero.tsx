import { motion } from "framer-motion";
import { ComicButton } from "../ComicButton";
import { useToast } from "@/components/ui/use-toast";
import { FloatingCharacter } from "../FloatingCharacter";

export const PixelHero = () => {
  const { toast } = useToast();

  const handleBuyClick = () => {
    toast({
      title: "🎮 Coming Soon!",
      description: "Pudgy Pixel token launch is approaching!",
      duration: 3000,
      className: "bg-secondary/90 border-2 border-black text-black font-pixel",
    });
  };

  const penguins = [
    {
      src: "/lovable-uploads/4ab986d4-8cb7-4a43-ad78-49cafa274a43.png",
      alt: "Classic Penguin",
      delay: 0.2
    },
    {
      src: "/lovable-uploads/82d3897e-ae79-4449-876f-e7b718bfe814.png",
      alt: "Rich Penguin",
      delay: 0.4
    },
    {
      src: "/lovable-uploads/12243131-205c-49ca-8205-d83513b4f615.png",
      alt: "3D Penguin",
      delay: 0.6
    },
    {
      src: "/lovable-uploads/523d2d95-4159-4be9-aefd-21d0d7b8a179.png",
      alt: "Cool Penguin",
      delay: 0.8
    },
    {
      src: "/lovable-uploads/3cc8bbf6-da98-4111-87a1-092626a128b3.png",
      alt: "Red Shirt Penguin",
      delay: 1
    }
  ];

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-start px-4 pt-8 md:pt-16">
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
          Pudgy Pixel
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {penguins.map((penguin, index) => (
            <FloatingCharacter
              key={index}
              src={penguin.src}
              alt={penguin.alt}
              className="w-16 h-16 md:w-20 md:h-20"
              delay={penguin.delay}
            />
          ))}
        </div>

        <p className="font-pixel text-lg sm:text-xl md:text-2xl mb-8 text-white glow-text">
          The Most Epic Pixel Token on Solana! 🎮
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="pixel-panel">
            <p className="text-2xl mb-2">🎮</p>
            <h3 className="font-pixel text-xl text-primary mb-1">Supply</h3>
            <p className="font-pixel text-2xl">1B</p>
          </div>
          
          <div className="pixel-panel">
            <p className="text-2xl mb-2">👾</p>
            <h3 className="font-pixel text-xl text-primary mb-1">Holders</h3>
            <p className="font-pixel text-2xl">10K+</p>
          </div>
          
          <div className="pixel-panel">
            <p className="text-2xl mb-2">🕹️</p>
            <h3 className="font-pixel text-xl text-primary mb-1">Market Cap</h3>
            <p className="font-pixel text-2xl">$1M+</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
  );
};