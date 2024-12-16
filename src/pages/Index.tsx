import { PixelHero } from "../components/hero/PixelHero";
import { PixelStats } from "../components/stats/PixelStats";
import { PixelPriceChart } from "../components/price/PixelPriceChart";
import { TokenomicsWheel } from "../components/TokenomicsWheel";
import { LiveTransactions } from "../components/LiveTransactions";
import { PriceAlertForm } from "../components/PriceAlertForm";
import { SocialFeed } from "../components/SocialFeed";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PixelHero />
      
      <section className="py-20 px-4 bg-[#1A1F2C]">
        <PixelStats />
      </section>

      <section className="py-20 px-4 bg-[#F1F1F1]">
        <PixelPriceChart />
      </section>

      <section className="py-20 px-4 bg-[#1A1F2C]">
        <TokenomicsWheel />
      </section>

      <section className="py-20 px-4 bg-[#F1F1F1]">
        <LiveTransactions />
      </section>

      <section className="py-20 px-4 bg-[#1A1F2C]">
        <PriceAlertForm />
      </section>

      <section className="py-20 px-4 bg-[#F1F1F1]">
        <SocialFeed />
      </section>
    </div>
  );
};

export default Index;