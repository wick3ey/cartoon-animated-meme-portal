import { PixelHero } from "../components/hero/PixelHero";
import { PixelStats } from "../components/stats/PixelStats";
import { TokenomicsWheel } from "../components/TokenomicsWheel";
import { PixelGallery } from "../components/PixelGallery";
import { PixelBuyCard } from "../components/PixelBuyCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-pixel-dark">
      <PixelHero />
      
      <section className="py-20 px-4">
        <PixelStats />
      </section>

      <section className="py-20 px-4">
        <TokenomicsWheel />
      </section>

      <section className="py-20 px-4">
        <PixelGallery />
      </section>

      <section className="py-20 px-4">
        <PixelBuyCard />
      </section>
    </div>
  );
};

export default Index;