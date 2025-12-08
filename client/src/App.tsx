import { useEffect, lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import TrustTicker from "@/components/TrustTicker";
import Footer from "@/components/Footer";
import StickyPhoneButton from "@/components/StickyPhoneButton";
import Home from "@/pages/Home";

const NewCarProtection = lazy(() => import("@/pages/NewCarProtection"));
const PaintCorrection = lazy(() => import("@/pages/PaintCorrection"));
const WindowTinting = lazy(() => import("@/pages/WindowTinting"));
const StonechipProtection = lazy(() => import("@/pages/StonechipProtection"));
const MotorcycleProtection = lazy(() => import("@/pages/MotorcycleProtection"));
const Packages = lazy(() => import("@/pages/Packages"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const NotFound = lazy(() => import("@/pages/not-found"));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
      <p className="mt-4 text-muted-foreground">Loading...</p>
    </div>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/new-car-protection" component={NewCarProtection} />
        <Route path="/paint-correction" component={PaintCorrection} />
        <Route path="/window-tinting" component={WindowTinting} />
        <Route path="/stonechip-protection" component={StonechipProtection} />
        <Route path="/motorcycle-protection" component={MotorcycleProtection} />
        <Route path="/packages" component={Packages} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
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
          <TrustTicker />
          <StickyPhoneButton />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
