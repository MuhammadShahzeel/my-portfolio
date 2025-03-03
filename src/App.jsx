import CustomCursor from "./components/shared/CustomCursor";
import AnimatedBackground from "./components/shared/AnimatedBackground";
import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <div className="wrapper bg-primary text-white min-h-screen relative ">
        <CustomCursor />
        <AnimatedBackground />
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
