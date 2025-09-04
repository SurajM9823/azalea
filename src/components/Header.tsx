import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admissions" },
    { name: "Scholarship", path: "/scholarship" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
    }`}>
      {/* Top info bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3 flex-shrink-0" />
                <span className="truncate">Biratnagar-3, Bankaryalay Chowk, Morang</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3 flex-shrink-0" />
                <span className="whitespace-nowrap">9811389835, 9810581481</span>
              </div>
              <a 
                href="https://www.facebook.com/azaleacollege" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-secondary transition-colors"
              >
                <Facebook className="h-3 w-3 flex-shrink-0" />
                <span className="hidden lg:inline">Follow us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-2 md:gap-3 min-w-0 transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}>
            <img src="/logo.jpeg" alt="Azalea +2 College Logo" className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0" />
            <div className="min-w-0">
              <h1 className="font-bold text-sm md:text-lg text-primary truncate">AZALEA +2 COLLEGE</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Excellence in Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors hover:text-secondary ${
                  isActive(item.path) ? "text-secondary" : isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Apply Now Button */}
          <div className="hidden lg:block">
            <Button asChild className={`transition-colors ${
              isScrolled ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' : 'bg-white/20 text-white hover:bg-white/30'
            }`}>
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium py-2 transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link to="/admissions" onClick={() => setIsMenuOpen(false)}>Apply Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;