import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours with your free estimate.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      vehicle: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Shop",
      content: "2508 Royal Windsor Drive\nOakville, ON L6J 7Y3",
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us Today",
      content: "(905) 555-0123\nFree estimates available",
      action: "Call Now"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 7:30 AM - 6:00 PM\nSaturday: 8:00 AM - 4:00 PM\nSunday: Closed",
      action: "Plan Visit"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@trustautocollision.ca\nQuick response guaranteed",
      action: "Send Email"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Get Your Free Estimate Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to restore your vehicle to its original condition? Contact Trust Auto Collision 
              for a free, detailed estimate. We're here to help get you back on the road safely.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="slideRight" delay={200}>
            <Card className="card-elevated p-8 hover-glow">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-primary">Request Free Estimate</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed estimate.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:ring-accent hover:border-accent/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:ring-accent hover:border-accent/50 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:ring-accent hover:border-accent/50 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="vehicle">Vehicle Information</Label>
                    <Input
                      id="vehicle"
                      name="vehicle"
                      placeholder="e.g., 2020 Honda Civic"
                      value={formData.vehicle}
                      onChange={handleInputChange}
                      className="border-border focus:ring-accent hover:border-accent/50 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Describe the Damage *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Please describe the damage and any relevant details..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:ring-accent hover:border-accent/50 transition-colors"
                    />
                  </div>
                  
                  <Button type="submit" variant="accent" className="w-full text-lg py-3 hover-lift">
                    Get Free Estimate
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection animation="slideLeft" delay={400}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="card-surface hover-glow hover-lift transition-all duration-500 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-4 bg-accent/10 rounded-xl flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="h-8 w-8 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-primary text-xl mb-3 group-hover:text-accent transition-colors duration-300">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground whitespace-pre-line leading-relaxed mb-4 text-lg">
                            {info.content}
                          </p>
                          <Button variant="outline" className="text-sm hover-lift">
                            <Navigation className="h-4 w-4 mr-2" />
                            {info.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Emergency Contact */}
              <Card className="card-elevated bg-primary border-2 border-primary-muted text-primary-foreground p-8 hover-glow shadow-2xl">
                <div className="text-center">
                  <Phone className="h-16 w-16 text-gold mx-auto mb-6 animate-pulse-slow" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Emergency Towing Available</h3>
                  <p className="text-primary-foreground/95 mb-6 text-lg leading-relaxed">
                    Need immediate assistance? We offer emergency towing services for accident victims.
                  </p>
                  <Button variant="gold" className="hover-lift">
                    Call Emergency Line: (905) 555-0124
                  </Button>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>

        {/* Map Section */}
        <AnimatedSection animation="scaleIn" delay={600}>
          <div className="mt-20">
            <Card className="card-surface overflow-hidden hover-glow">
              <div className="bg-surface p-8 border-b border-border">
                <h3 className="text-3xl font-bold text-primary mb-4">Find Our Location</h3>
                <p className="text-muted-foreground text-lg">
                  Conveniently located in Oakville, serving the entire GTA area with pickup and delivery services.
                </p>
              </div>
              <div className="h-96 bg-gradient-to-br from-surface to-surface-muted flex items-center justify-center relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-float blob"></div>
                <div className="absolute bottom-20 right-16 w-16 h-16 bg-gold/20 rounded-full blur-lg animate-float blob" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-primary/10 rounded-full blur-md animate-float" style={{ animationDelay: '3s' }}></div>
                
                <div className="text-center z-10 group">
                  <MapPin className="h-16 w-16 text-accent mx-auto mb-6 animate-pulse-slow group-hover:scale-110 group-hover:text-gold transition-all duration-300" />
                  <p className="text-2xl font-bold text-primary mb-3 group-hover:text-gradient transition-all duration-300">2508 Royal Windsor Drive</p>
                  <p className="text-muted-foreground text-xl mb-6">Oakville, ON L6J 7Y3</p>
                  <Button variant="default" className="hover-lift text-lg px-8 py-4">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;