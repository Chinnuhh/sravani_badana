import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  MapPin,
  Clock,
  CheckCircle,
  User,
  Briefcase
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Sravani! I'm interested in a website. Can you help me with a quote?"
  );

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9888596888",
      link: "tel:+919888596888",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email",
      value: "mail2chinnu1437@gmail.com",
      link: "mailto:mail2chinnu1437@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Quick Response",
      link: `https://wa.me/919888596888?text=${whatsappMessage}`,
      color: "from-green-400 to-green-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      link: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
            Let's Work <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's create something amazing.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-semibold text-foreground flex items-center">
                  <Send className="w-6 h-6 text-primary mr-3" />
                  Send Me a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell me about your project and I'll get back to you with a detailed proposal.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Full Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="pl-10 border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email Address *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="pl-10 border-border focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-foreground font-medium">
                        Project Type
                      </Label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                        >
                          <option value="">Select project type</option>
                          <option value="business-website">Business Website</option>
                          <option value="ecommerce">E-commerce Store</option>
                          <option value="portfolio">Portfolio Website</option>
                          <option value="blog">Blog/News Site</option>
                          <option value="custom">Custom Application</option>
                          <option value="redesign">Website Redesign</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-foreground font-medium">
                        Budget Range
                      </Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                      >
                        <option value="">Select budget range</option>
                        <option value="10k-25k">₹10,000 - ₹25,000</option>
                        <option value="25k-50k">₹25,000 - ₹50,000</option>
                        <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                        <option value="100k+">₹1,00,000+</option>
                        <option value="discuss">Let's Discuss</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, requirements, timeline, and any specific features you need..."
                      required
                      rows={6}
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="gradient" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full text-lg py-6"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <a 
                      href={info.link}
                      className="flex items-center space-x-4 text-decoration-none"
                      target={info.title === "WhatsApp" ? "_blank" : undefined}
                      rel={info.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div>
                        <div className="font-semibold text-foreground">{info.title}</div>
                        <div className="text-muted-foreground text-sm">{info.value}</div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick WhatsApp CTA */}
            <Card className="bg-gradient-primary border-0 shadow-glow text-center">
              <CardContent className="p-8">
                <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Need Quick Help?
                </h3>
                <p className="text-white/90 mb-6 text-sm">
                  Chat with me directly on WhatsApp for instant responses
                </p>
                <Button 
                  variant="outline"
                  asChild
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  <a 
                    href={`https://wa.me/919888596888?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start WhatsApp Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-white border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-foreground">Response Time</h4>
                </div>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>WhatsApp: Within 1 hour</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Email: Within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Project quotes: Within 48 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;