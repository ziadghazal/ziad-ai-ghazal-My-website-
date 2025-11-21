import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, Bot, Wrench, BarChart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Wrench,
      title: "Predictive Maintenance Model",
      description: "Deployed ML model reducing equipment downtime by 20%. Integrated with IoT sensors for real-time predictive analytics.",
      tags: ["Python", "TensorFlow", "scikit-learn", "IoT"]
    },
    {
      icon: TrendingUp,
      title: "Sales Forecasting Analysis",
      description: "Improved forecast accuracy by 15% using statistical modeling. Optimized inventory and resource allocation.",
      tags: ["Python", "Time-Series Analysis"]
    },
    {
      icon: Bot,
      title: "AI-Powered Chatbot",
      description: "Built chatbot for customer support reducing response time by 30%. Implemented using NLP and TensorFlow.",
      tags: ["Python", "TensorFlow", "NLP"]
    },
    {
      icon: BarChart,
      title: "Financial Data Analysis Dashboard",
      description: "Created interactive dashboard for real-time financial data visualization and business intelligence.",
      tags: ["Power BI", "Data Analysis"]
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Real-world AI and data analysis projects with measurable impact
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 bg-card hover:shadow-glow transition-all duration-300 border-primary/20 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-secondary/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
