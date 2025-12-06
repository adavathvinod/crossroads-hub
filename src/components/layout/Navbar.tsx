import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "Menus",
    href: "/menus",
    submenu: [
      { label: "Breakfast", href: "/menus/breakfast" },
      { label: "Lunch & Dinner", href: "/menus/lunch-dinner" },
      { label: "Volleyball Menu", href: "/menus/volleyball" },
    ],
  },
  {
    label: "Volleyball",
    href: "/volleyball",
    submenu: [
      { label: "Register", href: "/volleyball#register" },
      { label: "Schedules", href: "/volleyball#schedules" },
      { label: "Standings", href: "/volleyball#standings" },
      { label: "Rules", href: "/volleyball/rules" },
    ],
  },
  { label: "Private Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container-max px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground font-heading font-bold text-xl">C</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-heading font-bold text-lg leading-tight transition-colors",
                scrolled ? "text-foreground" : "text-cream"
              )}>
                Crossroads
              </span>
              <span className={cn(
                "text-xs tracking-wider uppercase transition-colors",
                scrolled ? "text-muted-foreground" : "text-cream/80"
              )}>
                Restaurant & Bar
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1",
                    scrolled
                      ? "text-foreground hover:text-accent hover:bg-accent/10"
                      : "text-cream/90 hover:text-cream hover:bg-cream/10",
                    location.pathname === item.href && "text-accent"
                  )}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-background rounded-lg shadow-xl border border-border overflow-hidden min-w-[180px]">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="gold" size="sm" asChild>
              <Link to="/menus">View Menu</Link>
            </Button>
            <Button variant={scrolled ? "forestOutline" : "heroOutline"} size="sm" asChild>
              <Link to="/volleyball#register">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors",
              scrolled ? "text-foreground" : "text-cream"
            )}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-background/98 backdrop-blur-lg rounded-b-2xl shadow-xl animate-fade-in pb-6">
            <div className="flex flex-col gap-1 px-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="pl-6">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 mt-4 px-4">
              <Button variant="gold" asChild>
                <Link to="/menus">View Menu</Link>
              </Button>
              <Button variant="forestOutline" asChild>
                <Link to="/volleyball#register">Register for Volleyball</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
