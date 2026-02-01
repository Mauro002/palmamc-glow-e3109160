import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Star, Gem, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ranks = [
  {
    name: "VIP",
    price: "4.99€",
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
    name: "VIP+",
    price: "9.99€",
    icon: Gem,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    features: [
      "Tutti i vantaggi VIP",
      "Kit VIP+ potenziato",
      "Tag [VIP+] in chat",
      "5 home aggiuntive",
      "Fly nelle lobby",
    ],
    popular: true,
  },
  {
    name: "MVP",
    price: "19.99€",
    icon: Crown,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    features: [
      "Tutti i vantaggi VIP+",
      "Kit MVP leggendario",
      "Tag [MVP] animato",
      "10 home aggiuntive",
      "Accesso beta nuove modalità",
      "Supporto prioritario",
    ],
    popular: false,
  },
  {
    name: "MVP+",
    price: "29.99€",
    icon: Sparkles,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    features: [
      "Tutti i vantaggi MVP",
      "Kit MVP+ esclusivo",
      "Tag [MVP+] personalizzabile",
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <ArrowLeft size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Felix<span className="text-primary">MC</span>
              </span>
            </Link>
            <span className="text-xl font-heading font-semibold text-muted-foreground">Store</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              <span className="text-gradient">Store</span> FelixMC
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supporta il server e ottieni vantaggi esclusivi con i nostri rank premium
            </p>
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
                      className="w-full" 
                      variant={rank.popular ? "hero" : "outline"}
                    >
                      Acquista Ora
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Info Section */}
          <div className="mt-20 text-center">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-heading font-bold mb-4">Come funziona?</h2>
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

          {/* Server IP */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Server IP: <code className="text-primary font-mono">play.felixmc.it</code>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Store;
