
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import AboutYanisa from "./pages/AboutYanisa";
import DuBeautyMeetsFunctionality from "./pages/DuBeautyMeetsFunctionality";
import WhoWeAre from "./pages/WhoWeAre";
import DuWhoWeAre from "./pages/DuWhoWeAre";
import OurUniqueOfferings from "./pages/OurUniqueOfferings";
import DuOurUniqueOfferings from "./pages/DuOurUniqueOfferings";
import WhyPartner from "./pages/WhyPartner";
import DuWhyPartner from "./pages/DuWhyPartner";
import PartnershipLevels from "./pages/PartnershipLevels";
import PartnerSuccessStories from "./pages/PartnerSuccessStories";
import DuPartnerSuccessStories from "./pages/DuPartnerSuccessStories";
import RevenueOpportunities from "./pages/RevenueOpportunities";
import HowToGetStarted from "./pages/HowToGetStarted";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-yanisa" element={<AboutYanisa />} />
            <Route path="/beauty-meets-functionality" element={<Navigate to="/about-yanisa" replace />} />
            <Route path="/du-beauty-meets-functionality" element={<DuBeautyMeetsFunctionality />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/du-who-we-are" element={<DuWhoWeAre />} />
            <Route path="/our-unique-offerings" element={<OurUniqueOfferings />} />
            <Route path="/du-our-unique-offerings" element={<DuOurUniqueOfferings />} />
            <Route path="/why-partner" element={<WhyPartner />} />
            <Route path="/du-why-partner" element={<DuWhyPartner />} />
            <Route path="/partnership-levels" element={<PartnershipLevels />} />
            <Route path="/partner-success-stories" element={<PartnerSuccessStories />} />
            <Route path="/du-partner-success-stories" element={<DuPartnerSuccessStories />} />
            <Route path="/revenue-opportunities" element={<RevenueOpportunities />} />
            <Route path="/how-to-get-started" element={<HowToGetStarted />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
