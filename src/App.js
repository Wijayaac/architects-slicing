import houses from "./data/house";
import teams from "./data/team";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

import "./App.css";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Project houses={houses} />
      <About teams={teams} />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
