import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Download, Calendar, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const NoticeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenNotice = localStorage.getItem('azalea-notice-seen');
    if (!hasSeenNotice) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('azalea-notice-seen', 'true');
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-sm sm:max-w-md md:max-w-2xl max-h-[90vh] overflow-y-auto p-0 mx-4 sm:mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 md:p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 text-white hover:text-gray-200 transition-colors"
          >
            <X className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-2 md:mb-3 text-xs md:text-sm">
              Important Notice
            </Badge>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              Admission Open 2024-2025
            </h2>
            <p className="opacity-90 text-sm md:text-base">Academic Year Enrollment Now Available</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-4 md:space-y-6">
          {/* Alert Box */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">🎓 Limited Seats Available!</h3>
                <p className="text-sm text-muted-foreground">
                  We are now accepting applications for Grade 11 in all available streams. 
                  Don't miss this opportunity to join Nepal's leading educational institution.
                </p>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">📅 Important Dates</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <Calendar className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Application Deadline</div>
                  <div className="text-muted-foreground">December 30, 2024</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <Calendar className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Entrance Exam</div>
                  <div className="text-muted-foreground">January 5, 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <Calendar className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Result Publication</div>
                  <div className="text-muted-foreground">January 15, 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <Calendar className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Classes Begin</div>
                  <div className="text-muted-foreground">February 1, 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* Streams Available */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">📚 Available Streams</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 border rounded-lg text-center">
                <div className="font-medium text-foreground">Science</div>
                <div className="text-xs text-muted-foreground">60 Seats</div>
              </div>
              <div className="p-3 border rounded-lg text-center">
                <div className="font-medium text-foreground">Management</div>
                <div className="text-xs text-muted-foreground">50 Seats</div>
              </div>
            </div>
          </div>

          {/* Scholarship Info */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-primary mb-2">🏆 Scholarship Opportunities</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 100% scholarship for students with 3.8+ GPA</li>
              <li>• 75% scholarship for students with 3.5-3.8 GPA</li>
              <li>• 50% scholarship for students with 3.0-3.5 GPA</li>
              <li>• Special discounts for early applications</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="flex-1" asChild>
              <Link to="/online-admission" onClick={handleClose}>
                Apply Online Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="flex-1" asChild>
              <Link to="/documentation" onClick={handleClose}>
                <Download className="h-4 w-4 mr-2" />
                Download Forms
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="text-center text-sm text-muted-foreground border-t pt-4">
            <p>For more information: <span className="font-medium">+977-21-123456</span></p>
            <p>Email: <span className="font-medium">admission@azaleacollege.edu.np</span></p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NoticeModal;