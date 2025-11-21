import { Code, Database, Brain } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Expert in TensorFlow, scikit-learn, NLP, and Computer Vision"
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Skilled in predictive modeling, clustering, and statistical analysis"
    },
    {
      icon: Code,
      title: "Development",
      description: "Proficient in Python, Power BI, and modern data tools"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Software Engineer with practical experience in Artificial Intelligence and Data Analysis
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:shadow-glow transition-all duration-300 border-primary/20"
            >
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
          <p className="text-muted-foreground leading-relaxed">
            I'm a Software Engineer with a Bachelor's degree in Computer Science and hands-on experience 
            in Artificial Intelligence and Data Analysis. I specialize in building and deploying machine 
            learning models, NLP chatbots, and predictive systems using Python, TensorFlow, and scikit-learn. 
            My work has delivered measurable results: reducing equipment downtime by 20%, improving sales 
            forecast accuracy by 15%, and automating customer support by 30%. I'm passionate about using 
            AI and data-driven solutions to solve real-world problems and drive business value.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
