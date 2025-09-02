import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Award, Phone, Mail, Globe } from "lucide-react";
import profilePhoto from "@/assets/SEO-Person-in-Nepal-Abiral-Acharya.jpg";

const About = () => {
  const highlights = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Birtamode, Jhapa, Nepal"
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Education", 
      value: "BCA Student at MMC"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Leadership",
      value: "Former Secretary, BCA Association"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Email",
      value: "abiralacharya80@gmail.com",
      href: "mailto:abiralacharya80@gmail.com"
    },
    {
      icon: <Phone className="h-4 w-4" />,
      label: "Phone", 
      value: "(+977) 9824055745",
      href: "tel:+9779824055745"
    },
    {
      icon: <Globe className="h-4 w-4" />,
      label: "Website",
      value: "aviralacharya.com.np",
      href: "https://aviralacharya.com.np"
    }
  ];

  const expertise = [
    "Advanced SEO & SEM Strategies",
    "Local SEO for Nepal Businesses", 
    "Technical SEO & Core Web Vitals",
    "E-A-T & Content Optimization",
    "Voice Search & AI SEO",
    "Google Analytics & Search Console",
    "Semantic Search Optimization",
    "Full-Stack Web Development"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions and optimizing web presence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Info */}
          <div className="space-y-8">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img 
                  src={profilePhoto} 
                  alt="Abiral Acharya - SEO Expert & Web Developer" 
                  className="w-48 h-48 rounded-full object-cover border-4 border-primary/20 shadow-elegant"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Nepal's Leading SEO Expert & Digital Strategist</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As the premier SEO expert in Nepal and top SEO consultant in Birtamode, Jhapa, I specialize in 
                cutting-edge search engine optimization strategies that drive real results. My expertise spans 
                technical SEO, local SEO for Nepalese businesses, content optimization, and modern SEO trends 
                including AI-powered search, voice search optimization, and E-A-T (Expertise, Authoritativeness, 
                Trustworthiness) enhancement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I combine advanced SEO knowledge with full-stack web development skills to create high-performing, 
                search-optimized websites. My data-driven approach focuses on Core Web Vitals, semantic search 
                optimization, and implementing Google's latest algorithm updates to ensure sustainable rankings and 
                increased organic traffic for businesses across Nepal.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Get In Touch</h4>
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-smooth group"
                    >
                      <div className="text-primary">{contact.icon}</div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">{contact.label}</p>
                        <p className="group-hover:text-primary transition-smooth">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Expertise & Stats */}
          <div className="space-y-8">
            {/* Expertise Areas */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-gradient mb-2">5+</div>
                  <p className="text-sm text-muted-foreground">Major Projects</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-gradient mb-2">2+</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-gradient mb-2">1</div>
                  <p className="text-sm text-muted-foreground">Hackathon Win</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-gradient mb-2">85%</div>
                  <p className="text-sm text-muted-foreground">SEO Expertise</p>
                </CardContent>
              </Card>
            </div>

            {/* Notable Achievement */}
            <Card className="bg-gradient-hero border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 text-primary">Latest Achievement</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Team Mechi Bandits</strong> - Blockchain track winners at KU HackFest 2024. 
                  Contributed to project coordination and development of innovative blockchain solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;