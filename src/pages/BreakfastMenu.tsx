import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import breakfastSpread from "@/assets/breakfast-spread.jpg";

const breakfastItems = [
  {
    category: "Classics",
    items: [
      { name: "Country Breakfast", description: "Two eggs any style, bacon or sausage, hash browns, and toast", price: "10.99" },
      { name: "Pancake Stack", description: "Three fluffy buttermilk pancakes with butter and maple syrup", price: "8.99" },
      { name: "French Toast", description: "Thick-cut brioche dipped in vanilla custard, grilled golden", price: "9.99" },
      { name: "Eggs Benedict", description: "Poached eggs on English muffin with hollandaise, choice of ham or spinach", price: "12.99" },
    ],
  },
  {
    category: "Omelets",
    items: [
      { name: "Western Omelet", description: "Ham, peppers, onions, and cheddar cheese", price: "11.99" },
      { name: "Veggie Omelet", description: "Spinach, mushrooms, tomatoes, and feta cheese", price: "10.99" },
      { name: "Meat Lovers", description: "Bacon, sausage, ham, and cheddar cheese", price: "13.99" },
    ],
  },
  {
    category: "Lighter Fare",
    items: [
      { name: "Yogurt Parfait", description: "Greek yogurt with granola and fresh berries", price: "6.99" },
      { name: "Fresh Fruit Bowl", description: "Seasonal fresh fruit medley", price: "5.99" },
      { name: "Oatmeal", description: "Steel-cut oats with brown sugar, raisins, and cream", price: "5.99" },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Fresh Orange Juice", description: "Freshly squeezed", price: "3.99" },
      { name: "Coffee", description: "Regular or decaf, unlimited refills", price: "2.99" },
      { name: "Hot Tea", description: "Selection of fine teas", price: "2.49" },
    ],
  },
];

const BreakfastMenu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-80 overflow-hidden">
          <img
            src={breakfastSpread}
            alt="Breakfast spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gold font-medium tracking-widest uppercase mb-3">Crossroads</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream">
                Breakfast Menu
              </h1>
              <p className="text-cream/80 mt-4">Served Daily 7am - 11am</p>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="section-padding">
          <div className="container-max max-w-4xl">
            {breakfastItems.map((section) => (
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

export default BreakfastMenu;
