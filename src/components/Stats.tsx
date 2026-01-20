const stats = [
  { value: "10K+", label: "Giocatori Registrati" },
  { value: "500+", label: "Online Ogni Giorno" },
  { value: "99.9%", label: "Uptime Server" },
  { value: "24/7", label: "Supporto Attivo" },
];

const Stats = () => {
  return (
    <section id="community" className="py-20 border-y border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
