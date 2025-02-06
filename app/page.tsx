import AboutSection from "@/components/Homepage/AboutSection/AboutSection";
import BlogInterview from "@/components/Homepage/BlogInterview/BlogInterview";
import Contact from "@/components/Homepage/Contact/Contact";
// import { HeroScrollDemo } from "@/components/Homepage/HeroSection/HeroScrollDemo";
import HeroSection from "@/components/Homepage/HeroSection/HeroSection";
import NewsNewsletter from "@/components/Homepage/NewsNewsletter/NewsNewsletter";
import ResourcesBookmarks from "@/components/Homepage/ResourcesBookmarks/ResourcesBookmarks";
import Sizear from "@/components/Homepage/Sizear/Sizear";
import { AnimatedTestimonialsDemo } from "@/components/Homepage/Testimonials/Testimonials";
import Youtube from "@/components/Homepage/Youtube/Youtube";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <HeroScrollDemo /> */}
      <HeroSection />
      <AboutSection />
      <ResourcesBookmarks />
      <NewsNewsletter />
      <BlogInterview />
      <Youtube />
      <Contact />
      <Sizear />
      <AnimatedTestimonialsDemo />

      <Footer />
    </>
  );
}
