import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">1. Introduction</h2>
              <p>
                NidZid Agency ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website nidzid-halal-agency.vercel.app and use our services.
              </p>
              <p>
                We operate in accordance with Islamic principles of trust, transparency, and ethical business practices. Your privacy is a fundamental right that we respect and protect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-semibold text-[#1B4332] mt-6 mb-3">Personal Information</h3>
              <p>When you contact us or use our services, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your full name and email address</li>
                <li>Company name and industry information</li>
                <li>Phone number (if provided)</li>
                <li>Project requirements and budget information</li>
                <li>Any other information you voluntarily provide</li>
              </ul>

              <h3 className="text-lg font-semibold text-[#1B4332] mt-6 mb-3">Automatically Collected Information</h3>
              <p>We may automatically collect certain information when you visit our website:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and geographic location</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process and manage your campaign requests</li>
                <li>Send you relevant updates about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">4. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>With Influencers:</strong> When you engage our services, we share relevant project details with our verified Muslim influencer network</li>
                <li><strong>Service Providers:</strong> With trusted third parties who assist us in operating our website and conducting our business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure server infrastructure</li>
                <li>Regular security assessments</li>
                <li>Limited access to personal information</li>
                <li>Employee training on data protection</li>
              </ul>
              <p>
                However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              </ul>
              <p>
                To exercise these rights, please contact us at <a href="mailto:nidhalzidi@nidzid.site" className="text-[#D4AF37] hover:underline">nidhalzidi@nidzid.site</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">12. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <p className="font-semibold text-[#1B4332]">NidZid Agency</p>
                <p>Email: <a href="mailto:nidhalzidi@nidzid.site" className="text-[#D4AF37] hover:underline">nidhalzidi@nidzid.site</a></p>
                <p>Phone: +971 52 450 5803 (UAE) | +216 22 607 030 (Tunisia)</p>
                <p>Location: Sousse, Tunisia | Dubai, UAE</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
