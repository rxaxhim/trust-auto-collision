import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield, Star, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  const stats = [
    {
      icon: Clock,
      number: "20+",
      label: "Years of Experience",
      description: "Serving the GTA with excellence"
    },
    {
      icon: Users,
      number: "1000+", 
      label: "Satisfied Customers",
      description: "Trust built through quality work"
    },
    {
      icon: Award,
      number: "100%",
      label: "Licensed Technicians", 
      description: "Fully certified journeymen"
    },
    {
      icon: Shield,
      number: "5★",
      label: "Quality Rating",
      description: "European craftsmanship standards"
    }
  ];

  const certifications = [
    "Licensed Auto Body Repair Shop",
    "Certified Journeymen Technicians", 
    "Insurance Approved Facility",
    "Environmental Compliance Certified",
    "Safety Standards Compliant"
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              European Craftsmanship You Can Trust
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over two decades, Trust Auto Collision has been the premier choice for auto body repair in the GTA. 
              Our commitment to European quality standards and customer satisfaction sets us apart.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats Grid */}
        <AnimatedSection animation="scaleIn" delay={200}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="card-surface text-center p-6 hover-glow hover-lift card-3d transition-all duration-500 group relative overflow-hidden">
                  <CardContent className="p-0 relative z-10">
                    <div className="mb-4">
                      <IconComponent className="h-10 w-10 text-accent mx-auto mb-3 group-hover:scale-110 group-hover:text-gold transition-all duration-300" />
                      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:text-gradient transition-all duration-300">
                        {stat.number}
                      </div>
                      <div className="font-bold text-primary text-base lg:text-lg group-hover:text-accent transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {stat.description}
                    </p>
                  </CardContent>
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <AnimatedSection animation="slideRight" delay={100}>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Independent Excellence Since 2004
              </h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  As an independent auto body shop, we've built our reputation on delivering 
                  <span className="text-primary font-semibold"> top-quality European craftsmanship</span> 
                  to every vehicle that enters our facility. Our team of licensed, fully certified 
                  Journeymen Autobody Technicians brings decades of combined experience to every repair.
                </p>
                <p>
                  We perform collision repairs and paint services on all makes and models of cars and trucks, 
                  from luxury European vehicles to reliable family cars. From our initial assessment to the 
                  finishing touches, you can expect meticulous attention to detail and uncompromising quality.
                </p>
                <p>
                  Our commitment extends beyond just repairs – we're dedicated to getting you back on the 
                  road safely and with complete confidence in our work.
                </p>
              </div>
              
              <Button 
                onClick={scrollToContact}
                variant="accent"
                className="text-lg px-8 py-4 mt-8 hover-lift"
              >
                Experience Our Quality
              </Button>
            </div>
          </AnimatedSection>

          {/* Certifications & Values */}
          <AnimatedSection animation="slideLeft" delay={300}>
            <Card className="card-elevated p-8 hover-glow">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-6 w-6 text-gold" />
                  <h4 className="text-2xl font-bold text-primary">Our Certifications</h4>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h4 className="text-xl font-bold text-primary mb-4">Why Choose Us?</h4>
                <div className="space-y-3 text-muted-foreground">
                  {[
                    "State-of-the-art equipment and modern techniques",
                    "Comprehensive insurance claim assistance", 
                    "Transparent pricing with detailed estimates",
                    "Lifetime warranty on workmanship"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>

        {/* Trust Banner */}
        <AnimatedSection animation="scaleIn" delay={500}>
          <div className="text-center">
            <div className="card-surface p-10 bg-gradient-to-r from-surface via-surface-muted to-surface border-2 border-accent/20 hover-glow rounded-2xl">
              <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                European Quality, Canadian Values
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience the perfect blend of Old World craftsmanship and modern customer service. 
                Call us today to learn more about how we can restore your vehicle to its original beauty.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;