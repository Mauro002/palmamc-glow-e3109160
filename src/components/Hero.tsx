import { Button } from "@/components/ui/button";
import { ChevronDown, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = "play.felixmc.me";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      toast.success("IP copiato negli appunti!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Impossibile copiare l'IP");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Heading */}
        <h1 className="opacity-0 animate-slide-up stagger-1 text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
          Benvenuto su
          <br />
          <span className="text-gradient">FelixMC</span>
        </h1>

        {/* Subheading */}
        <p className="opacity-0 animate-slide-up stagger-2 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
          La community italiana di Minecraft più grande e attiva dove l'avventura non finisce mai. 
          Costruisci mondi incredibili, esplora terre inesplorate, conquista nemici leggendari.
        </p>
        <div className="opacity-0 animate-slide-up stagger-2 mb-12" />

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
          <button 
            onClick={copyToClipboard}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer group"
          >
            <code className="text-lg font-mono text-foreground group-hover:text-primary transition-colors duration-300">
              {serverIP}
            </code>
            {copied ? (
              <Check size={18} className="text-green-500" />
            ) : (
              <Copy size={18} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            )}
          </button>
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
