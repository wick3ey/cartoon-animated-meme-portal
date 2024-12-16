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
      className: "absolute top-0 left-[15%] w-24 h-24 md:w-32 md:h-32",
      delay: 0.2
    },
    {
      src: "/lovable-uploads/82d3897e-ae79-4449-876f-e7b718bfe814.png",
      alt: "Rich Penguin",
      className: "absolute top-10 right-[15%] w-24 h-24 md:w-32 md:h-32",
      delay: 0.4
    },
    {
      src: "/lovable-uploads/12243131-205c-49ca-8205-d83513b4f615.png",
      alt: "3D Penguin",
      className: "absolute -top-10 left-[35%] w-20 h-20 md:w-28 md:h-28",
      delay: 0.6
    },
    {
      src: "/lovable-uploads/523d2d95-4159-4be9-aefd-21d0d7b8a179.png",
      alt: "Cool Penguin",
      className: "absolute top-20 left-[25%] w-20 h-20 md:w-28 md:h-28",
      delay: 0.8
    },
    {
      src: "/lovable-uploads/3cc8bbf6-da98-4111-87a1-092626a128b3.png",
      alt: "Red Shirt Penguin",
      className: "absolute -top-5 right-[35%] w-20 h-20 md:w-28 md:h-28",
      delay: 1
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_0),linear-gradient(rgba(139,92,246,0.05)_1px,transparent_0)] bg-[length:24px_24px]" />
      
      <div className="relative z-10 mt-32 md:mt-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Floating Penguins */}
          {penguins.map((penguin, index) => (
            <FloatingCharacter
              key={index}
              src={penguin.src}
              alt={penguin.alt}
              className={penguin.className}
              delay={penguin.delay}
            />
          ))}

          <motion.h1 
            className="font-pixel text-6xl md:text-8xl text-primary mb-6 pixel-shadow glow-text relative z-20"
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

          <p className="font-pixel text-xl md:text-2xl mb-8 text-white glow-text relative z-20">
            The Most Epic Pixel Token on Solana! 🎮
          </p>

          <div className="flex gap-4 justify-center relative z-20">
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
    </div>
  );
};