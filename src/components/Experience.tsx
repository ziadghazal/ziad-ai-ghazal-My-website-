import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Data Analyst & AI Consultant",
      company: "Remote",
      period: "2023 - Present",
      highlights: [
        "Designed and deployed AI-powered chatbots and recommendation systems",
        "Built predictive models with scikit-learn for startups",
        "Delivered actionable insights supporting strategic decisions"
      ]
    },
    {
      title: "Artificial Intelligence Intern",
      company: "AIM Technologies, Cairo, Egypt",
      period: "Jan 2024 - Jun 2024",
      highlights: [
        "Developed NLP models for sentiment analysis and text classification",
        "Built computer vision system achieving 92% object detection accuracy"
      ]
    },
    {
      title: "Data Analyst",
      company: "CLS Learning Solutions, Cairo, Egypt",
      period: "Mar 2023 - May 2023",
      highlights: [
        "Developed customer segmentation models increasing campaign effectiveness by 25%",
        "Applied clustering algorithms to enhance targeting strategies",
        "Presented data insights to cross-functional teams using Power BI"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Building AI solutions and delivering data-driven insights
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-card hover:shadow-glow transition-all duration-300 border-primary/20"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <Badge variant="outline" className="mt-2 md:mt-0 border-primary/50 text-primary">
                  {exp.period}
                </Badge>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
