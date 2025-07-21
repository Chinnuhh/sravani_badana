import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, MessageSquare } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Sravani! I'm interested in a website. Can you help me with a quote?"
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-medium" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="font-display font-bold text-xl text-foreground">
                Sravani<span className="text-primary">.</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <Button 
                variant="gradient" 
                size="sm"
                asChild
                className="ml-4"
              >
                <a 
                  href={`https://wa.me/919888596888?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Get Quote
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                scrolled 
                  ? "text-foreground hover:bg-muted" 
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 py-2"
                >
                  {item.label}
                </button>
              ))}
              
              <Button 
                variant="gradient" 
                size="sm" 
                className="w-full mt-4"
                asChild
              >
                <a 
                  href={`https://wa.me/919888596888?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Get Quote on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button 
          variant="premium"
          size="lg"
          asChild
          className="shadow-glow rounded-full animate-glow-pulse"
        >
          <a 
            href={`https://wa.me/919888596888?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Get Quote
          </a>
        </Button>
      </div>
    </>
  );
};

export default Navigation;