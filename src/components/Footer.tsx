import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Trust Auto Collision</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Independent auto body shop serving the GTA area for 20 years. 
              Licensed, fully certified Journeymen Autobody Technicians providing 
              top-quality European craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Collision Repair
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Dent Removal
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Paint Services
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Amenities
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <div>2508 Royal Windsor Drive</div>
                  <div>Oakville, ON L6J 7Y3</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">(905) 555-0123</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">info@trustautocollision.ca</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <div>Mon-Fri: 7:30 AM - 6:00 PM</div>
                  <div>Sat: 8:00 AM - 4:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm text-center md:text-left">
              © {currentYear} Trust Auto Collision. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;