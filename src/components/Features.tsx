import { Gamepad2, Users, Shield, Zap, Globe, Trophy } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Lifesteal",
    description: "La nostra modalità principale! Ruba cuori ai tuoi nemici per sopravvivere. PvP intenso, sfide quotidiane e un'esperienza unica che ti terrà incollato al gioco."
  },
  {
    icon: Users,
    title: "Community Attiva",
    description: "Una famiglia di migliaia di giocatori italiani pronti ad accoglierti. Costruisci alleanze, partecipa a eventi di gruppo, scambia risorse e fai amicizie che dureranno oltre il gioco. Il nostro Discord è sempre attivo!"
  },
  {
    icon: Shield,
    title: "Anti-Cheat Avanzato",
    description: "Sistema di protezione all'avanguardia sviluppato su misura per PalmaMC. Nessun hacker, nessun cheater, solo gameplay pulito e competizione leale. Il nostro staff monitora costantemente il server."
  },
  {
    icon: Zap,
    title: "Zero Lag",
    description: "Server ospitati su hardware di ultima generazione con connessioni in fibra ottica. TPS sempre al massimo, ping bassissimo per tutti i giocatori italiani. Prestazioni eccellenti garantite 24 ore su 24, 7 giorni su 7."
  },
  {
    icon: Globe,
    title: "Mondi Unici",
    description: "Esplora mappe create interamente a mano dal nostro team di builder. Terreni mozzafiato, biomi personalizzati, strutture nascoste e segreti da scoprire. Ogni angolo nasconde qualcosa di speciale."
  },
  {
    icon: Trophy,
    title: "Eventi Settimanali",
    description: "Ogni settimana nuovi tornei, sfide esclusive e competizioni con premi reali. Classifiche sempre aggiornate, ricompense uniche e la possibilità di diventare una leggenda di PalmaMC!"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">Le Nostre Caratteristiche</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Perché <span className="text-primary">PalmaMC</span> è Diverso?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Non è solo un server Minecraft, è un'esperienza completa costruita con passione per i veri appassionati. 
            Ogni dettaglio è pensato per farti vivere l'avventura definitiva. Scopri cosa ci rende unici.
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
