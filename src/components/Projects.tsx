import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, Bot, Wrench, BarChart, ExternalLink, Brain, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import projectPredictive from "@/assets/project-predictive.jpg";
import projectForecasting from "@/assets/project-forecasting.jpg";
import projectChatbot from "@/assets/project-chatbot.jpg";
import projectFinancial from "@/assets/project-financial.jpg";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      icon: Wrench,
      image: projectPredictive,
      title: "Predictive Maintenance Model",
      description: "Deployed ML model reducing equipment downtime by 20%. Integrated with IoT sensors for real-time predictive analytics.",
      impact: "20% Downtime Reduction",
      tags: ["Python", "TensorFlow", "scikit-learn", "IoT"],
      color: "primary"
    },
    {
      icon: TrendingUp,
      image: projectForecasting,
      title: "Sales Forecasting Analysis",
      description: "Improved forecast accuracy by 15% using statistical modeling. Optimized inventory and resource allocation.",
      impact: "15% Accuracy Improvement",
      tags: ["Python", "Time-Series Analysis"],
      color: "cyan-400"
    },
    {
      icon: Bot,
      image: projectChatbot,
      title: "AI-Powered Chatbot",
      description: "Built chatbot for customer support reducing response time by 30%. Implemented using NLP and TensorFlow.",
      impact: "30% Faster Response",
      tags: ["Python", "TensorFlow", "NLP"],
      color: "primary"
    },
    {
      icon: BarChart,
      image: projectFinancial,
      title: "Financial Data Analysis Dashboard",
      description: "Created interactive dashboard for real-time financial data visualization and business intelligence.",
      impact: "Real-Time Insights",
      tags: ["Power BI", "Data Analysis"],
      color: "cyan-400"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 ai-grid opacity-20" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-cyan-400/20 border border-primary/30 backdrop-blur-sm mb-4">
            <Brain className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium">Real-World AI Solutions</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient glow">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            AI and data analysis projects with measurable business impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow animate-fade-in-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  
                  {/* Impact Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r from-${project.color}/90 to-${project.color}/70 backdrop-blur-sm border-${project.color}/30 text-white font-bold px-4 py-2 shadow-lg`}>
                      {project.impact}
                    </Badge>
                  </div>
                  
                  {/* Icon */}
                  <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-${project.color}/20 to-${project.color}/10 border border-${project.color}/30 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}>
                    <Icon className={`w-7 h-7 text-${project.color}`} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gradient group-hover:glow transition-all">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-105"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* View Details Button - Appears on Hover */}
                  <div className={`transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary transition-all group/btn"
                    >
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
