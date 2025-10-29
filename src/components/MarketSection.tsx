import PriceChart from "./PriceChart";

const MarketSection = () => {
  return (
    <section id="market" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Live <span className="text-primary">Market Data</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-time tracking of the ATF Premium RWA Index
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <PriceChart />
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
          {[
            { label: "Market Cap", value: "$847M" },
            { label: "24h Volume", value: "$14.2M" },
            { label: "Total Holders", value: "18,429" },
            { label: "Avg. APY", value: "12.4%" },
          ].map((stat, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-xl font-bold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
