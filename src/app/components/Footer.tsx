import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const services = [
    { name: 'Residential Construction', page: 'residential' },
    { name: 'Commercial Construction', page: 'commercial' },
    { name: 'Renovation & Restoration', page: 'renovation' },
    { name: 'General Contracting', page: 'contracting' },
    { name: 'Interior & Finishing', page: 'interior' },
    { name: 'Site Development', page: 'sitedevelopment' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl mb-4">
              BUILD<span className="text-neutral-400">PRO</span>
            </h3>
            <p className="text-neutral-400 mb-6">
              Building excellence since 1998. Your trusted partner for all construction needs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.page}>
                  <button
                    onClick={() => onNavigate(service.page)}
                    className="text-neutral-400 hover:text-white transition-colors text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-1" />
                <span className="text-neutral-400">
                  123 Construction Ave<br />Building District, BD 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-neutral-400 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <a href="mailto:info@buildpro.com" className="text-neutral-400 hover:text-white transition-colors">
                  info@buildpro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-neutral-400 text-sm mb-1">Licensed</div>
              <div className="text-white">CA License #123456</div>
            </div>
            <div>
              <div className="text-neutral-400 text-sm mb-1">Bonded</div>
              <div className="text-white">Fully Insured</div>
            </div>
            <div>
              <div className="text-neutral-400 text-sm mb-1">Certified</div>
              <div className="text-white">LEED Certified</div>
            </div>
            <div>
              <div className="text-neutral-400 text-sm mb-1">Member</div>
              <div className="text-white">ABC Association</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © {currentYear} BuildPro Construction. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button onClick={() => onNavigate('privacy')} className="text-neutral-400 hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('terms')} className="text-neutral-400 hover:text-white transition-colors">
              Terms of Service
            </button>
            <button onClick={() => onNavigate('sitemap')} className="text-neutral-400 hover:text-white transition-colors">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}