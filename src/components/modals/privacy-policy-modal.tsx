"use client"

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <XIcon />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            <p className="text-sm text-gray-500">Last updated: January 2025</p>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h3>
              <p>
                We collect information you provide directly to us, such as when you create an account, use our services,
                or contact us. This may include your name, email address, phone number, and other contact information.
              </p>
              <p>
                We automatically collect certain information about your device and usage of our services, including IP
                address, browser type, operating system, and usage patterns.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">3. Information Sharing</h3>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Service providers who assist us in operating our services</li>
                <li>Law enforcement or government agencies when required by law</li>
                <li>Other parties in connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">4. Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">5. Data Retention</h3>
              <p>
                We retain your personal information for as long as necessary to provide our services and fulfill the
                purposes outlined in this policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">6. Your Rights</h3>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify inaccurate personal information</li>
                <li>The right to erase your personal information</li>
                <li>The right to restrict processing of your personal information</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">7. International Transfers</h3>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place to protect your information in accordance with this policy.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">8. Changes to This Policy</h3>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">9. Contact Us</h3>
              <p>If you have any questions about this privacy policy, please contact us at:</p>
              <p>
                Email: privacy@falconix.com
                <br />
                Address: Falconix Inc., 1 Rocket Road, Hawthorne, CA 90250
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
