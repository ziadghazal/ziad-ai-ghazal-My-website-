import { Code, Database, Brain, Sparkles, Zap, Target, TrendingUp, Users } from "lucide-react";
import { Card } from "./ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Expert in TensorFlow, scikit-learn, NLP, and Computer Vision",
      color: "primary"
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Skilled in predictive modeling, clustering, and statistical analysis",
      color: "cyan-400"
    },
    {
      icon: Code,
      title: "Development",
      description: "Proficient in Python, Power BI, and modern data tools",
      color: "primary"
    }
  ];

  const stats = [
    { icon: Target, value: "20%", label: "Downtime Reduction", color: "primary" },
    { icon: TrendingUp, value: "15%", label: "Forecast Accuracy", color: "cyan-400" },
    { icon: Users, value: "30%", label: "Support Automation", color: "primary" },
    { icon: Zap, value: "92%", label: "Detection Accuracy", color: "cyan-400" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 ai-grid opacity-20" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-cyan-400/20 border border-primary/30 backdrop-blur-sm mb-4 animate-fade-in">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium">Software Engineer & AI Specialist</span>
            <Brain className="w-4 h-4 text-cyan-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold animate-fade-in-up animation-delay-200">
            About <span className="text-gradient glow">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-400">
            Transforming data into actionable insights with AI-driven solutions
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="group p-8 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-500 border-primary/20 hover:border-primary/40 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${item.color}/20 to-${item.color}/10 border border-${item.color}/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 text-${item.color} group-hover:animate-pulse`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gradient">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Professional Summary Card */}
        <Card className="p-10 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm border-primary/30 mb-16 max-w-5xl mx-auto animate-fade-in-up animation-delay-600 hover:shadow-glow transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/20 flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gradient">Professional Summary</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a Software Engineer with a Bachelor's degree in Computer Science and hands-on experience 
            in Artificial Intelligence and Data Analysis. I specialize in building and deploying machine 
            learning models, NLP chatbots, and predictive systems using Python, TensorFlow, and scikit-learn. 
            My work has delivered measurable results: reducing equipment downtime by 20%, improving sales 
            forecast accuracy by 15%, and automating customer support by 30%. I'm passionate about using 
            AI and data-driven solutions to solve real-world problems and drive business value.
          </p>
        </Card>

        {/* Stats Grid */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
            Impact & Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${800 + idx * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${stat.color}/20 to-${stat.color}/10 border border-${stat.color}/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                  <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground leading-tight">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
