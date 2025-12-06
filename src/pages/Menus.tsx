import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, UtensilsCrossed, Trophy } from "lucide-react";
import broastedChicken from "@/assets/broasted-chicken.png";
import breakfastSpread from "@/assets/breakfast-spread.jpg";
import barAtmosphere from "@/assets/bar-atmosphere.jpg";

const menuCategories = [
  {
    title: "Breakfast",
    description: "Start your day right with our hearty breakfast favorites. Served daily until 11am.",
    image: breakfastSpread,
    icon: Coffee,
    link: "/menus/breakfast",
    featured: ["Pancake Stack", "Country Breakfast", "Eggs Benedict"],
  },
  {
    title: "Lunch & Dinner",
    description: "From signature Broasted Chicken to juicy burgers and fresh salads.",
    image: broastedChicken,
    icon: UtensilsCrossed,
    link: "/menus/lunch-dinner",
    featured: ["Broasted Chicken", "1/2 lb Burgers", "Fresh Salads"],
  },
  {
    title: "Volleyball Menu",
    description: "Quick bites and refreshing drinks perfect for courtside dining.",
    image: barAtmosphere,
    icon: Trophy,
    link: "/menus/volleyball",
    featured: ["Loaded Nachos", "Wings", "Draft Beers"],
  },
];

const Menus = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-forest text-cream">
          <div className="container-max text-center">
            <p className="text-gold font-medium tracking-widest uppercase mb-3">Our Menus</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Something for Everyone
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              From early morning breakfasts to late-night courtside snacks, we've got you covered with delicious options all day long.
            </p>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid md:grid-cols-3 gap-8">
              {menuCategories.map((category) => (
                <div
                  key={category.title}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg card-hover"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gold/20 text-gold rounded-xl flex items-center justify-center">
                      <category.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.featured.map((item) => (
                        <span
                          key={item}
                          className="text-xs bg-secondary px-3 py-1 rounded-full text-secondary-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <Button variant="gold" className="w-full" asChild>
                      <Link to={category.link}>
                        View Menu <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menus;
