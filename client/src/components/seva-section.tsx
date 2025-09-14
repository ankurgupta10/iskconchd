import { Utensils, Leaf, Book, Lightbulb, Music, Home } from "lucide-react";

export default function SevaSection() {
  const sevaServices = [
    {
      icon: <Utensils className="text-primary text-2xl" />,
      title: "Prasadam Seva",
      description: "Sponsor daily meals for devotees and visitors. Your contribution helps us serve Krishna prasadam to all.",
    },
    {
      icon: <Leaf className="text-secondary text-2xl" />,
      title: "Flower Seva",
      description: "Sponsor fresh flowers for daily deity decorations and create a beautiful atmosphere for darshan.",
    },
    {
      icon: <Book className="text-accent-foreground text-2xl" />,
      title: "Book Distribution",
      description: "Support the distribution of Srila Prabhupada's books and spread Krishna consciousness worldwide.",
    },
    {
      icon: <Lightbulb className="text-primary text-2xl" />,
      title: "Ghee Lamp Seva",
      description: "Light ghee lamps during aarti to create divine ambiance and receive special blessings.",
    },
    {
      icon: <Music className="text-secondary text-2xl" />,
      title: "Kirtan Seva",
      description: "Support our daily kirtan programs and help create a spiritually uplifting atmosphere.",
    },
    {
      icon: <Home className="text-accent-foreground text-2xl" />,
      title: "Temple Maintenance",
      description: "Help maintain our beautiful temple premises and ensure a clean, peaceful environment for all.",
    }
  ];


  return (
    <section id="seva" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="seva-title">
            Daily Seva
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="seva-description">
            Participate in various services and offerings to enhance your spiritual journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sevaServices.map((service, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-lg text-center fade-in" data-testid={`seva-card-${index}`}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-card-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Donation options coming soon
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
