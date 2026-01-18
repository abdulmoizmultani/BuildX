import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
          <h1 className="text-4xl md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-neutral-300">Last updated: January 18, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-neutral max-w-none">
          <h2 className="text-2xl mb-4 text-neutral-900">1. Information We Collect</h2>
          <p className="text-neutral-600 mb-6">
            At BuildPro Construction, we collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>Contact information (name, email address, phone number, mailing address)</li>
            <li>Project details and specifications</li>
            <li>Payment and billing information</li>
            <li>Communication preferences</li>
          </ul>

          <h2 className="text-2xl mb-4 text-neutral-900">2. How We Use Your Information</h2>
          <p className="text-neutral-600 mb-6">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>Provide, maintain, and improve our construction services</li>
            <li>Process and complete transactions</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about products, services, offers, and events</li>
          </ul>

          <h2 className="text-2xl mb-4 text-neutral-900">3. Information Sharing</h2>
          <p className="text-neutral-600 mb-6">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>To trusted third parties who assist us in operating our business</li>
            <li>When required by law or to protect our rights</li>
            <li>With your explicit consent</li>
          </ul>

          <h2 className="text-2xl mb-4 text-neutral-900">4. Data Security</h2>
          <p className="text-neutral-600 mb-6">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl mb-4 text-neutral-900">5. Your Rights</h2>
          <p className="text-neutral-600 mb-6">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-2xl mb-4 text-neutral-900">6. Cookies</h2>
          <p className="text-neutral-600 mb-6">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2 className="text-2xl mb-4 text-neutral-900">7. Changes to This Policy</h2>
          <p className="text-neutral-600 mb-6">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl mb-4 text-neutral-900">8. Contact Us</h2>
          <p className="text-neutral-600 mb-2">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-none text-neutral-600 space-y-2">
            <li>Email: privacy@buildpro.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Construction Ave, Building District, BD 12345</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
