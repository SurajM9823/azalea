import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  Heart,
  Eye,
  Star,
  Trophy,
  Clock
} from "lucide-react";

const AboutPage = () => {
  const achievements = [
    { icon: Trophy, title: "Excellence Award 2023", description: "Recognized for outstanding academic performance" },
    { icon: Star, title: "Best Faculty Team", description: "Awarded for dedicated teaching methodology" },
    { icon: Award, title: "100% Pass Rate", description: "Consistent academic success for all students" },
    { icon: Users, title: "5000+ Alumni", description: "Successful graduates across various fields" }
  ];

  const values = [
    {
      icon: Eye,
      title: "Excellence",
      description: "We strive for the highest standards in education, continuously improving our methods and outcomes."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We maintain honesty, transparency, and ethical practices in all our educational endeavors."
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "We welcome students from all backgrounds and provide equal opportunities for growth and success."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace modern teaching methods and technology to enhance the learning experience."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Azalea +2 College</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four decades of educational excellence, nurturing minds and shaping futures since 1984.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Rich Heritage</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Established in 1984, Azalea +2 College has been a cornerstone of quality education 
                    in Biratnagar for nearly four decades. What started as a small educational institution 
                    has grown into one of the most respected colleges in the region.
                  </p>
                  <p>
                    Our journey began with a simple vision: to provide accessible, high-quality education 
                    that prepares students not just for examinations, but for life itself. Over the years, 
                    we have consistently evolved our teaching methods, infrastructure, and programs to meet 
                    the changing needs of our students and society.
                  </p>
                  <p>
                    Today, we stand proud as an institution that has produced thousands of successful 
                    graduates who are making their mark in various fields across Nepal and beyond.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">1984</div>
                    <div className="text-sm text-muted-foreground">Established</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5000+</div>
                    <div className="text-sm text-muted-foreground">Alumni</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">39+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Pass Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
              Our <span className="text-primary">Mission & Vision</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide comprehensive, quality education that empowers students with the knowledge, 
                  skills, and values necessary for their personal and professional growth. We are committed 
                  to fostering critical thinking, creativity, and ethical leadership in an inclusive and 
                  supportive learning environment.
                </p>
              </Card>

              <Card className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as a leading educational institution that shapes responsible global 
                  citizens and future leaders. We envision a world where our graduates contribute 
                  meaningfully to society, drive positive change, and uphold the highest standards 
                  of integrity and excellence.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
              Our <span className="text-primary">Achievements</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <achievement.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h4 className="font-bold mb-2 text-foreground">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Join Our <span className="text-primary">Legacy</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of our continuing story of excellence. Start your journey with us and 
              become the next generation of leaders and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/admissions">Apply for Admission</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/courses">Explore Our Programs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;