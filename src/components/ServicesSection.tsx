import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Code, 
  Bot, 
  Cloud, 
  Globe, 
  Plus,
  IndianRupee,
  TrendingUp,
  Star,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Modern, user-friendly designs that convert visitors into customers",
      priceRange: "₹5,000 - ₹12,000",
      features: ["Wireframing", "Prototyping", "Brand Guidelines", "Mobile Design"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Fast, responsive websites built with React and modern technologies",
      priceRange: "₹10,000 - ₹25,000",
      features: ["React Development", "Responsive Design", "Performance Optimization", "SEO Ready"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bot,
      title: "AI Assistant Integration",
      description: "Smart chatbots and AI features to enhance user experience",
      priceRange: "₹5,000 - ₹10,000",
      features: ["Chatbot Integration", "WhatsApp API", "Smart Forms", "AI Analytics"],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Cloud,
      title: "Hosting & Deployment",
      description: "Fast, secure hosting with automated deployments and monitoring",
      priceRange: "₹3,000 - ₹8,000",
      features: ["Cloud Hosting", "SSL Certificates", "Auto Backups", "Performance Monitoring"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Complete Website",
      description: "Full 5-6 page website with all features and integrations",
      priceRange: "₹25,000 - ₹50,000",
      features: ["5-6 Pages", "AI Integration", "Mobile Optimized", "SEO Optimized"],
      gradient: "from-orange-500 to-amber-500",
      featured: true
    },
    {
      icon: Plus,
      title: "Optional Add-ons",
      description: "Extra features and customizations for your specific needs",
      priceRange: "₹5,000 - ₹10,000",
      features: ["Custom Animations", "E-commerce", "CMS Integration", "Analytics Setup"],
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingHighlights = [
    { label: "Design + Development", value: "₹30,000" },
    { label: "AI Integration", value: "₹8,000" },
    { label: "Mobile Optimization", value: "₹5,000" },
    { label: "SEO & Analytics", value: "₹7,000" },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
            Services & <span className="bg-gradient-primary bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for professional web solutions
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-500 transform hover:scale-105 ${
                service.featured ? 'ring-2 ring-primary ring-opacity-50' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 right-0 bg-gradient-primary text-white px-4 py-1 rounded-bl-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-semibold">Popular</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                
                <div className="flex items-center space-x-2">
                  <IndianRupee className="w-4 h-4 text-primary" />
                  <span className="text-lg font-bold text-primary">{service.priceRange}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Visualization */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-medium mb-16">
          <h3 className="text-2xl font-display font-semibold text-center text-foreground mb-8">
            Complete Website Package Breakdown
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {pricingHighlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
                <div className="w-full bg-muted rounded-full h-2 mt-3">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${70 + index * 10}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-lg px-6 py-3 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold text-primary">Total Project Value: ₹50,000</span>
            </div>
            <p className="text-muted-foreground">
              For a complete site with AI assistant, WhatsApp API, animations, and mobile-optimized structure
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <Card className="bg-gradient-primary border-0 shadow-glow text-center">
          <CardContent className="p-12">
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              You're Not Just Getting a Website
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              You're getting branding, interactivity, scalability, and a partner who cares about your success.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold">Fast Loading Pages</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold">Smart Chat Integrations</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold">Branded UI</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold">Mobile-First Design</div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary/70 text-lg px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Custom Quote
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;