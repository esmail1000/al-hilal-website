import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import HeroSlider from "@/components/home/HeroSlider";
import ProductCategories from "@/components/home/ProductCategories";
import RequestQuoteCTA from "@/components/home/RequestQuoteCTA";
import StatsBar from "@/components/home/StatsBar";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <AboutSection />
      <ProductCategories />
      <RequestQuoteCTA />
      <ContactSection />
    </>
  );
}