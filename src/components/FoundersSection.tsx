import { Award, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const FoundersSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-2 border-primary/30 rounded-lg p-8 shadow-glow-gold">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {t("founders.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("founders.subtitle")}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t("founders.names")}
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  {t("founders.description_prefix")}
                  <span className="text-primary font-semibold">{t("founders.description_company1")}</span>{t("founders.description_and")}
                  <span className="text-primary font-semibold">{t("founders.description_company2")}</span>{t("founders.description_suffix")}
                </p>

                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-2 bg-chart-green/10 text-chart-green px-3 py-1 rounded-full">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-semibold">{t("founders.tag_exits")}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                    <span className="text-lg">🇯🇵</span>
                    <span className="font-semibold">{t("founders.tag_hq")}</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-6 border border-primary/20">
                <blockquote className="text-lg text-foreground italic leading-relaxed">
                  {t("founders.quote")}
                </blockquote>
                <p className="text-sm text-muted-foreground mt-4 font-semibold">
                  {t("founders.quote_author")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
