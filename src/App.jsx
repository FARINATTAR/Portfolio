import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./pages/Home";
import About from "./pages/About";
import ProjectsSection from "./pages/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact";

import ShootingStars from "./components/Stars";

function App() {
  return (
    <div className="bg-slate-950">
      <ShootingStars/>
      <Navbar />
      <HeroSection />
      <About />
      <ProjectsSection /> {/* Display multiple cards */}
      <Contact/>
    </div>
  );
}

export default App;
