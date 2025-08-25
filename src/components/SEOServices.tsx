import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  TrendingUp, 
  Globe, 
  BarChart3, 
  Target, 
  Smartphone,
  Brain,
  Shield,
  CheckCircle
} from "lucide-react";

const SEOServices = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Technical SEO Audit",
      description: "Comprehensive analysis of Core Web Vitals, site architecture, and technical optimization for better search performance.",
      features: ["Core Web Vitals Optimization", "Site Speed Enhancement", "Mobile-First Indexing", "Schema Markup Implementation"],
      popular: true
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Local SEO Nepal",
      description: "Specialized local SEO services for businesses in Nepal, Jhapa, and Birtamode to dominate local search results.",
      features: ["Google My Business Optimization", "Local Citations Building", "Review Management", "Local Content Strategy"],
      popular: false
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Voice Search Optimization",
      description: "Modern SEO strategies focusing on AI-powered search engines and voice search optimization for future-ready rankings.",
      features: ["Voice Search Optimization", "AI Content Optimization", "Semantic Search Strategies", "Featured Snippets Targeting"],
      popular: true
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "E-A-T Enhancement",
      description: "Build Expertise, Authoritativeness, and Trustworthiness signals to improve search rankings and credibility.",
      features: ["Content Authority Building", "Expert Author Profiles", "Trust Signal Implementation", "Reputation Management"],
      popular: false
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "SEO Analytics & Reporting",
      description: "Data-driven SEO reporting with actionable insights using Google Analytics 4, Search Console, and advanced tools.",
      features: ["Performance Tracking", "Keyword Ranking Reports", "ROI Analysis", "Competitive Intelligence"],
      popular: false
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile SEO Optimization",
      description: "Mobile-first SEO strategies ensuring optimal performance on mobile devices and improved mobile search rankings.",
      features: ["Mobile Page Speed", "AMP Implementation", "Mobile User Experience", "App Store Optimization"],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="seo-services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Expert <span className="text-gradient">SEO Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Comprehensive SEO solutions designed to boost your online visibility and drive organic traffic. 
            Specializing in modern SEO techniques that deliver measurable results for businesses across Nepal.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary">SEO Expert Nepal</Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary">Local SEO Specialist</Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary">Technical SEO</Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary">SEO Consultant Birtamode</Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className={`relative h-full ${service.popular ? 'border-primary shadow-glow' : ''}`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-primary text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-primary">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant={service.popular ? "default" : "outline"} 
                  className={`w-full ${service.popular ? 'gradient-primary text-white' : ''}`}
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero p-8 rounded-2xl border border-primary/20">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Dominate Search Results in Nepal?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your SEO goals and create a customized strategy to improve your search rankings, 
              drive organic traffic, and grow your business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-white px-8"
                onClick={scrollToContact}
              >
                <Target className="mr-2 h-5 w-5" />
                Get Free SEO Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Shield className="mr-2 h-5 w-5" />
                View SEO Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOServices;