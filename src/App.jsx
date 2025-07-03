import React, { useState } from "react";
import './App.css';
import backgroundVideo from "./assets/background-video.mp4";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Experience from "./components/Experience";
import Education from "./components/Education";
import SocialLinks from './components/SocialLinks';

function App() {
  const [theme, setTheme] = useState("dark"); // default is dark

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="relative min-h-screen">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`fixed top-0 left-0 min-w-full min-h-full object-cover z-[-1] ${
            theme === "dark" ? "invert" : ""
          }`}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div>
          <NavBar theme={theme} toggleTheme={toggleTheme} />
          <Home />
          <About />
          <Education />
          <Experience />
          <Portfolio />
          <Contact />
          <SocialLinks />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
