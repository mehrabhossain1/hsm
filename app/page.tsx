import AboutSection from "@/components/Homepage/AboutSection/AboutSection";
import HeroSection from "@/components/Homepage/HeroSection/HeroSection";
import ResourcesBookmarks from "@/components/Homepage/ResourcesBookmarks/ResourcesBookmarks";
import { AnimatedTestimonialsDemo } from "@/components/Homepage/Testimonials/Testimonials";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResourcesBookmarks />
      <AnimatedTestimonialsDemo />
      <Footer />
    </>
  );
}
