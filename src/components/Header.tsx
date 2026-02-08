import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              Elden<span className="text-primary">MC</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
              Caratteristiche
            </a>
            <a href="#community" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
              Community
            </a>
            <a href="#discord" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
              Discord
            </a>
            <a href="#store" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
              Store
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="outline" size="lg" asChild>
              <a href="#discord">Unisciti a noi</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <a 
              href="#features" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Caratteristiche
            </a>
            <a 
              href="#community" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <a 
              href="#discord" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Discord
            </a>
            <a 
              href="#store" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Store
            </a>
            <Button variant="outline" className="w-full mt-2" asChild>
              <a href="#discord">Unisciti a noi</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
