import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="opacity-0 animate-slide-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Server Online</span>
        </div>

        {/* Main Heading */}
        <h1 className="opacity-0 animate-slide-up stagger-1 text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
          Benvenuto su
          <br />
          <span className="text-gradient">PalmaMC</span>
        </h1>

        {/* Subheading */}
        <p className="opacity-0 animate-slide-up stagger-2 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
          La community italiana di Minecraft dove l'avventura non finisce mai. 
          Costruisci, esplora, conquista.
        </p>

        {/* CTA Buttons */}
        <div className="opacity-0 animate-slide-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="#discord">
              Entra nel Server
            </a>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <a href="#features">
              Scopri di più
            </a>
          </Button>
        </div>

        {/* Server IP */}
        <div className="opacity-0 animate-slide-up stagger-4 mt-16">
          <p className="text-muted-foreground text-sm mb-2">Indirizzo Server</p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 cursor-pointer group">
            <code className="text-lg font-mono text-foreground group-hover:text-primary transition-colors duration-300">
              play.palmamc.it
            </code>
            <span className="text-xs text-muted-foreground">(clicca per copiare)</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-300">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
