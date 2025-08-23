import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Award, Lock, ShoppingCart, GraduationCap, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "BCAPoint",
      description: "WordPress-based educational platform providing comprehensive resources for BCA students including notes, assignments, and study materials.",
      icon: <GraduationCap className="h-6 w-6" />,
      technologies: ["WordPress", "PHP", "MySQL", "SEO"],
      category: "Educational Platform",
      status: "Live",
      features: [
        "Educational resource management",
        "Student community features", 
        "SEO optimized content",
        "Responsive design"
      ]
    },
    {
      title: "MeroSampati",
      description: "Collaborative prototype blockchain-based web application for secure land buying and selling, designed for government sector use.",
      icon: <Lock className="h-6 w-6" />,
      technologies: ["Blockchain", "React", "Node.js", "Smart Contracts"],
      category: "Blockchain Application",
      status: "Prototype",
      features: [
        "Blockchain-based transactions",
        "Government sector integration",
        "Secure land registry",
        "Minimized transaction errors"
      ]
    },
    {
      title: "AI Driven E-Commerce Store",
      description: "Full-stack e-commerce platform with AI integration, developed as BCA 6th semester final project with complete frontend and backend.",
      icon: <ShoppingCart className="h-6 w-6" />,
      technologies: ["SERN Stack", "AI Integration", "MySQL", "Express.js"],
      category: "E-Commerce Platform",
      status: "Academic Project",
      features: [
        "AI-powered recommendations",
        "Full-stack architecture",
        "Payment integration",
        "Inventory management"
      ]
    },
    {
      title: "BullSaga (AI Stock Prediction)",
      description: "Collaborative AI-driven stock market prediction tool using machine learning algorithms to analyze market trends.",
      icon: <TrendingUp className="h-6 w-6" />,
      technologies: ["Machine Learning", "Python", "Data Analysis", "APIs"],
      category: "AI/ML Application",
      status: "Development",
      features: [
        "ML-based predictions",
        "Real-time market data",
        "Trend analysis",
        "Collaborative development"
      ]
    }
  ];

  const securityProjects = [
    {
      title: "TU Website Security Testing",
      type: "Logical Testing",
      description: "Conducted comprehensive logical vulnerability assessment of Tribhuvan University website and reported findings responsibly."
    },
    {
      title: "Tenets Technical Testing", 
      type: "Technical Testing",
      description: "Performed technical security testing to identify vulnerabilities and potential security weaknesses."
    }
  ];

  const achievements = [
    {
      title: "KU HackFest 2024 - Blockchain Track Winner",
      team: "Team Mechi Bandits",
      description: "Led project coordination and contributed to development of winning blockchain solution",
      icon: <Award className="h-5 w-5" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of applications, platforms, and solutions I've built
          </p>
        </div>

        {/* Main Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-smooth group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary">{project.icon}</div>
                    <div>
                      <CardTitle className="group-hover:text-primary transition-smooth">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{project.category}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={project.status === 'Live' ? 'default' : 'secondary'}
                    className={project.status === 'Live' ? 'bg-success text-success-foreground' : ''}
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features */}
                <div>
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Testing Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Security Testing Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {securityProjects.map((project, index) => (
              <Card key={index} className="border-orange-200 hover:shadow-md transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Lock className="h-5 w-5 text-orange-500" />
                    <span className="font-semibold">{project.title}</span>
                  </div>
                  <Badge variant="outline" className="mb-3 text-orange-600 border-orange-300">
                    {project.type}
                  </Badge>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Recent Achievements</h3>
          <div className="max-w-2xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-hero border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="text-primary mt-1">{achievement.icon}</div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-sm font-medium text-muted-foreground mb-2">
                        {achievement.team}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;