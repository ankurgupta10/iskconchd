import { useState } from "react";
import VisitorRegistrationModal from "./visitor-registration-modal";
import FeedbackModal from "./feedback-modal";

export default function Footer() {
  const [isVisitorModalOpen, setIsVisitorModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Temple Info */}
            <div className="space-y-4" data-testid="footer-temple-info">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-xl">🕉</span>
                </div>
                <span className="font-serif font-bold text-xl">ISKCON Chandigarh</span>
              </div>
              <p className="text-background/80">
                Spreading Krishna consciousness and sharing the eternal teachings of the Bhagavad Gita.
              </p>
              <p className="text-sm text-background/70">
                Hare Krishna Hare Krishna<br />
                Krishna Krishna Hare Hare<br />
                Hare Rama Hare Rama<br />
                Rama Rama Hare Hare
              </p>
            </div>

            {/* Quick Links */}
            <div data-testid="footer-quick-links">
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="block text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-link-gallery"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => scrollToSection('events')}
                  className="block text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-link-events"
                >
                  Events
                </button>
                <button 
                  onClick={() => scrollToSection('seva')}
                  className="block text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-link-seva"
                >
                  Daily Seva
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Services */}
            <div data-testid="footer-services">
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => setIsVisitorModalOpen(true)}
                  className="block text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-visitor-registration"
                >
                  Visitor Registration
                </button>
                <a href="#" className="block text-background/80 hover:text-background transition-colors" data-testid="footer-spiritual-classes">
                  Spiritual Classes
                </a>
                <a href="#" className="block text-background/80 hover:text-background transition-colors" data-testid="footer-book-distribution">
                  Book Distribution
                </a>
                <button 
                  onClick={() => setIsFeedbackModalOpen(true)}
                  className="block text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-feedback"
                >
                  Feedback
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div data-testid="footer-contact-info">
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <div className="space-y-3 text-background/80">
                <div className="flex items-start gap-3">
                  <span className="mt-1">📍</span>
                  <div>
                    <p>Dakshin Marg, Sector 36-A</p>
                    <p>Chandigarh, Punjab 160036</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span>📞</span>
                  <p>+91-172-XXXXXXX</p>
                </div>
                <div className="flex items-center gap-3">
                  <span>✉️</span>
                  <p>info@iskconchandigarh.org</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 text-sm" data-testid="footer-copyright">
              © 2024 ISKCON Chandigarh. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0" data-testid="footer-social-links">
              <a href="#" className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors" data-testid="footer-social-facebook">
                📘
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors" data-testid="footer-social-instagram">
                📷
              </a>
              <a href="#" className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors" data-testid="footer-social-youtube">
                📺
              </a>
              <a href="#" className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors" data-testid="footer-social-twitter">
                🐦
              </a>
            </div>
          </div>
        </div>
      </footer>

      <VisitorRegistrationModal 
        isOpen={isVisitorModalOpen}
        onClose={() => setIsVisitorModalOpen(false)}
      />

      <FeedbackModal 
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
      />
    </>
  );
}
