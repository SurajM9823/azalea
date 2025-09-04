import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ScholarshipPage from "./pages/ScholarshipPage";
import ContactPage from "./pages/ContactPage";
import OnlineAdmissionPage from "./pages/OnlineAdmissionPage";
import CareerPage from "./pages/CareerPage";
import DocumentationPage from "./pages/DocumentationPage";
import EntranceNoticePage from "./pages/EntranceNoticePage";
import NotFound from "./pages/NotFound";
import GlobalLoader from "./components/GlobalLoader";
import NoticeModal from "./components/NoticeModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GlobalLoader />
      <BrowserRouter>
        <NoticeModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:courseId" element={<CourseDetailPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/online-admission" element={<OnlineAdmissionPage />} />
          <Route path="/scholarship" element={<ScholarshipPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/entrance-notice" element={<EntranceNoticePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingWhatsApp />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
