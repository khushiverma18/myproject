import Navbar from "../compontents/Navbar";
import HeroSection from "../compontents/HeroSection";
import AboutSection from "../compontents/AboutSection";
import ServicesSection from "../compontents/ServicesSection";
import PlatformsSection from "../compontents/PlatformSection";
import WorkingProcessSection from "../compontents/WorkingProcessSection";
import PortfolioSection from "../compontents/PortfolioSection";
import TestimonialsSection from "../compontents/TestimonialsSection";
import KnownForSection from "../compontents/KnowForSection";
import FAQSection from "../compontents/FAQSection";
import ConsultationBanner from "../compontents/ConsultationBanner";
import ContactSection from "../compontents/ContactSection";
import Footer from "../compontents/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection/>
      <AboutSection />
      <ServicesSection />
      <PlatformsSection />
      <WorkingProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <KnownForSection />
      <FAQSection />
      <ConsultationBanner />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
