import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OpeningHoursSection from "@/components/OpeningHoursSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen scroll-smooth">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
