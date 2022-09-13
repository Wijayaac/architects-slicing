import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Project />
      <About />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
