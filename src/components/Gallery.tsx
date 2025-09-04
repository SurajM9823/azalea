import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { X } from "lucide-react";
import admissionOffice from "@/assets/admission-office.jpg";
import college1 from "@/assets/college-1.jpg";
import college2 from "@/assets/college-2.jpg";
import college3 from "@/assets/college-3.jpg";
import college4 from "@/assets/college-4.jpg";
import college5 from "@/assets/college-5.jpg";
import graduation from "@/assets/graduation.jpg";
import library from "@/assets/library.jpg";
import managementClass from "@/assets/management-class.jpg";
import scienceLab from "@/assets/science-lab.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: "/logo.jpeg", alt: "Azalea College Logo", gridClass: "col-span-2 row-span-2" },
    { src: "/hero1.jpeg", alt: "College Building", gridClass: "col-span-1 row-span-1" },
    { src: "/girls.jpeg", alt: "Science Laboratory", gridClass: "col-span-1 row-span-2" },
    { src: "/groupsir.jpeg", alt: "College Library", gridClass: "col-span-2 row-span-1" },
    { src: managementClass, alt: "Management Class", gridClass: "col-span-1 row-span-1" },
    { src: graduation, alt: "Graduation Ceremony", gridClass: "col-span-2 row-span-2" },
    { src: college2, alt: "Campus View", gridClass: "col-span-1 row-span-1" },
    { src: admissionOffice, alt: "Admission Office", gridClass: "col-span-1 row-span-2" },
    { src: college3, alt: "Student Activities", gridClass: "col-span-1 row-span-1" },
    { src: college4, alt: "College Facilities", gridClass: "col-span-2 row-span-1" },
    { src: college5, alt: "Academic Environment", gridClass: "col-span-1 row-span-1" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Campus Life
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Explore Our <span className="text-primary">Campus</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the vibrant atmosphere, modern facilities, and inspiring environment 
            that makes Azalea +2 College the perfect place for your educational journey.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[200px] mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.gridClass} group cursor-pointer overflow-hidden rounded-lg relative hover-scale`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-1 left-1 right-1 md:bottom-2 md:left-2 md:right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium text-xs md:text-sm leading-tight">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground font-medium">Classrooms</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-muted-foreground font-medium">Science Labs</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">15000+</div>
            <div className="text-muted-foreground font-medium">Books</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground font-medium">Library Access</div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] animate-scale-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors p-2"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;