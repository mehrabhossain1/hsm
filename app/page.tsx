// import AboutSection from "@/components/Homepage/AboutSection/AboutSection";
// import BlogInterview from "@/components/Homepage/BlogInterview/BlogInterview";
// import Contact from "@/components/Homepage/Contact/Contact";
// import { HeroScrollDemo } from "@/components/Homepage/HeroSection/HeroScrollDemo";
import HeroSection from "@/components/Homepage/HeroSection/HeroSection";
// import NewsNewsletter from "@/components/Homepage/NewsNewsletter/NewsNewsletter";
// import ResourcesBookmarks from "@/components/Homepage/ResourcesBookmarks/ResourcesBookmarks";
// import Sizear from "@/components/Homepage/Sizear/Sizear";
import { AnimatedTestimonialsDemo } from "@/components/Homepage/Testimonials/Testimonials";
import Youtube from "@/components/Homepage/Youtube/Youtube";
// import AboutPage from "./about/page";
// import ResourcesAndBookmarksPage from "./resources-and-bookmarks/page";
import ResourcesSection from "@/components/Homepage/ResourcesSection";
import NewsNewsletterSection from "@/components/Homepage/NewsNewsletterSection";
import BlogsInterviewsSection from "@/components/Homepage/BlogsInterviewsSection";
import AboutSection from "@/components/Homepage/AboutSection";
import ContactSection from "@/components/Homepage/ContactSection";
// import SubscribeNewsletter from "@/components/Homepage/SubscribeNewsletter";

export default function Home() {
  return (
    <>
      {/* <HeroScrollDemo /> */}
      <HeroSection />

      {/* <AboutSection /> */}
      {/* <AboutPage /> */}

      <AboutSection />

      {/* <ResourcesBookmarks /> */}
      {/* <ResourcesAndBookmarksPage /> */}

      <ResourcesSection />

      <NewsNewsletterSection />
      {/* <NewsNewsletter /> */}

      {/* <BlogInterview /> */}
      <BlogsInterviewsSection />

      <Youtube />

      {/* <Sizear /> */}
      <AnimatedTestimonialsDemo />

      {/* <SubscribeNewsletter /> */}

      <ContactSection />

      {/* <Contact /> */}
    </>
  );
}
