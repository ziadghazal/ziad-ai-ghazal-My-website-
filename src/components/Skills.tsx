import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Brain, Sparkles, Zap, Code, Database, LineChart, Cpu, Network } from "lucide-react";

const Skills = () => {
  const aiSkills = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep expertise in ML algorithms and neural networks",
      skills: ["TensorFlow", "scikit-learn", "PyTorch", "Neural Networks"],
      color: "primary"
    },
    {
      icon: Sparkles,
      title: "Natural Language Processing",
      description: "Advanced NLP for text analysis and generation",
      skills: ["BERT", "GPT", "Text Classification", "Sentiment Analysis"],
      color: "cyan-400"
    },
    {
      icon: Cpu,
      title: "Computer Vision",
      description: "Image recognition and processing systems",
      skills: ["OpenCV", "Image Classification", "Object Detection", "CNNs"],
      color: "primary"
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Data-driven forecasting and insights",
      skills: ["Time Series", "Regression", "Forecasting", "Statistical Modeling"],
      color: "cyan-400"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust data pipelines",
      skills: ["ETL", "Data Warehousing", "Big Data", "SQL"],
      color: "primary"
    },
    {
      icon: Network,
      title: "AI Deployment",
      description: "End-to-end AI solution implementation",
      skills: ["MLOps", "Model Serving", "IoT Integration", "Cloud Deployment"],
      color: "cyan-400"
    }
  ];

  const tools = [
    { name: "Python", icon: Code },
    { name: "Power BI", icon: LineChart },
    { name: "Git", icon: Network },
    { name: "Jupyter", icon: Database },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 ai-grid opacity-30" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-cyan-400/20 border border-primary/30 backdrop-blur-sm mb-4">
            <Brain className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium">AI & Machine Learning Expertise</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="text-gradient glow">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive expertise in cutting-edge AI technologies and data science
          </p>
        </div>

        {/* AI Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {aiSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index}
                className="group p-8 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-500 border-primary/20 hover:border-primary/40 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${skill.color}/20 to-${skill.color}/10 border border-${skill.color}/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 text-${skill.color}`} />
                </div>
                
                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-3 text-gradient">{skill.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {skill.description}
                </p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-105"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Tools Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Tools & <span className="text-gradient">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, idx) => {
              const ToolIcon = tool.icon;
              return (
                <div
                  key={idx}
                  className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${600 + idx * 100}ms` }}
                >
                  <ToolIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
