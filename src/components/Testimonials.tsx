import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";
import college1 from "@/assets/college-1.jpg";
import college2 from "@/assets/college-2.jpg";
import college3 from "@/assets/college-3.jpg";
import college4 from "@/assets/college-4.jpg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Science Graduate 2023",
      content: "Azalea +2 College provided me with excellent preparation for medical entrance exams. The dedicated teachers and well-equipped labs made all the difference in my success.",
      rating: 5,
      course: "Science Stream",
      image: college1
    },
    {
      name: "Rajesh Thapa",
      role: "Management Graduate 2022",
      content: "The management program at Azalea helped me develop strong business skills. Now I'm successfully running my own startup in Kathmandu.",
      rating: 5,
      course: "Management Stream",
      image: college2
    },
    {
      name: "Anita Rai",
      role: "Current Student",
      content: "The scholarship program made quality education accessible to me. The faculty is supportive and the campus environment is inspiring for learning.",
      rating: 5,
      course: "Science Stream",
      image: college3
    },
    {
      name: "Bikash Limbu",
      role: "Alumni 2021",
      content: "Azalea +2 College not only prepared me academically but also helped me grow personally. The extracurricular activities and leadership opportunities were invaluable.",
      rating: 5,
      course: "Management Stream",
      image: college4
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/20 text-secondary-foreground hover:bg-secondary/30">
            Student Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear directly from our students and graduates about their transformative 
            experience at Azalea +2 College.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[280px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="text-center p-8 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="flex items-center justify-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>
                  
                  <Quote className="h-8 w-8 text-primary/30 mx-auto mb-4" />
                  
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex justify-center mb-4 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.course}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;