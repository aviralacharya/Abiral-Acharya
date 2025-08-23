import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/abiralacharya'
    },
    {
      name: 'LinkedIn', 
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://linkedin.com/in/abiralacharya'
    },
    {
      name: 'Website',
      icon: <Globe className="h-5 w-5" />,
      href: 'https://aviralacharya.com.np'
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-4 w-4" />,
      text: 'abiralacharya80@gmail.com',
      href: 'mailto:abiralacharya80@gmail.com'
    },
    {
      icon: <Phone className="h-4 w-4" />,
      text: '(+977) 9824055745', 
      href: 'tel:+9779824055745'
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      text: 'Birtamode, Jhapa, Nepal',
      href: '#'
    }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-gradient mb-4">
              ABIRAL ACHARYA
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              SEO Specialist & Web Developer passionate about creating optimized digital solutions 
              and building tech communities in Nepal.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Development</li>
              <li>SEO Optimization</li>
              <li>Security Testing</li>
              <li>Tech Consulting</li>
              <li>Digital Marketing</li>
              <li>WordPress Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
                >
                  {contact.icon}
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="mt-6">
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="gradient-primary text-white hover:shadow-glow transition-smooth"
                size="sm"
              >
                <Mail className="h-4 w-4 mr-2" />
                Hire Me
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© 2024 Abiral Acharya. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>in Nepal</span>
          </div>

          {/* Additional Links */}
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="http://blog.aviralacharya.com.np" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Blog
            </a>
            <button
              onClick={() => scrollToSection('#about')}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Privacy
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Terms
            </button>
          </div>

          {/* Scroll to Top */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-smooth"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>

        {/* Status Banner */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 text-success rounded-full text-sm">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Available for new projects and collaborations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;