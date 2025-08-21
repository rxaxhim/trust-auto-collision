import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Coffee, Wifi, Accessibility, Languages, Truck, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Amenities = () => {
  const amenities = [
    {
      icon: Car,
      title: "Auto Pickup & Delivery",
      description: "Convenient pickup and delivery service for your vehicle. We'll collect your car from your location and return it when repairs are complete.",
      benefit: "Save time and hassle"
    },
    {
      icon: Car,
      title: "Loaner Cars Available", 
      description: "Stay mobile while your vehicle is being repaired. We provide clean, reliable loaner vehicles to keep you on the road.",
      benefit: "Maintain your schedule"
    },
    {
      icon: Coffee,
      title: "Comfortable Waiting Rooms",
      description: "Relax in our clean, comfortable waiting areas equipped with seating, refreshments, and a pleasant atmosphere.",
      benefit: "Wait in comfort"
    },
    {
      icon: Accessibility,
      title: "Accessible Parking", 
      description: "Convenient accessible parking spaces located near our entrance for customers with mobility needs.",
      benefit: "Easy access for all"
    },
    {
      icon: Languages,
      title: "ASL Proficient Staff",
      description: "Our team includes ASL proficient staff members to ensure clear communication with all our customers.",
      benefit: "Inclusive service"
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description: "Stay connected with complimentary high-speed internet access throughout our facility.",
      benefit: "Stay productive"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="amenities" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Convenience & Comfort
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We go beyond exceptional repairs to provide a complete customer experience. 
              Enjoy our premium amenities designed to make your visit as convenient and comfortable as possible.
            </p>
          </div>
        </AnimatedSection>

        {/* Amenities Grid */}
        <AnimatedSection animation="scaleIn" delay={200}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <Card key={index} className="card-surface hover-glow hover-lift card-3d transition-all duration-500 group relative overflow-hidden">
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300 relative">
                        <IconComponent className="h-8 w-8 text-accent group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl text-primary group-hover:text-gradient transition-all duration-300">{amenity.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed mb-4 text-lg group-hover:text-foreground transition-colors duration-300">
                      {amenity.description}
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full group-hover:bg-gold/20 group-hover:scale-105 transition-all duration-300">
                      {amenity.benefit}
                    </div>
                  </CardContent>
                  {/* Subtle animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-gold/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blob"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-gold/60 rounded-full animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Service Promise */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideRight" delay={300}>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Your Convenience is Our Priority
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Trust Auto Collision, we understand that having your vehicle repaired can be 
                  inconvenient. That's why we've invested in amenities and services that minimize 
                  disruption to your daily routine.
                </p>
                <p>
                  From the moment you contact us to the final delivery of your repaired vehicle, 
                  our goal is to provide a seamless, stress-free experience that exceeds your expectations.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  onClick={scrollToContact}
                  variant="default"
                  className="hover-lift"
                >
                  Schedule Service
                </Button>
                <Button 
                  variant="outline"
                  className="hover-lift"
                >
                  Learn More About Our Process
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft" delay={500}>
            <Card className="card-elevated p-10 bg-primary border-2 border-primary-muted text-primary-foreground hover-glow shadow-2xl">
              <div className="text-center">
                <Truck className="h-20 w-20 text-gold mx-auto mb-8 animate-float" />
                <h4 className="text-3xl font-bold mb-6 text-white">Premium Service Guarantee</h4>
                <p className="text-xl text-primary-foreground/95 mb-8 leading-relaxed">
                  Every service includes our commitment to quality, convenience, and customer satisfaction. 
                  Experience the difference that 20 years of expertise makes.
                </p>
                <div className="space-y-3 text-base text-primary-foreground/90">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>Pickup & delivery within 25km</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>Loaner cars subject to availability</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>All amenities included at no extra charge</span>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Amenities;