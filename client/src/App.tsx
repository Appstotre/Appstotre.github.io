import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Apps from "./pages/Apps";
import Categories from "./pages/Categories";
import TopCharts from "./pages/TopCharts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import HelpCenter from "./pages/HelpCenter";
import SafetyCenter from "./pages/SafetyCenter";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/games" component={Games} />
        <Route path="/apps" component={Apps} />
        <Route path="/categories" component={Categories} />
        <Route path="/top-charts" component={TopCharts} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/careers" component={Careers} />
        <Route path="/help-center" component={HelpCenter} />
        <Route path="/safety-center" component={SafetyCenter} />
        <Route path="/community-guidelines" component={CommunityGuidelines} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route component={NotFound} />
      </Switch>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
