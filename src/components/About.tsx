import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GraduationCap, Users, Award, BookOpen, Target, Heart } from "lucide-react";

const About = () => {
  const galleryImages = [
    { src: "/hero1.jpeg", alt: "Beautiful Azalea College Campus", size: "large" },
    { src: "/girls.jpeg", alt: "Students at Azalea College", size: "medium" }
  ];

  const stats = [
    { number: "1984", label: "Established" },
    { number: "5", label: "Courses Offered" },
    { number: "100%", label: "Scholarship Available" },
    { number: "39+", label: "Years of Excellence" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About <span className="text-primary">Azalea +2 College</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since 1984, Azalea +2 College has been a beacon of educational excellence in Biratnagar, 
            committed to nurturing young minds and preparing them for a successful future.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Sliding Photos & Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Sliding Photos */}
          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 carousel-container">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="absolute inset-0 opacity-0 transition-opacity duration-1000 carousel-slide"
                  style={{
                    animationDelay: `${index * 3}s`,
                    animation: `slideShow 6s infinite ${index * 3}s`
                  }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collapsible Content */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="overview">
                <AccordionTrigger className="text-lg font-semibold">College Overview</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Azalea +2 College has been a cornerstone of educational excellence in Biratnagar since 1984. 
                    We offer comprehensive programs in Science and Management, preparing students for higher education 
                    and professional careers with modern facilities and experienced faculty.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mission">
                <AccordionTrigger className="text-lg font-semibold">Our Mission</AccordionTrigger>
                <AccordionContent>
                  <div className="flex gap-3 mb-3">
                    <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      To provide quality education that empowers students with knowledge, skills, and values 
                      necessary for their personal and professional growth in an ever-changing world.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="vision">
                <AccordionTrigger className="text-lg font-semibold">Our Vision</AccordionTrigger>
                <AccordionContent>
                  <div className="flex gap-3 mb-3">
                    <Heart className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      To be recognized as a leading educational institution that shapes responsible citizens 
                      and future leaders who contribute positively to society and the global community.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="why-choose">
                <AccordionTrigger className="text-lg font-semibold">Why Choose Azalea?</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Located in the heart of Biratnagar</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Experienced and dedicated teaching faculty</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Modern infrastructure and facilities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Comprehensive student support services</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Merit-based scholarship opportunities</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="career">
                <AccordionTrigger className="text-lg font-semibold">Career Opportunities</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Our graduates excel in various fields including engineering, medicine, management, 
                    and technology. We provide career guidance and placement support to help students 
                    achieve their professional goals.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground text-sm">Higher education preparation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground text-sm">Professional skill development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground text-sm">Industry connections</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;