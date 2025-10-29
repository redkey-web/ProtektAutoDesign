import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="h-[200vh] flex items-center justify-center">
          <p className="text-muted-foreground">Scroll to see navigation background effect</p>
        </div>
      </div>
    </QueryClientProvider>
  );
}
