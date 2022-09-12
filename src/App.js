import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Project />
      <About />
    </div>
  );
}

export default App;
