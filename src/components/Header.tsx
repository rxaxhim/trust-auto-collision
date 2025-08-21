import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50' 
            : 'bg-primary/90 backdrop-blur-md shadow-md'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-primary-foreground'
              }`}>
                Trust Auto Collision
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className={`transition-all duration-300 font-medium hover:scale-105 ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-primary-foreground/90 hover:text-gold'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`transition-all duration-300 font-medium hover:scale-105 ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-primary-foreground/90 hover:text-gold'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('amenities')}
                className={`transition-all duration-300 font-medium hover:scale-105 ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-primary-foreground/90 hover:text-gold'
                }`}
              >
                Amenities
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`transition-all duration-300 font-medium hover:scale-105 ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-primary-foreground/90 hover:text-gold'
                }`}
              >
                Contact
              </button>
              
              {/* Call Button */}
              <Button 
                variant={isScrolled ? "accent" : "gold"} 
                className="flex items-center gap-2 hover-lift shadow-lg hover:shadow-xl"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 hover:scale-110 ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-primary-foreground hover:text-gold'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-2xl animate-fade-in-up z-50">
              <div className="px-6 py-8 space-y-6">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left text-foreground hover:text-primary transition-all duration-300 font-semibold py-4 text-lg hover:translate-x-2 hover:bg-accent/5 rounded-lg px-4"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left text-foreground hover:text-primary transition-all duration-300 font-semibold py-4 text-lg hover:translate-x-2 hover:bg-accent/5 rounded-lg px-4"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('amenities')}
                  className="block w-full text-left text-foreground hover:text-primary transition-all duration-300 font-semibold py-4 text-lg hover:translate-x-2 hover:bg-accent/5 rounded-lg px-4"
                >
                  Amenities
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left text-foreground hover:text-primary transition-all duration-300 font-semibold py-4 text-lg hover:translate-x-2 hover:bg-accent/5 rounded-lg px-4"
                >
                  Contact
                </button>
                <div className="pt-4">
                  <Button variant="accent" className="w-full flex items-center justify-center gap-2 py-4 text-lg hover-lift shadow-lg">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;