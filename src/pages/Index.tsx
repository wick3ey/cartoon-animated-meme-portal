import { motion } from "framer-motion";
import { FloatingCharacter } from "../components/FloatingCharacter";
import { ComicButton } from "../components/ComicButton";
import { TokenStats } from "../components/TokenStats";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
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
        
        <div className="text-center z-10">
          <motion.h1
            className="font-handwriting text-6xl md:text-8xl text-primary mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Token Name
          </motion.h1>
          
          <motion.p
            className="font-comic text-xl md:text-2xl mb-8 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The most amazing meme token on Solana! 🚀
          </motion.p>
          
          <ComicButton
            onClick={() => window.open("https://example.com", "_blank")}
          >
            Buy Now! 💎
          </ComicButton>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-comic-peach">
        <motion.h2
          className="text-center font-handwriting text-4xl md:text-5xl text-primary mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Token Stats
        </motion.h2>
        <TokenStats />
      </section>
    </div>
  );
};

export default Index;