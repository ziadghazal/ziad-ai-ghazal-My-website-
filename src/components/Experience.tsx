import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin, Sparkles, Brain, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Data Analyst & AI Consultant",
      company: "Remote",
      location: "Worldwide",
      period: "2023 - Present",
      icon: Brain,
      color: "primary",
      highlights: [
        "Designed and deployed AI-powered chatbots and recommendation systems",
        "Built predictive models with scikit-learn for startups",
        "Delivered actionable insights supporting strategic decisions"
      ]
    },
    {
      title: "Artificial Intelligence Intern",
      company: "AIM Technologies",
      location: "Cairo, Egypt",
      period: "Jan 2024 - Jun 2024",
      icon: Sparkles,
      color: "cyan-400",
      highlights: [
        "Developed NLP models for sentiment analysis and text classification",
        "Built computer vision system achieving 92% object detection accuracy"
      ]
    },
    {
      title: "Data Analyst",
      company: "CLS Learning Solutions",
      location: "Cairo, Egypt",
      period: "Mar 2023 - May 2023",
      icon: Briefcase,
      color: "primary",
      highlights: [
        "Developed customer segmentation models increasing campaign effectiveness by 25%",
        "Applied clustering algorithms to enhance targeting strategies",
        "Presented data insights to cross-functional teams using Power BI"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 ai-grid opacity-20" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-cyan-400/20 border border-primary/30 backdrop-blur-sm mb-4">
            <Briefcase className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium">Professional Journey</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="text-gradient glow">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building AI solutions and delivering data-driven insights
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cyan-400 to-primary opacity-30 hidden sm:block" />
          
          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`relative animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 z-10 hidden sm:block">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${exp.color}/30 to-${exp.color}/10 border-4 border-background flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow`}>
                      <Icon className={`w-7 h-7 text-${exp.color} animate-pulse`} />
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`md:w-[calc(50%-3rem)] ${isEven ? 'md:ml-0' : 'md:ml-auto'} ml-20 sm:ml-0`}>
                    <Card 
                      className="group p-8 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-500 border-primary/20 hover:border-primary/40 hover:-translate-y-2"
                    >
                      {/* Icon for Mobile */}
                      <div className={`sm:hidden w-14 h-14 rounded-2xl bg-gradient-to-br from-${exp.color}/20 to-${exp.color}/10 border border-${exp.color}/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-7 h-7 text-${exp.color}`} />
                      </div>
                      
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold text-gradient group-hover:glow transition-all">
                            {exp.title}
                          </h3>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <Badge variant="outline" className={`border-${exp.color}/50 text-${exp.color}`}>
                                {exp.period}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Highlights */}
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
                          >
                            <CheckCircle2 className={`w-5 h-5 text-${exp.color} mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform`} />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
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

export default Experience;
