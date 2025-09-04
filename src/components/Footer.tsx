import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import collegeLogo from "@/assets/college-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admissions" },
    { name: "Scholarship", path: "/scholarship" },
    { name: "Contact", path: "/contact" }
  ];

  const courses = [
    { name: "Management", path: "/courses/management" },
    { name: "Computer Science", path: "/courses/computer-science" },
    { name: "Education", path: "/courses/education" },
    { name: "Hotel Management", path: "/courses/hotel-management" },
    { name: "Law", path: "/courses/law" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={collegeLogo} alt="Azalea +2 College Logo" className="h-10 w-10" />
              <div>
                <h3 className="font-bold text-lg">AZALEA +2 COLLEGE</h3>
                <p className="text-sm opacity-90">Est. 1984</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Shaping future leaders through quality education and holistic development. 
              Join our legacy of academic excellence and personal growth.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/azaleacollege" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Courses</h4>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <li key={index}>
                  <Link 
                    to={course.path} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-secondary" />
                <div className="text-sm opacity-90">
                  <p>Biratnagar-3</p>
                  <p>Bankaryalay Chowk, Morang</p>
                  <p>Nepal</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary" />
                <div className="text-sm opacity-90">
                  <p>9811389835, 9810581481</p>
                  <p>9812354010, 9842414656</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <p className="text-sm opacity-90">info@azaleacollege.edu.np</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90">
              © 2024 Azalea +2 College. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm opacity-90">
              <Link to="/privacy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;