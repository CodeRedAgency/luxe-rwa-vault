import { TrendingUp, TrendingDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const TrendingTokens = () => {
  const { t } = useTranslation();
  const tokens = [
    { name: t("products.macallan_25"), symbol: "MAC25", price: 3250, change: 12.4, isPositive: true },
    { name: t("products.chateau_lafite"), symbol: "LAFT", price: 1890, change: 8.7, isPositive: true },
    { name: t("products.cuban_cohiba"), symbol: "COHI", price: 450, change: -2.3, isPositive: false },
    { name: t("products.pappy_van_winkle"), symbol: "PAPPY", price: 2100, change: 15.2, isPositive: true },
    { name: t("products.dom_perignon"), symbol: "DOMP", price: 890, change: 5.6, isPositive: true },
    { name: t("products.japanese_yamazaki"), symbol: "YAMA", price: 1650, change: 9.1, isPositive: true },
  ];

  return (
    <section className="py-8 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
          {t("trending_tokens.title")}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tokens.map((token) => (
            <div
              key={token.symbol}
              className="bg-background border border-border rounded-lg p-4 hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-bold text-foreground text-sm">{token.symbol}</p>
                  <p className="text-xs text-muted-foreground truncate">{token.name}</p>
                </div>
                {token.isPositive ? (
                  <TrendingUp className="h-4 w-4 text-chart-green" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-chart-red" />
                )}
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold text-primary">${token.price}</p>
                <p
                  className={`text-xs font-semibold ${token.isPositive ? "text-chart-green" : "text-chart-red"
                    }`}
                >
                  {token.isPositive ? "+" : ""}{token.change}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTokens;
