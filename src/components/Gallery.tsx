import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Award, Users, Code, Trophy, Briefcase } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "KU HackFest 2024 Winners",
      description: "Team Mechi Bandits winning the blockchain track at KU HackFest 2024",
      category: "Achievement",
      icon: <Trophy className="h-4 w-4" />,
      image: "https://images.unsplash.com/photo-1531537571171-a707bf2683da?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Web Development Project",
      description: "Modern responsive website with advanced SEO optimization",
      category: "Development",
      icon: <Code className="h-4 w-4" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "SEO Strategy Session",
      description: "Conducting SEO audit and strategy planning for local business",
      category: "SEO Consulting",
      icon: <Briefcase className="h-4 w-4" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Team Collaboration",
      description: "Working with diverse teams on innovative digital solutions",
      category: "Teamwork",
      icon: <Users className="h-4 w-4" />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Security Testing Workshop",
      description: "Conducting penetration testing and security assessment",
      category: "Security",
      icon: <Award className="h-4 w-4" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Digital Marketing Campaign",
      description: "Successful local SEO campaign for Nepalese businesses",
      category: "Marketing",
      icon: <Camera className="h-4 w-4" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    }
  ];

  const categories = ["All", "Achievement", "Development", "SEO Consulting", "Teamwork", "Security", "Marketing"];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A visual journey through my projects, achievements, and professional experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover:shadow-elegant transition-smooth border-primary/10 hover:border-primary/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    <span className="text-primary mr-1">{item.icon}</span>
                    {item.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Want to see more?</h3>
              <p className="text-muted-foreground mb-4">
                Check out my complete portfolio and recent projects on GitHub and LinkedIn
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="px-4 py-2">
                  <Camera className="h-4 w-4 mr-2" />
                  View Portfolio
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Code className="h-4 w-4 mr-2" />
                  GitHub Projects
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;