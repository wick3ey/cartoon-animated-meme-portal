import { PixelHero } from "../components/hero/PixelHero";
import { PixelStats } from "../components/stats/PixelStats";
import { TokenomicsDisplay } from "../components/TokenomicsDisplay";
import { PixelGallery } from "../components/PixelGallery";
import { PixelBuyCard } from "../components/PixelBuyCard";
import { SocialLinks } from "../components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-pixel-dark">
      <PixelHero />
      
      <section className="py-20 px-4">
        <PixelStats />
      </section>

      <section className="py-20 px-4">
        <TokenomicsDisplay />
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