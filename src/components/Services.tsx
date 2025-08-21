import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Palette, Shield, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import collisionRepairImage from "@/assets/collision-repair.jpg";
import paintServiceImage from "@/assets/paint-service.jpg";
import dentRemovalImage from "@/assets/dent-removal.jpg";

const Services = () => {
  const services = [
    {
      title: "Collision Repair",
      icon: Shield,
      description: "We specialize in repairing vehicles involved in collisions, from minor fender benders to major accidents. Our technicians use state-of-the-art equipment and follow industry best practices to ensure your vehicle is repaired to the highest standards.",
      image: collisionRepairImage,
      features: [
        "Frame straightening and alignment",
        "Structural damage repair", 
        "Safety system restoration",
        "Insurance claim assistance"
      ]
    },
    // {
    //   title: "Dent Removal",
    //   icon: Wrench,
    //   description: "Our skilled technicians can remove dents and dings from your vehicle using advanced techniques and tools. Whether it's a small dent or a larger one, we can restore your vehicle's appearance.",
    //   image: dentRemovalImage,
    //   features: [
    //     "Paintless dent repair (PDR)",
    //     "Traditional dent repair",
    //     "Hail damage restoration",
    //     "Door ding removal"
    //   ]
    // },
    // {
    //   title: "Paint Services",
    //   icon: Palette,
    //   description: "We offer professional paint services to match your vehicle's color and provide a seamless finish. From touch-ups to complete paint jobs, our team uses high-quality paints and precision techniques to achieve outstanding results.",
    //   image: paintServiceImage,
    //   features: [
    //     "Color matching technology",
    //     "Complete paint jobs",
    //     "Touch-up services",
    //     "Clear coat application"
    //   ]
    // }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Expert Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional auto body repair services backed by 20 years of European craftsmanship. 
              We handle all makes and models with precision and care.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <AnimatedSection
                key={service.title}
                animation={isReversed ? "slideLeft" : "slideRight"}
                delay={index * 200}
                className={`grid lg:grid-cols-2 gap-12 items-center`}
              >
                {/* Content */}
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <Card className="card-surface border-0 h-full hover-glow hover-lift transition-all duration-500">
                    <CardHeader className="pb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-4 bg-accent/10 rounded-xl hover:bg-accent/20 transition-colors duration-300">
                          <IconComponent className="h-10 w-10 text-accent" />
                        </div>
                        <CardTitle className="text-3xl text-primary">{service.title}</CardTitle>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <h4 className="font-bold text-primary text-xl">What we offer:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-4 text-muted-foreground group">
                              <ArrowRight className="h-5 w-5 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                              <span className="text-lg">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          onClick={scrollToContact}
                          variant="default"
                          className="mt-8 hover-lift"
                        >
                          Get Quote for {service.title}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Enhanced Image */}
                <div className={isReversed ? 'lg:order-1' : ''}>
                  <div className="relative group">
                    <img 
                      src={service.image} 
                      alt={`Professional ${service.title.toLowerCase()} service at Trust Auto Collision`}
                      className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-gold transition-all duration-500 group-hover:scale-[1.02] card-3d"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent rounded-2xl group-hover:from-accent/20 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 rounded-2xl transition-all duration-500"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-gold/80 rounded-full animate-pulse-slow blob"></div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <AnimatedSection animation="scaleIn" delay={600}>
          <div className="text-center mt-20">
            <div className="card-elevated p-10 bg-primary border-2 border-primary-muted text-primary-foreground rounded-3xl hover-glow shadow-2xl">
              <h3 className="text-4xl font-bold mb-6 text-white">Need Multiple Services?</h3>
              <p className="text-2xl mb-8 text-primary-foreground/95 max-w-2xl mx-auto leading-relaxed">
                Get a comprehensive assessment and bundled pricing for all your auto body needs.
              </p>
              <Button 
                onClick={scrollToContact}
                variant="gold"
                className="text-xl px-12 py-6 hover-lift shadow-2xl"
              >
                Schedule Free Assessment
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;