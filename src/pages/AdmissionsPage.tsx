import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Admissions from "@/components/Admissions";

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <Admissions />
      </main>
      <Footer />
    </div>
  );
};

export default AdmissionsPage;