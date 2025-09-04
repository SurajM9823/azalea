import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  MapPin, 
  Calendar,
  Clock,
  Users,
  GraduationCap,
  Award,
  Building,
  Mail,
  Phone
} from "lucide-react";

const CareerPage = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Mathematics Teacher",
      department: "Academic Department",
      type: "Full-time",
      experience: "3+ Years",
      location: "Biratnagar",
      deadline: "December 20, 2024",
      description: "We are looking for an experienced Mathematics teacher for Grade 11 and 12 students.",
      requirements: [
        "Master's degree in Mathematics or related field",
        "Minimum 3 years teaching experience",
        "Strong communication skills",
        "Experience with modern teaching methods"
      ]
    },
    {
      id: 2,
      title: "Computer Science Instructor",
      department: "Technology Department",
      type: "Full-time", 
      experience: "2+ Years",
      location: "Biratnagar",
      deadline: "December 25, 2024",
      description: "Join our team to teach computer science and programming to +2 level students.",
      requirements: [
        "Bachelor's in Computer Science/IT",
        "Programming experience in multiple languages",
        "2+ years teaching experience preferred",
        "Knowledge of current technology trends"
      ]
    },
    {
      id: 3,
      title: "Administrative Assistant",
      department: "Administration",
      type: "Full-time",
      experience: "1+ Years",
      location: "Biratnagar", 
      deadline: "January 5, 2025",
      description: "Support our administrative operations and student services.",
      requirements: [
        "Bachelor's degree in any field",
        "Strong organizational skills",
        "Proficiency in MS Office",
        "Good communication skills in English and Nepali"
      ]
    },
    {
      id: 4,
      title: "Library Assistant",
      department: "Library Services",
      type: "Part-time",
      experience: "Fresh Graduate",
      location: "Biratnagar",
      deadline: "December 30, 2024", 
      description: "Assist in library operations and help students with research and study materials.",
      requirements: [
        "Bachelor's degree preferred",
        "Interest in library science",
        "Computer literacy",
        "Helpful and patient personality"
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Competitive Salary",
      description: "Attractive compensation package based on qualifications and experience"
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Opportunities for training, workshops, and continuous learning"
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with dedicated educators and staff in a supportive atmosphere"
    },
    {
      icon: Building,
      title: "Modern Facilities",
      description: "Access to well-equipped classrooms and modern teaching resources"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Career <span className="text-primary">Opportunities</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Be part of our mission to shape future leaders. Join Azalea +2 College and make a 
              difference in students' lives while growing your career in education.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Work <span className="text-primary">With Us?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the benefits of joining our educational community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Open <span className="text-primary">Positions</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Current job openings at Azalea +2 College
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position) => (
                <Card key={position.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-foreground mb-2">
                          {position.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            {position.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {position.experience}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          Deadline: {position.deadline}
                        </Badge>
                        <Button className="block bg-primary text-primary-foreground hover:bg-primary/90">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{position.description}</p>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Application <span className="text-primary">Process</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple steps to join our team
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Apply Online", description: "Submit your application with required documents through our online portal." },
                { step: "02", title: "Initial Review", description: "Our HR team will review your application and qualifications." },
                { step: "03", title: "Interview", description: "Shortlisted candidates will be called for an interview process." },
                { step: "04", title: "Final Selection", description: "Selected candidates will receive an offer letter and join our team." }
              ].map((step, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mb-4">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg text-foreground">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact HR */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our HR department for any career-related inquiries
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-foreground">HR Department</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">9811389835, 9810581481</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">careers@azaleacollege.edu.np</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">
                        Biratnagar-3, Bankaryalay Chowk, Morang<br/>
                        Office Hours: 7:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareerPage;