import { BookOpen, ShoppingCart, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RWA101 = () => {
  const guides = [
    {
      icon: BookOpen,
      title: "What are RWA Tokens?",
      description: "Learn the fundamentals of Real World Asset tokenization and how physical luxury goods are represented on the blockchain.",
      color: "text-primary",
    },
    {
      icon: ShoppingCart,
      title: "How to Buy Your First RWA",
      description: "Step-by-step guide to purchasing tokenized assets. Connect your wallet, browse assets, and complete your first transaction.",
      color: "text-chart-green",
    },
    {
      icon: Shield,
      title: "Security & Storage",
      description: "Understanding how your tokenized assets are secured, audited, and stored in climate-controlled facilities.",
      color: "text-chart-blue",
    },
    {
      icon: TrendingUp,
      title: "Investment Strategies",
      description: "Explore different approaches to building a diversified portfolio of premium alcohol and tobacco RWAs.",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            RWA <span className="text-primary">101</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about tokenized real-world assets
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
                    Read More
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
            { label: "Active Students", value: "12,450+" },
            { label: "Courses Completed", value: "8,920" },
            { label: "Avg. Rating", value: "4.8/5" },
            { label: "Success Rate", value: "94%" },
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
