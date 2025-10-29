import { Moon, Heart, Sparkles } from "lucide-react";
import AffirmationCard from "@/components/AffirmationCard";
import DailyAffirmation from "@/components/DailyAffirmation";
import NewsletterSignup from "@/components/NewsletterSignup";
import heroImage from "@/assets/hero-dream.jpg";

const Index = () => {
  const sampleAffirmations = [
    "I release all tension from my body and mind as I prepare for peaceful rest",
    "My sleep is deep, restorative, and filled with beautiful dreams",
    "I trust in tomorrow and let go of today's worries",
    "Every breath I take brings me closer to complete relaxation",
    "I am grateful for this moment of peace and tranquility",
    "My mind is calm, my body is relaxed, and sleep comes naturally",
    "I deserve rest and renewal after a full day",
    "Tonight, I choose peace over worry and rest over stress",
    "I am safe, I am loved, and I am ready for restorative sleep",
    "As I close my eyes, I open my heart to peaceful dreams"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="gradient-hero absolute inset-0 opacity-80" />
        
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
          <div className="flex justify-center mb-6">
            <Moon className="w-16 h-16 text-primary-foreground animate-float" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Dream Affirmations
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Embrace peaceful sleep with calming affirmations designed to reduce stress, 
            quiet your mind, and guide you into restorative rest
          </p>
          
          <div className="flex justify-center gap-8 mt-12 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>Reduce Stress</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Sleep Peacefully</span>
            </div>
            <div className="flex items-center gap-2">
              <Moon className="w-5 h-5" />
              <span>Daily Updates</span>
            </div>
          </div>
        </div>
      </header>

      {/* Daily Affirmation Section */}
      <DailyAffirmation />

      {/* Sample Affirmations Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-4 text-foreground">
          Sleep Affirmations for Peaceful Nights
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore our collection of positive bedtime quotes and night affirmations 
          to help you unwind and prepare for restful sleep
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {sampleAffirmations.map((affirmation, index) => (
            <AffirmationCard 
              key={index} 
              text={affirmation}
              delay={index * 0.2}
            />
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Moon className="w-6 h-6" />
              <span className="font-semibold text-lg">Dream Affirmations</span>
            </div>
            
            <nav className="flex gap-8">
              <a 
                href="#about" 
                className="hover:text-primary-foreground transition-colors"
              >
                About
              </a>
              <a 
                href="#privacy" 
                className="hover:text-primary-foreground transition-colors"
              >
                Privacy
              </a>
            </nav>
          </div>
          
          <div className="text-center mt-8 text-accent-foreground/70 text-sm">
            <p>© 2025 Dream Affirmations. All rights reserved.</p>
            <p className="mt-2">
              Find peace and tranquility with our daily collection of sleep affirmations, 
              night affirmations, and positive bedtime quotes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
