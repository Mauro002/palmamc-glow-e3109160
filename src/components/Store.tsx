import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Star, Gem, Sparkles } from "lucide-react";

const ranks = [
  {
    name: "VIP",
    price: "2.99€",
    icon: Star,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    features: [
      "Kit VIP esclusivo",
      "Tag [VIP] in chat",
      "Accesso anticipato agli eventi",
      "2 home aggiuntive",
    ],
    popular: false,
  },
  {
    name: "OSCURO",
    price: "4.99€",
    icon: Gem,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    features: [
      "Tutti i vantaggi VIP",
      "Kit OSCURO potenziato",
      "Tag [OSCURO] in chat",
      "5 home aggiuntive",
      "Fly nelle lobby",
    ],
    popular: true,
  },
  {
    name: "LAMINAX",
    price: "9.99€",
    icon: Crown,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    features: [
      "Tutti i vantaggi OSCURO",
      "Kit LAMINAX leggendario",
      "Tag [LAMINAX] animato",
      "10 home aggiuntive",
      "Accesso beta nuove modalità",
      "Supporto prioritario",
    ],
    popular: false,
  },
  {
    name: "FURIAN",
    price: "14.99€",
    icon: Sparkles,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    features: [
      "Tutti i vantaggi LAMINAX",
      "Kit FURIAN esclusivo",
      "Tag [FURIAN] personalizzabile",
      "Home illimitate",
      "Nickname colorato",
      "Accesso staff events",
      "Gadget esclusivi",
    ],
    popular: false,
  },
];

const Store = () => {
  return (
    <section id="store" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">Store</span> EldenMC
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Supporta il server e ottieni vantaggi esclusivi con i nostri rank premium
          </p>
          
          {/* Under Construction Banner */}
          <div className="mt-8 inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-6 py-3">
            <span className="text-primary text-lg">🚧</span>
            <span className="text-primary font-bold text-lg">Ancora in costruzione</span>
            <span className="text-primary text-lg">🚧</span>
          </div>
        </div>

        {/* Ranks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {ranks.map((rank) => {
            const IconComponent = rank.icon;
            return (
              <Card 
                key={rank.name}
                className={`relative ${rank.bgColor} ${rank.borderColor} border-2 hover:scale-105 transition-all duration-300`}
              >
                {rank.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Più Popolare
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <div className={`mx-auto mb-4 p-4 rounded-full ${rank.bgColor}`}>
                    <IconComponent size={40} className={rank.color} />
                  </div>
                  <CardTitle className={`text-2xl font-heading ${rank.color}`}>
                    {rank.name}
                  </CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">
                    {rank.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {rank.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star size={14} className={rank.color} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full opacity-50 cursor-not-allowed" 
                    variant={rank.popular ? "hero" : "outline"}
                    disabled
                  >
                    Prossimamente
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-20 text-center">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">Come funziona?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-primary font-bold text-lg mb-2">1. Scegli il rank</div>
                <p className="text-muted-foreground text-sm">Seleziona il rank che preferisci tra quelli disponibili</p>
              </div>
              <div>
                <div className="text-primary font-bold text-lg mb-2">2. Completa l'acquisto</div>
                <p className="text-muted-foreground text-sm">Procedi con il pagamento sicuro tramite PayPal o carta</p>
              </div>
              <div>
                <div className="text-primary font-bold text-lg mb-2">3. Ricevi il rank</div>
                <p className="text-muted-foreground text-sm">Il rank verrà attivato automaticamente sul server</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
