import { useEffect } from "react";
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import DeitySection from "../components/deity-section";
import AboutSection from "../components/about-section";
import GallerySection from "../components/gallery-section";
import EventsSection from "../components/events-section";
import SevaSection from "../components/seva-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";

export default function Home() {
  useEffect(() => {
    // Scroll animations observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <DeitySection />
      <AboutSection />
      <GallerySection />
      <EventsSection />
      <SevaSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
