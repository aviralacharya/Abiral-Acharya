import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Server, 
  Database, 
  Search, 
  Shield, 
  BarChart3,
  Palette,
  Settings
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Tailwind CSS", level: 88 }
      ],
      color: "text-blue-500"
    },
    {
      title: "Backend Development", 
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "SERN Stack", level: 65 }
      ],
      color: "text-green-500"
    },
    {
      title: "Database & Tools",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "SQLite", level: 70 },
        { name: "Git/GitHub", level: 85 }
      ],
      color: "text-purple-500"
    },
    {
      title: "SEO & Digital Marketing",
      icon: <Search className="h-5 w-5" />,
      skills: [
        { name: "Technical SEO", level: 92 },
        { name: "Local SEO", level: 90 },
        { name: "Google Analytics 4", level: 88 },
        { name: "Google Search Console", level: 90 },
        { name: "SEMrush/Ahrefs", level: 85 },
        { name: "Core Web Vitals", level: 87 }
      ],
      color: "text-orange-500"
    }
  ];

  const tools = [
    { name: "WordPress", category: "CMS", icon: "🌐" },
    { name: "Burp Suite", category: "Security", icon: "🛡️" },
    { name: "Google Analytics", category: "Analytics", icon: "📊" },
    { name: "Ahrefs", category: "SEO", icon: "🔍" },
    { name: "vidIQ", category: "Video SEO", icon: "📹" },
    { name: "Git/GitHub", category: "Version Control", icon: "📝" }
  ];

  const specializations = [
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern technologies",
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Search Engine Optimization",
      description: "Technical SEO, keyword research, and content optimization strategies",
      icon: <Search className="h-6 w-6" />
    },
    {
      title: "Cybersecurity Testing", 
      description: "Vulnerability assessment and penetration testing for web applications",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Data Analytics",
      description: "Web analytics, performance tracking, and data-driven decision making",
      icon: <BarChart3 className="h-6 w-6" />
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical expertise gained through hands-on projects and continuous learning
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className={category.color}>{category.icon}</span>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center hover:shadow-md hover:scale-105 transition-smooth cursor-default">
                <CardContent className="p-4">
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <p className="font-medium text-sm">{tool.name}</p>
                  <p className="text-xs text-muted-foreground">{tool.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Specializations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="text-center hover:shadow-lg hover:scale-105 transition-smooth">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {spec.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{spec.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;