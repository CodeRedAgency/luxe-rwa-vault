import { DollarSign, Package, Users, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const TrustMetrics = () => {
  const { t } = useTranslation();
  const metrics = [
    {
      icon: DollarSign,
      label: t("trust_metrics.total_value"),
      value: "$847M",
      change: "+12.5%",
    },
    {
      icon: Package,
      label: t("trust_metrics.assets_listed"),
      value: "2,847",
      change: "+243",
    },
    {
      icon: Users,
      label: t("trust_metrics.verified_investors"),
      value: "18,429",
      change: "+1,204",
    },
    {
      icon: MapPin,
      label: t("trust_metrics.global_reach"),
      value: t("trust_metrics.reach_value"),
      change: t("trust_metrics.hq_label"),
    },
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-glow-gold group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-chart-green bg-chart-green/10 px-2 py-1 rounded">
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-sm text-muted-foreground mb-2">{metric.label}</h3>
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
