import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import barAtmosphere from "@/assets/bar-atmosphere.jpg";

const volleyballMenuItems = [
  {
    category: "Quick Bites",
    items: [
      { name: "Loaded Nachos", description: "Tortilla chips, cheese, jalapeños, sour cream, salsa", price: "10.99" },
      { name: "Chicken Wings", description: "10 wings, choice of sauce: Buffalo, BBQ, or Garlic Parmesan", price: "12.99" },
      { name: "Soft Pretzel Bites", description: "Warm pretzel bites with beer cheese dip", price: "7.99" },
      { name: "Basket of Fries", description: "Crispy fries with choice of dipping sauce", price: "5.99" },
      { name: "Onion Rings", description: "Beer-battered thick-cut onion rings", price: "7.99" },
    ],
  },
  {
    category: "Sandwiches & Wraps",
    items: [
      { name: "Classic Burger", description: "1/2 lb beef patty with lettuce, tomato, onion, pickles", price: "11.99" },
      { name: "Chicken Wrap", description: "Grilled chicken, lettuce, tomato, cheese, ranch in a flour tortilla", price: "10.99" },
      { name: "BBQ Pulled Pork", description: "Slow-smoked pork, tangy BBQ sauce, coleslaw on brioche", price: "11.99" },
      { name: "Grilled Cheese", description: "Three-cheese blend on thick-cut sourdough with tomato soup", price: "8.99" },
    ],
  },
  {
    category: "Draft Beers",
    items: [
      { name: "Domestic Pint", description: "Bud Light, Miller Lite, Coors Light", price: "4.50" },
      { name: "Craft Pint", description: "Rotating selection of local craft beers", price: "6.50" },
      { name: "Domestic Pitcher", description: "60oz pitcher of domestic beer", price: "14.99" },
      { name: "Craft Pitcher", description: "60oz pitcher of craft beer", price: "19.99" },
    ],
  },
  {
    category: "Cocktails & Beverages",
    items: [
      { name: "Margarita", description: "House or flavored, on the rocks or frozen", price: "8.99" },
      { name: "Moscow Mule", description: "Vodka, ginger beer, lime juice", price: "9.99" },
      { name: "House Wine", description: "Red, white, or rosé by the glass", price: "7.99" },
      { name: "Soft Drinks", description: "Pepsi products, unlimited refills", price: "2.99" },
      { name: "Bottled Water", description: "Cold bottled water", price: "1.99" },
    ],
  },
];

const VolleyballMenu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-80 overflow-hidden">
          <img
            src={barAtmosphere}
            alt="Bar atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gold font-medium tracking-widest uppercase mb-3">Courtside Dining</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream">
                Volleyball Menu
              </h1>
              <p className="text-cream/80 mt-4">Quick Bites & Cold Drinks</p>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="section-padding">
          <div className="container-max max-w-4xl">
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-12 text-center">
              <p className="text-foreground font-medium">
                <span className="text-accent">⚡ Fast Service:</span> Our volleyball menu is designed for quick courtside delivery so you never miss a game!
              </p>
            </div>

            {volleyballMenuItems.map((section) => (
              <div key={section.category} className="mb-12">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-accent">
                  {section.category}
                </h2>
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground text-lg">{item.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                      </div>
                      <span className="text-accent font-bold text-lg">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-secondary rounded-xl p-6 text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">21+ to purchase alcohol.</strong> Please drink responsibly. We reserve the right to refuse service.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VolleyballMenu;
