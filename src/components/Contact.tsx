import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import aboutCampus from "@/assets/about-campus.jpg";

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 text-xs">
            Get in Touch
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Have questions about admission, courses, or college life? We're here to help you start your educational journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Image and Contact Details */}
          <div className="space-y-6">
            {/* Campus Image */}
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={aboutCampus} 
                alt="Azalea College Campus" 
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-bold mb-1">Visit Our Campus</h3>
                <p className="text-xs opacity-90">Experience our modern facilities and vibrant campus life</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground mb-4">Get in Touch</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Phone</h4>
                    <p className="text-xs text-muted-foreground">+977-21-123456</p>
                    <p className="text-xs text-muted-foreground">+977-21-789012</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Email</h4>
                    <p className="text-xs text-muted-foreground">info@azaleacollege.edu.np</p>
                    <p className="text-xs text-muted-foreground">admission@azaleacollege.edu.np</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Address</h4>
                    <p className="text-xs text-muted-foreground">Main Road, Biratnagar-10</p>
                    <p className="text-xs text-muted-foreground">Morang, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Office Hours</h4>
                    <p className="text-xs text-muted-foreground">Sun-Fri: 9AM-5PM</p>
                    <p className="text-xs text-muted-foreground">Sat: 9AM-2PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Send us a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="firstName" className="text-xs font-medium">First Name</Label>
                  <Input id="firstName" placeholder="First name" className="h-9 text-sm border-0 bg-white/70" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="lastName" className="text-xs font-medium">Last Name</Label>
                  <Input id="lastName" placeholder="Last name" className="h-9 text-sm border-0 bg-white/70" />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="email" className="text-xs font-medium">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="h-9 text-sm border-0 bg-white/70" />
              </div>

              <div className="space-y-1">
                <Label htmlFor="phone" className="text-xs font-medium">Phone Number</Label>
                <Input id="phone" placeholder="+977-98xxxxxxxx" className="h-9 text-sm border-0 bg-white/70" />
              </div>

              <div className="space-y-1">
                <Label htmlFor="interest" className="text-xs font-medium">I'm interested in</Label>
                <Select>
                  <SelectTrigger className="h-9 text-sm border-0 bg-white/70">
                    <SelectValue placeholder="Select your interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admission">Admission Information</SelectItem>
                    <SelectItem value="science">Science Stream</SelectItem>
                    <SelectItem value="management">Management Stream</SelectItem>
                    <SelectItem value="scholarship">Scholarship Programs</SelectItem>
                    <SelectItem value="facilities">Campus Facilities</SelectItem>
                    <SelectItem value="other">Other Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="message" className="text-xs font-medium">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us how we can help you..."
                  className="min-h-[80px] text-sm border-0 bg-white/70 resize-none"
                />
              </div>

              <Button size="sm" className="w-full h-9 text-sm">
                <Send className="h-3 w-3 mr-2" />
                Send Message
              </Button>
            </form>

            <div className="mt-4 p-3 bg-secondary/10 rounded-lg">
              <p className="text-xs text-muted-foreground text-center">
                📞 For urgent queries: <span className="font-medium text-foreground">+977-21-123456</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;