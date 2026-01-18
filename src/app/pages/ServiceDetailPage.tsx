import { ArrowLeft, Check, Phone } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { LucideIcon } from 'lucide-react';

interface ServiceDetailPageProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  process: { title: string; description: string }[];
  icon: LucideIcon;
  onBack: () => void;
  onContact: () => void;
}

export function ServiceDetailPage({
  title,
  description,
  image,
  features,
  benefits,
  process,
  icon: Icon,
  onBack,
  onContact,
}: ServiceDetailPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-neutral-900">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-white hover:text-neutral-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                <Icon className="w-8 h-8 text-neutral-800" />
              </div>
              <h1 className="text-4xl md:text-5xl text-white">{title}</h1>
            </div>
            <p className="text-xl text-neutral-200 max-w-3xl">{description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-neutral-900">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 bg-neutral-50 p-6 rounded-lg">
                <Check className="w-6 h-6 text-neutral-800 flex-shrink-0 mt-1" />
                <span className="text-neutral-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16 bg-neutral-800 text-white p-12 rounded-lg">
          <h2 className="text-3xl mb-8">Why Choose BuildPro?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-neutral-900">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-neutral-200"></div>
                )}
                <div className="relative bg-white border-2 border-neutral-200 p-6 rounded-lg hover:border-neutral-800 transition-colors">
                  <div className="w-12 h-12 bg-neutral-800 text-white rounded-full flex items-center justify-center mb-4 text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-lg mb-2 text-neutral-900">{step.title}</h3>
                  <p className="text-neutral-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-neutral-50 p-12 rounded-lg text-center">
          <h2 className="text-3xl mb-4 text-neutral-900">Ready to Get Started?</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onContact}
              className="bg-neutral-800 text-white px-8 py-4 rounded hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </button>
            <a
              href="tel:+1234567890"
              className="border-2 border-neutral-800 text-neutral-800 px-8 py-4 rounded hover:bg-neutral-800 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
