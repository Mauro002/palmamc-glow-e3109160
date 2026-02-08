const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-heading font-bold">
              Elden<span className="text-primary">MC</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
              Caratteristiche
            </a>
            <a href="#community" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
              Community
            </a>
            <a href="#discord" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
              Discord
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} EldenMC. Tutti i diritti riservati.
          </p>
        </div>

        {/* Server IP */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            Server IP: <code className="text-primary font-mono">play.eldenmc.me</code>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
