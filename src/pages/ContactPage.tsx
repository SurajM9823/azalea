import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Users, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["9811389835", "9810581481", "9812354010", "9842414656"],
      color: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@azaleacollege.edu.np", "admissions@azaleacollege.edu.np"],
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "College Address",
      details: ["Biratnagar-3", "Bankaryalay Chowk", "Morang, Nepal"],
      color: "text-red-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sunday - Friday: 7:00 AM - 5:00 PM", "Saturday: 8:00 AM - 2:00 PM"],
      color: "text-purple-600"
    }
  ];

  const departments = [
    { name: "Admission Office", phone: "9811389835", email: "admissions@azaleacollege.edu.np" },
    { name: "Academic Office", phone: "9810581481", email: "academic@azaleacollege.edu.np" },
    { name: "Student Affairs", phone: "9812354010", email: "students@azaleacollege.edu.np" },
    { name: "General Inquiries", phone: "9842414656", email: "info@azaleacollege.edu.np" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="text-primary">Contact</span> Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us for any questions about admissions, courses, or general inquiries. 
              We're here to help you on your educational journey.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 mx-auto`}>
                      <info.icon className={`h-8 w-8 ${info.color}`} />
                    </div>
                    <CardTitle className="text-lg text-foreground">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm mb-1">{detail}</p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input placeholder="Your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Your last name" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input placeholder="Your phone number" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input placeholder="What is this regarding?" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Please describe your inquiry in detail..."
                        rows={5}
                      />
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Department Contacts */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Department <span className="text-primary">Contacts</span>
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Contact specific departments for targeted assistance with your inquiries.
                  </p>
                </div>

                {departments.map((dept, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{dept.name}</h4>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              <span>{dept.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              <span>{dept.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Visit Us */}
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Visit Our Campus
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      We welcome prospective students and parents to visit our campus and experience 
                      our learning environment firsthand. Schedule a campus tour to see our facilities 
                      and meet our faculty.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Address:</p>
                      <p>Azalea +2 College</p>
                      <p>Biratnagar-3, Bankaryalay Chowk</p>
                      <p>Morang, Nepal</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Find <span className="text-primary">Our Location</span>
              </h2>
              <p className="text-muted-foreground">
                Located in the heart of Biratnagar with easy accessibility via public transport.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-8 text-center">
              <div className="bg-muted/50 rounded-lg p-12">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">
                  Google Maps integration would be displayed here showing the exact location of our college.
                </p>
                <Button variant="outline">
                  View on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;