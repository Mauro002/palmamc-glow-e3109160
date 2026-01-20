const stats = [
  { value: "10K+", label: "Giocatori Registrati", description: "E il numero cresce ogni giorno" },
  { value: "500+", label: "Online Ogni Giorno", description: "Sempre qualcuno con cui giocare" },
  { value: "99.9%", label: "Uptime Server", description: "Affidabilità garantita" },
  { value: "24/7", label: "Supporto Attivo", description: "Staff sempre disponibile" },
];

const Stats = () => {
  return (
    <section id="community" className="py-24 border-y border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
            I Numeri di <span className="text-primary">PalmaMC</span>
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Una community in continua crescita che accoglie nuovi giocatori ogni giorno. Ecco alcuni numeri che parlano da soli.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-foreground font-medium text-sm md:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-muted-foreground text-xs md:text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
