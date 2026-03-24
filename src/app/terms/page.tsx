import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[#1B4332] hover:text-[#D4AF37] font-medium">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-2">
            Terms of Service
          </h1>
          <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the services provided by NidZid Agency ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              <p>
                These terms reflect our commitment to conducting business in accordance with Islamic principles of fairness, transparency, and ethical conduct.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">2. Services Description</h2>
              <p>
                NidZid Agency provides halal influencer marketing services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Influencer discovery and partnership facilitation</li>
                <li>Campaign strategy development and execution</li>
                <li>Content creation and management for Muslim audiences</li>
                <li>Halal advertising and paid media management</li>
                <li>Brand consulting and market positioning</li>
                <li>Analytics and performance reporting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">3. Client Responsibilities</h2>
              <p>As a client of NidZid Agency, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information about your brand and products</li>
                <li>Ensure all products and services promoted are halal-certified or Shariah-compliant</li>
                <li>Respond promptly to communications from our team</li>
                <li>Provide necessary approvals within agreed timeframes</li>
                <li>Make payments according to agreed terms</li>
                <li>Not engage in any activity that violates Islamic principles or values</li>
                <li>Respect the intellectual property rights of influencers and partners</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">4. Halal Compliance Standards</h2>
              <p>
                All services provided by NidZid Agency adhere to strict halal compliance standards:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All content must align with Islamic values and principles</li>
                <li>No promotion of alcohol, gambling, interest-based products (riba), or other haram activities</li>
                <li>Content should be modest, respectful, and culturally appropriate</li>
                <li>Influencer selection based on Islamic values alignment</li>
                <li>Transparent and honest marketing practices</li>
              </ul>
              <p>
                We reserve the right to decline or terminate campaigns that do not meet these standards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">5. Pricing and Payment</h2>
              <h3 className="text-lg font-semibold text-[#1B4332] mt-6 mb-3">Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pricing is agreed upon before campaign commencement</li>
                <li>A deposit may be required before work begins</li>
                <li>Payment schedules are outlined in individual contracts</li>
                <li>Late payments may incur additional fees or service suspension</li>
              </ul>

              <h3 className="text-lg font-semibold text-[#1B4332] mt-6 mb-3">Cancellation Policy</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations must be communicated in writing</li>
                <li>Cancellation fees may apply based on project stage</li>
                <li>Work completed up to cancellation date is billable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">6. Intellectual Property</h2>
              <h3 className="text-lg font-semibold text-[#1B4332] mt-6 mb-3">Client Materials</h3>
              <p>
                You retain ownership of all materials you provide to us. You grant us a license to use these materials for the purpose of delivering our services.
              </p>

              <h3 className="text-lg font-semibold text-[#1B4332] mt-6 mb-3">Created Content</h3>
              <p>
                Content created specifically for your campaign becomes your property upon full payment. Influencer-generated content remains subject to separate agreements with the content creators.
              </p>

              <h3 className="text-lg font-semibold text-[#1B4332] mt-6 mb-3">Portfolio Rights</h3>
              <p>
                We reserve the right to use completed work in our portfolio and marketing materials unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">7. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Business strategies and marketing plans</li>
                <li>Financial information and pricing</li>
                <li>Customer and prospect data</li>
                <li>Trade secrets and proprietary information</li>
                <li>Campaign details and performance metrics</li>
              </ul>
              <p>
                This obligation continues for two (2) years after the termination of services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>Our total liability is limited to the amount paid for the specific service giving rise to the claim</li>
                <li>We are not responsible for the actions of third-party influencers beyond our reasonable control</li>
                <li>We do not guarantee specific results from marketing campaigns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">9. Warranties and Disclaimers</h2>
              <p>
                We provide our services with reasonable skill and care. However, we do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Services will be uninterrupted or error-free</li>
                <li>Specific marketing results will be achieved</li>
                <li>Influencer content will receive specific engagement levels</li>
              </ul>
              <p>
                All warranties are disclaimed to the maximum extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">10. Termination</h2>
              <p>
                Either party may terminate the service agreement:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>By providing 30 days written notice</li>
                <li>Immediately if the other party breaches these terms</li>
                <li>If the other party becomes insolvent or ceases operations</li>
              </ul>
              <p>
                Upon termination, all outstanding payments become due, and confidential information must be returned or destroyed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">11. Dispute Resolution</h2>
              <p>
                In accordance with Islamic principles of justice and fairness, disputes shall be resolved through:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Direct Negotiation:</strong> Parties will first attempt to resolve disputes through good-faith discussion</li>
                <li><strong>Mediation:</strong> If negotiation fails, a neutral third-party mediator may be engaged</li>
                <li><strong>Arbitration:</strong> Final resolution through binding arbitration in accordance with applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">12. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the United Arab Emirates and Tunisia, depending on the location of service delivery.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">13. Force Majeure</h2>
              <p>
                Neither party shall be liable for delays or failures in performance resulting from circumstances beyond their reasonable control, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Natural disasters</li>
                <li>War, terrorism, or civil unrest</li>
                <li>Government actions or regulations</li>
                <li>Pandemics or health emergencies</li>
                <li>Infrastructure failures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">14. Amendments</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">15. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <p className="font-semibold text-[#1B4332]">NidZid Agency</p>
                <p>Email: <a href="mailto:nidhalzidi@nidzid.site" className="text-[#D4AF37] hover:underline">nidhalzidi@nidzid.site</a></p>
                <p>Phone: +971 52 450 5803 (UAE) | +216 22 607 030 (Tunisia)</p>
                <p>Location: Sousse, Tunisia | Dubai, UAE</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">16. Acceptance</h2>
              <p>
                By using our services or submitting an inquiry, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
              <p className="text-[#D4AF37] font-semibold mt-4">
                جَزَاكَ اللّٰهُ خَيْرًا (May Allah reward you with goodness)
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
