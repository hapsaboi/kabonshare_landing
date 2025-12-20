import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Media Share API</title>
        <meta name="description" content="Privacy Policy for Media Share API" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-dark">
        {/* Header */}
        <header className="bg-gradient-primary text-white py-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-sm hover:underline mb-2 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-purple-200 mt-2">Last Updated: November 24, 2025</p>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <section className="mb-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At Media Share API ("we", "our", or "us"), we take your privacy seriously. This Privacy Policy explains how we 
                collect, use, disclose, and safeguard your information when you use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.1 Information You Provide</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li><strong>Account Information:</strong> Name, email address, company name, billing information</li>
                <li><strong>Social Media Credentials:</strong> OAuth tokens for connected social media accounts</li>
                <li><strong>Content Data:</strong> Posts, images, videos, and other content you publish through our API</li>
                <li><strong>Communication Data:</strong> Messages you send to our support team</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li><strong>API Usage Data:</strong> API calls, endpoints accessed, request/response data, timestamps</li>
                <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                <li><strong>Cookies and Tracking:</strong> Session cookies, analytics cookies (see Cookie Policy)</li>
                <li><strong>Log Data:</strong> Error logs, performance data, security logs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li><strong>Provide the Service:</strong> Process API requests, publish content to social platforms</li>
                <li><strong>Account Management:</strong> Create and manage your account, process payments</li>
                <li><strong>Customer Support:</strong> Respond to inquiries and provide technical assistance</li>
                <li><strong>Service Improvement:</strong> Analyze usage patterns, improve features and performance</li>
                <li><strong>Security:</strong> Detect and prevent fraud, abuse, and security incidents</li>
                <li><strong>Legal Compliance:</strong> Comply with legal obligations and enforce our terms</li>
                <li><strong>Marketing:</strong> Send newsletters and promotional materials (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.1 Third-Party Platforms</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We share your content with social media platforms (Instagram, TikTok, YouTube, Facebook, Twitter/X, LinkedIn, Threads) 
                as necessary to provide the Service. Each platform has its own privacy policy governing how they handle your data.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.2 Service Providers</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We work with third-party service providers who assist us with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Cloud hosting and storage (AWS, Google Cloud)</li>
                <li>Payment processing (Stripe, PayPal)</li>
                <li>Analytics and monitoring (Google Analytics, Mixpanel)</li>
                <li>Customer support tools (Zendesk, Intercom)</li>
                <li>Email services (SendGrid, Mailchimp)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.3 Legal Requirements</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may disclose your information if required by law, court order, or government request, or to protect our rights, 
                property, or safety.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.4 Business Transfers</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li><strong>Encryption:</strong> Data encrypted in transit (TLS/SSL) and at rest (AES-256)</li>
                <li><strong>Access Controls:</strong> Role-based access, multi-factor authentication</li>
                <li><strong>Monitoring:</strong> 24/7 security monitoring and intrusion detection</li>
                <li><strong>Regular Audits:</strong> Security audits and penetration testing</li>
                <li><strong>Compliance:</strong> SOC 2, GDPR, and CCPA compliant practices</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Data Retention</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We retain your information for as long as necessary to provide the Service and fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li><strong>Account Data:</strong> Retained while your account is active plus 90 days after closure</li>
                <li><strong>Content Data:</strong> Retained for 30 days after publication or as required by third-party platforms</li>
                <li><strong>Transaction Records:</strong> Retained for 7 years for tax and legal purposes</li>
                <li><strong>Log Data:</strong> Retained for 90 days unless needed for security or legal purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Your Privacy Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.1 General Rights</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your data (subject to legal obligations)</li>
                <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Object:</strong> Object to processing of your data for certain purposes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.2 GDPR Rights (EU Users)</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you are in the European Economic Area, you have additional rights under GDPR including the right to lodge a 
                complaint with a supervisory authority.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.3 CCPA Rights (California Users)</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                California residents have specific rights under the CCPA, including the right to know what personal information 
                is collected and the right to opt-out of sale of personal information (we do not sell your data).
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To exercise your rights, contact us at <a href="mailto:privacy@media-share.io" className="text-primary hover:text-secondary underline">privacy@media-share.io</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li><strong>Essential Cookies:</strong> Required for authentication and core functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand usage patterns (Google Analytics)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You can control cookies through your browser settings. Disabling certain cookies may affect functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure 
                appropriate safeguards are in place for international transfers, including Standard Contractual Clauses approved 
                by the European Commission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information 
                from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Third-Party Links</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our Service may contain links to third-party websites. We are not responsible for the privacy practices of these 
                external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of material changes by email or through 
                the Service. The "Last Updated" date at the top indicates when the policy was last revised.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                For questions or concerns about this Privacy Policy or our data practices, please contact:
              </p>
              <ul className="list-none text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li><strong>Privacy Officer:</strong> privacy@media-share.io</li>
                <li><strong>General Support:</strong> support@media-share.io</li>
                <li><strong>Data Protection Officer (EU):</strong> dpo@media-share.io</li>
                <li><strong>Mailing Address:</strong> [Your Company Address]</li>
              </ul>
            </section>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mt-8">
              <p className="text-sm text-blue-900 dark:text-blue-300">
                <strong>Note:</strong> This is a template Privacy Policy document. You should have this reviewed by a legal 
                professional and customized for your specific business practices, jurisdiction, and compliance requirements 
                (GDPR, CCPA, etc.).
              </p>
            </div>

          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-primary">Home</Link>
              <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
              <Link href="/security" className="hover:text-primary">Security</Link>
              <Link href="mailto:privacy@media-share.io" className="hover:text-primary">Contact Privacy Team</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
