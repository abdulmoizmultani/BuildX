import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Modern Residential Estate',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1715231667593-5a32b2828546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2ODcxNzgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Luxury 5-bedroom custom home with modern amenities',
      stats: { size: '4,500 sq ft', duration: '12 months', budget: '$1.2M' },
    },
    {
      title: 'Downtown Office Complex',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1704297275778-8763889fa47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY4NzE3ODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'State-of-the-art office building with eco-friendly features',
      stats: { size: '50,000 sq ft', duration: '18 months', budget: '$8M' },
    },
    {
      title: 'Contemporary Architecture',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1768204040341-6ea6aa4b5746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY4NjkzODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Award-winning modern design with sustainable materials',
      stats: { size: '3,200 sq ft', duration: '10 months', budget: '$950K' },
    },
    {
      title: 'Historic Building Renovation',
      category: 'Renovation',
      image: 'https://images.unsplash.com/photo-1711296168555-ea2526321306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5vdmF0aW9uJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NzE3ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Complete restoration preserving original character',
      stats: { size: '6,000 sq ft', duration: '14 months', budget: '$1.5M' },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-neutral-500 uppercase tracking-wider text-sm mb-2">Our Portfolio</div>
          <h2 className="text-4xl md:text-5xl mb-4 text-neutral-900">
            Featured Projects
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            Explore our recent construction projects showcasing quality craftsmanship and innovative design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-neutral-900 px-4 py-2 rounded text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-neutral-900 group-hover:text-neutral-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 mb-4">{project.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-4 pt-4 border-t border-neutral-100">
                  <div>
                    <div className="text-sm text-neutral-500">Size</div>
                    <div className="text-neutral-900">{project.stats.size}</div>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Duration</div>
                    <div className="text-neutral-900">{project.stats.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Value</div>
                    <div className="text-neutral-900">{project.stats.budget}</div>
                  </div>
                </div>
                <button className="text-neutral-700 hover:text-neutral-900 flex items-center gap-2 group/btn">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
