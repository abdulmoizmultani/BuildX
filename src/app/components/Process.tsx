import { ClipboardList, PenTool, HardHat, CheckCircle2 } from 'lucide-react';

export function Process() {
  const steps = [
    {
      number: '01',
      icon: ClipboardList,
      title: 'Consultation & Planning',
      description: 'We meet with you to understand your vision, requirements, and budget. Our experts conduct site analysis and create detailed project plans.',
      details: ['Initial consultation', 'Site assessment', 'Budget planning', 'Timeline creation'],
    },
    {
      number: '02',
      icon: PenTool,
      title: 'Design & Permits',
      description: 'Our design team creates detailed blueprints and 3D renderings. We handle all necessary permits and approvals for your project.',
      details: ['Architectural design', 'Engineering plans', 'Permit acquisition', 'Material selection'],
    },
    {
      number: '03',
      icon: HardHat,
      title: 'Construction',
      description: 'Expert craftsmen bring your project to life with precision and care. We maintain strict quality control and keep you updated throughout.',
      details: ['Site preparation', 'Foundation work', 'Building construction', 'Regular updates'],
    },
    {
      number: '04',
      icon: CheckCircle2,
      title: 'Completion & Handover',
      description: 'Final inspections ensure everything meets our high standards. We conduct a thorough walkthrough and provide warranty documentation.',
      details: ['Quality inspection', 'Client walkthrough', 'Final adjustments', 'Warranty & support'],
    },
  ];

  return (
    <section id="process" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-neutral-500 uppercase tracking-wider text-sm mb-2">Our Process</div>
          <h2 className="text-4xl md:text-5xl mb-4 text-neutral-900">
            How We Work
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            A streamlined, transparent process that ensures your project is completed on time, within budget, and to the highest standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-neutral-200 -z-10"></div>
              )}
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 relative z-10">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 text-6xl opacity-10 text-neutral-300">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl mb-3 text-neutral-900">{step.title}</h3>
                <p className="text-neutral-600 mb-4 text-sm">{step.description}</p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-neutral-500 text-sm flex items-start">
                      <span className="text-neutral-400 mr-2">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-neutral-600 text-lg mb-6">
            Ready to start your construction project?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-neutral-800 text-white px-8 py-4 rounded hover:bg-neutral-700 transition-colors text-lg"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
