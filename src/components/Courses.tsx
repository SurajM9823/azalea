import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  Computer, 
  GraduationCap, 
  UtensilsCrossed, 
  Microscope,
  ArrowRight,
  Clock,
  Users,
  BookOpen,
  CheckCircle,
  Info
} from "lucide-react";
import scienceLab from "@/assets/science-lab.jpg";
import managementClass from "@/assets/management-class.jpg";

const Courses = () => {
  const courses = [
    {
      id: "science",
      title: "Science",
      icon: Microscope,
      duration: "2 Years",
      students: "150+",
      description: "Physics, Chemistry, Biology & Mathematics - Gateway to Medical & Engineering careers.",
      highlights: ["Medical Preparation", "Engineering Track", "Research Focus", "Lab Facilities"],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      image: scienceLab,
      popular: true
    },
    {
      id: "management", 
      title: "Management",
      icon: Calculator,
      duration: "2 Years",
      students: "120+",
      description: "Business Studies & Economics - Build entrepreneurial skills for leadership roles.",
      highlights: ["Business Skills", "Leadership Training", "Entrepreneurship", "Industry Exposure"],
      color: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      image: managementClass,
      popular: true
    },
    {
      id: "computer-science",
      title: "Computer Science", 
      icon: Computer,
      duration: "2 Years",
      students: "80+",
      description: "Programming & Technology - Master software development & emerging technologies.",
      highlights: ["Programming", "Web Development", "Software Engineering", "Tech Innovation"],
      color: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50"
    },
    {
      id: "education",
      title: "Education",
      icon: GraduationCap,
      duration: "2 Years", 
      students: "60+",
      description: "Teaching Methods & Psychology - Shape the next generation of learners.",
      highlights: ["Teaching Skills", "Child Psychology", "Curriculum Design", "Educational Leadership"],
      color: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50"
    },
    {
      id: "hotel-management",
      title: "Hotel Management",
      icon: UtensilsCrossed,
      duration: "2 Years",
      students: "40+", 
      description: "Hospitality & Tourism - Excel in hotel operations & customer service.",
      highlights: ["Hotel Operations", "Customer Service", "Tourism Management", "Event Planning"],
      color: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Academic Excellence
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your path to success with our comprehensive +2 level programs
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-16">
          {courses.map((course) => (
            <Card key={course.id} className="group relative overflow-hidden border-0 bg-transparent shadow-none">
              {course.popular && (
                <Badge className="absolute top-4 right-4 z-10 bg-secondary text-secondary-foreground text-xs">
                  Popular
                </Badge>
              )}
              
              {/* Image or Gradient Background */}
              {course.image ? (
                <div className="relative h-44 md:h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={course.image} 
                    alt={`${course.title} program`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-4 left-4 p-2 md:p-3 rounded-full bg-gradient-to-r ${course.color} text-white`}>
                    <course.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                </div>
              ) : (
                <div className={`relative h-44 md:h-48 bg-gradient-to-br ${course.bgGradient} flex items-center justify-center rounded-t-lg`}>
                  <div className={`p-3 md:p-4 rounded-full bg-gradient-to-r ${course.color} text-white`}>
                    <course.icon className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                </div>
              )}

              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">{course.title}</h3>
                  <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 md:h-4 md:w-4" />
                      <span className="whitespace-nowrap">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 md:h-4 md:w-4" />
                      <span className="whitespace-nowrap">{course.students}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="space-y-2 md:space-y-3 mb-6">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0" />
                      <span className="text-xs md:text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                  <Button 
                    asChild 
                    className="flex-1 text-sm md:text-base"
                    variant="outline"
                    size="sm"
                  >
                    <Link to="/online-admission">
                      Apply Now
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-2" />
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="secondary" 
                    className="flex-1 text-sm md:text-base"
                    size="sm"
                  >
                    <Link to={`/course/${course.id}`}>
                      <Info className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-muted-foreground font-medium">Programs</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">450+</div>
            <div className="text-muted-foreground font-medium">Active Students</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground font-medium">Success Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">39+</div>
            <div className="text-muted-foreground font-medium">Years Experience</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary p-8 md:p-12 rounded-2xl text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of successful students. Limited seats available - secure your future today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/online-admission">
                <BookOpen className="h-5 w-5 mr-2" />
                Apply Online
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">
                Get Information
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;