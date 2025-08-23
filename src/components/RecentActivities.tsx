import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, Code, Award, Users, BookOpen, ExternalLink } from "lucide-react";

const RecentActivities = () => {
  const activities = [
    {
      title: "KU HackFest 2024 - Blockchain Track Winner",
      description: "Team Mechi Bandits won the blockchain track with an innovative decentralized solution for supply chain management.",
      date: "2024-01-20",
      type: "Achievement",
      status: "Completed",
      icon: <Award className="h-5 w-5" />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      link: "#projects"
    },
    {
      title: "Published: Complete Guide to Technical SEO",
      description: "Released comprehensive article covering Core Web Vitals, schema markup, and crawlability optimization techniques.",
      date: "2024-01-15",
      type: "Blog",
      status: "Published",
      icon: <BookOpen className="h-5 w-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      link: "#blog"
    },
    {
      title: "MeroSampati Blockchain App Development",
      description: "Currently developing government-focused blockchain platform for secure land transactions with enhanced security features.",
      date: "2024-01-10",
      type: "Project",
      status: "In Progress",
      icon: <Code className="h-5 w-5" />,
      color: "text-green-500",
      bgColor: "bg-green-50",
      link: "#projects"
    },
    {
      title: "Completed Security Testing: TU Website",
      description: "Conducted comprehensive security assessment and responsibly reported logical vulnerabilities to university IT team.",
      date: "2024-01-05",
      type: "Security",
      status: "Completed",
      icon: <CheckCircle className="h-5 w-5" />,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      link: "#projects"
    },
    {
      title: "Organized Community Workshop: Web Security",
      description: "Led hands-on workshop for BCA students on web application security and ethical hacking fundamentals.",
      date: "2023-12-28",
      type: "Community",
      status: "Completed",
      icon: <Users className="h-5 w-5" />,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      link: "#experience"
    },
    {
      title: "BCAPoint Platform Enhancement",
      description: "Added new features including student forums, assignment tracking, and improved SEO optimization for better discoverability.",
      date: "2023-12-20",
      type: "Project",
      status: "Updated",
      icon: <Code className="h-5 w-5" />,
      color: "text-green-500",
      bgColor: "bg-green-50",
      link: "#projects"
    }
  ];

  const quickStats = [
    { label: "Active Projects", value: "3", color: "text-green-500" },
    { label: "Completed Tasks", value: "8", color: "text-blue-500" },
    { label: "Community Events", value: "2", color: "text-orange-500" },
    { label: "Published Articles", value: "4", color: "text-purple-500" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="text-gradient">Activities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Latest projects, achievements, and contributions to the tech community
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {quickStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-smooth">
              <CardContent className="p-4">
                <div className={`text-3xl font-bold mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activities Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-smooth group cursor-pointer"
                onClick={() => scrollToSection(activity.link)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-full ${activity.bgColor} ${activity.color} mt-1`}>
                      {activity.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-smooth">
                            {activity.title}
                          </h3>
                          <div className="flex items-center space-x-3 mt-1">
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${activity.color} border-current`}
                            >
                              {activity.type}
                            </Badge>
                            <Badge 
                              variant={activity.status === 'Completed' ? 'default' :
                                     activity.status === 'In Progress' ? 'secondary' : 'outline'}
                              className="text-xs"
                            >
                              {activity.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(activity.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {activity.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">
                          {activity.status === 'In Progress' && (
                            <span className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                              Currently working on this
                            </span>
                          )}
                          {activity.status === 'Completed' && (
                            <span className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                              Successfully completed
                            </span>
                          )}
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-hero border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Follow my journey as I continue building innovative solutions, contributing to open source, 
                and sharing knowledge with the tech community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
                  onClick={() => window.open('https://github.com/abiralacharya', '_blank')}
                >
                  <Code className="h-4 w-4 mr-2" />
                  Follow on GitHub
                </Badge>
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
                  onClick={() => scrollToSection('#blog')}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Read Latest Posts
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;