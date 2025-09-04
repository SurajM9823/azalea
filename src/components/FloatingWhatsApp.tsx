import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsappNumber = "+9779851234567"; // Replace with actual WhatsApp number
  const defaultMessage = "Hi! I'm interested in admission at Azalea +2 College. Could you please provide more information?";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
      {/* Chat Widget */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-xl border p-3 md:p-4 w-72 md:w-80 animate-scale-in max-w-[calc(100vw-2rem)]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 md:gap-3 min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground text-sm md:text-base truncate">Azalea College</h3>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="bg-green-50 rounded-lg p-2 md:p-3 mb-3">
            <p className="text-xs md:text-sm text-foreground">
              👋 Hi there! Need help with admission information? 
              I'm here to assist you with:
            </p>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• Course details & fees</li>
              <li>• Admission process</li>
              <li>• Scholarship information</li>
              <li>• Campus tour booking</li>
            </ul>
          </div>
          
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg p-2 md:p-3 flex items-center justify-center gap-2 transition-colors text-sm md:text-base"
          >
            <MessageCircle className="h-4 w-4" />
            Start Chat on WhatsApp
          </button>
          
          <div className="mt-2 text-center">
            <a 
              href={`tel:${whatsappNumber}`}
              className="text-xs text-muted-foreground hover:text-foreground flex items-center justify-center gap-1"
            >
              <Phone className="h-3 w-3" />
              Or call us directly
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 md:w-14 md:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        {isOpen ? (
          <X className="h-5 w-5 md:h-6 md:w-6" />
        ) : (
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
        )}
      </button>
      
      {/* Pulse Animation */}
      {!isOpen && (
        <div className="absolute inset-0 w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full animate-ping opacity-20"></div>
      )}
    </div>
  );
};

export default FloatingWhatsApp;