import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import Footer from '../Footer';

export default function FooterExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Page content above footer</p>
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
