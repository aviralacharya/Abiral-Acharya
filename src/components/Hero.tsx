import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6 animate-in fade-in slide-in-from-top duration-700">
            <span className="text-lg text-muted-foreground font-medium">Hey there, 👋</span>
          </div>

          {/* Name & Title */}
          <div className="mb-8 animate-in fade-in slide-in-from-top duration-700 delay-200">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              I'm <span className="text-gradient">Abiral Acharya</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Search Engine Optimizer & Web Developer
            </p>
            <p className="text-lg text-muted-foreground">
              From Birtamode, Jhapa • Former Secretary of BCA Association MMC
            </p>
          </div>

          {/* Description */}
          <div className="mb-12 animate-in fade-in slide-in-from-top duration-700 delay-400">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Motivated BCA student passionate about full-stack development, DevOps, SEO, and cybersecurity. 
              Skilled in building responsive web apps and performing security testing. Quick learner with strong 
              leadership and project management skills.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in fade-in slide-in-from-top duration-700 delay-600">
            <Button 
              size="lg" 
              className="gradient-primary text-white hover:shadow-glow transition-smooth px-8"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              onClick={() => scrollToSection('#projects')}
            >
              <Download className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-in fade-in slide-in-from-top duration-700 delay-800">
            <a 
              href="mailto:abiralacharya80@gmail.com" 
              className="p-3 rounded-full bg-card hover:bg-card-hover transition-smooth shadow-md hover:shadow-glow group"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a 
              href="https://github.com/abiralacharya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-card-hover transition-smooth shadow-md hover:shadow-glow group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a 
              href="https://linkedin.com/in/abiralacharya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-card-hover transition-smooth shadow-md hover:shadow-glow group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a 
              href="https://aviralacharya.com.np" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-card-hover transition-smooth shadow-md hover:shadow-glow group"
            >
              <Globe className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce animate-in fade-in duration-700 delay-1000">
            <button 
              onClick={() => scrollToSection('#about')}
              className="p-2 rounded-full text-muted-foreground hover:text-primary transition-smooth"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;