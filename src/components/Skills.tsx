import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["JavaScript", "TypeScript", "Python", "PHP"],
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600"
    },
    {
      title: "Web Technologies",
      icon: <Code className="h-6 w-6" />,
      skills: ["HTML5", "CSS3"],
      gradient: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600"
    },
    {
      title: "Frameworks & Tools", 
      icon: <Settings className="h-6 w-6" />,
      skills: ["React.js", "Node.js", "Express.js", "Django", "Bootstrap", "Tailwind CSS"],
      gradient: "from-purple-500/10 to-violet-500/10",
      iconColor: "text-purple-600"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase", "Supabase"],
      gradient: "from-indigo-500/10 to-blue-500/10",
      iconColor: "text-indigo-600"
    },
    {
      title: "SEO & Digital Marketing",
      icon: <Search className="h-6 w-6" />,
      skills: ["Technical SEO", "Local SEO (Nepal-focused)", "Video SEO", "Google Analytics 4", "Google Search Console", "Core Web Vitals", "SEMrush"],
      gradient: "from-orange-500/10 to-amber-500/10",
      iconColor: "text-orange-600"
    },
    {
      title: "Security & Analytics",
      icon: <Shield className="h-6 w-6" />,
      skills: ["Web Security", "Burp Suite", "Penetration Testing", "Data Analytics", "Performance Optimization", "Git/GitHub"],
      gradient: "from-red-500/10 to-pink-500/10",
      iconColor: "text-red-600"
    },
    {
      title: "Design & Content",
      icon: <Palette className="h-6 w-6" />,
      skills: ["UI/UX Design", "Content Strategy", "WordPress", "Responsive Design", "Brand Development"],
      gradient: "from-teal-500/10 to-cyan-500/10",
      iconColor: "text-teal-600"
    }
  ];

  const specializations = [
    {
      title: "SEO Expert in Nepal",
      description: "Specialized in local SEO for businesses in Jhapa, Birtamode and across Nepal",
      icon: <Search className="h-6 w-6" />
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development with modern technologies",
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Digital Marketing Consultant", 
      description: "Data-driven strategies for online growth and visibility",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: "Web Security Specialist",
      description: "Vulnerability assessment and security optimization for websites",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in web development, SEO, digital marketing, and security testing.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`relative overflow-hidden bg-gradient-to-br ${category.gradient} border hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className={`${category.iconColor} p-2 rounded-lg bg-background/80`}>
                    {category.icon}
                  </div>
                  <span className="text-lg font-bold">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                      <span className="font-medium text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            My <span className="text-gradient">Specializations</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border-2">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {spec.icon}
                  </div>
                  <h4 className="font-bold mb-3 text-lg">{spec.title}</h4>
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