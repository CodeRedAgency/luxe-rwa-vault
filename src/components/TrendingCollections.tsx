import { TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import whiskyBarrel from "@/assets/asset-whiskey-barrel.jpg";
import vintageWine from "@/assets/asset-vintage-wine.jpg";
import cigarCollection from "@/assets/asset-cigar-collection.jpg";

const TrendingCollections = () => {
  const { t } = useTranslation();
  const collections = [
    {
      name: t("products.vintage_scotch_vault"),
      image: whiskyBarrel,
      floorPrice: 8500,
      volume: "12.5M",
      change: 24.5,
      items: 45,
    },
    {
      name: t("products.french_wine_heritage"),
      image: vintageWine,
      floorPrice: 6200,
      volume: "9.8M",
      change: 18.3,
      items: 62,
    },
    {
      name: t("products.cuban_cigar_elite"),
      image: cigarCollection,
      floorPrice: 3400,
      volume: "5.2M",
      change: 31.7,
      items: 38,
    },
    {
      name: t("products.japanese_whisky_reserve"),
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
              {t("trending_collections.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("trending_collections.subtitle")}
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
                    <p className="text-xs text-muted-foreground">{t("trending_collections.floor")}</p>
                    <p className="font-bold text-primary">
                      ${collection.floorPrice.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t("trending_collections.volume")}</p>
                    <p className="font-semibold text-foreground">
                      ${collection.volume}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    {collection.items} {t("trending_collections.items")}
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
