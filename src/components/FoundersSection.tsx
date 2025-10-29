import { Award, TrendingUp } from "lucide-react";

const FoundersSection = () => {
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
                  Founded by Industry Veterans
                </h2>
                <p className="text-muted-foreground">
                  Built on decades of proven success in technology and finance
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Nick Yang & Cavan Mitchell Chan
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Leveraging their proven track record from building and successfully exiting 
                  <span className="text-primary font-semibold"> ChinaRen</span> and 
                  <span className="text-primary font-semibold"> KongZhong Corporation</span>, 
                  our founders bring unparalleled expertise in scaling technology platforms to 
                  millions of users and navigating complex international markets.
                </p>
                
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-2 bg-chart-green/10 text-chart-green px-3 py-1 rounded-full">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-semibold">Multiple Successful Exits</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                    <span className="text-lg">🇯🇵</span>
                    <span className="font-semibold">Japan Headquarters</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-6 border border-primary/20">
                <blockquote className="text-lg text-foreground italic leading-relaxed">
                  "We're bringing the same level of innovation and scale that built internet 
                  giants to the emerging world of tokenized real-world assets. Our focus on 
                  premium alcohol and tobacco creates a unique bridge between traditional 
                  luxury markets and blockchain technology."
                </blockquote>
                <p className="text-sm text-muted-foreground mt-4 font-semibold">
                  — Founders, ATF RWA Marketplace
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
