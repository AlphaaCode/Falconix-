"use client"

interface TermsOfUseModalProps {
  isOpen: boolean
  onClose: () => void
}

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

{
  /* you can change the text ofc */
}
export function TermsOfUseModal({ isOpen, onClose }: TermsOfUseModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">Terms of Use</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
            {/* Replaced lucide-react X icon with inline SVG */}
            <XIcon />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            <p className="text-sm text-gray-500">Last updated: January 2025</p>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h3>
              <p>
                By accessing and using Falconix services, you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">2. Description of Service</h3>
              <p>
                Falconix provides drone-powered medical logistics and emergency response systems. Our services include
                but are not limited to emergency medical supply delivery, disaster response coordination, and healthcare
                logistics optimization.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">3. User Responsibilities</h3>
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Providing accurate and complete information when using our services</li>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Using our services only for lawful purposes</li>
                <li>Not interfering with or disrupting our services</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">4. Prohibited Uses</h3>
              <p>You may not use our services:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>
                  To violate any international, federal, provincial, or state regulations, rules, laws, or local
                  ordinances
                </li>
                <li>
                  To infringe upon or violate our intellectual property rights or the intellectual property rights of
                  others
                </li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">5. Intellectual Property Rights</h3>
              <p>
                The service and its original content, features, and functionality are and will remain the exclusive
                property of Falconix Inc. and its licensors. The service is protected by copyright, trademark, and other
                laws.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">6. Medical Disclaimer</h3>
              <p>
                Falconix is not a healthcare provider. All medical services are provided by licensed healthcare
                professionals and partner institutions. Our technology facilitates logistics and coordination but does
                not replace professional medical judgment or care.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h3>
              <p>
                In no event shall Falconix Inc., nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">8. Disclaimer</h3>
              <p>
                The information on this service is provided on an "as is" basis. To the fullest extent permitted by law,
                this Company excludes all representations, warranties, conditions, and terms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">9. Governing Law</h3>
              <p>
                These terms shall be interpreted and governed by the laws of the State of California, United States. Any
                disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of
                California.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">10. Changes to Terms</h3>
              <p>
                We reserve the right to modify or replace these terms at any time. If a revision is material, we will
                try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">11. Contact Information</h3>
              <p>If you have any questions about these Terms of Use, please contact us at:</p>
              <p>
                Email: legal@falconix.com
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
