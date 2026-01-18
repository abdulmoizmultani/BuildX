import { Home, Building2, Wrench, HardHat, PaintBucket, Hammer } from 'lucide-react';
import { ServiceDetailPage } from './ServiceDetailPage';

interface ServicePageProps {
  onBack: () => void;
  onContact: () => void;
}

export function ResidentialConstruction({ onBack, onContact }: ServicePageProps) {
  return (
    <ServiceDetailPage
      title="Residential Construction"
      description="Build your dream home with our expert residential construction services. From custom homes to additions and remodels, we bring your vision to life."
      image="https://images.unsplash.com/photo-1715231667593-5a32b2828546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2ODcxNzgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      icon={Home}
      features={[
        'Custom home design and construction',
        'Home additions and extensions',
        'Kitchen and bathroom remodeling',
        'Basement finishing and conversions',
        'Deck and patio construction',
        'Garage building and conversions',
        'Energy-efficient home upgrades',
        'Smart home integration',
      ]}
      benefits={[
        '25+ years of residential experience',
        'Licensed and insured contractors',
        'Quality craftsmanship guaranteed',
        'On-time project completion',
        'Transparent pricing',
        'Excellent customer service',
      ]}
      process={[
        {
          title: 'Initial Consultation',
          description: 'We meet to discuss your vision, requirements, and budget for your dream home.',
        },
        {
          title: 'Design & Planning',
          description: 'Our team creates detailed plans and obtains necessary permits.',
        },
        {
          title: 'Construction',
          description: 'Expert craftsmen bring your project to life with precision and care.',
        },
        {
          title: 'Final Walkthrough',
          description: 'We ensure everything meets your expectations before project completion.',
        },
      ]}
      onBack={onBack}
      onContact={onContact}
    />
  );
}

export function CommercialConstruction({ onBack, onContact }: ServicePageProps) {
  return (
    <ServiceDetailPage
      title="Commercial Construction"
      description="Professional commercial construction services for offices, retail spaces, and industrial facilities. Build for success with BuildPro."
      image="https://images.unsplash.com/photo-1704297275778-8763889fa47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY4NzE3ODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      icon={Building2}
      features={[
        'Office building construction',
        'Retail and shopping center development',
        'Warehouse and industrial facilities',
        'Restaurant and hospitality construction',
        'Medical and healthcare facilities',
        'Educational institution buildings',
        'Mixed-use developments',
        'Tenant improvements',
      ]}
      benefits={[
        'Experienced commercial team',
        'Minimized business disruption',
        'Code compliance expertise',
        'Value engineering',
        'Fast-track scheduling',
        'Budget management',
      ]}
      process={[
        {
          title: 'Project Assessment',
          description: 'We evaluate your commercial needs and site requirements.',
        },
        {
          title: 'Permit & Approvals',
          description: 'Handle all commercial permits and regulatory approvals.',
        },
        {
          title: 'Build Phase',
          description: 'Efficient construction with minimal business interruption.',
        },
        {
          title: 'Handover',
          description: 'Complete inspection and move-in ready delivery.',
        },
      ]}
      onBack={onBack}
      onContact={onContact}
    />
  );
}

export function RenovationRestoration({ onBack, onContact }: ServicePageProps) {
  return (
    <ServiceDetailPage
      title="Renovation & Restoration"
      description="Breathe new life into existing structures with our expert renovation and restoration services. Preserve history while adding modern functionality."
      image="https://images.unsplash.com/photo-1711296168555-ea2526321306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5vdmF0aW9uJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NzE3ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      icon={Wrench}
      features={[
        'Historic building restoration',
        'Complete home renovations',
        'Commercial space remodeling',
        'Facade renovation and repair',
        'Structural upgrades',
        'Interior modernization',
        'Accessibility improvements',
        'Heritage preservation',
      ]}
      benefits={[
        'Preservation specialists',
        'Modern techniques',
        'Quality restoration',
        'Attention to detail',
        'Historical accuracy',
        'Code updates',
      ]}
      process={[
        {
          title: 'Assessment',
          description: 'Detailed evaluation of existing structure and requirements.',
        },
        {
          title: 'Restoration Plan',
          description: 'Create comprehensive renovation and preservation plan.',
        },
        {
          title: 'Careful Execution',
          description: 'Skilled craftsmen restore with precision and care.',
        },
        {
          title: 'Quality Check',
          description: 'Thorough inspection ensures historical integrity.',
        },
      ]}
      onBack={onBack}
      onContact={onContact}
    />
  );
}

export function GeneralContracting({ onBack, onContact }: ServicePageProps) {
  return (
    <ServiceDetailPage
      title="General Contracting"
      description="Full-service project management from planning and permits to final inspection and handover. Your single point of contact for construction projects."
      image="https://images.unsplash.com/photo-1723107638858-331404b1a09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY4NjY1NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      icon={HardHat}
      features={[
        'Complete project management',
        'Permit acquisition and processing',
        'Subcontractor coordination',
        'Schedule and budget management',
        'Quality control and inspection',
        'Client communication',
        'Safety management',
        'Final delivery and warranty',
      ]}
      benefits={[
        'Single point of contact',
        'Streamlined communication',
        'Expert coordination',
        'Cost efficiency',
        'Time management',
        'Quality assurance',
      ]}
      process={[
        {
          title: 'Project Planning',
          description: 'Comprehensive planning and budgeting for your project.',
        },
        {
          title: 'Team Assembly',
          description: 'Coordinate all subcontractors and specialists needed.',
        },
        {
          title: 'Execution',
          description: 'Manage all phases of construction efficiently.',
        },
        {
          title: 'Completion',
          description: 'Final inspection and warranty documentation.',
        },
      ]}
      onBack={onBack}
      onContact={onContact}
    />
  );
}

export function InteriorFinishing({ onBack, onContact }: ServicePageProps) {
  return (
    <ServiceDetailPage
      title="Interior & Finishing"
      description="Premium interior finishing services including drywall, flooring, painting, and custom carpentry. Perfect the details that make a house a home."
      image="https://images.unsplash.com/photo-1711296168555-ea2526321306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5vdmF0aW9uJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NzE3ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      icon={PaintBucket}
      features={[
        'Drywall installation and finishing',
        'Professional painting services',
        'Hardwood and tile flooring',
        'Custom cabinetry and millwork',
        'Trim and molding installation',
        'Ceiling treatments',
        'Wall texturing and finishes',
        'Built-in furniture',
      ]}
      benefits={[
        'Expert craftsmen',
        'Premium materials',
        'Attention to detail',
        'Custom solutions',
        'Clean worksite',
        'Quality finishes',
      ]}
      process={[
        {
          title: 'Design Selection',
          description: 'Choose finishes, colors, and materials for your space.',
        },
        {
          title: 'Preparation',
          description: 'Proper surface prep ensures perfect application.',
        },
        {
          title: 'Installation',
          description: 'Skilled craftsmen apply finishes with precision.',
        },
        {
          title: 'Final Touch',
          description: 'Detail work and quality inspection.',
        },
      ]}
      onBack={onBack}
      onContact={onContact}
    />
  );
}

export function SiteDevelopment({ onBack, onContact }: ServicePageProps) {
  return (
    <ServiceDetailPage
      title="Site Development"
      description="Complete site preparation, excavation, and foundation services for any construction project. We prepare the groundwork for your success."
      image="https://images.unsplash.com/photo-1723107638858-331404b1a09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY4NjY1NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      icon={Hammer}
      features={[
        'Land clearing and grubbing',
        'Excavation and grading',
        'Foundation installation',
        'Drainage systems',
        'Utility installation',
        'Retaining walls',
        'Concrete and asphalt work',
        'Erosion control',
      ]}
      benefits={[
        'Modern equipment',
        'Experienced operators',
        'Proper drainage',
        'Code compliance',
        'Safety first',
        'Efficient work',
      ]}
      process={[
        {
          title: 'Site Survey',
          description: 'Assess terrain, soil conditions, and requirements.',
        },
        {
          title: 'Preparation',
          description: 'Clear land and prepare for construction.',
        },
        {
          title: 'Foundation',
          description: 'Excavate and install foundation systems.',
        },
        {
          title: 'Final Grade',
          description: 'Complete grading and drainage installation.',
        },
      ]}
      onBack={onBack}
      onContact={onContact}
    />
  );
}
