import { Building, User, MapPin, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="about-title">
            About ISKCON Chandigarh
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed" data-testid="about-description">
            Established to spread the teachings of Lord Krishna and the practice of Bhakti Yoga, 
            ISKCON Chandigarh serves as a beacon of spiritual light in the beautiful City of Gardens.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* History Card */}
          <div className="bg-card rounded-xl p-8 shadow-lg fade-in" data-testid="history-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Building className="text-primary text-2xl" />
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4 text-card-foreground">Our History</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded in 1985, ISKCON Chandigarh has been serving the spiritual needs of devotees 
              for nearly four decades. Our temple stands as a testament to devotion and community service.
            </p>
            <button className="text-primary font-semibold hover:text-primary/80 transition-colors" data-testid="button-learn-more-history">
              Learn More <ArrowRight className="w-4 h-4 ml-1 inline" />
            </button>
          </div>

          {/* Srila Prabhupada Card */}
          <div className="bg-card rounded-xl p-8 shadow-lg fade-in" data-testid="prabhupada-card">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <User className="text-secondary text-2xl" />
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4 text-card-foreground">Srila Prabhupada</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A.C. Bhaktivedanta Swami Prabhupada brought Krishna consciousness to the Western world. 
              His teachings continue to guide millions towards spiritual enlightenment.
            </p>
            <button className="text-secondary font-semibold hover:text-secondary/80 transition-colors" data-testid="button-read-biography">
              Read Biography <ArrowRight className="w-4 h-4 ml-1 inline" />
            </button>
          </div>

          {/* Location Card */}
          <div className="bg-card rounded-xl p-8 shadow-lg fade-in" data-testid="location-card">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-accent-foreground text-2xl" />
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4 text-card-foreground">Visit Us</h3>
            <div className="text-muted-foreground mb-6 space-y-2">
              <p>Dakshin Marg, Sector 36-A</p>
              <p>Chandigarh, Punjab 160036</p>
              <p><strong>Phone:</strong> +91-172-XXXXXXX</p>
            </div>
            <button className="text-accent-foreground font-semibold hover:opacity-80 transition-colors" data-testid="button-get-directions">
              Get Directions <ArrowRight className="w-4 h-4 ml-1 inline" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
