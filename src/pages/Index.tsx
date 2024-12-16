import { motion, useScroll, useTransform } from "framer-motion";
import { FloatingCharacter } from "../components/FloatingCharacter";
import { ComicButton } from "../components/ComicButton";
import { TokenStats } from "../components/TokenStats";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Index = () => {
  const { toast } = useToast();
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);

  // Parallax effekt för bakgrunden
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleBuyClick = () => {
    toast({
      title: "🚀 Till månen!",
      description: "Snart kommer du kunna köpa tokens här!",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Parallax Bakgrund */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-comic-purple to-comic-peach opacity-50" />
      </motion.div>

      {/* Hero Sektion */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.h1
            className="font-handwriting text-6xl md:text-8xl text-primary mb-6"
            animate={{ 
              scale: [1, 1.02, 1],
              rotate: [-1, 1, -1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Meme Token
          </motion.h1>

          <motion.p
            className="font-comic text-xl md:text-2xl mb-8 text-gray-700"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Den mest episka meme token på Solana! 🚀
          </motion.p>

          <div className="flex gap-4 justify-center">
            <ComicButton onClick={handleBuyClick}>
              Köp Nu! 💎
            </ComicButton>
            <ComicButton 
              onClick={() => window.open("https://discord.gg", "_blank")}
              className="bg-secondary"
            >
              Discord 💬
            </ComicButton>
          </div>
        </motion.div>

        {/* Flytande Karaktärer */}
        <FloatingCharacter
          src="/placeholder.svg"
          alt="Mascot 1"
          className="top-20 left-20 w-32 h-32"
          delay={0.2}
        />
        <FloatingCharacter
          src="/placeholder.svg"
          alt="Mascot 2"
          className="bottom-20 right-20 w-32 h-32"
          delay={0.4}
        />

        {/* Musföljande Element */}
        <motion.div
          className="fixed w-8 h-8 bg-accent rounded-full mix-blend-multiply filter blur-xl pointer-events-none z-50"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{ type: "spring", damping: 10 }}
        />
      </section>

      {/* Token Stats Sektion */}
      <section className="py-20 px-4 bg-comic-peach relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center font-handwriting text-4xl md:text-5xl text-primary mb-12">
            Token Stats
          </h2>
          <TokenStats />
        </motion.div>
      </section>

      {/* Roadmap Sektion */}
      <section className="py-20 px-4 relative">
        <motion.h2
          className="text-center font-handwriting text-4xl md:text-5xl text-primary mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Roadmap
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid gap-8">
          {[
            { phase: "Fas 1", title: "Lansering", description: "Token lansering och community byggande" },
            { phase: "Fas 2", title: "Tillväxt", description: "Partnerships och marknadsföring" },
            { phase: "Fas 3", title: "Utveckling", description: "NFT collection och staking" }
          ].map((item, index) => (
            <motion.div
              key={item.phase}
              className="comic-panel"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="font-handwriting text-2xl text-primary mb-2">{item.phase} - {item.title}</h3>
              <p className="font-comic text-lg">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;