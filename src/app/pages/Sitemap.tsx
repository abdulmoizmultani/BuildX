import { ArrowLeft, Home, FileText, Wrench } from 'lucide-react';

interface SitemapProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function Sitemap({ onBack, onNavigate }: SitemapProps) {
  const sections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', page: 'home' },
        { name: 'About Us', page: 'home', section: 'about' },
        { name: 'Services', page: 'home', section: 'services' },
        { name: 'Projects', page: 'home', section: 'projects' },
        { name: 'Our Process', page: 'home', section: 'process' },
        { name: 'Testimonials', page: 'home', section: 'testimonials' },
        { name: 'Contact Us', page: 'home', section: 'contact' },
      ],
    },
    {
      title: 'Our Services',
      icon: Wrench,
      links: [
        { name: 'Residential Construction', page: 'residential' },
        { name: 'Commercial Construction', page: 'commercial' },
        { name: 'Renovation & Restoration', page: 'renovation' },
        { name: 'General Contracting', page: 'contracting' },
        { name: 'Interior & Finishing', page: 'interior' },
        { name: 'Site Development', page: 'sitedevelopment' },
      ],
    },
    {
      title: 'Legal',
      icon: FileText,
      links: [
        { name: 'Privacy Policy', page: 'privacy' },
        { name: 'Terms of Service', page: 'terms' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-neutral-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-neutral-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl mb-4">Sitemap</h1>
          <p className="text-neutral-300">Find your way around BuildPro Construction</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {sections.map((section, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl text-neutral-900">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        if (link.section) {
                          onNavigate('home');
                          setTimeout(() => {
                            const element = document.getElementById(link.section!);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        } else {
                          onNavigate(link.page);
                        }
                      }}
                      className="text-neutral-600 hover:text-neutral-900 hover:underline transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-neutral-200">
          <div className="bg-neutral-50 p-8 rounded-lg">
            <h3 className="text-xl mb-4 text-neutral-900">Need Help?</h3>
            <p className="text-neutral-600 mb-4">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+1234567890" className="text-neutral-800 hover:text-neutral-600">
                Call us: (123) 456-7890
              </a>
              <span className="text-neutral-400">|</span>
              <a href="mailto:info@buildpro.com" className="text-neutral-800 hover:text-neutral-600">
                Email: info@buildpro.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
