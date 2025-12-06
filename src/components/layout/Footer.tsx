import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight">Crossroads</span>
                <span className="text-xs tracking-wider uppercase text-cream/70">Restaurant & Bar</span>
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed mb-6">
              The Community Hub: Great Food, Great Company, Great Games. Where family, friends, and neighbors come together.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/menus/breakfast" className="text-cream/80 hover:text-accent transition-colors text-sm">Breakfast Menu</Link></li>
              <li><Link to="/menus/lunch-dinner" className="text-cream/80 hover:text-accent transition-colors text-sm">Lunch & Dinner</Link></li>
              <li><Link to="/menus/volleyball" className="text-cream/80 hover:text-accent transition-colors text-sm">Volleyball Menu</Link></li>
              <li><Link to="/events" className="text-cream/80 hover:text-accent transition-colors text-sm">Private Parties</Link></li>
              <li><Link to="/volleyball" className="text-cream/80 hover:text-accent transition-colors text-sm">Volleyball League</Link></li>
            </ul>
          </div>

          {/* Volleyball */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Volleyball League</h4>
            <ul className="space-y-2">
              <li><Link to="/volleyball#register" className="text-cream/80 hover:text-accent transition-colors text-sm">Register Now</Link></li>
              <li><Link to="/volleyball#schedules" className="text-cream/80 hover:text-accent transition-colors text-sm">View Schedules</Link></li>
              <li><Link to="/volleyball#standings" className="text-cream/80 hover:text-accent transition-colors text-sm">League Standings</Link></li>
              <li><Link to="/volleyball/rules" className="text-cream/80 hover:text-accent transition-colors text-sm">Rules & Standards</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Visit Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-cream/80">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>123 Main Street<br />Your City, ST 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/80">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:555-123-4567" className="hover:text-accent transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/80">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@crossroads.com" className="hover:text-accent transition-colors">info@crossroads.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream/80">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  Mon-Thu: 7am - 10pm<br />
                  Fri-Sat: 7am - 12am<br />
                  Sun: 8am - 9pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8 text-center text-cream/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Crossroads Restaurant & Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
