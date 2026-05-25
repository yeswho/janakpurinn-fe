import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient();
// Test123
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <App />
          </AnimatePresence>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>
)