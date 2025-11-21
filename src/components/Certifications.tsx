import { Award, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: "Master Artificial Intelligence",
      issuer: "Great Learning Platform",
      date: "2025",
      logo: "🤖",
      skills: ["AI Algorithms", "Machine Learning", "Deep Learning", "Neural Networks"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "AI for Business Innovation: From GenAI to POCs",
      issuer: "Great Learning Platform",
      date: "2025",
      logo: "💡",
      skills: ["Generative AI", "Business Innovation", "POC Development"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Prompt Engineering for AI Systems",
      issuer: "One Million Expert Initiative",
      date: "2025",
      logo: "✍️",
      skills: ["Prompt Design", "AI Systems", "ChatGPT", "LLM Optimization"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Data Visualization with Power BI",
      issuer: "Great Learning Platform",
      date: "2025",
      logo: "📊",
      skills: ["Power BI", "Data Viz", "Dashboards", "Business Intelligence"],
      color: "from-orange-500/20 to-yellow-500/20"
    },
    {
      title: "Analytics in Marketing",
      issuer: "Great Learning Platform",
      date: "2024",
      logo: "📈",
      skills: ["Marketing Analytics", "Customer Insights", "Data-Driven Marketing"],
      color: "from-pink-500/20 to-rose-500/20"
    },
    {
      title: "ALX Alice-AI Career Essentials",
      issuer: "ALX",
      date: "2024",
      logo: "🎓",
      skills: ["AI Career", "Professional Development", "AI Ethics"],
      color: "from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "Data Science and Data Analysis",
      issuer: "CLS Learning Solutions",
      date: "2023",
      logo: "🔬",
      skills: ["Data Science", "Statistical Analysis", "Python", "Data Mining"],
      color: "from-teal-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Professional Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Certified Excellence
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Validated expertise in cloud computing, data engineering, and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 animate-fade-in border-primary/20 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-5xl p-4 rounded-xl bg-gradient-to-br ${cert.color}`}>
                    {cert.logo}
                  </div>
                  <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "7+", label: "Certifications" },
            { value: "4", label: "Platforms" },
            { value: "100%", label: "Pass Rate" },
            { value: "2025", label: "Latest Cert" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;