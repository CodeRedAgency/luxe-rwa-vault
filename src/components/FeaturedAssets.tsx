import AssetCard from "./AssetCard";
import whiskyBarrel from "@/assets/asset-whiskey-barrel.jpg";
import vintageWine from "@/assets/asset-vintage-wine.jpg";
import cigarCollection from "@/assets/asset-cigar-collection.jpg";

const FeaturedAssets = () => {
  const generateChartData = (baseValue: number, volatility: number) => {
    const data = [];
    let value = baseValue;
    for (let i = 0; i < 20; i++) {
      value += (Math.random() - 0.5) * volatility;
      data.push(value);
    }
    return data;
  };

  const assets = [
    {
      name: "Rare Whisky Barrel 1984",
      image: whiskyBarrel,
      price: 12450,
      change: 8.32,
      volume: "$2.4M",
      chartData: generateChartData(12000, 500),
    },
    {
      name: "Vintage Bordeaux Collection",
      image: vintageWine,
      price: 8920,
      change: 5.67,
      volume: "$1.8M",
      chartData: generateChartData(8500, 400),
    },
    {
      name: "Cuban Cigar Vault Reserve",
      image: cigarCollection,
      price: 6340,
      change: -2.14,
      volume: "$980K",
      chartData: generateChartData(6500, 300),
    },
  ];

  return (
    <section id="assets" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Tokenized Assets</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Invest in premium real-world assets backed by verifiable inventory and transparent blockchain technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assets.map((asset, index) => (
            <AssetCard key={index} {...asset} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            All assets are stored in secure, climate-controlled facilities and regularly audited
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAssets;
