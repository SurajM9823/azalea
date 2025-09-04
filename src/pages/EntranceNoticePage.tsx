import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  MapPin,
  FileText,
  AlertCircle,
  CheckCircle,
  Download,
  Users,
  BookOpen,
  Award,
  Bell
} from "lucide-react";

const EntranceNoticePage = () => {
  const upcomingExams = [
    {
      stream: "Management",
      date: "January 15, 2025",
      time: "10:00 AM - 12:00 PM",
      venue: "Azalea +2 College Campus",
      subjects: ["English", "Mathematics", "General Knowledge", "Logical Reasoning"],
      seats: "120 seats available",
      status: "Open",
      fee: "Rs. 500"
    },
    {
      stream: "Computer Science", 
      date: "January 18, 2025",
      time: "10:00 AM - 12:00 PM",
      venue: "Azalea +2 College Campus", 
      subjects: ["English", "Mathematics", "Science", "Computer Fundamentals"],
      seats: "80 seats available",
      status: "Open",
      fee: "Rs. 500"
    },
    {
      stream: "Education",
      date: "January 20, 2025",
      time: "10:00 AM - 12:00 PM",
      venue: "Azalea +2 College Campus",
      subjects: ["English", "Mathematics", "General Knowledge", "Teaching Aptitude"],
      seats: "60 seats available", 
      status: "Open",
      fee: "Rs. 500"
    },
    {
      stream: "Hotel Management",
      date: "January 22, 2025",
      time: "10:00 AM - 12:00 PM",
      venue: "Azalea +2 College Campus",
      subjects: ["English", "Mathematics", "General Knowledge", "Service Aptitude"],
      seats: "40 seats available",
      status: "Open", 
      fee: "Rs. 500"
    }
  ];

  const examGuidelines = [
    "Arrive at the examination center at least 30 minutes before the exam time",
    "Bring original citizenship certificate and admit card for identity verification", 
    "Carry black/blue pen, pencil, eraser, and calculator (for mathematics)",
    "Mobile phones and electronic devices are strictly prohibited in the exam hall",
    "Cheating or unfair means will result in immediate disqualification",
    "Follow the dress code: formal or semi-formal attire required"
  ];

  const importantDates = [
    {
      date: "December 20, 2024",
      event: "Application Deadline",
      description: "Last date to submit entrance exam applications",
      status: "upcoming"
    },
    {
      date: "December 25, 2024", 
      event: "Admit Card Release",
      description: "Admit cards will be available for download",
      status: "upcoming"
    },
    {
      date: "January 15-22, 2025",
      event: "Entrance Examinations",
      description: "Entrance exams for all streams will be conducted",
      status: "upcoming"
    },
    {
      date: "January 30, 2025",
      event: "Results Declaration", 
      description: "Entrance exam results will be published",
      status: "upcoming"
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
              <Bell className="h-4 w-4 mr-1" />
              Important Notice
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Entrance <span className="text-primary">Examinations</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete information about entrance examinations for admission to Grade 11 at 
              Azalea +2 College. Check exam schedules, guidelines, and important updates.
            </p>
          </div>
        </section>

        {/* Important Alert */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">🎯 Entrance Exam Registration Open</h3>
                  <p className="text-muted-foreground mb-3">
                    Registration for entrance examinations is now open for all streams. 
                    Limited seats available - register early to secure your spot.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span>Registration Deadline: December 20, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Online Registration Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exam Schedule */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Examination <span className="text-primary">Schedule</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Entrance exam dates and details for all available streams
              </p>
            </div>

            <div className="space-y-6">
              {upcomingExams.map((exam, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-foreground mb-2">
                          {exam.stream} Stream
                        </CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exam.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {exam.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exam.venue}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2 bg-green-50 text-green-700 border-green-200">
                          {exam.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mb-2">{exam.seats}</p>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Register Now - {exam.fee}
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          Exam Subjects
                        </h4>
                        <ul className="space-y-1">
                          {exam.subjects.map((subject, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Exam Pattern</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>• Duration: 2 hours</p>
                          <p>• Total Marks: 100</p>
                          <p>• Question Type: Multiple Choice</p>
                          <p>• Passing Marks: 40%</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Important <span className="text-primary">Dates</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Key dates and deadlines for the entrance examination process
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {importantDates.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{item.event}</CardTitle>
                    <Badge variant="outline" className="mt-2">
                      {item.date}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Exam Guidelines */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Examination <span className="text-primary">Guidelines</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Important instructions for entrance examination candidates
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Exam Instructions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {examGuidelines.map((guideline, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Merit & Selection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Selection Criteria</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Entrance exam score (60%)</li>
                      <li>• SEE/SLC marks (40%)</li>
                      <li>• Minimum 40% in entrance exam</li>
                      <li>• Interview (for selected streams)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Merit List</h4>
                    <p className="text-sm text-muted-foreground">
                      Merit list will be published based on combined score of entrance exam 
                      and SEE marks. Selected candidates will be called for document verification.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Downloads & Contact */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Downloads */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Download className="h-5 w-5 text-primary" />
                    Downloads
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Entrance Exam Syllabus (PDF)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Sample Question Papers (PDF)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Exam Guidelines (PDF)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Exam Schedule (PDF)
                  </Button>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Exam Help Desk</h4>
                    <p className="text-sm text-muted-foreground">
                      For any queries related to entrance examinations
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Biratnagar-3, Bankaryalay Chowk, Morang
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      Office Hours: 7:00 AM - 5:00 PM
                    </p>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Contact Exam Office
                  </Button>
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

export default EntranceNoticePage;