import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import broastedChicken from "@/assets/broasted-chicken.png";

const lunchDinnerItems = [
  {
    category: "Signature Dishes",
    items: [
      { name: "Famous Broasted Chicken", description: "Our legendary pressure-fried chicken, crispy and juicy. Served with two sides.", price: "14.99", badge: "House Favorite" },
      { name: "Broasted Chicken Family Pack", description: "8 pieces with four sides, feeds 4-5 people", price: "39.99" },
      { name: "Half Chicken Dinner", description: "Half broasted chicken with two sides", price: "11.99" },
    ],
  },
  {
    category: "Burgers & Sandwiches",
    items: [
      { name: "Crossroads Classic Burger", description: "1/2 lb beef patty, lettuce, tomato, onion, pickles, special sauce", price: "12.99" },
      { name: "Bacon Cheddar Burger", description: "1/2 lb beef, crispy bacon, aged cheddar, caramelized onions", price: "14.99" },
      { name: "Grilled Chicken Sandwich", description: "Marinated chicken breast, lettuce, tomato, honey mustard", price: "11.99" },
      { name: "Fish Sandwich", description: "Beer-battered cod, tartar sauce, lettuce on brioche", price: "12.99" },
    ],
  },
  {
    category: "Entrees",
    items: [
      { name: "Baby Back Ribs", description: "Full rack slow-smoked ribs, BBQ glaze, two sides", price: "24.99" },
      { name: "Half Rack Ribs", description: "Half rack with two sides", price: "16.99" },
      { name: "Grilled Salmon", description: "Atlantic salmon, lemon herb butter, seasonal vegetables, rice", price: "19.99" },
      { name: "Sirloin Steak", description: "8oz grilled sirloin, garlic butter, baked potato, vegetable", price: "22.99" },
    ],
  },
  {
    category: "Fresh Salads",
    items: [
      { name: "Crossroads House Salad", description: "Mixed greens, tomato, cucumber, red onion, choice of dressing", price: "7.99" },
      { name: "Grilled Chicken Caesar", description: "Romaine, parmesan, croutons, creamy caesar, grilled chicken", price: "13.99" },
      { name: "Cobb Salad", description: "Greens, bacon, egg, avocado, blue cheese, grilled chicken", price: "14.99" },
    ],
  },
  {
    category: "Appetizers",
    items: [
      { name: "Loaded Nachos", description: "Tortilla chips, cheese, jalapeños, sour cream, salsa, guac", price: "11.99" },
      { name: "Chicken Wings", description: "10 wings, choice of Buffalo, BBQ, or Garlic Parmesan", price: "13.99" },
      { name: "Mozzarella Sticks", description: "Six golden fried sticks with marinara", price: "8.99" },
      { name: "Onion Rings", description: "Beer-battered thick-cut onion rings", price: "7.99" },
    ],
  },
  {
    category: "Sides",
    items: [
      { name: "French Fries", description: "Crispy golden fries", price: "3.99" },
      { name: "Mashed Potatoes", description: "Creamy mashed with gravy", price: "3.99" },
      { name: "Coleslaw", description: "Creamy homestyle coleslaw", price: "2.99" },
      { name: "Seasonal Vegetables", description: "Fresh seasonal vegetables", price: "3.99" },
    ],
  },
];

const LunchDinnerMenu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-80 overflow-hidden">
          <img
            src={broastedChicken}
            alt="Famous Broasted Chicken"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gold font-medium tracking-widest uppercase mb-3">Crossroads</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream">
                Lunch & Dinner
              </h1>
              <p className="text-cream/80 mt-4">Served Daily 11am - Close</p>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="section-padding">
          <div className="container-max max-w-4xl">
            {lunchDinnerItems.map((section) => (
              <div key={section.category} className="mb-12">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-accent">
                  {section.category}
                </h2>
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground text-lg">{item.name}</h3>
                          {"badge" in item && (
                            <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-medium">
                              {item.badge}
                            </span>
                          )}
                        </div>
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

export default LunchDinnerMenu;
