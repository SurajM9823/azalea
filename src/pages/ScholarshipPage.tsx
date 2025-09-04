import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Award,
  GraduationCap,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  Trophy,
  Target
} from "lucide-react";

const ScholarshipPage = () => {
  const scholarshipTiers = [
    {
      tier: "Gold Scholarship",
      percentage: "100%",
      gpa: "Above 3.8",
      benefits: ["Full tuition fee waiver", "Lab fee coverage", "Library access", "Career counseling"],
      color: "from-yellow-400 to-yellow-600",
      icon: Trophy
    },
    {
      tier: "Silver Scholarship", 
      percentage: "75%",
      gpa: "3.5 - 3.8",
      benefits: ["75% tuition fee waiver", "Lab fee coverage", "Library access"],
      color: "from-gray-300 to-gray-500",
      icon: Award
    },
    {
      tier: "Bronze Scholarship",
      percentage: "50%", 
      gpa: "3.0 - 3.5",
      benefits: ["50% tuition fee waiver", "Library access"],
      color: "from-orange-400 to-orange-600",
      icon: Star
    },
    {
      tier: "Merit Scholarship",
      percentage: "25%",
      gpa: "2.5 - 3.0", 
      benefits: ["25% tuition fee waiver"],
      color: "from-blue-400 to-blue-600",
      icon: Target
    }
  ];

  const eligibilityCriteria = [
    "Must have completed SEE with the required GPA",
    "Excellent academic record throughout school years",
    "Good conduct and character certificate",
    "Financial need assessment (for need-based scholarships)",
    "Entrance test performance",
    "Interview assessment"
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Academic Record Submission",
      description: "Submit your SEE marksheet and academic transcripts for GPA verification."
    },
    {
      step: 2,
      title: "Scholarship Application Form",
      description: "Complete the scholarship application form with all required details."
    },
    {
      step: 3,
      title: "Document Verification",
      description: "Our admission team will verify all submitted documents and academic records."
    },
    {
      step: 4,
      title: "Merit Assessment",
      description: "Based on your GPA and entrance test, scholarship amount will be determined."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-secondary/10 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              100% Scholarship Available
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="text-secondary">Scholarship</span> Opportunities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe education should be accessible to all deserving students. Explore our 
              comprehensive scholarship programs designed to support academic excellence.
            </p>
          </div>
        </section>

        {/* Scholarship Tiers */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Our <span className="text-primary">Scholarship Programs</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Merit-based scholarships rewarding academic excellence and supporting deserving students
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {scholarshipTiers.map((scholarship, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${scholarship.color}`}></div>
                  
                  <CardHeader className="pb-4 pt-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${scholarship.color} text-white mb-4 mx-auto`}>
                      <scholarship.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{scholarship.tier}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{scholarship.percentage}</div>
                    <Badge variant="outline" className="text-sm">{scholarship.gpa} GPA</Badge>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Benefits Include:</h4>
                      <ul className="space-y-2">
                        {scholarship.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Maximum Scholarship</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-sm text-muted-foreground">Students on Scholarship</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">₹50L+</div>
                <div className="text-sm text-muted-foreground">Annual Scholarship Fund</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Scholarship Recipients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Eligibility Criteria */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Eligibility Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {eligibilityCriteria.map((criteria, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Application Process */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Application Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applicationProcess.map((process, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {process.step}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">{process.title}</h4>
                          <p className="text-muted-foreground text-sm">{process.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                <span className="text-primary">Success</span> Stories
              </h2>
              <p className="text-lg text-muted-foreground">
                Hear from our scholarship recipients who have excelled in their academic journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya Sharma",
                  course: "Management",
                  scholarship: "100% Gold Scholarship",
                  quote: "The scholarship program changed my life. I could focus entirely on studies without financial worries."
                },
                {
                  name: "Rajesh Kumar",
                  course: "Computer Science", 
                  scholarship: "75% Silver Scholarship",
                  quote: "Thanks to the scholarship, I'm now pursuing my dream career in technology."
                },
                {
                  name: "Anita Rai",
                  course: "Education",
                  scholarship: "50% Bronze Scholarship",
                  quote: "The support I received helped me become the teacher I always wanted to be."
                }
              ].map((story, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                      {story.name.charAt(0)}
                    </div>
                    <h4 className="font-semibold text-foreground">{story.name}</h4>
                    <p className="text-sm text-muted-foreground">{story.course}</p>
                    <Badge variant="secondary" className="text-xs mt-1">{story.scholarship}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm italic text-center">"{story.quote}"</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ready to Apply for <span className="text-primary">Scholarship?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let financial constraints hold you back from achieving your dreams. 
              Apply for our scholarship program today and invest in your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/admissions">Apply for Scholarship</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get More Information</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ScholarshipPage;