import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrendingTokens from "@/components/TrendingTokens";
import MarketOverview from "@/components/MarketOverview";
import TrendingCollections from "@/components/TrendingCollections";
import TopMovers from "@/components/TopMovers";
import FeaturedAssets from "@/components/FeaturedAssets";
import RWA101 from "@/components/RWA101";
import TrustMetrics from "@/components/TrustMetrics";
import FoundersSection from "@/components/FoundersSection";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Hero />
        <TrendingTokens />
        <MarketOverview />
        <TrendingCollections />
        <TopMovers />
        <FeaturedAssets />
        <RWA101 />
        <TrustMetrics />
        <FoundersSection />
      </main>

      <footer className="bg-card border-t border-border py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            {t("footer.rights")}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {t("footer.hq")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
