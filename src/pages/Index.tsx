import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesA from "@/components/ServicesA";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesA />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
