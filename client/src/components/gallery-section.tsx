import { useState } from "react";

type FilterType = 'all' | 'deities' | 'festivals' | 'events' | 'temple';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Krishna deity darshan with elaborate decorations",
    category: "deities"
  },
  {
    src: "https://pixabay.com/get/gffbcacb6eaa50d971fc602b7be26e331d8edf42c84f93997470b4944341aeda6c8f56057a96382041ee9b3efcc5d72f26618eb0154b22963d3c8855954333c44_1280.jpg",
    alt: "Radha deity in beautiful silk attire with flowers",
    category: "deities"
  },
  {
    src: "https://pixabay.com/get/g25d7fe10c214a5e146ea7ed962d13f0b4a3b62fe529a6a7368b88d5cb78983bccad90f487b6e727e9f61bdf010f2d94e3d9451cf3d7a52e598e5b9a0acc787df_1280.jpg",
    alt: "Holi festival celebration with colorful powder and joy",
    category: "festivals"
  },
  {
    src: "https://pixabay.com/get/g3aa69e15ad200ca3906c4451a1d81809c5eb098b6a63972bbcb379ad327db9ebb3e7f7f02f2cc2cc0ddc8370af5697c189b78a46fe774ef39164d8503cee5460_1280.jpg",
    alt: "Diwali celebration with diyas and intricate rangoli designs",
    category: "festivals"
  },
  {
    src: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Spiritual discourse session with devoted audience",
    category: "events"
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Devotees engaged in kirtan with traditional instruments",
    category: "events"
  },
  {
    src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Intricate temple architecture with detailed stone carvings",
    category: "temple"
  },
  {
    src: "https://pixabay.com/get/gaaf8dbc3bd238bc7f3c0b1856550be3eaf6811fd3042fc1e7453423dcdf20fb664488214a5488b6fbcb10956564b619d4a6d36e8f607a69887dfc3b408d47e90_1280.jpg",
    alt: "Peaceful temple courtyard with devotees in prayer",
    category: "temple"
  },
  {
    src: "https://pixabay.com/get/gde28cb60bbb04d681c58b286ad663213a7cc5ad0886ed4ec29a7de58162f36e5fd5615e8e8bcb00f5351049be412519f1817a3e3a31cfd898693be31dd1c88fb_1280.jpg",
    alt: "Janmashtami celebration with decorated cradle and floral arrangements",
    category: "festivals"
  }
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const filterButtons = [
    { key: 'all' as FilterType, label: 'All' },
    { key: 'deities' as FilterType, label: 'Deities' },
    { key: 'festivals' as FilterType, label: 'Festivals' },
    { key: 'events' as FilterType, label: 'Events' },
    { key: 'temple' as FilterType, label: 'Temple' },
  ];

  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="gallery-title">
            Darshan Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="gallery-description">
            Experience the divine beauty through our collection of sacred moments and festive celebrations
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
          {filterButtons.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeFilter === key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
              data-testid={`filter-${key}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div key={index} className="fade-in" data-testid={`gallery-item-${index}`}>
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
