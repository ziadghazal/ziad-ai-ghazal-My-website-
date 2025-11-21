import { Mail, Linkedin, MapPin } from "lucide-react";
import ziadLogo from "@/assets/ziad-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img 
              src={ziadLogo} 
              alt="Ziad Ghazal Logo"
              className="w-32 h-32 object-contain mb-2"
            />
            <p className="text-sm text-muted-foreground">
              AI & Data Analysis Expert | Software Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#experience" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:ziadghazal90@gmail.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                ziadghazal90@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/ziad-ghazal-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Riyadh, Saudi Arabia
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ziad Hesham Ghazal. All rights reserved. | Built with AI-Powered Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
