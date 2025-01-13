import { PixelHero } from "../components/hero/PixelHero";
import { PixelStats } from "../components/stats/PixelStats";
import { BuyInstructions } from "../components/BuyInstructions";

const Index = () => {
  return (
    <div className="min-h-screen bg-pixel-dark">
      <div className="fixed top-4 left-4 z-50">
        <img 
          src="/lovable-uploads/7371edd6-14ca-42dd-8fe9-73099a4fb737.png" 
          alt="McDonalds Logo" 
          className="w-16 h-16 md:w-24 md:h-24 rounded-lg shadow-xl hover:scale-105 transition-transform"
        />
      </div>

      <PixelHero />
      
      <section className="py-20 px-4">
        <PixelStats />
      </section>

      <section className="py-20 px-4">
        <BuyInstructions />
      </section>
    </div>
  );
};

export default Index;