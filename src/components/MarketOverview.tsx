import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const MarketOverview = () => {
  const { t } = useTranslation();
  const topAssets = [
    { name: t("products.rare_whisky_1984"), price: 12450, change: 8.32, volume: "2.4M", isPositive: true },
    { name: t("products.vintage_bordeaux_1982"), price: 8920, change: 5.67, volume: "1.8M", isPositive: true },
    { name: t("products.cuban_cigar_vault"), price: 6340, change: -2.14, volume: "980K", isPositive: false },
    { name: t("products.japanese_whisky_coll"), price: 9870, change: 11.2, volume: "1.5M", isPositive: true },
    { name: t("products.cognac_heritage"), price: 5600, change: 3.45, volume: "750K", isPositive: true },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Market Stats */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">
                {t("market_overview.title")}
              </h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-semibold">
                  {t("common.eth")}
                </button>
                <button className="px-4 py-2 bg-card border border-border text-foreground rounded-md text-sm font-semibold hover:bg-primary/10">
                  {t("common.atf")}
                </button>
              </div>
            </div>

            {/* Top Assets Table */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-background/50">
                <div className="col-span-5 text-xs font-semibold text-muted-foreground uppercase">{t("market_overview.table_asset")}</div>
                <div className="col-span-3 text-xs font-semibold text-muted-foreground uppercase text-right">{t("market_overview.table_price")}</div>
                <div className="col-span-2 text-xs font-semibold text-muted-foreground uppercase text-right">{t("market_overview.table_change")}</div>
                <div className="col-span-2 text-xs font-semibold text-muted-foreground uppercase text-right">{t("market_overview.table_volume")}</div>
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
            <h3 className="text-lg font-bold text-foreground">{t("market_overview.quick_stats")}</h3>
            <div className="space-y-3">
              {[
                { label: t("market_overview.stats_market_cap"), value: "$847M", change: "+5.2%" },
                { label: t("market_overview.stats_24h_volume"), value: "$14.2M", change: "+12.8%" },
                { label: t("market_overview.stats_active_traders"), value: "18,429", change: "+3.4%" },
                { label: t("market_overview.stats_listed_assets"), value: "342", change: "+8" },
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
