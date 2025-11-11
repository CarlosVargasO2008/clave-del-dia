import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialScreen from "./pages/InitialScreen";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TrialExpired from "./pages/TrialExpired";
import { useTrialExpiration } from "./hooks/use-trial-expiration";
import { useEffect } from "react";

const queryClient = new QueryClient();

function AppWrapper() {
  const trialStatus = useTrialExpiration();

  if (trialStatus.isExpired) {
    return <TrialExpired expirationDate={trialStatus.expirationDate} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InitialScreen />} />
            <Route path="/app" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

const rootElement = document.getElementById("root");
if (rootElement && !rootElement.hasChildNodes()) {
  const root = createRoot(rootElement);
  root.render(<AppWrapper />);
}
