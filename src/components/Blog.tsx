import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ExternalLink, BookOpen, TrendingUp } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Complete Guide to Technical SEO in 2025",
      excerpt: "Master the fundamentals of technical SEO including Core Web Vitals, schema markup, and crawlability optimization for better search rankings.",
      category: "SEO",
      readTime: "8 min read",
      date: "2024-01-15",
      featured: true,
      tags: ["SEO", "Technical", "Web Performance"]
    },
    {
      title: "Building Secure Web Applications: A Developer's Guide",
      excerpt: "Learn essential security practices for web development including OWASP guidelines, secure coding practices, and vulnerability assessment.",
      category: "Security",
      readTime: "12 min read", 
      date: "2024-01-10",
      featured: false,
      tags: ["Security", "Web Development", "OWASP"]
    },
    {
      title: "Full-Stack JavaScript: From Concept to Deployment",
      excerpt: "A comprehensive guide to building modern web applications using the SERN stack with deployment strategies and best practices.",
      category: "Development",
      readTime: "15 min read",
      date: "2024-01-05",
      featured: false,
      tags: ["JavaScript", "Full-Stack", "Deployment"]
    },
    {
      title: "Leadership Lessons from Organizing Nepal's First Hackathon",
      excerpt: "Insights and challenges faced while organizing Jhapa's first hackathon and building tech communities in developing regions.",
      category: "Leadership",
      readTime: "6 min read",
      date: "2023-12-20",
      featured: false,
      tags: ["Leadership", "Community", "Hackathon"]
    }
  ];

  const categories = [
    { name: "All Posts", count: 12, active: true },
    { name: "SEO", count: 4 },
    { name: "Development", count: 5 },
    { name: "Security", count: 2 },
    { name: "Leadership", count: 1 }
  ];

  const stats = [
    { label: "Articles Written", value: "12+", icon: <BookOpen className="h-5 w-5" /> },
    { label: "Monthly Readers", value: "2.5K+", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Topics Covered", value: "8", icon: <BookOpen className="h-5 w-5" /> }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights on web development, SEO, security, and tech leadership
          </p>
        </div>

        {/* Blog Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <div className="text-primary mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              size="sm"
              className={category.active ? "gradient-primary text-white" : ""}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <Card key={index} className="bg-gradient-hero border-primary/20 hover:shadow-lg transition-smooth">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-smooth cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center lg:text-right">
                    <Button className="gradient-primary text-white hover:shadow-glow transition-smooth">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Article
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Card key={index} className="hover:shadow-lg hover:scale-105 transition-smooth cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Read
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs px-2 py-0">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-card border-primary/20">
            <CardContent className="p-8">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Want to Read More?</h3>
              <p className="text-muted-foreground mb-6">
                Visit my full blog to explore all articles on web development, SEO strategies, 
                security practices, and tech leadership insights.
              </p>
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:shadow-glow transition-smooth"
                onClick={() => window.open('https://blog.aviralacharya.com.np/', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Full Blog
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;