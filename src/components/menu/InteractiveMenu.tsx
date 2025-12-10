import { useState } from "react";
import { Coffee, UtensilsCrossed, Wine, Salad, Drumstick, Sandwich } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  items: MenuItem[];
}

const allMenuItems: MenuCategory[] = [
  {
    id: "appetizers",
    name: "Appetizers",
    icon: Salad,
    items: [
      { name: "Loaded Nachos", description: "Tortilla chips, cheese, jalapeños, sour cream, salsa, guac", price: "11.99" },
      { name: "Chicken Wings", description: "10 wings, choice of Buffalo, BBQ, or Garlic Parmesan", price: "13.99", badge: "Popular" },
      { name: "Mozzarella Sticks", description: "Six golden fried sticks with marinara", price: "8.99" },
      { name: "Onion Rings", description: "Beer-battered thick-cut onion rings", price: "7.99" },
      { name: "Spinach Artichoke Dip", description: "Creamy dip with warm pita chips", price: "10.99" },
    ],
  },
  {
    id: "brunch",
    name: "Brunch",
    icon: Coffee,
    items: [
      { name: "Country Breakfast", description: "Two eggs any style, bacon or sausage, hash browns, toast", price: "10.99" },
      { name: "Pancake Stack", description: "Three fluffy buttermilk pancakes with butter and maple syrup", price: "8.99" },
      { name: "Eggs Benedict", description: "Poached eggs on English muffin with hollandaise, choice of ham or spinach", price: "12.99", badge: "Chef's Pick" },
      { name: "French Toast", description: "Thick-cut brioche dipped in vanilla custard, grilled golden", price: "9.99" },
      { name: "Western Omelet", description: "Ham, peppers, onions, and cheddar cheese", price: "11.99" },
    ],
  },
  {
    id: "dinner",
    name: "Dinner",
    icon: UtensilsCrossed,
    items: [
      { name: "Famous Broasted Chicken", description: "Our legendary pressure-fried chicken, crispy and juicy. Served with two sides.", price: "14.99", badge: "House Favorite" },
      { name: "Baby Back Ribs", description: "Full rack slow-smoked ribs, BBQ glaze, two sides", price: "24.99" },
      { name: "Grilled Salmon", description: "Atlantic salmon, lemon herb butter, seasonal vegetables, rice", price: "19.99" },
      { name: "Sirloin Steak", description: "8oz grilled sirloin, garlic butter, baked potato, vegetable", price: "22.99" },
      { name: "Crossroads Classic Burger", description: "1/2 lb beef patty, lettuce, tomato, onion, pickles, special sauce", price: "12.99" },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    icon: Sandwich,
    items: [
      { name: "Bacon Cheddar Burger", description: "1/2 lb beef, crispy bacon, aged cheddar, caramelized onions", price: "14.99" },
      { name: "Grilled Chicken Sandwich", description: "Marinated chicken breast, lettuce, tomato, honey mustard", price: "11.99" },
      { name: "Fish Sandwich", description: "Beer-battered cod, tartar sauce, lettuce on brioche", price: "12.99" },
      { name: "Philly Cheesesteak", description: "Shaved ribeye, peppers, onions, provolone on hoagie", price: "13.99" },
      { name: "Club Sandwich", description: "Triple-decker with turkey, bacon, lettuce, tomato", price: "12.99" },
    ],
  },
  {
    id: "signatures",
    name: "Signatures",
    icon: Drumstick,
    items: [
      { name: "Broasted Chicken Family Pack", description: "8 pieces with four sides, feeds 4-5 people", price: "39.99", badge: "Best Value" },
      { name: "Half Chicken Dinner", description: "Half broasted chicken with two sides", price: "11.99" },
      { name: "Rib & Chicken Combo", description: "Half rack ribs + quarter chicken with two sides", price: "21.99" },
      { name: "Surf & Turf", description: "6oz sirloin with grilled shrimp skewer", price: "28.99" },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    icon: Wine,
    items: [
      { name: "Draft Beer Selection", description: "Ask about our rotating taps - domestic and craft", price: "5.99+" },
      { name: "House Margarita", description: "Classic lime margarita, salt rim optional", price: "8.99" },
      { name: "Old Fashioned", description: "Bourbon, bitters, orange, cherry", price: "10.99" },
      { name: "Wine by the Glass", description: "Red, white, or rosé selections", price: "7.99+" },
      { name: "Crossroads Punch", description: "Our signature tropical rum punch", price: "9.99", badge: "Signature" },
    ],
  },
];

export function InteractiveMenu() {
  const [activeCategory, setActiveCategory] = useState("appetizers");
  
  const currentCategory = allMenuItems.find(cat => cat.id === activeCategory);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
        {allMenuItems.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              style={isActive ? { boxShadow: '0 4px 20px hsl(var(--amber) / 0.3)' } : {}}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          );
        })}
      </div>

      {/* Menu Items Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {currentCategory?.items.map((item, index) => (
          <div
            key={item.name}
            className="bg-card rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex justify-between items-start gap-3 mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.name}
                  </h3>
                  {item.badge && (
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-medium">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-accent font-bold text-lg whitespace-nowrap">
                ${item.price}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}