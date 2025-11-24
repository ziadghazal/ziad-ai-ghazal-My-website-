import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { ThemeToggle } from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ThemeToggle />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Index;
