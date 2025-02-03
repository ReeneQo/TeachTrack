import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/navigation/Navigation";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/AboutUs";
import { Reviews } from "./components/pages/Reviews";
import { Profile } from "./components/pages/Profile";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AnimatePresence>
  );
}

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <AnimatedRoutes />
          </main>
        </div>
      </Router>
    </>
  );
};

export default App;
