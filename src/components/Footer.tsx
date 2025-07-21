import { Button } from "@/components/ui/button";
import { 
  Code, 
  Heart, 
  Linkedin, 
  Github, 
  Mail, 
  Phone,
  MessageSquare,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Sravani! I'm interested in a website. Can you help me with a quote?"
  );

  const quickLinks = [
    { label: "About Me", href: "about" },
    { label: "Services", href: "services" },
    { label: "Features", href: "features" },
    { label: "Contact", href: "contact" },
  ];

  const services = [
    "UI/UX Design",
    "Frontend Development", 
    "AI Integration",
    "Mobile Optimization",
    "SEO & Analytics"
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-foreground">
                    Sravani Badana
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Web Designer & Developer
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Creating modern, responsive websites that help Indian businesses 
                grow online with cutting-edge technology and beautiful design.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground text-lg">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground text-lg">Services</h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="text-muted-foreground"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground text-lg">Get in Touch</h4>
              
              <div className="space-y-4">
                <a 
                  href="tel:+919888596888"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">+91-9888596888</div>
                    <div className="text-sm">Call anytime</div>
                  </div>
                </a>

                <a 
                  href="mailto:mail2chinnu1437@gmail.com"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">mail2chinnu1437@gmail.com</div>
                    <div className="text-sm">Send an email</div>
                  </div>
                </a>

                <a 
                  href={`https://wa.me/919888596888?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm">Quick response</div>
                  </div>
                </a>
              </div>

              {/* CTA Button */}
              <Button 
                variant="gradient" 
                className="w-full"
                onClick={() => scrollToSection('contact')}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© {currentYear} Sravani Badana. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in India</span>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-sm text-muted-foreground">
                Built with React + Tailwind CSS
              </span>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={scrollToTop}
                className="rounded-full"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;