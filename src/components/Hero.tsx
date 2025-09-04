import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import aboutCampus from "@/assets/about-campus.jpg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    heroBg,
    aboutCampus
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="hero-video"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen">
        {/* Main Content */}
        <div className="text-center space-y-6 text-white animate-fade-in-up max-w-4xl">
          {/* Logo */}
          <div className="flex items-center justify-center mb-4 md:mb-6 animate-fade-in-up">
            <img src="/logo.jpeg" alt="Azalea College Logo" className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full" />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold animate-fade-in-up leading-tight" style={{animationDelay: '0.2s'}}>
            Welcome to <br />
            <span className="text-secondary">AZALEA +2 COLLEGE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 animate-fade-in-up px-4 md:px-0" style={{animationDelay: '0.4s'}}>
            Shaping Future Leaders with Quality Education in Science, Management, and More
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 animate-fade-in-up px-4 md:px-0" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-secondary flex-shrink-0" />
              <span className="font-semibold text-sm md:text-base">Grade 11 & 12</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 md:h-5 md:w-5 text-secondary flex-shrink-0" />
              <span className="font-semibold text-sm md:text-base">100% Scholarship Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 md:h-5 md:w-5 text-secondary flex-shrink-0" />
              <span className="font-semibold text-sm md:text-base">Expert Faculty</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in-up px-4 md:px-0" style={{animationDelay: '0.8s'}}>
            <Button asChild size="lg" className="bg-secondary text-black hover:bg-secondary/90 text-base md:text-lg px-6 md:px-8 py-3 w-full sm:w-auto font-semibold">
              <Link to="/online-admission">Apply for Admission</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 text-base md:text-lg px-6 md:px-8 py-3 w-full sm:w-auto font-semibold">
              <Link to="/courses">
                <BookOpen className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Explore Courses
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;