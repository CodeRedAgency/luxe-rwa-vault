import { TrendingUp } from "lucide-react";
import whiskyBarrel from "@/assets/asset-whiskey-barrel.jpg";
import vintageWine from "@/assets/asset-vintage-wine.jpg";
import cigarCollection from "@/assets/asset-cigar-collection.jpg";

const TrendingCollections = () => {
  const collections = [
    {
      name: "Vintage Scotch Vault",
      image: whiskyBarrel,
      floorPrice: 8500,
      volume: "12.5M",
      change: 24.5,
      items: 45,
    },
    {
      name: "French Wine Heritage",
      image: vintageWine,
      floorPrice: 6200,
      volume: "9.8M",
      change: 18.3,
      items: 62,
    },
    {
      name: "Cuban Cigar Elite",
      image: cigarCollection,
      floorPrice: 3400,
      volume: "5.2M",
      change: 31.7,
      items: 38,
    },
    {
      name: "Japanese Whisky Reserve",
      image: whiskyBarrel,
      floorPrice: 11200,
      volume: "15.6M",
      change: 42.1,
      items: 28,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              <TrendingUp className="inline h-8 w-8 text-primary mr-2" />
              Trending Collections
            </h2>
            <p className="text-muted-foreground">
              Most active collections in the last 24 hours
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-glow-bronze group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-chart-green/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-white">
                    +{collection.change}%
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-bold text-foreground">{collection.name}</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">Floor</p>
                    <p className="font-bold text-primary">
                      ${collection.floorPrice.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Volume</p>
                    <p className="font-semibold text-foreground">
                      ${collection.volume}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    {collection.items} items
                  </span>
                  <TrendingUp className="h-4 w-4 text-chart-green" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCollections;
