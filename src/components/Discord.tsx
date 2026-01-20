import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Mic, Hash } from "lucide-react";

const Discord = () => {
  return (
    <section id="discord" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5865F2]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Discord Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#5865F2] mb-8 animate-float">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Unisciti alla nostra
            <br />
            <span className="text-[#5865F2]">Community Discord</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Chatta con altri giocatori, partecipa agli eventi, ricevi supporto e resta aggiornato su tutte le novità.
          </p>

          {/* Discord Features */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 border border-border">
              <Hash className="w-8 h-8 text-[#5865F2]" />
              <span className="font-medium">Canali Dedicati</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 border border-border">
              <Mic className="w-8 h-8 text-[#5865F2]" />
              <span className="font-medium">Chat Vocali</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 border border-border">
              <Users className="w-8 h-8 text-[#5865F2]" />
              <span className="font-medium">Community Attiva</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="discord" size="xl" className="px-12" asChild>
            <a href="https://discord.gg/palmamc" target="_blank" rel="noopener noreferrer">
              Entra su Discord
            </a>
          </Button>

          <p className="text-muted-foreground text-sm mt-6">
            Già oltre 5.000 membri nella community
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discord;
