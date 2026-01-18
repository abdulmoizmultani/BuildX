import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1723107638858-331404b1a09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY4NjY1NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white">
          Building Your Dreams<br />Into Reality
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-neutral-200 max-w-3xl mx-auto">
          Professional construction services with 25+ years of experience. Quality craftsmanship, on-time delivery, and exceptional results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="bg-white text-neutral-900 px-8 py-4 rounded hover:bg-neutral-100 transition-colors flex items-center gap-2 text-lg"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={scrollToProjects}
            className="border-2 border-white text-white px-8 py-4 rounded hover:bg-white hover:text-neutral-900 transition-colors text-lg"
          >
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl md:text-5xl text-white">25+</div>
            <div className="text-neutral-300 mt-2">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl text-white">500+</div>
            <div className="text-neutral-300 mt-2">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl text-white">98%</div>
            <div className="text-neutral-300 mt-2">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl text-white">50+</div>
            <div className="text-neutral-300 mt-2">Expert Team</div>
          </div>
        </div>
      </div>
    </section>
  );
}
