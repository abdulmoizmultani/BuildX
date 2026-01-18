import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-neutral-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-neutral-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl mb-4">Terms of Service</h1>
          <p className="text-neutral-300">Last updated: January 18, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-neutral max-w-none">
          <h2 className="text-2xl mb-4 text-neutral-900">1. Acceptance of Terms</h2>
          <p className="text-neutral-600 mb-6">
            By accessing and using BuildPro Construction services, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl mb-4 text-neutral-900">2. Services Description</h2>
          <p className="text-neutral-600 mb-6">
            BuildPro Construction provides professional construction services including:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>Residential construction and remodeling</li>
            <li>Commercial construction projects</li>
            <li>Renovation and restoration services</li>
            <li>General contracting and project management</li>
            <li>Interior finishing and site development</li>
          </ul>

          <h2 className="text-2xl mb-4 text-neutral-900">3. Project Agreements</h2>
          <p className="text-neutral-600 mb-6">
            All construction projects require a signed contract that includes:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>Detailed scope of work</li>
            <li>Project timeline and milestones</li>
            <li>Payment terms and schedule</li>
            <li>Warranty information</li>
            <li>Change order procedures</li>
          </ul>

          <h2 className="text-2xl mb-4 text-neutral-900">4. Payment Terms</h2>
          <p className="text-neutral-600 mb-6">
            Payment terms will be specified in your project contract. Typically:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>Initial deposit required to secure project start date</li>
            <li>Progress payments based on completion milestones</li>
            <li>Final payment due upon project completion and approval</li>
            <li>Late payments may incur additional fees</li>
          </ul>

          <h2 className="text-2xl mb-4 text-neutral-900">5. Project Changes</h2>
          <p className="text-neutral-600 mb-6">
            Any changes to the agreed scope of work must be documented through a change order. Changes may affect project timeline and cost.
          </p>

          <h2 className="text-2xl mb-4 text-neutral-900">6. Warranties</h2>
          <p className="text-neutral-600 mb-6">
            We provide warranties on our workmanship and materials as specified in your project contract. Warranty periods and coverage vary by project type.
          </p>

          <h2 className="text-2xl mb-4 text-neutral-900">7. Liability Limitations</h2>
          <p className="text-neutral-600 mb-6">
            BuildPro Construction maintains comprehensive insurance coverage. Our liability is limited as outlined in the project contract and applicable law.
          </p>

          <h2 className="text-2xl mb-4 text-neutral-900">8. Permits and Regulations</h2>
          <p className="text-neutral-600 mb-6">
            We will obtain necessary permits and ensure compliance with local building codes and regulations. Client cooperation may be required for certain permits.
          </p>

          <h2 className="text-2xl mb-4 text-neutral-900">9. Dispute Resolution</h2>
          <p className="text-neutral-600 mb-6">
            Any disputes arising from our services will first be addressed through good-faith negotiation. If unresolved, disputes may be subject to mediation or arbitration as specified in the project contract.
          </p>

          <h2 className="text-2xl mb-4 text-neutral-900">10. Termination</h2>
          <p className="text-neutral-600 mb-6">
            Either party may terminate the project agreement according to the terms specified in the contract. Termination procedures and associated costs will be outlined in your contract.
          </p>

          <h2 className="text-2xl mb-4 text-neutral-900">11. Contact Information</h2>
          <p className="text-neutral-600 mb-2">
            For questions about these Terms of Service:
          </p>
          <ul className="list-none text-neutral-600 space-y-2">
            <li>Email: legal@buildpro.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Construction Ave, Building District, BD 12345</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
