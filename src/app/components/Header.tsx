import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      {/* Top Bar */}
      <div className="bg-neutral-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-neutral-300">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(123) 456-7890</span>
            </a>
            <a href="mailto:info@buildpro.com" className="flex items-center gap-2 hover:text-neutral-300">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@buildpro.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm">Mon - Fri: 8:00 AM - 6:00 PM</div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl tracking-tight text-neutral-800">
              BUILD<span className="text-neutral-500">PRO</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-neutral-700 hover:text-neutral-900">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-neutral-700 hover:text-neutral-900">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-neutral-700 hover:text-neutral-900">
              Services
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-neutral-700 hover:text-neutral-900">
              Projects
            </button>
            <button onClick={() => scrollToSection('process')} className="text-neutral-700 hover:text-neutral-900">
              Process
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-neutral-700 hover:text-neutral-900">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-neutral-800 text-white px-6 py-2 rounded hover:bg-neutral-700 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-700 hover:text-neutral-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-neutral-700 hover:text-neutral-900 text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-neutral-700 hover:text-neutral-900 text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-neutral-700 hover:text-neutral-900 text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-neutral-700 hover:text-neutral-900 text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('process')} className="text-neutral-700 hover:text-neutral-900 text-left">
                Process
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-neutral-700 hover:text-neutral-900 text-left">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-neutral-800 text-white px-6 py-2 rounded hover:bg-neutral-700 transition-colors text-left">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
