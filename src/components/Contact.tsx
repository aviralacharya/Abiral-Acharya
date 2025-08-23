import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Globe, Send, MessageCircle, Calendar, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "abiralacharya80@gmail.com",
      href: "mailto:abiralacharya80@gmail.com",
      description: "Send me an email for inquiries"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "(+977) 9824055745",
      href: "tel:+9779824055745",
      description: "Call me for urgent matters"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      label: "Website",
      value: "aviralacharya.com.np",
      href: "https://aviralacharya.com.np",
      description: "Visit my current portfolio"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Birtamode, Jhapa, Nepal",
      href: "#",
      description: "Based in Eastern Nepal"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/abiralacharya",
      description: "Check out my code"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/abiralacharya",
      description: "Professional network"
    },
    {
      name: "Blog",
      icon: <Globe className="h-5 w-5" />,
      href: "http://blog.aviralacharya.com.np",
      description: "Read my articles"
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Full-stack web applications using modern technologies",
      availability: "Available"
    },
    {
      title: "SEO Consultation",
      description: "Technical SEO, keyword research, and optimization strategies",
      availability: "Available"
    },
    {
      title: "Security Testing",
      description: "Vulnerability assessment and penetration testing",
      availability: "Limited"
    },
    {
      title: "Tech Mentoring",
      description: "Guidance for students and junior developers",
      availability: "Available"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
    const body = encodeURIComponent(
      `Hi Abiral,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:abiralacharya80@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full gradient-primary text-white hover:shadow-glow transition-smooth"
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Services Available */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Services Available
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start justify-between p-3 bg-secondary/50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                      <Badge 
                        variant={service.availability === 'Available' ? 'default' : 'secondary'}
                        className={service.availability === 'Available' ? 'bg-success text-success-foreground' : ''}
                      >
                        {service.availability}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-start space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-smooth group"
                  >
                    <div className="text-primary mt-1">{contact.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium group-hover:text-primary transition-smooth">
                        {contact.label}
                      </h4>
                      <p className="text-muted-foreground">{contact.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {contact.description}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Me Online</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-secondary/50 hover:border-primary/30 transition-smooth group"
                    >
                      <div className="text-primary">{social.icon}</div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-smooth">
                          {social.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {social.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Info */}
            <Card className="bg-gradient-hero border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  feel free to call or message me directly.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-success font-medium">Currently available for new projects</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;