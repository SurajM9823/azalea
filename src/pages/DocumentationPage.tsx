import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Download, 
  CheckCircle,
  AlertCircle,
  BookOpen,
  ClipboardList,
  Award,
  Users,
  Calendar,
  CreditCard
} from "lucide-react";

const DocumentationPage = () => {
  const admissionDocs = [
    {
      title: "SEE Marksheet",
      description: "Original and photocopy of Secondary Education Examination marksheet",
      required: true,
      format: "Original + 2 photocopies"
    },
    {
      title: "SEE Certificate", 
      description: "Secondary Education Examination completion certificate",
      required: true,
      format: "Original + 2 photocopies"
    },
    {
      title: "Citizenship Certificate",
      description: "Nepalese citizenship certificate for identity verification",
      required: true,
      format: "Original + 2 photocopies"
    },
    {
      title: "Passport Size Photos",
      description: "Recent passport-size photographs with white background",
      required: true,
      format: "4 copies (3.5cm x 4.5cm)"
    },
    {
      title: "Character Certificate",
      description: "Character certificate from previous school or local authority",
      required: true,
      format: "Original document"
    },
    {
      title: "Migration Certificate",
      description: "Required if transferring from another educational board/institution",
      required: false,
      format: "Original document"
    }
  ];

  const downloadableForms = [
    {
      title: "Admission Application Form",
      description: "Complete application form for Grade 11 admission",
      size: "2.5 MB",
      format: "PDF",
      icon: FileText
    },
    {
      title: "Document Checklist",
      description: "Comprehensive checklist of all required documents",
      size: "1.2 MB", 
      format: "PDF",
      icon: ClipboardList
    },
    {
      title: "Fee Structure 2025",
      description: "Detailed fee structure for all streams and facilities",
      size: "800 KB",
      format: "PDF", 
      icon: CreditCard
    },
    {
      title: "Scholarship Application",
      description: "Merit-based scholarship application form",
      size: "1.8 MB",
      format: "PDF",
      icon: Award
    },
    {
      title: "Academic Calendar 2025",
      description: "Complete academic calendar with important dates",
      size: "1.5 MB",
      format: "PDF",
      icon: Calendar
    },
    {
      title: "Course Curriculum Guide",
      description: "Detailed curriculum for all available streams",
      size: "3.2 MB",
      format: "PDF",
      icon: BookOpen
    }
  ];

  const procedures = [
    {
      step: "01",
      title: "Document Preparation",
      description: "Gather all required documents as per the checklist. Ensure all photocopies are clear and readable.",
      icon: FileText
    },
    {
      step: "02", 
      title: "Form Completion",
      description: "Fill out the admission form completely. Double-check all information for accuracy.",
      icon: ClipboardList
    },
    {
      step: "03",
      title: "Document Verification",
      description: "Submit documents for verification. Our staff will verify original documents against photocopies.",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "Application Submission",
      description: "Submit completed application with all required documents and fees to the admission office.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Documentation Center
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Documentation & <span className="text-primary">Forms</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access all required documents, forms, and guidelines for admission to Azalea +2 College. 
              Download forms and check documentation requirements here.
            </p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">📋 Documentation Guidelines</h3>
                  <p className="text-muted-foreground mb-3">
                    Please ensure all documents are properly prepared before submission. 
                    Incomplete applications will not be processed.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>All photocopies must be clear and readable</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Original documents required for verification</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Required <span className="text-primary">Documents</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Complete checklist of all documents needed for admission
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {admissionDocs.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-foreground mb-2">
                          {doc.title}
                          {doc.required && <span className="text-red-500 ml-1">*</span>}
                        </CardTitle>
                        <Badge variant={doc.required ? "default" : "secondary"} className="text-xs">
                          {doc.required ? "Required" : "Optional"}
                        </Badge>
                      </div>
                      <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">{doc.description}</p>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs font-medium text-foreground">Format Required:</p>
                      <p className="text-xs text-muted-foreground">{doc.format}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Downloadable Forms */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Download <span className="text-primary">Forms</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Access and download all necessary forms and documents
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {downloadableForms.map((form, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <form.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-foreground mb-1">
                          {form.title}
                        </CardTitle>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            {form.format}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {form.size}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{form.description}</p>
                    <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Procedure */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Application <span className="text-primary">Procedure</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Step-by-step guide to complete your application
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {procedures.map((procedure, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mb-4">
                      {procedure.step}
                    </div>
                    <CardTitle className="text-lg text-foreground">{procedure.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <procedure.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <p className="text-muted-foreground text-sm">{procedure.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Need Help with Documentation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our admission office is here to help you with any questions about required documents 
              or the application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Users className="h-5 w-5 mr-2" />
                Contact Admission Office
              </Button>
              <Button variant="outline" size="lg">
                <Download className="h-5 w-5 mr-2" />
                Download Complete Guide
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocumentationPage;