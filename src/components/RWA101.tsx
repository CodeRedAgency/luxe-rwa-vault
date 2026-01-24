import { BookOpen, ShoppingCart, Shield, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RWA101 = () => {
  const { t } = useTranslation();
  const guides = [
    {
      icon: BookOpen,
      title: t("rwa_101.guide1_title"),
      description: t("rwa_101.guide1_desc"),
      color: "text-primary",
    },
    {
      icon: ShoppingCart,
      title: t("rwa_101.guide2_title"),
      description: t("rwa_101.guide2_desc"),
      color: "text-chart-green",
    },
    {
      icon: Shield,
      title: t("rwa_101.guide3_title"),
      description: t("rwa_101.guide3_desc"),
      color: "text-chart-blue",
    },
    {
      icon: TrendingUp,
      title: t("rwa_101.guide4_title"),
      description: t("rwa_101.guide4_desc"),
      color: "text-primary",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t("rwa_101.title_prefix")} <span className="text-primary">{t("rwa_101.title_highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("rwa_101.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all cursor-pointer group hover:shadow-glow-bronze"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-background border border-border group-hover:border-primary/50 transition-all`}>
                      <Icon className={`h-6 w-6 ${guide.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{guide.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {guide.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <button className="text-primary font-semibold text-sm hover:underline flex items-center gap-2 group/btn">
                    {t("rwa_101.read_more")}
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: t("rwa_101.stat_students"), value: "12,450+" },
            { label: t("rwa_101.stat_courses"), value: "8,920" },
            { label: t("rwa_101.stat_rating"), value: "4.8/5" },
            { label: t("rwa_101.stat_success"), value: "94%" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-card border border-border rounded-lg">
              <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RWA101;
