import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar, Clock, Users } from "lucide-react";
import volleyballHero from "@/assets/volleyball-hero.jpg";

export function Hero() {
  const [bookingType, setBookingType] = useState<"dinner" | "event">("dinner");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lazy load video after page load for performance
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load();
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        {/* Poster image loads first */}
        <img
          src={volleyballHero}
          alt="Crossroads Bar & Grill atmosphere"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
          loading="eager"
          fetchPriority="high"
        />
        
        {/* Video background - lazy loaded */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={volleyballHero}
          onCanPlay={() => setVideoLoaded(true)}
        >
          {/* Add video sources here when available */}
          {/* <source src="/videos/bar-atmosphere.webm" type="video/webm" /> */}
          {/* <source src="/videos/bar-atmosphere.mp4" type="video/mp4" /> */}
        </video>

        {/* Gradient overlays */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-mahogany-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 md:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Hero Text */}
          <div className="text-center lg:text-left">
            <p className="text-amber font-medium tracking-widest uppercase mb-4 animate-fade-in">
              As Cozy As It Gets
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 animate-fade-in-up">
              Great Food. Great Company.{" "}
              <span className="text-gradient">Great Games.</span>
            </h1>
            <p className="text-cream/90 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up delay-200">
              Where family, friends, and neighbors come together for delicious dining, refreshing drinks, and exciting volleyball leagues.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/menus">View Menu</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/volleyball#register">Join Volleyball</Link>
              </Button>
            </div>
          </div>

          {/* Right: Booking Widget */}
          <div className="animate-fade-in-up delay-400">
            <div className="glass-card rounded-2xl p-6 md:p-8 max-w-md mx-auto lg:ml-auto warm-glow">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
                Make a Reservation
              </h3>
              
              {/* Booking Type Toggle */}
              <div className="flex rounded-xl bg-secondary p-1 mb-6">
                <button
                  onClick={() => setBookingType("dinner")}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                    bookingType === "dinner"
                      ? "menu-tab-active"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Dinner Reservation
                </button>
                <button
                  onClick={() => setBookingType("event")}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                    bookingType === "event"
                      ? "menu-tab-active"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Private Event
                </button>
              </div>

              {/* Booking Form */}
              <form className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <Calendar className="w-4 h-4 text-amber" />
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-foreground"
                  />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <Clock className="w-4 h-4 text-amber" />
                    Time
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-foreground">
                    <option value="">Select a time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <Users className="w-4 h-4 text-amber" />
                    Party Size
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-foreground">
                    <option value="">Number of guests</option>
                    {bookingType === "dinner" ? (
                      <>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5">5 guests</option>
                        <option value="6">6 guests</option>
                        <option value="7-8">7-8 guests</option>
                      </>
                    ) : (
                      <>
                        <option value="10-20">10-20 guests</option>
                        <option value="20-30">20-30 guests</option>
                        <option value="30-50">30-50 guests</option>
                        <option value="50+">50+ guests</option>
                      </>
                    )}
                  </select>
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full mt-2">
                  {bookingType === "dinner" ? "Reserve Table" : "Request Event"}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                {bookingType === "dinner" 
                  ? "For parties over 8, please call us directly"
                  : "We'll contact you within 24 hours to confirm details"
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <a href="#features" className="text-cream/60 hover:text-cream transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}