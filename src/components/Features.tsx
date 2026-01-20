import { Sword, Users, Shield, Zap, Globe, Trophy } from "lucide-react";

const features = [
  {
    icon: Sword,
    title: "Survival Hardcore",
    description: "Sfida te stesso nella modalità survival più difficile con eventi esclusivi."
  },
  {
    icon: Users,
    title: "Community Attiva",
    description: "Migliaia di giocatori pronti a costruire e collaborare insieme."
  },
  {
    icon: Shield,
    title: "Anti-Cheat Avanzato",
    description: "Sistema di protezione all'avanguardia per un gameplay equo."
  },
  {
    icon: Zap,
    title: "Zero Lag",
    description: "Server ottimizzati per garantire prestazioni eccellenti 24/7."
  },
  {
    icon: Globe,
    title: "Mondi Unici",
    description: "Esplora mappe create su misura con terreni e biomi personalizzati."
  },
  {
    icon: Trophy,
    title: "Eventi Settimanali",
    description: "Partecipa a tornei e sfide con premi esclusivi per i vincitori."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Perché <span className="text-primary">PalmaMC</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Non è solo un server, è un'esperienza unica costruita per i veri appassionati di Minecraft.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
