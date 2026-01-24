import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const TopMovers = () => {
  const { t } = useTranslation();
  const movers = [
    { name: t("products.pappy_23"), symbol: "PAPPY", price: 21000, change: 45.2, isPositive: true },
    { name: t("products.margaux_1982"), symbol: "MARG", price: 18500, change: 38.7, isPositive: true },
    { name: t("products.macallan_30"), symbol: "MAC30", price: 16800, change: 35.4, isPositive: true },
    { name: t("products.dom_p3"), symbol: "DOMP3", price: 3200, change: 28.9, isPositive: true },
    { name: t("products.opus_x"), symbol: "OPUSX", price: 8900, change: -15.3, isPositive: false },
    { name: t("products.hibiki_30"), symbol: "HIBI30", price: 12400, change: 24.6, isPositive: true },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {t("top_movers.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("top_movers.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movers.map((mover, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-foreground text-lg">
                      {mover.symbol}
                    </h3>
                    {mover.isPositive ? (
                      <TrendingUp className="h-5 w-5 text-chart-green" />
                    ) : (
                      <ArrowDownRight className="h-5 w-5 text-chart-red" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{mover.name}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-muted-foreground">{t("top_movers.current_price")}</span>
                  <span className="text-2xl font-bold text-primary">
                    ${mover.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-background">
                  <span className="text-sm font-medium text-foreground">{t("top_movers.change_24h")}</span>
                  <div className={`flex items-center gap-1 font-bold text-lg ${mover.isPositive ? 'text-chart-green' : 'text-chart-red'
                    }`}>
                    {mover.isPositive ? <ArrowUpRight className="h-5 w-5" /> : <ArrowDownRight className="h-5 w-5" />}
                    {mover.isPositive ? '+' : ''}{mover.change}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopMovers;
