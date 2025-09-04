import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Admissions from "@/components/Admissions";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Courses />
        <About />
        <Gallery />
        <Testimonials />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;