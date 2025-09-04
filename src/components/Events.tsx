import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Science Exhibition 2024",
      date: "Dec 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Main Campus Hall",
      attendees: "200+ Students",
      description: "Annual science exhibition showcasing innovative projects by our science stream students.",
      category: "Academic",
      featured: true
    },
    {
      id: 2,
      title: "Career Guidance Seminar",
      date: "Dec 20, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Auditorium",
      attendees: "300+ Students",
      description: "Expert career counselors will guide students on higher education and career paths.",
      category: "Career"
    },
    {
      id: 3,
      title: "Annual Sports Meet",
      date: "Jan 10, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "College Ground",
      attendees: "500+ Participants",
      description: "Inter-class sports competition featuring various indoor and outdoor games.",
      category: "Sports"
    }
  ];

  const pastEvents = [
    "Cultural Festival 2024 - 800+ Participants",
    "Alumni Meet 2024 - 150+ Graduates",
    "Blood Donation Camp - 120 Units Collected",
    "Environment Day Celebration - Tree Plantation"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground hover:bg-accent/30">
            Campus Life
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us for exciting events, workshops, and activities that enrich your 
            college experience beyond the classroom.
          </p>
        </div>

        {/* Featured Event */}
        {upcomingEvents.filter(event => event.featured).map((event) => (
          <div key={event.id} className="mb-16">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-secondary p-8 md:p-12 text-white">
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/20 text-white">Featured Event</Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <Badge className="bg-white/20 text-white mb-3">{event.category}</Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{event.title}</h3>
                    <p className="text-lg opacity-90 leading-relaxed">{event.description}</p>
                  </div>
                  
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Register Now
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Events Timeline */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Other Upcoming Events</h3>
            <div className="space-y-6">
              {upcomingEvents.filter(event => !event.featured).map((event, index) => (
                <div key={event.id} className="relative">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      {index < upcomingEvents.filter(e => !e.featured).length - 1 && (
                        <div className="w-px h-20 bg-border mt-2"></div>
                      )}
                    </div>
                    
                    <div className="pb-8 flex-1">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {event.category}
                      </Badge>
                      <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Recent Events</h3>
            <div className="bg-muted/50 rounded-xl p-6">
              <div className="space-y-4">
                {pastEvents.map((event, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm text-foreground">{event}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline" size="sm">
                  View All Past Events
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
