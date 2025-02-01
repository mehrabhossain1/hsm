import AboutSection from "@/components/Homepage/HeroSection/AboutSection";
import HeroSection from "@/components/Homepage/HeroSection/HeroSection";
import { AnimatedTestimonialsDemo } from "@/components/Homepage/Testimonials/Testimonials";
import Navbar from "@/components/Shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AnimatedTestimonialsDemo />
    </>
  );
}
