
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Header from "./components/Header";
import ModeSelector from "./components/ModeSelector";
import HomePage from "./components/HomePage";
import Spots from "./pages/Spots";
import Tools from "./pages/Tools";
import Seasons from "./pages/Seasons";
import Species from "./pages/Species";
import Maps from "./pages/Maps";
import Regulations from "./pages/Regulations";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { mode } = useTheme();

  if (!mode) {
    return <ModeSelector />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spots" element={<Spots />} />
        <Route path="/areas" element={<Spots />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/weapons" element={<Tools />} />
        <Route path="/seasons" element={<Seasons />} />
        <Route path="/species" element={<Species />} />
        <Route path="/animals" element={<Species />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/regulations" element={<Regulations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
