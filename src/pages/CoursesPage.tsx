import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Courses from "@/components/Courses";

const CoursesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Academic Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover comprehensive +2 level programs designed to prepare you for higher education 
              and successful careers in your chosen field.
            </p>
          </div>
        </section>

        <Courses />
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;