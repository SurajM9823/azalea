import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  DollarSign, 
  Clock, 
  Users, 
  Award,
  CheckCircle,
  GraduationCap,
  ArrowLeft,
  Phone,
  Calendar
} from "lucide-react";
import scienceLab from "@/assets/science-lab.jpg";
import managementClass from "@/assets/management-class.jpg";

const CourseDetailPage = () => {
  const { courseId } = useParams();

  const courseData = {
    science: {
      name: "Science Stream",
      duration: "2 Years",
      image: scienceLab,
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Nepali"],
      fee: "Rs. 2,50,000",
      monthlyFee: "Rs. 12,500",
      description: "Comprehensive science education preparing students for medical and engineering fields with state-of-the-art laboratory facilities and expert faculty guidance.",
      career: ["Medical Doctor", "Engineer", "Researcher", "Pharmacist", "Lab Technician", "Biotechnologist"],
      admissionFee: "Rs. 5,000",
      tuitionFee: "Rs. 1,80,000",
      labFee: "Rs. 40,000",
      examFee: "Rs. 15,000",
      facilities: ["Advanced Physics Lab", "Chemistry Lab", "Biology Lab", "Computer Lab", "Library Access", "Study Materials"],
      eligibility: "Minimum 2.0 GPA in SEE examination"
    },
    management: {
      name: "Management Stream", 
      duration: "2 Years",
      image: managementClass,
      subjects: ["Accountancy", "Economics", "Business Studies", "Marketing", "English", "Nepali"],
      fee: "Rs. 2,00,000",
      monthlyFee: "Rs. 10,000",
      description: "Business-focused curriculum for future entrepreneurs and managers with practical case studies and industry exposure.",
      career: ["Business Manager", "Accountant", "Entrepreneur", "Banking Professional", "Marketing Specialist", "HR Manager"],
      admissionFee: "Rs. 5,000",
      tuitionFee: "Rs. 1,50,000", 
      labFee: "Rs. 20,000",
      examFee: "Rs. 15,000",
      facilities: ["Computer Lab", "Business Library", "Seminar Hall", "Case Study Resources", "Industry Visits", "Internship Programs"],
      eligibility: "Minimum 2.0 GPA in SEE examination"
    },
    "computer-science": {
      name: "Computer Science Stream",
      duration: "2 Years", 
      image: scienceLab,
      subjects: ["Programming", "Mathematics", "Computer Networks", "Database", "English", "Nepali"],
      fee: "Rs. 2,20,000",
      monthlyFee: "Rs. 11,000",
      description: "Modern computer science curriculum focusing on programming, software development, and emerging technologies.",
      career: ["Software Developer", "System Analyst", "Network Administrator", "Web Developer", "IT Consultant", "Data Scientist"],
      admissionFee: "Rs. 5,000",
      tuitionFee: "Rs. 1,65,000",
      labFee: "Rs. 30,000",
      examFee: "Rs. 15,000",
      facilities: ["Computer Lab", "Programming Lab", "Internet Access", "Software Library", "Project Workspace", "Technical Support"],
      eligibility: "Minimum 2.0 GPA in SEE examination"
    }
  };

  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/courses">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Courses
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Button asChild variant="outline" className="mb-6">
                  <Link to="/courses">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Courses
                  </Link>
                </Button>
                
                <Badge className="mb-4 bg-primary/10 text-primary">
                  {course.duration} Program
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  {course.name}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link to="/online-admission">
                      <GraduationCap className="h-5 w-5 mr-2" />
                      Apply Now
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Phone className="h-5 w-5 mr-2" />
                    Get More Info
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.name}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Subjects */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Core Subjects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.subjects.map((subject, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="font-medium">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Career Opportunities */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Career Opportunities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.career.map((career, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                          <Award className="h-4 w-4 text-secondary" />
                          <span>{career}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Facilities */}
                <Card>
                  <CardHeader>
                    <CardTitle>Facilities & Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.facilities.map((facility, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{facility}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <Badge variant="outline">{course.duration}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Total Fee:</span>
                      <span className="font-bold text-primary">{course.fee}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Monthly Fee:</span>
                      <span className="font-medium">{course.monthlyFee}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <span className="text-sm text-muted-foreground">Eligibility:</span>
                      <p className="text-sm mt-1">{course.eligibility}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Fee Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Fee Structure
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Admission Fee:</span>
                      <span className="font-medium">{course.admissionFee}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tuition Fee:</span>
                      <span className="font-medium">{course.tuitionFee}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Lab Fee:</span>
                      <span className="font-medium">{course.labFee}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Exam Fee:</span>
                      <span className="font-medium">{course.examFee}</span>
                    </div>
                    <div className="pt-3 border-t">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-primary text-lg">{course.fee}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gradient-to-r from-primary to-secondary text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-3">Ready to Apply?</h3>
                    <p className="mb-4 opacity-90 text-sm">
                      Start your application today and secure your future.
                    </p>
                    <Button variant="secondary" size="lg" className="w-full" asChild>
                      <Link to="/online-admission">
                        <Calendar className="h-4 w-4 mr-2" />
                        Apply Online
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailPage;