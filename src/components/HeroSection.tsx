import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Sparkles } from "lucide-react";
import sravaniHeadshot from "@/assets/sravani-headshot.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-white/80">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide">FREELANCE WEB DESIGNER & DEVELOPER</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight">
                Sravani
                <br />
                <span className="bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
                  Badana
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 font-medium">
                Designs that <span className="text-primary-light font-semibold">Speak</span>. 
                Code that <span className="text-primary-light font-semibold">Converts</span>.
              </p>
              
              <p className="text-lg text-white/80 max-w-2xl">
                I help Indian brands create modern, conversion-ready websites using React, Tailwind, 
                and smart features like AI assistants.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => scrollToSection('portfolio')}
                className="text-lg px-8 py-4"
              >
                <Palette className="w-5 h-5" />
                View Portfolio
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                <Code className="w-5 h-5" />
                Get a Quote
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-white/70">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-white/70">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src={sravaniHeadshot} 
                alt="Sravani Badana - Web Designer & Developer"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-strong hover:shadow-glow transition-all duration-500 animate-float"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-medium animate-float" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center space-x-2 text-primary">
                  <Code className="w-4 h-4" />
                  <span className="text-sm font-semibold">React Expert</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-medium animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2 text-primary">
                  <Palette className="w-4 h-4" />
                  <span className="text-sm font-semibold">UI/UX Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;