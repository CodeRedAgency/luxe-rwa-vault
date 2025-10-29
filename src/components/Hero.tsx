import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-luxury.jpg";

const Hero = () => {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium luxury assets" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Blockchain grid texture overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 1px, transparent 40px)`
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Premium <span className="text-primary">Real World Assets</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Tokenized luxury alcohol and tobacco assets backed by real-world value
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
