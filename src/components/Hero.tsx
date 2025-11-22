import { ArrowRight, Sparkles, Mail, Brain, Zap, Code } from "lucide-react";
import { Button } from "./ui/button";
import ziadPhoto from "@/assets/ziad-photo.jpg";
import aiBackground from "@/assets/ai-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* AI Grid Background */}
      <div className="absolute inset-0 ai-grid" />
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${aiBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      
      {/* Floating AI Particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full blur-sm animate-float opacity-60" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-cyan-400 rounded-full blur-sm animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary rounded-full blur-sm animate-float opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-cyan-400 rounded-full blur-sm animate-float opacity-40" style={{ animationDelay: '3s' }} />
      
      {/* Main Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-cyan-400/20 border border-primary/30 backdrop-blur-sm animate-fade-in">
              <Brain className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">AI & Data Analysis Expert</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4 animate-fade-in-up animation-delay-200">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-muted-foreground mb-3">Hello, I'm</span>
                <span className="text-gradient glow block">Ziad Hesham</span>
                <span className="text-gradient glow block">Ghazal</span>
              </h1>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-primary/20 backdrop-blur-sm">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">Software Engineer</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-cyan-400/20 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-foreground">AI Specialist</span>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up animation-delay-400 leading-relaxed">
              Building intelligent solutions that deliver measurable business impact through 
              <span className="text-primary font-semibold"> Artificial Intelligence</span> and 
              <span className="text-cyan-400 font-semibold"> Data Analysis</span>.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up animation-delay-600">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-cyan-400 hover:shadow-glow transition-all duration-300 w-full sm:w-auto group"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 w-full sm:w-auto"
                onClick={() => window.location.href = 'mailto:ziadghazal90@gmail.com'}
              >
                <Mail className="mr-2 w-4 h-4" />
                Get In Touch
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-up animation-delay-600">
              <div className="text-center lg:text-left group cursor-pointer">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">20%</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-tight">Downtime<br/>Reduction</div>
              </div>
              <div className="text-center lg:text-left group cursor-pointer">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">15%</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-tight">Forecast<br/>Improvement</div>
              </div>
              <div className="text-center lg:text-left group cursor-pointer">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">30%</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-tight">Support<br/>Automation</div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-400 flex justify-center lg:justify-end">
            <div className="relative w-96 h-96">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-cyan-400/30 to-primary/30 rounded-full blur-2xl animate-pulse" />
              
              {/* Middle Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 to-cyan-400/40 rounded-full blur-xl" />
              
              {/* Inner Border */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/30 backdrop-blur-sm" />
              
              {/* Image */}
              <img 
                src={ziadPhoto} 
                alt="Ziad Hesham Ghazal - AI Expert"
                className="relative rounded-full shadow-2xl w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-card/80 backdrop-blur-sm rounded-full border border-primary/30 flex items-center justify-center shadow-glow animate-float">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-card/80 backdrop-blur-sm rounded-full border border-cyan-400/30 flex items-center justify-center shadow-glow animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
