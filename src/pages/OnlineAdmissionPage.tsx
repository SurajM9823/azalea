import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Upload, 
  CheckCircle, 
  Calendar,
  AlertCircle,
  User,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const OnlineAdmissionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-12">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-3 bg-secondary text-secondary-foreground text-xs">
              Online Application Portal
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Apply <span className="text-primary">Online</span> for Admission
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Submit your application for Grade 11 admission at Azalea +2 College. Complete the form and upload required documents.
            </p>
          </div>
        </section>

        {/* Application Status */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-secondary/10 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground mb-1 text-sm">📝 Application Status: OPEN</h3>
                  <p className="text-muted-foreground mb-2 text-xs">
                    Applications are currently being accepted for Academic Year 2025. Submit before deadline.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-secondary" />
                      <span>Deadline: Dec 30, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Online Submission Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Application Form */}
              <div className="lg:col-span-2">
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                  <h2 className="flex items-center gap-2 text-foreground mb-4 text-lg font-bold">
                    <FileText className="h-4 w-4 text-primary" />
                    Student Application Form
                  </h2>
                  <div className="space-y-4">
                    {/* Personal Information */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
                        <User className="h-4 w-4 text-primary" />
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="firstName" className="text-xs">First Name *</Label>
                          <Input id="firstName" placeholder="First name" className="h-8 text-sm border-0 bg-white/70" />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-xs">Last Name *</Label>
                          <Input id="lastName" placeholder="Last name" className="h-8 text-sm border-0 bg-white/70" />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-xs">Email *</Label>
                          <Input id="email" type="email" placeholder="email@example.com" className="h-8 text-sm border-0 bg-white/70" />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-xs">Phone *</Label>
                          <Input id="phone" placeholder="+977 98XXXXXXXX" className="h-8 text-sm border-0 bg-white/70" />
                        </div>
                        <div>
                          <Label htmlFor="dateOfBirth" className="text-xs">Date of Birth *</Label>
                          <Input id="dateOfBirth" type="date" className="h-8 text-sm border-0 bg-white/70" />
                        </div>
                        <div>
                          <Label htmlFor="gender" className="text-xs">Gender *</Label>
                          <Select>
                            <SelectTrigger className="h-8 text-sm border-0 bg-white/70">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="address" className="text-xs">Permanent Address *</Label>
                        <Textarea id="address" placeholder="Complete address" className="text-sm border-0 bg-white/70 resize-none h-16" />
                      </div>
                    </div>

                    {/* Academic Information */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium text-foreground">Academic Information</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="previousSchool" className="text-xs">Previous School *</Label>
                          <Input id="previousSchool" placeholder="School name" className="h-8 text-sm border-0 bg-white/70" />
                        </div>
                        <div>
                          <Label htmlFor="seeGpa" className="text-xs">SEE GPA *</Label>
                          <Input id="seeGpa" type="number" step="0.01" min="0" max="4" placeholder="3.75" className="h-8 text-sm border-0 bg-white/70" />
                        </div>
                        <div>
                          <Label htmlFor="seeYear" className="text-xs">SEE Year *</Label>
                          <Select>
                            <SelectTrigger className="h-8 text-sm border-0 bg-white/70">
                              <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2024">2024</SelectItem>
                              <SelectItem value="2023">2023</SelectItem>
                              <SelectItem value="2022">2022</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="stream" className="text-xs">Preferred Stream *</Label>
                          <Select>
                            <SelectTrigger className="h-8 text-sm border-0 bg-white/70">
                              <SelectValue placeholder="Stream" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="management">Management</SelectItem>
                              <SelectItem value="computer-science">Computer Science</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="hotel-management">Hotel Management</SelectItem>
                              <SelectItem value="law">Law</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Guardian Information */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium text-foreground">Guardian Information</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="guardianName" className="text-xs">Guardian Name *</Label>
                          <Input id="guardianName" placeholder="Guardian name" className="h-8 text-sm border-0 bg-white/70" />
                        </div>
                        <div>
                          <Label htmlFor="guardianPhone" className="text-xs">Guardian Phone *</Label>
                          <Input id="guardianPhone" placeholder="+977 98XXXXXXXX" className="h-8 text-sm border-0 bg-white/70" />
                        </div>
                        <div>
                          <Label htmlFor="guardianRelation" className="text-xs">Relation *</Label>
                          <Select>
                            <SelectTrigger className="h-8 text-sm border-0 bg-white/70">
                              <SelectValue placeholder="Relation" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="father">Father</SelectItem>
                              <SelectItem value="mother">Mother</SelectItem>
                              <SelectItem value="guardian">Legal Guardian</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="guardianOccupation" className="text-xs">Occupation</Label>
                          <Input id="guardianOccupation" placeholder="Occupation" className="h-8 text-sm border-0 bg-white/70" />
                        </div>
                      </div>
                    </div>

                    {/* Document Upload */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Upload className="h-4 w-4 text-primary" />
                        Document Upload
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="seeMarksheet" className="text-xs">SEE Marksheet *</Label>
                          <Input id="seeMarksheet" type="file" accept=".pdf,.jpg,.jpeg,.png" className="h-8 text-xs border-0 bg-white/70" />
                        </div>
                        <div>
                          <Label htmlFor="seeCertificate" className="text-xs">SEE Certificate *</Label>
                          <Input id="seeCertificate" type="file" accept=".pdf,.jpg,.jpeg,.png" className="h-8 text-xs border-0 bg-white/70" />
                        </div>
                        <div>
                          <Label htmlFor="citizenship" className="text-xs">Citizenship *</Label>
                          <Input id="citizenship" type="file" accept=".pdf,.jpg,.jpeg,.png" className="h-8 text-xs border-0 bg-white/70" />
                        </div>
                        <div>
                          <Label htmlFor="passport" className="text-xs">Photo *</Label>
                          <Input id="passport" type="file" accept=".jpg,.jpeg,.png" className="h-8 text-xs border-0 bg-white/70" />
                        </div>
                        <div>
                          <Label htmlFor="characterCertificate" className="text-xs">Character Certificate</Label>
                          <Input id="characterCertificate" type="file" accept=".pdf,.jpg,.jpeg,.png" className="h-8 text-xs border-0 bg-white/70" />
                        </div>
                        <div>
                          <Label htmlFor="migrationCertificate" className="text-xs">Migration Certificate</Label>
                          <Input id="migrationCertificate" type="file" accept=".pdf,.jpg,.jpeg,.png" className="h-8 text-xs border-0 bg-white/70" />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-9">
                        <FileText className="h-3 w-3 mr-2" />
                        Submit Application
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        By submitting, you agree to our terms and privacy policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Information */}
              <div className="space-y-4">
                {/* Application Checklist */}
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-sm font-medium text-foreground mb-3">Application Checklist</h3>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Complete application form</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Upload SEE marksheet & certificate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Upload citizenship certificate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Upload passport size photo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Guardian information</span>
                    </li>
                  </ul>
                </div>

                {/* Contact Support */}
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-sm font-medium text-foreground flex items-center gap-2 mb-3">
                    <Phone className="h-4 w-4 text-primary" />
                    Need Help?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3 text-primary" />
                      <div>
                        <p className="text-xs font-medium">Call Us</p>
                        <p className="text-xs text-muted-foreground">9811389835, 9810581481</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3 text-primary" />
                      <div>
                        <p className="text-xs font-medium">Email Support</p>
                        <p className="text-xs text-muted-foreground">admissions@azaleacollege.edu.np</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3 w-3 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs font-medium">Visit Us</p>
                        <p className="text-xs text-muted-foreground">Biratnagar-3, Bankaryalay Chowk</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OnlineAdmissionPage;