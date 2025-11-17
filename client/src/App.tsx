import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyPhoneButton from "@/components/StickyPhoneButton";
import Home from "@/pages/Home";
import NewCarProtection from "@/pages/NewCarProtection";
import PaintCorrection from "@/pages/PaintCorrection";
import WindowTinting from "@/pages/WindowTinting";
import StonechipProtection from "@/pages/StonechipProtection";
import MotorcycleProtection from "@/pages/MotorcycleProtection";
import Packages from "@/pages/Packages";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/new-car-protection" component={NewCarProtection} />
      <Route path="/paint-correction" component={PaintCorrection} />
      <Route path="/window-tinting" component={WindowTinting} />
      <Route path="/stonechip-protection" component={StonechipProtection} />
      <Route path="/motorcycle-protection" component={MotorcycleProtection} />
      <Route path="/packages" component={Packages} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <ScrollToTop />
          <Navigation />
          <Router />
          <Footer />
          <StickyPhoneButton />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
