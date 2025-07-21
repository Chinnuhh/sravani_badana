import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Palette, 
  Rocket, 
  Zap, 
  Globe, 
  Smartphone,
  Brain,
  Database
} from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "React", icon: Code2, level: 95 },
    { name: "Tailwind CSS", icon: Palette, level: 90 },
    { name: "TypeScript", icon: Code2, level: 85 },
    { name: "Firebase", icon: Database, level: 80 },
    { name: "UI/UX Design", icon: Palette, level: 88 },
    { name: "Responsive Design", icon: Smartphone, level: 92 }
  ];

  const tools = [
    "React", "Tailwind CSS", "TypeScript", "Firebase", "Vercel", 
    "Lucide Icons", "Figma", "Git", "VS Code", "Photoshop"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Hey there, I'm Sravani! ✨
              </h3>
              
              <div className="prose prose-lg text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I'm a front-end developer with a deep love for clean design and smart, user-focused solutions.
                </p>
                
                <p className="text-lg leading-relaxed">
                  My journey into web development wasn't just about learning code, it was about learning how to bring ideas to life online. I believe a website should be more than just pretty pixels. It should tell your brand's story, guide your visitors effortlessly, and convert curiosity into action.
                </p>
                
                <p className="text-lg leading-relaxed">
                  I've helped businesses transform their digital presence through sleek, mobile-friendly websites built with React, styled to perfection with Tailwind CSS, and powered by features like AI chat assistants and WhatsApp integrations.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Whether it's a simple landing page or a fully interactive website, I design with intention, blending creativity and logic to craft experiences that feel personal, smooth, and smart.
                </p>
                
                <p className="text-lg leading-relaxed font-semibold">
                  Let's build something that not only looks great, but actually works for your business.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Rocket className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">Fast Loading</div>
                  <div className="text-sm text-muted-foreground">Optimized Performance</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">AI Powered</div>
                  <div className="text-sm text-muted-foreground">Smart Integrations</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Smartphone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">Mobile First</div>
                  <div className="text-sm text-muted-foreground">Responsive Design</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">SEO Ready</div>
                  <div className="text-sm text-muted-foreground">Search Optimized</div>
                </CardContent>
              </Card>
            </div>

            {/* Tools & Technologies */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground flex items-center">
                <Zap className="w-5 h-5 text-primary mr-2" />
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm bg-white/50 hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Chart */}
          <div className="space-y-8 animate-scale-in">
            <h4 className="text-xl font-semibold text-foreground text-center">
              Technical Skills
            </h4>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-primary border-0 shadow-glow text-center">
              <CardContent className="p-8">
                <h5 className="text-xl font-semibold text-white mb-2">
                  Ready to Start Your Project?
                </h5>
                <p className="text-white/90 mb-4">
                  Let's create something amazing together!
                </p>
                <a 
                  href="tel:+919888596888"
                  className="inline-flex items-center text-white hover:text-primary-light transition-colors duration-300"
                >
                  <span className="font-semibold">📞 +91-9888596888</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;