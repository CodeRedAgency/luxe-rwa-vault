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

const Index = () => {
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
            © 2025 ATF RWA Marketplace. Premium tokenized assets platform.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            🇯🇵 Headquartered in Japan • Built on blockchain technology
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
