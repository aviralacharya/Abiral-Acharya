import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, Eye, Share2, BookOpen, TrendingUp, Search, Target, BarChart, Users } from "lucide-react";

const BlogPage = () => {
  const seoBlogs = [
    {
      id: 1,
      title: "Complete SEO Guide for Nepali Businesses - Local SEO in 2024",
      slug: "complete-seo-guide-nepal-local-businesses-2024",
      excerpt: "Comprehensive SEO strategies specifically designed for Nepali businesses. Learn how to dominate local search results in Kathmandu, Pokhara, Birtamode, and across Nepal.",
      content: `
        <h2>Introduction to SEO in Nepal</h2>
        <p>Search Engine Optimization (SEO) has become crucial for businesses in Nepal to establish their digital presence. As the best SEO expert in Nepal, I've helped numerous businesses in Birtamode, Jhapa, and across the country achieve top rankings.</p>
        
        <h3>Why Local SEO Matters in Nepal</h3>
        <p>With over 18 million internet users in Nepal, local SEO has become essential for businesses to connect with their target audience. Whether you're in Kathmandu, Pokhara, or smaller cities like Birtamode, implementing proper SEO strategies can significantly boost your visibility.</p>
        
        <h3>Key SEO Strategies for Nepali Market</h3>
        <ul>
          <li><strong>Google My Business Optimization:</strong> Essential for local businesses in Nepal</li>
          <li><strong>Nepali Keyword Research:</strong> Understanding how Nepalis search online</li>
          <li><strong>Mobile-First Approach:</strong> Most Nepali users browse on mobile devices</li>
          <li><strong>Local Citations:</strong> Building authority in Nepali business directories</li>
        </ul>
        
        <h3>Technical SEO for Nepal</h3>
        <p>As an SEO consultant, I've observed that many Nepali websites lack proper technical foundation. Key areas to focus on include:</p>
        <ul>
          <li>Website Speed Optimization (crucial for slow internet connections)</li>
          <li>Schema Markup for local businesses</li>
          <li>SSL certificates and security</li>
          <li>Mobile responsiveness</li>
        </ul>
      `,
      category: "Local SEO",
      readTime: "12 min read",
      date: "2024-01-20",
      author: "Abiral Acharya",
      views: 2850,
      featured: true,
      tags: ["SEO Nepal", "Local SEO", "Birtamode", "Jhapa", "Digital Marketing Nepal"],
      metaDescription: "Complete SEO guide for Nepali businesses. Learn local SEO strategies from Nepal's best SEO expert. Dominate search results in Kathmandu, Pokhara, Birtamode."
    },
    {
      id: 2,
      title: "How to Rank #1 on Google Nepal - SEO Expert's Proven Strategy",
      slug: "rank-number-1-google-nepal-seo-strategy",
      excerpt: "Step-by-step guide on achieving top rankings on Google Nepal. Proven strategies used by the best SEO consultant in Nepal to get businesses to #1 position.",
      content: `
        <h2>The Path to #1 Rankings in Nepal</h2>
        <p>As an SEO analyst with years of experience in the Nepali market, I've developed proven strategies that consistently deliver #1 rankings for my clients across Nepal.</p>
        
        <h3>Understanding Google's Algorithm in Nepal</h3>
        <p>Google treats Nepal as a unique market with specific ranking factors:</p>
        <ul>
          <li>Local relevance signals</li>
          <li>Mobile-first indexing priority</li>
          <li>Regional language preferences</li>
          <li>User behavior patterns in Nepal</li>
        </ul>
        
        <h3>My Proven 5-Step Strategy</h3>
        <ol>
          <li><strong>Comprehensive Keyword Research:</strong> Focus on "SEO expert Nepal", "best SEO person", "SEO consultant Birtamode"</li>
          <li><strong>On-Page Optimization:</strong> Perfect title tags, meta descriptions, and content structure</li>
          <li><strong>Technical SEO Foundation:</strong> Site speed, security, and mobile optimization</li>
          <li><strong>Content Marketing:</strong> Regular, valuable content targeting Nepali audience</li>
          <li><strong>Link Building:</strong> Quality backlinks from Nepali websites and international sources</li>
        </ol>
      `,
      category: "SEO Strategy",
      readTime: "15 min read",
      date: "2024-01-18",
      author: "Abiral Acharya",
      views: 3240,
      featured: false,
      tags: ["Google Rankings", "SEO Expert", "Nepal SEO", "Digital Marketing"],
      metaDescription: "Learn how to rank #1 on Google Nepal with proven SEO strategies from Nepal's top SEO expert. Get your website to the top position."
    },
    {
      id: 3,
      title: "SEO Services in Birtamode, Jhapa - Complete Digital Marketing Guide",
      slug: "seo-services-birtamode-jhapa-digital-marketing",
      excerpt: "Professional SEO services in Birtamode, Jhapa. Learn why businesses choose me as their SEO person for digital marketing success in eastern Nepal.",
      content: `
        <h2>Why Birtamode Needs Professional SEO Services</h2>
        <p>Birtamode, being a major commercial hub in Jhapa district, has tremendous potential for digital growth. As the leading SEO person in Birtamode, I've helped local businesses tap into this potential.</p>
        
        <h3>Birtamode Business Landscape</h3>
        <p>The digital transformation in Birtamode presents unique opportunities:</p>
        <ul>
          <li>Growing e-commerce sector</li>
          <li>Increasing smartphone penetration</li>
          <li>Rising demand for online services</li>
          <li>Cross-border trade opportunities with India</li>
        </ul>
        
        <h3>My SEO Services in Birtamode</h3>
        <ul>
          <li><strong>Local SEO Optimization:</strong> Google My Business, local citations</li>
          <li><strong>Website Audit & Optimization:</strong> Complete technical SEO analysis</li>
          <li><strong>Content Strategy:</strong> Nepali and English content optimization</li>
          <li><strong>Competitor Analysis:</strong> Understanding local market dynamics</li>
          <li><strong>Social Media Integration:</strong> Facebook, Instagram marketing for Nepali audience</li>
        </ul>
        
        <h3>Success Stories from Birtamode</h3>
        <p>I've successfully helped businesses in Birtamode achieve:</p>
        <ul>
          <li>300% increase in organic traffic</li>
          <li>Top 3 rankings for competitive keywords</li>
          <li>Significant improvement in local visibility</li>
          <li>Higher conversion rates and ROI</li>
        </ul>
      `,
      category: "Local Services",
      readTime: "10 min read",
      date: "2024-01-15",
      author: "Abiral Acharya",
      views: 1890,
      featured: false,
      tags: ["Birtamode SEO", "Jhapa", "Local Services", "Eastern Nepal"],
      metaDescription: "Professional SEO services in Birtamode, Jhapa. Expert SEO consultant helping businesses grow with digital marketing in eastern Nepal."
    },
    {
      id: 4,
      title: "Technical SEO Audit Checklist - Nepal SEO Expert's Guide",
      slug: "technical-seo-audit-checklist-nepal-expert-guide",
      excerpt: "Comprehensive technical SEO audit checklist used by Nepal's best SEO analyst. Identify and fix technical issues affecting your website's performance.",
      content: `
        <h2>Complete Technical SEO Audit for Nepali Websites</h2>
        <p>As an SEO expert specializing in the Nepali market, I've developed this comprehensive checklist to help businesses identify and fix technical SEO issues.</p>
        
        <h3>Website Speed & Performance</h3>
        <p>Given Nepal's internet infrastructure challenges, website speed is crucial:</p>
        <ul>
          <li>Page load time under 3 seconds</li>
          <li>Image optimization and compression</li>
          <li>Minimize HTTP requests</li>
          <li>Use Content Delivery Network (CDN)</li>
        </ul>
        
        <h3>Mobile Optimization Checklist</h3>
        <ul>
          <li>Mobile-responsive design</li>
          <li>Touch-friendly navigation</li>
          <li>Optimized font sizes</li>
          <li>Fast mobile loading speed</li>
        </ul>
        
        <h3>SEO Technical Foundation</h3>
        <ul>
          <li><strong>SSL Certificate:</strong> HTTPS implementation</li>
          <li><strong>XML Sitemap:</strong> Proper sitemap submission</li>
          <li><strong>Robots.txt:</strong> Crawl optimization</li>
          <li><strong>Schema Markup:</strong> Structured data implementation</li>
        </ul>
      `,
      category: "Technical SEO",
      readTime: "8 min read",
      date: "2024-01-12",
      author: "Abiral Acharya",
      views: 2150,
      featured: false,
      tags: ["Technical SEO", "Website Audit", "SEO Checklist", "Nepal"],
      metaDescription: "Complete technical SEO audit checklist from Nepal's top SEO expert. Fix technical issues and improve your website's search performance."
    },
    {
      id: 5,
      title: "Content Marketing for SEO in Nepal - Expert Strategies",
      slug: "content-marketing-seo-nepal-expert-strategies",
      excerpt: "Master content marketing for SEO in Nepal. Learn how the best SEO consultant creates content that ranks and converts for Nepali audiences.",
      content: `
        <h2>Content Marketing Excellence in Nepal</h2>
        <p>Content marketing is the backbone of successful SEO in Nepal. As an SEO consultant, I've seen how quality content can transform a business's online presence.</p>
        
        <h3>Understanding Nepali Content Preferences</h3>
        <p>Nepali audiences have unique content consumption patterns:</p>
        <ul>
          <li>Preference for visual content</li>
          <li>Mobile-first content consumption</li>
          <li>Local language integration</li>
          <li>Cultural relevance importance</li>
        </ul>
        
        <h3>Content Strategy Framework</h3>
        <ol>
          <li><strong>Keyword Research:</strong> Target "SEO expert Nepal", "digital marketing Nepal"</li>
          <li><strong>Content Planning:</strong> Educational, promotional, and entertaining content mix</li>
          <li><strong>Content Creation:</strong> High-quality, original content</li>
          <li><strong>Content Optimization:</strong> SEO best practices implementation</li>
          <li><strong>Content Distribution:</strong> Multi-channel content promotion</li>
        </ol>
        
        <h3>Content Types That Work in Nepal</h3>
        <ul>
          <li>How-to guides in Nepali context</li>
          <li>Case studies of Nepali businesses</li>
          <li>Local market insights</li>
          <li>Industry news and updates</li>
          <li>Video content for mobile users</li>
        </ul>
      `,
      category: "Content Marketing",
      readTime: "11 min read",
      date: "2024-01-10",
      author: "Abiral Acharya",
      views: 1750,
      featured: false,
      tags: ["Content Marketing", "SEO Content", "Nepal Marketing", "Digital Strategy"],
      metaDescription: "Master content marketing for SEO in Nepal with expert strategies. Learn from Nepal's best SEO consultant how to create content that ranks."
    },
    {
      id: 6,
      title: "E-commerce SEO in Nepal - Complete Guide for Online Stores",
      slug: "ecommerce-seo-nepal-complete-guide-online-stores",
      excerpt: "Comprehensive e-commerce SEO guide for Nepali online stores. Learn from Nepal's top SEO expert how to optimize your online store for better rankings.",
      content: `
        <h2>E-commerce SEO Success in Nepal</h2>
        <p>E-commerce is booming in Nepal, and SEO plays a crucial role in online store success. As an SEO analyst, I've optimized numerous Nepali e-commerce websites.</p>
        
        <h3>E-commerce SEO Challenges in Nepal</h3>
        <ul>
          <li>Limited payment gateway options</li>
          <li>Delivery logistics challenges</li>
          <li>Consumer trust issues</li>
          <li>Mobile commerce preferences</li>
        </ul>
        
        <h3>Product Page Optimization</h3>
        <ul>
          <li><strong>Product Titles:</strong> Include brand, model, and key features</li>
          <li><strong>Product Descriptions:</strong> Detailed, unique descriptions</li>
          <li><strong>Images:</strong> High-quality, optimized images with alt tags</li>
          <li><strong>Reviews:</strong> Customer review integration</li>
        </ul>
        
        <h3>Category Page SEO</h3>
        <ul>
          <li>Optimized category descriptions</li>
          <li>Proper URL structure</li>
          <li>Breadcrumb navigation</li>
          <li>Filter and sorting optimization</li>
        </ul>
        
        <h3>Technical E-commerce SEO</h3>
        <ul>
          <li>Site speed optimization</li>
          <li>Mobile-first design</li>
          <li>SSL certificate implementation</li>
          <li>Structured data for products</li>
        </ul>
      `,
      category: "E-commerce SEO",
      readTime: "13 min read",
      date: "2024-01-08",
      author: "Abiral Acharya",
      views: 2890,
      featured: false,
      tags: ["E-commerce", "Online Store SEO", "Nepal E-commerce", "Digital Sales"],
      metaDescription: "Complete e-commerce SEO guide for Nepali online stores. Expert strategies from Nepal's top SEO consultant to boost online sales."
    }
  ];

  const categories = [
    { name: "All Posts", count: seoBlogs.length, active: true },
    { name: "Local SEO", count: 2 },
    { name: "SEO Strategy", count: 2 },
    { name: "Technical SEO", count: 1 },
    { name: "Content Marketing", count: 1 },
    { name: "E-commerce SEO", count: 1 }
  ];

  const stats = [
    { label: "SEO Articles", value: "25+", icon: <BookOpen className="h-5 w-5" /> },
    { label: "Monthly Readers", value: "5.2K+", icon: <Eye className="h-5 w-5" /> },
    { label: "SEO Topics", count: "12", icon: <Target className="h-5 w-5" /> },
    { label: "Success Stories", value: "50+", icon: <TrendingUp className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>SEO Expert Nepal Blog - Abiral Acharya | Best SEO Consultant Birtamode</title>
        <meta name="description" content="Expert SEO blog by Abiral Acharya - Nepal's top SEO consultant. Learn SEO strategies, local SEO tips, and digital marketing insights for Nepali businesses." />
        <meta name="keywords" content="SEO expert Nepal, SEO consultant Nepal, SEO person Nepal, best SEO person, SEO expert Birtamode, SEO person Jhapa, digital marketing Nepal" />
        <meta name="author" content="Abiral Acharya" />
        <link rel="canonical" href="https://blog.aviralacharya.com.np/" />
        <meta property="og:title" content="SEO Expert Nepal Blog - Abiral Acharya" />
        <meta property="og:description" content="Expert SEO insights and strategies for Nepali businesses from Nepal's top SEO consultant." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blog.aviralacharya.com.np/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "SEO Expert Nepal Blog",
            "description": "Expert SEO insights and strategies for Nepali businesses",
            "url": "https://blog.aviralacharya.com.np/",
            "author": {
              "@type": "Person",
              "name": "Abiral Acharya",
              "jobTitle": "SEO Expert",
              "worksFor": "Freelance SEO Consultant"
            }
          })}
        </script>
      </head>

      {/* Blog Header */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SEO Expert <span className="text-gradient">Nepal Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert insights on SEO, digital marketing, and web development from Nepal's leading SEO consultant. 
              Helping businesses in Birtamode, Jhapa, and across Nepal dominate search rankings.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-primary text-primary-foreground px-4 py-2">
                <Search className="h-4 w-4 mr-2" />
                SEO Expert Nepal
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Target className="h-4 w-4 mr-2" />
                Local SEO Specialist
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <BarChart className="h-4 w-4 mr-2" />
                Digital Marketing Guru
              </Badge>
            </div>
          </div>

          {/* Blog Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-card/50 border-primary/20">
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
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
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
        <div className="mb-16">
          {seoBlogs.filter(post => post.featured).map((post, index) => (
            <article key={index}>
              <Card className="bg-gradient-hero border-primary/20 hover:shadow-lg transition-smooth">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge className="bg-primary text-primary-foreground">Featured Post</Badge>
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Eye className="h-4 w-4" />
                          <span>{post.views} views</span>
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-smooth cursor-pointer">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-center lg:text-right space-y-4">
                      <Button className="gradient-primary text-white hover:shadow-glow transition-smooth w-full">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Read Full Article
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Post
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {seoBlogs.filter(post => !post.featured).map((post, index) => (
            <article key={index}>
              <Card className="h-full hover:shadow-lg hover:scale-105 transition-smooth cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs px-2 py-0">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    <Button variant="default" size="sm" className="flex-1 gradient-primary text-white">
                      <BookOpen className="h-3 w-3 mr-1" />
                      Read Article
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto bg-card border-primary/20">
            <CardContent className="p-8">
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Stay Updated with SEO Insights</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Get the latest SEO strategies, tips, and insights directly in your inbox. 
                Join 1000+ Nepali business owners who trust my expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-input bg-background rounded-md"
                />
                <Button className="gradient-primary text-white hover:shadow-glow transition-smooth">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam, unsubscribe anytime. Join Nepal's growing SEO community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;