import { Bell } from "lucide-react";

export default function DeitySection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="deity-title">
            Sri Sri Radha Madhav
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="deity-description">
            Divine beauty and eternal love manifest in the sacred forms of our beloved deities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            {/* Beautiful deity photo of Radha Krishna with intricate decorations and flowers */}
            <img 
              src="https://pixabay.com/get/gf660c29db93aedd86cd3cee71c1798e7695028560a124209df4fa8d465f35da36cf61320f9fa63f141e4a397b35382d665939e68ec02abe804555f7927aced2d_1280.png" 
              alt="Sri Sri Radha Madhav deity darshan" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="deity-image"
            />
          </div>
          
          <div className="space-y-6 fade-in">
            <h3 className="font-serif text-3xl font-semibold text-foreground" data-testid="darshan-times-title">
              Daily Darshan Times
            </h3>
            
            <div className="space-y-4" data-testid="darshan-schedule">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="font-semibold">Mangala Aarti</span>
                <span className="text-muted-foreground">4:30 AM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="font-semibold">Guru Puja</span>
                <span className="text-muted-foreground">7:00 AM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="font-semibold">Raj Bhog Aarti</span>
                <span className="text-muted-foreground">12:15 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="font-semibold">Sandhya Aarti</span>
                <span className="text-muted-foreground">7:00 PM</span>
              </div>
            </div>
            
            <button 
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              data-testid="button-darshan-notifications"
            >
              <Bell className="w-4 h-4 mr-2 inline" />
              Get Darshan Notifications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
