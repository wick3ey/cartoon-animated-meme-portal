import { motion, useScroll, useTransform } from "framer-motion";
import { FloatingCharacter } from "../components/FloatingCharacter";
import { ComicButton } from "../components/ComicButton";
import { TokenStats } from "../components/TokenStats";
import { TokenomicsWheel } from "../components/TokenomicsWheel";
import { LiveTransactions } from "../components/LiveTransactions";
import { PriceAlertForm } from "../components/PriceAlertForm";
import { SocialFeed } from "../components/SocialFeed";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Index = () => {
  const { toast } = useToast();
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);
  const [priceData, setPriceData] = useState([
    { time: '1d', price: 0.5 },
    { time: '2d', price: 0.7 },
    { time: '3d', price: 0.6 },
    { time: '4d', price: 0.8 },
    { time: '5d', price: 1.2 },
  ]);

  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleBuyClick = () => {
    toast({
      title: "🚀 To The Moon!",
      description: "Token purchase feature coming soon!",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
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
            Epic Meme Token
          </motion.h1>

          <motion.p
            className="font-comic text-xl md:text-2xl mb-8 text-gray-700"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            The most epic meme token on Solana! 🚀
          </motion.p>

          <div className="flex gap-4 justify-center">
            <ComicButton onClick={handleBuyClick}>
              Buy Now! 💎
            </ComicButton>
            <ComicButton 
              onClick={() => window.open("https://discord.gg", "_blank")}
              className="bg-secondary"
            >
              Discord 💬
            </ComicButton>
          </div>
        </motion.div>

        {/* Floating Characters */}
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

        {/* Mouse Following Element */}
        <motion.div
          className="fixed w-8 h-8 bg-accent rounded-full mix-blend-multiply filter blur-xl pointer-events-none z-50"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{ type: "spring", damping: 10 }}
        />
      </section>

      {/* Token Stats Section */}
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

      {/* Live Chart Section */}
      <section className="py-20 px-4 relative bg-white/80">
        <motion.h2
          className="text-center font-handwriting text-4xl md:text-5xl text-primary mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Live Price Chart
        </motion.h2>
        
        <div className="max-w-4xl mx-auto h-[400px] comic-panel">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  background: 'white',
                  border: '2px solid black',
                  borderRadius: '8px',
                  fontFamily: 'Comic Sans MS'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                dot={{ fill: '#8B5CF6', r: 6 }}
                activeDot={{ r: 8, fill: '#D946EF' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 px-4 bg-comic-purple/20">
        <motion.h2
          className="text-center font-handwriting text-4xl md:text-5xl text-primary mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Tokenomics
        </motion.h2>
        <TokenomicsWheel />
      </section>

      {/* Live Transactions Section */}
      <section className="py-20 px-4 bg-white/80">
        <motion.h2
          className="text-center font-handwriting text-4xl md:text-5xl text-primary mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Live Activity
        </motion.h2>
        <LiveTransactions />
      </section>

      {/* Price Alert Section */}
      <section className="py-20 px-4 bg-comic-peach/50">
        <motion.h2
          className="text-center font-handwriting text-4xl md:text-5xl text-primary mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Never Miss a Move
        </motion.h2>
        <PriceAlertForm />
      </section>

      {/* Social Feed Section */}
      <section className="py-20 px-4 bg-white/80">
        <motion.h2
          className="text-center font-handwriting text-4xl md:text-5xl text-primary mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Community Feed
        </motion.h2>
        <SocialFeed />
      </section>
    </div>
  );
};

export default Index;
