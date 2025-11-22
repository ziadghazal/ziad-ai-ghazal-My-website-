import { ArrowRight, Sparkles, Mail } from "lucide-react";
import { Button } from "./ui/button";
import ziadPhoto from "@/assets/ziad-photo.jpg";
import aiBackground from "@/assets/ai-background.jpg";
import ziadLogo from "@/assets/ziad-logo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with AI Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${aiBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Professional Photo */}
            <div className="mb-8 animate-fade-in flex justify-center lg:justify-start">
              <div className="relative w-48 h-48">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-cyan-400/30 rounded-full blur-xl" />
                <img 
                  src={ziadPhoto} 
                  alt="Ziad Hesham Ghazal - AI & Data Analysis Expert"
                  className="relative rounded-full shadow-2xl border-4 border-primary/20 w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">AI & Data Analysis Expert</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="block mb-2">Hello, I'm</span>
              <span className="text-gradient glow">Ziad Hesham Ghazal</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
              Software Engineer specializing in Artificial Intelligence and Data Analysis. 
              Building intelligent solutions that deliver measurable business impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up animation-delay-400">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-cyan-400 hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 w-full sm:w-auto"
                onClick={() => window.location.href = 'mailto:ziadghazal90@gmail.com'}
              >
                <Mail className="mr-2 w-4 h-4" />
                Get In Touch
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in animation-delay-600">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">20%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Downtime Reduction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">15%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Forecast Improvement</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">30%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Support Automation</div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-400 flex justify-center lg:justify-start">
            <div className="relative w-80 h-80">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-cyan-400/30 rounded-full blur-xl" />
              <img 
                src={ziadPhoto} 
                alt="Ziad Hesham Ghazal"
                className="relative rounded-full shadow-2xl border-4 border-primary/20 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
