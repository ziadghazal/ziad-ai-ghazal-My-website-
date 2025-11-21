import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python"]
    },
    {
      category: "Machine Learning",
      skills: ["TensorFlow", "scikit-learn", "NLP", "Computer Vision", "Predictive Modeling", "Recommendation Systems"]
    },
    {
      category: "Data Analysis",
      skills: ["Regression", "Classification", "Clustering", "Hypothesis Testing"]
    },
    {
      category: "Data Visualization",
      skills: ["Power BI", "Matplotlib", "Seaborn"]
    },
    {
      category: "AI Deployment",
      skills: ["IoT Integration", "Process Automation", "End-to-End AI Solutions"]
    },
    {
      category: "Tools",
      skills: ["Git", "Jupyter", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Comprehensive expertise in AI, machine learning, and data analysis
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:shadow-glow transition-all duration-300 border-primary/20"
            >
              <h3 className="text-xl font-bold mb-4 text-gradient">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
