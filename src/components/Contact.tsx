import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ziadghazal90@gmail.com",
      href: "mailto:ziadghazal90@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+966 533 236 186",
      href: "tel:+966533236186"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Riyadh, Saudi Arabia",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ziad-ghazal-ai",
      href: "https://www.linkedin.com/in/ziad-ghazal-ai"
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Let's discuss how I can help with your AI and data analysis needs
        </p>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-center text-muted-foreground mb-4">
                Available for freelance projects and full-time opportunities
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-cyan-400 hover:shadow-glow transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:ziadghazal90@gmail.com'}
                >
                  Send Email
                  <Mail className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
