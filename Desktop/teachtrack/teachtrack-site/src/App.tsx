import "./App.css";
// import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { About } from "./components/pages/AboutUs";
import { Profile } from "./components/pages/Profile";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "./components/elements/Toaster";
import { Toaster as Sonner } from "./components/elements/sonnet";
import { TooltipProvider } from "./components/elements/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Index from "./components/pages/index";
import Lesson from "./components/pages/Lesson";
import NotFound from "./components/pages/NotFound";


function AnimatedRoutes() {
  

  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AnimatedRoutes/>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
