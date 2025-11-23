import { Mail, MapPin, Phone, Linkedin, Send, User, MessageSquare } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Open email client with pre-filled data
      const mailtoLink = `mailto:ziadghazal90@gmail.com?subject=${encodeURIComponent(
        data.subject
      )}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )}`;
      window.location.href = mailtoLink;
      
      toast.success("Opening your email client...");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 ai-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient glow">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's discuss your project
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 animate-fade-in animation-delay-200">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-primary" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...register("name")}
                    className="transition-all duration-300 focus:border-primary"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...register("email")}
                    className="transition-all duration-300 focus:border-primary"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    {...register("subject")}
                    className="transition-all duration-300 focus:border-primary"
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    {...register("message")}
                    className="transition-all duration-300 focus:border-primary resize-none"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-cyan-400 hover:shadow-glow transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in animation-delay-400">
              <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/10 to-cyan-400/10 border-primary/20">
                <h3 className="text-xl font-bold mb-4">Availability</h3>
                <p className="text-muted-foreground mb-6">
                  I'm available for freelance projects and full-time opportunities in AI and data analysis.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-foreground font-medium">Available for new projects</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
