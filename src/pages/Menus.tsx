import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InteractiveMenu } from "@/components/menu/InteractiveMenu";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, UtensilsCrossed, Trophy } from "lucide-react";
import broastedChicken from "@/assets/broasted-chicken.png";
import breakfastSpread from "@/assets/breakfast-spread.jpg";
import barAtmosphere from "@/assets/bar-atmosphere.jpg";

const quickLinks = [
  {
    title: "Breakfast",
    description: "Start your day right with our hearty favorites",
    image: breakfastSpread,
    icon: Coffee,
    link: "/menus/breakfast",
    time: "7am - 11am",
  },
  {
    title: "Lunch & Dinner",
    description: "Famous Broasted Chicken & more",
    image: broastedChicken,
    icon: UtensilsCrossed,
    link: "/menus/lunch-dinner",
    time: "11am - Close",
  },
  {
    title: "Volleyball Menu",
    description: "Quick bites for courtside dining",
    image: barAtmosphere,
    icon: Trophy,
    link: "/menus/volleyball",
    time: "During Games",
  },
];

const Menus = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <p className="text-amber font-medium tracking-widest uppercase mb-3">Our Menus</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Something for Everyone
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              From early morning breakfasts to late-night courtside snacks, explore our full menu with instant category filtering.
            </p>
          </div>
        </section>

        {/* Quick Links to Full Menus */}
        <section className="section-padding bg-secondary/50">
          <div className="container-max">
            <div className="grid md:grid-cols-3 gap-6">
              {quickLinks.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="group flex items-center gap-4 bg-card rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-amber" />
                      <h3 className="font-heading text-lg font-semibold text-foreground truncate">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Menu Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Browse Our Menu
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Click any category to instantly view items. No page reloads, no PDFs – just fast, easy browsing.
              </p>
            </div>
            
            <InteractiveMenu />

            <div className="mt-12 bg-secondary rounded-xl p-6 text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Allergy Notice:</strong> Please inform your server of any dietary restrictions or allergies. Consuming raw or undercooked meats, poultry, seafood, or eggs may increase your risk of foodborne illness.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menus;