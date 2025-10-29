import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const PriceChart = () => {
  const [priceData, setPriceData] = useState<number[]>([]);
  const currentPrice = 2847.32;
  const priceChange = 5.67;
  const isPositive = priceChange > 0;

  useEffect(() => {
    // Generate mock price data
    const generateData = () => {
      const data = [];
      let price = currentPrice - 100;
      for (let i = 0; i < 50; i++) {
        price += (Math.random() - 0.45) * 20;
        data.push(price);
      }
      return data;
    };
    setPriceData(generateData());
  }, []);

  const maxPrice = Math.max(...priceData);
  const minPrice = Math.min(...priceData);
  const priceRange = maxPrice - minPrice;

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm text-muted-foreground mb-1">ATF INDEX</h3>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-foreground">
              ${currentPrice.toLocaleString()}
            </span>
            <span className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? 'text-chart-green' : 'text-chart-red'}`}>
              {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              {isPositive ? '+' : ''}{priceChange}%
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">24h Volume</p>
          <p className="text-lg font-semibold text-foreground">$14.2M</p>
        </div>
      </div>

      {/* Chart SVG */}
      <div className="relative h-48 bg-background/50 rounded border border-chart-grid">
        <svg className="w-full h-full" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((y) => (
            <line
              key={y}
              x1="0"
              y1={`${y}%`}
              x2="100%"
              y2={`${y}%`}
              stroke="hsl(var(--chart-grid))"
              strokeWidth="1"
              opacity="0.3"
            />
          ))}
          
          {/* Price line */}
          <polyline
            points={priceData.map((price, i) => {
              const x = (i / (priceData.length - 1)) * 100;
              const y = 100 - ((price - minPrice) / priceRange) * 100;
              return `${x}%,${y}%`;
            }).join(' ')}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            className="drop-shadow-glow-gold"
          />
          
          {/* Gradient fill under line */}
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon
            points={`0,100% ${priceData.map((price, i) => {
              const x = (i / (priceData.length - 1)) * 100;
              const y = 100 - ((price - minPrice) / priceRange) * 100;
              return `${x}%,${y}%`;
            }).join(' ')} 100%,100%`}
            fill="url(#chartGradient)"
          />
        </svg>
      </div>

      {/* Time range selector */}
      <div className="flex gap-2 mt-4 text-xs">
        {['1H', '24H', '7D', '30D', '1Y'].map((range) => (
          <button
            key={range}
            className={`px-3 py-1 rounded ${range === '24H' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PriceChart;
