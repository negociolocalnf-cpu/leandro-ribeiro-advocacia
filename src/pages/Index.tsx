import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AreasSection from "@/components/AreasSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CtaSection from "@/components/CtaSection";
import GoogleReviewSection from "@/components/GoogleReviewSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <AreasSection />
      <DifferentialsSection />
      <CtaSection />
      <GoogleReviewSection />
      <Footer />
    </div>
  );
};

export default Index;
