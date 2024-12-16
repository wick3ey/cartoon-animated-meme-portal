import { PixelHero } from "../components/hero/PixelHero";
import { PixelStats } from "../components/stats/PixelStats";
import { BuyInstructions } from "../components/BuyInstructions";
import { PixelGallery } from "../components/PixelGallery";
import { PixelBuyCard } from "../components/PixelBuyCard";
import { SocialLinks } from "../components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-pixel-dark">
      <div className="fixed top-4 right-4 flex items-center gap-2 bg-pixel-dark/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-black z-50">
        <div className="relative w-3 h-3">
          <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <div className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping" />
        </div>
        <span className="text-white font-pixel text-sm">We are live on pump.fun right now</span>
      </div>

      <PixelHero />
      
      <section className="py-20 px-4">
        <PixelStats />
      </section>

      <section className="py-20 px-4">
        <BuyInstructions />
      </section>

      <section className="py-20 px-4">
        <PixelGallery />
      </section>

      <section className="py-20 px-4">
        <PixelBuyCard />
      </section>

      <footer className="py-12 px-4">
        <SocialLinks />
      </footer>
    </div>
  );
};

export default Index;