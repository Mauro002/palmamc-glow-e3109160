import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Mic, Hash, Sparkles, Heart } from "lucide-react";
import { useEffect, useState } from "react";

const Discord = () => {
  const [memberCount, setMemberCount] = useState<number | null>(null);
  const [onlineCount, setOnlineCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        // Using Discord's widget API for public server data
        const response = await fetch('https://discord.com/api/v9/invites/dwrU5y2U?with_counts=true');
        const data = await response.json();
        
        if (data.approximate_member_count) {
          setMemberCount(data.approximate_member_count);
          setOnlineCount(data.approximate_presence_count);
        }
      } catch (error) {
        console.error('Error fetching Discord data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDiscordData();
    
    // Refresh every 60 seconds
    const interval = setInterval(fetchDiscordData, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <section id="discord" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5865F2]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#5865F2]/5 rounded-full blur-2xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Discord Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#5865F2] mb-8 animate-float">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>

          <span className="text-[#5865F2] font-medium text-sm uppercase tracking-widest mb-4 block">La Nostra Casa</span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Unisciti alla nostra
            <br />
            <span className="text-[#5865F2]">Community Discord</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Il cuore pulsante di FelixMC. Chatta con altri giocatori, partecipa agli eventi esclusivi, 
            ricevi supporto immediato dallo staff e resta sempre aggiornato su tutte le novità.
          </p>
          
          <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto mb-12">
            Canali dedicati per ogni modalità, chat vocali per giocare insieme, 
            giveaway settimanali e una community pronta ad accoglierti a braccia aperte!
          </p>

          {/* Live Member Count */}
          {!isLoading && memberCount && (
            <div className="flex justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/30">
                <Users className="w-5 h-5 text-[#5865F2]" />
                <span className="font-bold text-[#5865F2]">{formatNumber(memberCount)}</span>
                <span className="text-muted-foreground text-sm">membri totali</span>
              </div>
              {onlineCount && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-bold text-green-500">{formatNumber(onlineCount)}</span>
                  <span className="text-muted-foreground text-sm">online ora</span>
                </div>
              )}
            </div>
          )}

          {/* Discord Features */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 border border-border hover:border-[#5865F2]/50 transition-all duration-300">
              <Hash className="w-8 h-8 text-[#5865F2]" />
              <span className="font-medium">Canali Dedicati</span>
              <span className="text-sm text-muted-foreground text-center">
                Ogni modalità ha i suoi canali. Trova il tuo posto e inizia a chattare!
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 border border-border hover:border-[#5865F2]/50 transition-all duration-300">
              <Mic className="w-8 h-8 text-[#5865F2]" />
              <span className="font-medium">Chat Vocali</span>
              <span className="text-sm text-muted-foreground text-center">
                Parla con i tuoi amici mentre giochi. Canali vocali sempre disponibili!
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 border border-border hover:border-[#5865F2]/50 transition-all duration-300">
              <Heart className="w-8 h-8 text-[#5865F2]" />
              <span className="font-medium">Community Attiva</span>
              <span className="text-sm text-muted-foreground text-center">
                Staff sempre presente, giocatori amichevoli e tanto divertimento!
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="discord" size="xl" className="px-12" asChild>
            <a href="https://ds.gg/felixmcit" target="_blank" rel="noopener noreferrer">
              Entra su Discord
            </a>
          </Button>

          <p className="text-muted-foreground text-sm mt-6 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            {isLoading ? (
              "Caricamento membri..."
            ) : memberCount ? (
              `Unisciti agli altri ${formatNumber(memberCount)} membri della community!`
            ) : (
              "Unisciti alla nostra fantastica community!"
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discord;
