import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const MarketOverview = () => {
  const topAssets = [
    { name: "Rare Whisky Barrel 1984", price: 12450, change: 8.32, volume: "2.4M", isPositive: true },
    { name: "Vintage Bordeaux 1982", price: 8920, change: 5.67, volume: "1.8M", isPositive: true },
    { name: "Cuban Cigar Vault", price: 6340, change: -2.14, volume: "980K", isPositive: false },
    { name: "Japanese Whisky Collection", price: 9870, change: 11.2, volume: "1.5M", isPositive: true },
    { name: "Cognac Heritage Set", price: 5600, change: 3.45, volume: "750K", isPositive: true },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Market Stats */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">
                Market Overview
              </h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-semibold">
                  ETH
                </button>
                <button className="px-4 py-2 bg-card border border-border text-foreground rounded-md text-sm font-semibold hover:bg-primary/10">
                  ATF
                </button>
              </div>
            </div>

            {/* Top Assets Table */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-background/50">
                <div className="col-span-5 text-xs font-semibold text-muted-foreground uppercase">Asset</div>
                <div className="col-span-3 text-xs font-semibold text-muted-foreground uppercase text-right">Price</div>
                <div className="col-span-2 text-xs font-semibold text-muted-foreground uppercase text-right">Change</div>
                <div className="col-span-2 text-xs font-semibold text-muted-foreground uppercase text-right">Volume</div>
              </div>
              {topAssets.map((asset, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 p-4 border-b border-border last:border-0 hover:bg-background/50 transition-colors cursor-pointer"
                >
                  <div className="col-span-5">
                    <p className="font-semibold text-foreground text-sm">{asset.name}</p>
                  </div>
                  <div className="col-span-3 text-right">
                    <p className="font-bold text-primary">${asset.price.toLocaleString()}</p>
                  </div>
                  <div className="col-span-2 text-right">
                    <div className={`inline-flex items-center gap-1 ${asset.isPositive ? 'text-chart-green' : 'text-chart-red'}`}>
                      {asset.isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                      <span className="font-semibold text-sm">{asset.isPositive ? '+' : ''}{asset.change}%</span>
                    </div>
                  </div>
                  <div className="col-span-2 text-right">
                    <p className="text-sm text-muted-foreground">${asset.volume}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Panel - Quick Stats */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Quick Stats</h3>
            <div className="space-y-3">
              {[
                { label: "Total Market Cap", value: "$847M", change: "+5.2%" },
                { label: "24h Volume", value: "$14.2M", change: "+12.8%" },
                { label: "Active Traders", value: "18,429", change: "+3.4%" },
                { label: "Listed Assets", value: "342", change: "+8" },
              ].map((stat, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                  <div className="flex items-baseline justify-between">
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs font-semibold text-chart-green">{stat.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;
