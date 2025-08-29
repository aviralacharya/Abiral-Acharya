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
      title: "Web Development & SEO Integration",
      icon: <Code className="h-6 w-6" />,
      description: "Crafting modern websites with built-in SEO optimization from the ground up",
      skills: [
        { name: "HTML5 & Semantic Markup", level: 95, desc: "SEO-friendly structure" },
        { name: "JavaScript & Performance", level: 88, desc: "Fast, crawlable sites" },
        { name: "Tailwind CSS & Bootstrap", level: 90, desc: "Responsive design" },
        { name: "Technical SEO Implementation", level: 93, desc: "Schema, meta tags" }
      ],
      gradient: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-600"
    },
    {
      title: "Backend Systems & Security", 
      icon: <Server className="h-6 w-6" />,
      description: "Robust server architecture with security-first approach and SEO considerations",
      skills: [
        { name: "Node.js & Express", level: 82, desc: "Scalable APIs" },
        { name: "Database Optimization", level: 85, desc: "MySQL, SQLite tuning" },
        { name: "Security Testing", level: 78, desc: "Penetration testing" },
        { name: "Server-side SEO", level: 87, desc: "SSR, sitemaps" }
      ],
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-600"
    },
    {
      title: "Data Analytics & Digital Strategy",
      icon: <BarChart3 className="h-6 w-6" />,
      description: "Data-driven insights for better user experience and search performance",
      skills: [
        { name: "Google Analytics 4", level: 92, desc: "Advanced tracking" },
        { name: "Search Console Mastery", level: 94, desc: "Performance monitoring" },
        { name: "Core Web Vitals", level: 89, desc: "Speed optimization" },
        { name: "Conversion Analytics", level: 86, desc: "ROI measurement" }
      ],
      gradient: "from-purple-500/20 to-violet-500/20",
      iconColor: "text-purple-600"
    },
    {
      title: "SEO & Digital Marketing Excellence",
      icon: <Search className="h-6 w-6" />,
      description: "Comprehensive SEO strategies that drive organic growth and visibility",
      skills: [
        { name: "Local SEO Nepal", level: 96, desc: "Jhapa & nationwide" },
        { name: "Technical SEO Audits", level: 94, desc: "Deep site analysis" },
        { name: "Content Strategy", level: 91, desc: "Keyword optimization" },
        { name: "Link Building", level: 88, desc: "Authority development" }
      ],
      gradient: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-600"
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
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`relative overflow-hidden bg-gradient-to-br ${category.gradient} border-0 hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}>
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
              <CardHeader className="relative z-10 pb-4">
                <CardTitle className="flex items-start space-x-4">
                  <div className={`${category.iconColor} p-3 rounded-xl bg-background/50 backdrop-blur-sm`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-semibold text-base">{skill.name}</span>
                        <p className="text-sm text-muted-foreground mt-1">{skill.desc}</p>
                      </div>
                      <Badge variant="secondary" className="ml-3 font-bold">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-background/50"
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