import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Award, Shield, Clock, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Award-winning construction services with uncompromising standards',
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Full licensing, bonding, and comprehensive insurance coverage',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Proven track record of completing projects on schedule',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals dedicated to your project success',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="text-neutral-500 uppercase tracking-wider text-sm mb-2">About BuildPro</div>
            <h2 className="text-4xl md:text-5xl mb-6 text-neutral-900">
              Building Excellence Since 1998
            </h2>
            <p className="text-neutral-600 text-lg mb-6">
              BuildPro Construction has been the trusted name in construction services for over 25 years. Our commitment to quality, safety, and customer satisfaction has made us a leader in the industry.
            </p>
            <p className="text-neutral-600 text-lg mb-8">
              From residential homes to large-scale commercial projects, we bring expertise, innovation, and dedication to every build. Our team of certified professionals ensures that every project meets the highest standards of quality and craftsmanship.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <feature.icon className="w-10 h-10 text-neutral-700 mb-3" />
                  <h3 className="text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbXxlbnwxfHx8fDE3Njg2Mjc1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Badge */}
            <div className="absolute -bottom-8 -left-8 bg-neutral-800 text-white p-8 rounded-lg shadow-xl">
              <div className="text-5xl mb-2">25+</div>
              <div className="text-neutral-300">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
