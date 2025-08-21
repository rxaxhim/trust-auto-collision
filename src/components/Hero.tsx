import { Button } from "@/components/ui/button";
import { Phone, Award, Clock, MapPin } from "lucide-react";
import { useParallax } from "@/hooks/useScrollAnimation";
import ParticleBackground from "@/components/ParticleBackground";
import heroImage from "@/assets/hero-garage.jpg";

const Hero = () => {
  const parallaxOffset = useParallax(-0.3);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 parallax-bg" 
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img 
          src={heroImage} 
          alt="Trust Auto Collision professional garage with expert technicians"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
        <ParticleBackground />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gold/20 rounded-full blur-2xl animate-float blob"></div>
      <div className="absolute bottom-40 left-16 w-24 h-24 bg-accent/30 rounded-full blur-xl animate-float blob" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary-foreground/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6 opacity-0 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
                Expert Auto Body Repair
                <span className="block text-gradient drop-shadow-2xl animate-pulse-slow">You Can Trust</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 max-w-2xl leading-relaxed">
                20 years of European craftsmanship serving the GTA. 
                Professional collision repair, dent removal, and paint services.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start opacity-0 animate-fade-in-up stagger-2">
              <div className="flex items-center gap-3 text-primary-foreground/90 hover-lift">
                <Award className="h-6 w-6 text-gold animate-pulse-slow" />
                <span className="font-semibold text-lg">Licensed Technicians</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/90 hover-lift">
                <Clock className="h-6 w-6 text-gold animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                <span className="font-semibold text-lg">20 Years Experience</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/90 hover-lift">
                <MapPin className="h-6 w-6 text-gold animate-pulse-slow" style={{ animationDelay: '1s' }} />
                <span className="font-semibold text-lg">Oakville, ON</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start opacity-0 animate-fade-in-up stagger-3">
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="gold"
                className="text-xl px-10 py-6 shadow-2xl hover:shadow-gold hover-lift transform hover:scale-105 transition-all duration-300"
              >
                Get Free Estimate
              </Button>
              <Button 
                variant="outline" 
                className="text-primary-foreground border-2 border-primary-foreground/70 hover:bg-primary-foreground hover:text-primary text-xl px-10 py-6 hover-lift backdrop-blur-sm"
              >
                <Phone className="h-6 w-6 mr-3" />
                Call (905) 555-0123
              </Button>
            </div>
          </div>

          {/* Enhanced Service Cards */}
          <div className="grid gap-6 opacity-0 animate-slide-in-right stagger-4">
            {[
              {
                title: "Collision Repair",
                description: "From minor fender benders to major accidents, we restore your vehicle to perfection.",
                delay: "0ms"
              },
              {
                title: "Professional Paint Services", 
                description: "Color matching and seamless finishes using high-quality paints and precision techniques.",
                delay: "100ms"
              },
              {
                title: "Expert Dent Removal",
                description: "Advanced techniques to remove dents and restore your vehicle's appearance.",
                delay: "200ms"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="card-elevated p-8 bg-background/95 backdrop-blur-lg hover-glow hover-lift card-3d transition-all duration-500 border border-accent/20 group"
                style={{ animationDelay: service.delay }}
              >
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-gradient transition-all duration-300">{service.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">{service.description}</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-gold/60 rounded-full animate-pulse-slow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in-up stagger-5">
        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-foreground/70 text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-12 border-2 border-primary-foreground/40 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-4 bg-gold rounded-full mt-2 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;