import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

// Use MemoryRouter during SSR/SSG (no DOM available), BrowserRouter in the browser.
const Router = typeof window !== 'undefined' ? BrowserRouter : MemoryRouter;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;