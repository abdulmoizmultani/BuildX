import { Home, Building2, Wrench, HardHat, PaintBucket, Hammer } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, additions, and remodeling projects built to your exact specifications with quality craftsmanship.',
      features: ['New Home Construction', 'Home Additions', 'Kitchen & Bath Remodeling', 'Basement Finishing'],
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Professional commercial building solutions for offices, retail spaces, and industrial facilities.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Industrial Facilities'],
    },
    {
      icon: Wrench,
      title: 'Renovation & Restoration',
      description: 'Breathe new life into existing structures with our expert renovation and restoration services.',
      features: ['Historic Restoration', 'Building Upgrades', 'Space Conversion', 'Facade Renovation'],
    },
    {
      icon: HardHat,
      title: 'General Contracting',
      description: 'Full-service project management from planning and permits to final inspection and handover.',
      features: ['Project Management', 'Permit Acquisition', 'Subcontractor Coordination', 'Quality Control'],
    },
    {
      icon: PaintBucket,
      title: 'Interior & Finishing',
      description: 'Premium interior finishing services including drywall, flooring, painting, and custom carpentry.',
      features: ['Drywall & Painting', 'Flooring Installation', 'Custom Cabinetry', 'Trim & Molding'],
    },
    {
      icon: Hammer,
      title: 'Site Development',
      description: 'Complete site preparation, excavation, and foundation services for any construction project.',
      features: ['Land Clearing', 'Excavation', 'Foundation Work', 'Grading & Drainage'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-neutral-500 uppercase tracking-wider text-sm mb-2">Our Services</div>
          <h2 className="text-4xl md:text-5xl mb-4 text-neutral-900">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            From concept to completion, we provide a full range of construction services to meet all your building needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-800 transition-colors">
                <service.icon className="w-8 h-8 text-neutral-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl mb-4 text-neutral-900">{service.title}</h3>
              <p className="text-neutral-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-neutral-600 flex items-start">
                    <span className="text-neutral-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
