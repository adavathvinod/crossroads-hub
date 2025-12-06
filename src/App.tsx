import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Menus from "./pages/Menus";
import BreakfastMenu from "./pages/BreakfastMenu";
import LunchDinnerMenu from "./pages/LunchDinnerMenu";
import VolleyballMenu from "./pages/VolleyballMenu";
import Volleyball from "./pages/Volleyball";
import VolleyballRules from "./pages/VolleyballRules";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/menus/breakfast" element={<BreakfastMenu />} />
          <Route path="/menus/lunch-dinner" element={<LunchDinnerMenu />} />
          <Route path="/menus/volleyball" element={<VolleyballMenu />} />
          <Route path="/volleyball" element={<Volleyball />} />
          <Route path="/volleyball/rules" element={<VolleyballRules />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
