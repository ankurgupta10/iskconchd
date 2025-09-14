import { Calendar } from "lucide-react";
import VisitorRegistrationModal from "./visitor-registration-modal";
import { useState } from "react";

export default function HeroSection() {
  const [isVisitorModalOpen, setIsVisitorModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Beautiful temple exterior with golden domes and traditional architecture */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 hero-gradient"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="fade-in">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl" data-testid="hero-title">
              Welcome to ISKCON Chandigarh
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-lg" data-testid="hero-subtitle">
              Home of Sri Sri Radha Madhav
            </p>
            
            {/* Hare Krishna Maha Mantra */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20" data-testid="mantra-section">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">Hare Krishna Maha Mantra</h2>
              <p className="text-lg md:text-xl font-medium leading-relaxed" data-testid="mantra-sanskrit">
                हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे<br />
                हरे राम हरे राम राम राम हरे हरे
              </p>
              <p className="text-base md:text-lg mt-4 opacity-90" data-testid="mantra-english">
                Hare Krishna Hare Krishna Krishna Krishna Hare Hare<br />
                Hare Rama Hare Rama Rama Rama Hare Hare
              </p>
            </div>
            
            <div className="flex justify-center">
              <button 
                onClick={() => setIsVisitorModalOpen(true)}
                className="bg-white text-foreground px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors shadow-lg"
                data-testid="button-visit-today"
              >
                <Calendar className="w-4 h-4 mr-2 inline" />
                Visit Us Today
              </button>
            </div>
          </div>
        </div>
      </section>

      <VisitorRegistrationModal 
        isOpen={isVisitorModalOpen}
        onClose={() => setIsVisitorModalOpen(false)}
      />
    </>
  );
}
