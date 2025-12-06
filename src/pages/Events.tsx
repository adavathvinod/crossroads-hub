import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, PartyPopper, Sparkles, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import privateParty from "@/assets/private-party.jpg";
import barAtmosphere from "@/assets/bar-atmosphere.jpg";

const venues = [
  {
    name: "Private Party Room",
    capacity: "Up to 50 guests",
    description: "Our elegant private room features ambient lighting, dedicated bar service, and customizable setup for any occasion.",
    image: privateParty,
    features: ["Private bar", "AV equipment", "Customizable layout", "Dedicated server"],
  },
  {
    name: "Outdoor Patio",
    capacity: "Up to 75 guests",
    description: "Beautiful outdoor space with string lights, fountain views, and covered seating. Perfect for summer celebrations.",
    image: barAtmosphere,
    features: ["Fountain views", "String lighting", "Covered seating", "Fire pits available"],
  },
];

const eventTypes = [
  "Birthday Party",
  "Corporate Event",
  "Rehearsal Dinner",
  "Graduation Party",
  "Anniversary Celebration",
  "Holiday Party",
  "Sports Team Party",
  "Other",
];

const Events = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    venue: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description: "Our events team will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      venue: "",
      date: "",
      guests: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-96 overflow-hidden">
          <img
            src={privateParty}
            alt="Private event setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gold font-medium tracking-widest uppercase mb-3">Private Events</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream mb-4">
                Host Your Celebration
              </h1>
              <p className="text-cream/80 text-lg max-w-xl mx-auto">
                From intimate gatherings to large parties, we have the perfect space for your special occasion.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-forest text-cream py-12">
          <div className="container-max">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Users, title: "Flexible Capacity", desc: "Spaces for 10-75 guests" },
                { icon: PartyPopper, title: "Full Service", desc: "Dedicated event coordinator" },
                { icon: Sparkles, title: "Custom Menus", desc: "Tailored to your event" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title}>
                  <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-cream/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Venues */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest uppercase mb-3">Our Spaces</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Event Venues
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {venues.map((venue) => (
                <div key={venue.name} className="bg-card rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative h-64">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {venue.capacity}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                      {venue.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{venue.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {venue.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding bg-secondary">
          <div className="container-max max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest uppercase mb-3">Get Started</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Plan Your Event
              </h2>
              <p className="text-muted-foreground mt-4">
                Fill out the form below and our events team will contact you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Event Type</label>
                  <Select onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase().replace(/ /g, "-")}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Preferred Venue</label>
                  <Select onValueChange={(value) => setFormData({ ...formData, venue: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select venue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="party-room">Private Party Room</SelectItem>
                      <SelectItem value="outdoor-patio">Outdoor Patio</SelectItem>
                      <SelectItem value="full-buyout">Full Venue Buyout</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Event Date</label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Estimated Guests</label>
                  <Input
                    type="number"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    placeholder="Number of guests"
                    min="1"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Additional Details</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your event, special requests, dietary requirements, etc."
                    rows={4}
                  />
                </div>
              </div>
              <Button variant="gold" size="lg" type="submit" className="w-full mt-6">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
