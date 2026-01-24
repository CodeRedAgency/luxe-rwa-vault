import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { TrendingUp, TrendingDown } from "lucide-react";

interface AssetCardProps {
  name: string;
  image: string;
  price: number;
  change: number;
  volume: string;
  chartData: number[];
}

const AssetCard = ({ name, image, price, change, volume, chartData }: AssetCardProps) => {
  const { t } = useTranslation();
  const isPositive = change > 0;
  const maxValue = Math.max(...chartData);
  const minValue = Math.min(...chartData);
  const range = maxValue - minValue;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-glow-bronze group">
      {/* Asset Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-card">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${isPositive ? 'bg-chart-green/20 text-chart-green' : 'bg-chart-red/20 text-chart-red'}`}>
            {isPositive ? <TrendingUp className="inline h-3 w-3 mr-1" /> : <TrendingDown className="inline h-3 w-3 mr-1" />}
            {isPositive ? '+' : ''}{change}%
          </span>
        </div>
      </div>

      {/* Asset Info */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-1">{name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">${price.toLocaleString()}</span>
            <span className="text-xs text-muted-foreground">{t("asset_card.per_token")}</span>
          </div>
        </div>

        {/* Mini Chart */}
        <div className="h-16 bg-background/50 rounded border border-chart-grid">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <polyline
              points={chartData.map((value, i) => {
                const x = (i / (chartData.length - 1)) * 100;
                const y = 100 - ((value - minValue) / range) * 100;
                return `${x}%,${y}%`;
              }).join(' ')}
              fill="none"
              stroke={isPositive ? "hsl(var(--chart-green))" : "hsl(var(--chart-red))"}
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Stats */}
        <div className="flex justify-between text-sm">
          <div>
            <p className="text-muted-foreground text-xs">{t("asset_card.volume_24h")}</p>
            <p className="font-semibold text-foreground">{volume}</p>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-xs">{t("asset_card.supply")}</p>
            <p className="font-semibold text-foreground">{t("asset_card.limited")}</p>
          </div>
        </div>

        {/* CTA Button */}
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow-gold">
          {t("common.buy_tokens")}
        </Button>
      </div>
    </div>
  );
};

export default AssetCard;
