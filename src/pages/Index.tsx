import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import MarketSection from "@/components/MarketSection";
import FoundersSection from "@/components/FoundersSection";
import FeaturedAssets from "@/components/FeaturedAssets";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Hero />
        <TrustMetrics />
        <MarketSection />
        <FoundersSection />
        <FeaturedAssets />
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
