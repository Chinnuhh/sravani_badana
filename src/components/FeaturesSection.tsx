import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Code, 
  Palette, 
  MessageSquare, 
  Smartphone, 
  Search, 
  Zap,
  Layout,
  Boxes,
  Bot,
  MousePointer,
  Gauge
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Layout,
      title: "Modern Hero + Grid Layout",
      description: "Eye-catching hero sections with responsive grid layouts that adapt to any screen size",
      badge: "Design",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Boxes,
      title: "Lucide Icons & Tailwind Animations",
      description: "Beautiful, consistent icons with smooth animations that enhance user experience",
      badge: "UI/UX",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Bot,
      title: "AI Assistant + WhatsApp Integration",
      description: "Intelligent chatbots with WhatsApp API for seamless customer communication",
      badge: "AI",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Code,
      title: "React Hooks + State Handling",
      description: "Efficient state management and modern React patterns for optimal performance",
      badge: "Development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      title: "SEO-Ready & Optimized Imports",
      description: "Search engine optimized with clean code structure and optimized asset loading",
      badge: "SEO",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Responsive Design",
      description: "Designed for mobile devices first, then scaled up for desktop experiences",
      badge: "Responsive",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const benefits = [
    {
      icon: Gauge,
      title: "Lightning Fast Performance",
      description: "Optimized code and assets ensure your website loads in under 3 seconds"
    },
    {
      icon: MousePointer,
      title: "Interactive User Experience",
      description: "Engaging animations and interactions that keep visitors engaged"
    },
    {
      icon: Zap,
      title: "Scalable Architecture",
      description: "Built to grow with your business - easily add new features and pages"
    },
    {
      icon: MessageSquare,
      title: "Enhanced Communication",
      description: "Integrated chat systems and contact forms for better customer connection"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
            Project <span className="bg-gradient-primary bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every website I build includes these powerful features and capabilities
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                    {feature.badge}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-2" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <div className="bg-white rounded-2xl p-12 shadow-medium">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">
              Why Choose My Development Approach?
            </h3>
            <p className="text-xl text-muted-foreground">
              I focus on delivering value, not just features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h4>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Showcase */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
            Built with Modern Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="font-semibold text-foreground">React</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="font-semibold text-foreground">Tailwind</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-semibold text-foreground">Firebase</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="font-semibold text-foreground">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;