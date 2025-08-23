import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin, Users, Trophy } from "lucide-react";

const Experience = () => {
  const education = [
    {
      degree: "Bachelor in Computer Application (BCA)",
      institution: "Tribhuvan University, Mechi Multiple Campus",
      location: "Jhapa, Nepal",
      period: "2021 - Present",
      status: "Ongoing",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      degree: "+2 in Computer Science",
      institution: "National Examination Board",
      location: "Nepal",
      period: "2021",
      status: "Completed",
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];

  const leadership = [
    {
      position: "Secretary",
      organization: "BCA Association - Mechi Multiple Campus",
      location: "Jhapa, Nepal",
      period: "2023 - 2024",
      responsibilities: [
        "Organized faculty-led academic initiatives",
        "Coordinated student-focused programs",
        "Managed association activities and events",
        "Facilitated communication between students and faculty"
      ],
      icon: <Award className="h-5 w-5" />
    },
    {
      position: "Hackathon Organizer",
      organization: "Programmers Unknown Battleground",
      location: "Jhapa, Nepal",
      period: "2024",
      responsibilities: [
        "Organized Jhapa's first hackathon event",
        "Coordinated with sponsors and partners",
        "Managed event logistics and participant registration",
        "Promoted coding culture in the local community"
      ],
      icon: <Users className="h-5 w-5" />
    }
  ];

  const achievements = [
    {
      title: "KU HackFest 2024 - Blockchain Track Winner",
      organization: "Team Mechi Bandits",
      date: "2024",
      description: "Won blockchain track at Kathmandu University HackFest 2024. Contributed to project coordination and development of innovative blockchain solutions.",
      type: "Competition Win",
      icon: <Trophy className="h-5 w-5" />
    },
    {
      title: "BCA Association Secretary",
      organization: "Mechi Multiple Campus",
      date: "2023-2024",
      description: "Successfully served as Secretary of BCA Association, organizing multiple academic initiatives and student programs.",
      type: "Leadership Role",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Community Hackathon Organizer",
      organization: "Local Tech Community",
      date: "2024",
      description: "Pioneered and organized the first-ever hackathon in Jhapa district, promoting coding and innovation culture.",
      type: "Community Impact",
      icon: <Users className="h-5 w-5" />
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and leadership experience in building tech communities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-md transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="text-primary mt-1">{edu.icon}</div>
                        <div>
                          <CardTitle className="text-lg">{edu.degree}</CardTitle>
                          <p className="text-muted-foreground font-medium">
                            {edu.institution}
                          </p>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={edu.status === 'Ongoing' ? 'default' : 'secondary'}
                          className={edu.status === 'Ongoing' ? 'bg-primary text-primary-foreground' : ''}
                        >
                          {edu.status}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground mt-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="h-6 w-6 text-primary mr-3" />
              Leadership Experience
            </h3>
            <div className="space-y-6">
              {leadership.map((role, index) => (
                <Card key={index} className="hover:shadow-md transition-smooth">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <div className="text-primary mt-1">{role.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{role.position}</CardTitle>
                        <p className="text-muted-foreground font-medium">
                          {role.organization}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {role.location}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {role.period}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {role.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Notable Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg hover:scale-105 transition-smooth">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {achievement.icon}
                  </div>
                  <Badge variant="outline" className="mb-3 text-xs">
                    {achievement.type}
                  </Badge>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-primary font-medium mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {achievement.date}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
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

export default Experience;