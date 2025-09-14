import { ExternalLink, Calendar, Clock } from "lucide-react";

export default function EventsSection() {
  return (
    <section id="events" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="events-title">
            Events & Festivals
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="events-description">
            Join us in celebrating divine festivals and participating in spiritual programs throughout the year
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <div className="fade-in">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground" data-testid="upcoming-events-title">
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {/* Event Card 1 */}
              <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-primary" data-testid="event-janmashtami">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-lg text-card-foreground">Janmashtami Celebration</h4>
                    <p className="text-muted-foreground">Birth of Lord Krishna</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">Aug 30</p>
                    <p className="text-sm text-muted-foreground">2024</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Grand celebration with midnight aarti, cultural programs, and prasadam distribution.
                </p>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors" data-testid="button-register-janmashtami">
                  <ExternalLink className="w-4 h-4 mr-2 inline" />
                  Register Now
                </button>
              </div>

              {/* Event Card 2 */}
              <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-secondary" data-testid="event-gita-study">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-lg text-card-foreground">Bhagavad Gita Study Circle</h4>
                    <p className="text-muted-foreground">Weekly spiritual study</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-secondary">Every Sunday</p>
                    <p className="text-sm text-muted-foreground">6:00 PM</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Deep dive into the teachings of Bhagavad Gita with guided discussions and Q&A sessions.
                </p>
                <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-secondary/90 transition-colors" data-testid="button-join-study-group">
                  <ExternalLink className="w-4 h-4 mr-2 inline" />
                  Join Study Group
                </button>
              </div>

              {/* Event Card 3 */}
              <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-accent" data-testid="event-govardhan">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-lg text-card-foreground">Govardhan Puja</h4>
                    <p className="text-muted-foreground">Festival of offering</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-accent-foreground">Nov 14</p>
                    <p className="text-sm text-muted-foreground">2024</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Celebrate with Govardhan hill offerings, kirtan, and community feast.
                </p>
                <button className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors" data-testid="button-learn-more-govardhan">
                  <ExternalLink className="w-4 h-4 mr-2 inline" />
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Festival Calendar */}
          <div className="fade-in">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground" data-testid="festival-calendar-title">
              Festival Calendar 2024
            </h3>
            <div className="bg-card rounded-xl p-6 shadow-lg" data-testid="calendar-widget">
              <div className="grid grid-cols-7 gap-2 mb-4">
                <div className="text-center font-semibold text-muted-foreground py-2">Sun</div>
                <div className="text-center font-semibold text-muted-foreground py-2">Mon</div>
                <div className="text-center font-semibold text-muted-foreground py-2">Tue</div>
                <div className="text-center font-semibold text-muted-foreground py-2">Wed</div>
                <div className="text-center font-semibold text-muted-foreground py-2">Thu</div>
                <div className="text-center font-semibold text-muted-foreground py-2">Fri</div>
                <div className="text-center font-semibold text-muted-foreground py-2">Sat</div>
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {/* Calendar Days */}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <div 
                    key={day}
                    className={`text-center py-2 ${
                      day === 12 ? 'bg-primary text-primary-foreground rounded-lg font-semibold' :
                      day === 30 ? 'bg-secondary text-secondary-foreground rounded-lg font-semibold' :
                      'text-muted-foreground'
                    }`}
                    data-testid={`calendar-day-${day}`}
                  >
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded"></div>
                  <span className="text-sm text-muted-foreground">Ekadashi</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-secondary rounded"></div>
                  <span className="text-sm text-muted-foreground">Festival Day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
