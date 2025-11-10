import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - Mobiles.hk',
  description: 'Privacy policy and data protection information for Mobiles.hk'
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12 pb-8 border-b-2 border-brand-orange">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-600 italic">Last Updated: November 10, 2024</p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Mobiles.hk ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.mobiles.hk and use our services.
            </p>
            <p className="text-gray-600">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">Information We Collect</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-700">Personal Information You Provide</h3>
            <p className="text-gray-600 mb-3">We collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li>Register for an account</li>
              <li>Place an order</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact customer support</li>
              <li>Participate in surveys or promotions</li>
            </ul>

            <p className="text-gray-600 mb-3"><strong>The personal information we collect may include:</strong></p>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, shipping address, billing address</li>
              <li><strong>Account Credentials:</strong> Username, password (encrypted)</li>
              <li><strong>Payment Information:</strong> Credit card details, billing information (processed securely through our payment providers)</li>
              <li><strong>Order Information:</strong> Purchase history, product preferences, shopping cart contents</li>
              <li><strong>Communication Data:</strong> Your messages to us, customer service interactions</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-700">Information Automatically Collected</h3>
            <p className="text-gray-600 mb-3">When you visit our website, we automatically collect certain information about your device and usage:</p>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
              <li><strong>Usage Data:</strong> Pages viewed, time spent on pages, click patterns, referring/exit pages</li>
              <li><strong>Location Data:</strong> General geographic location based on IP address</li>
              <li><strong>Cookies and Similar Technologies:</strong> See our Cookie Policy section below</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">How We Use Your Information</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-700">Provide and Improve Services</h3>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Manage your account and provide customer support</li>
              <li>Send order confirmations, shipping updates, and delivery notifications</li>
              <li>Respond to your inquiries and requests</li>
              <li>Improve our website functionality and user experience</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-700">Marketing and Communications</h3>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li>Send promotional emails about new products, special offers, and events (with your consent)</li>
              <li>Personalize your shopping experience and product recommendations</li>
              <li>Conduct surveys and gather feedback</li>
              <li>Send administrative information about changes to our terms or policies</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-700">Security and Legal Compliance</h3>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li>Detect, prevent, and address fraud, security issues, or technical problems</li>
              <li>Comply with legal obligations and enforce our terms and conditions</li>
              <li>Protect the rights, property, and safety of Mobiles.hk, our users, and the public</li>
            </ul>
          </section>

          {/* How We Share Information */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">How We Share Your Information</h2>
            <p className="text-gray-600 mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-700">Service Providers</h3>
            <p className="text-gray-600 mb-3">We share information with third-party service providers who perform services on our behalf:</p>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li><strong>Payment Processors:</strong> Stripe, PayPal (for secure payment processing)</li>
              <li><strong>Shipping Partners:</strong> Courier services for order delivery</li>
              <li><strong>Email Service Providers:</strong> For sending transactional and marketing emails</li>
              <li><strong>Analytics Providers:</strong> Google Analytics (for website performance analysis)</li>
              <li><strong>Authentication Services:</strong> Clerk.com (for secure user authentication and account management)</li>
              <li><strong>Cloud Storage:</strong> For hosting and data storage</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-700">Legal Requirements</h3>
            <p className="text-gray-600 mb-3">We may disclose your information if required to do so by law or in response to:</p>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li>Legal proceedings, court orders, or government requests</li>
              <li>Protection of our rights, privacy, safety, or property</li>
              <li>Prevention of fraud or illegal activities</li>
            </ul>
          </section>

          {/* Authentication Section */}
          <section className="mb-10 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Authentication and User Account Security</h2>
            <p className="text-gray-600 mb-3">We use <strong>Clerk.com</strong> as our authentication service provider to manage user accounts securely. When you create an account:</p>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li>Your credentials are encrypted and stored securely by Clerk</li>
              <li>Clerk provides enterprise-grade security, encryption, and compliance</li>
              <li>We use OAuth 2.0 for social login (Google, Facebook, etc.)</li>
              <li>Multi-factor authentication is available for enhanced security</li>
              <li>Your password is never stored in plain text</li>
            </ul>
            <p className="text-gray-600">For more information about how Clerk handles your data, please visit: <a href="https://clerk.com/privacy" className="text-brand-orange hover:underline" target="_blank" rel="noopener noreferrer">https://clerk.com/privacy</a></p>
          </section>

          {/* Security */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">Data Storage and Security</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-700">Security Measures</h3>
            <p className="text-gray-600 mb-3">We implement appropriate technical and organizational security measures to protect your personal information:</p>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure servers and encrypted databases</li>
              <li>Regular security audits and monitoring</li>
              <li>Access controls and authentication requirements</li>
              <li>PCI DSS compliance for payment processing</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-700">Data Retention</h3>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li><strong>Account Information:</strong> Retained while your account is active, plus 3 years after account closure</li>
              <li><strong>Order History:</strong> Retained for 7 years for legal and tax purposes</li>
              <li><strong>Marketing Data:</strong> Until you opt out or request deletion</li>
              <li><strong>Website Analytics:</strong> Aggregated data retained indefinitely; individual data for 26 months</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">Your Privacy Rights</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-700">General Rights</h3>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-700">How to Exercise Your Rights</h3>
            <p className="text-gray-600">To exercise any of these rights, please contact us at:</p>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li><strong>Email:</strong> <a href="mailto:privacy@mobiles.hk" className="text-brand-orange hover:underline">privacy@mobiles.hk</a></li>
              <li><strong>Support:</strong> <a href="mailto:support@mobiles.hk" className="text-brand-orange hover:underline">support@mobiles.hk</a></li>
            </ul>
            <p className="text-gray-600">We will respond to your request within 30 days.</p>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">Cookies and Tracking Technologies</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-700">What Are Cookies</h3>
            <p className="text-gray-600 mb-3">Cookies are small text files stored on your device that help us improve your experience. We use:</p>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for website functionality (authentication, shopping cart)</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site (Google Analytics)</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-700">Managing Cookies</h3>
            <p className="text-gray-600">You can control cookies through your browser settings. Note that disabling certain cookies may limit website functionality.</p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">Third-Party Links</h2>
            <p className="text-gray-600">Our website may contain links to third-party websites (payment processors, social media, shipping partners). We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.</p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">Children's Privacy</h2>
            <p className="text-gray-600">Our services are not directed to individuals under 16 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>
          </section>

          {/* Hong Kong Compliance */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">Hong Kong Privacy Ordinance Compliance</h2>
            <p className="text-gray-600 mb-3">We comply with the Personal Data (Privacy) Ordinance (Cap. 486) of Hong Kong. You have rights under this ordinance regarding your personal data, including:</p>
            <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
              <li>Right to request access to your personal data</li>
              <li>Right to request correction of your personal data</li>
              <li>Right to be informed of our data policies</li>
              <li>Right to object to use of your data for direct marketing</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="mb-10 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
            <p className="text-gray-600 mb-4">If you have questions or concerns about this privacy policy or our data practices, please contact us:</p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Mobiles.hk</strong></p>
              <p><strong>Email:</strong> <a href="mailto:privacy@mobiles.hk" className="text-brand-orange hover:underline">privacy@mobiles.hk</a></p>
              <p><strong>Support:</strong> <a href="mailto:support@mobiles.hk" className="text-brand-orange hover:underline">support@mobiles.hk</a></p>
              <p><strong>Website:</strong> <a href="https://www.mobiles.hk" className="text-brand-orange hover:underline">www.mobiles.hk</a></p>
            </div>

            <h3 className="text-xl font-semibold mb-2 mt-6 text-gray-700">Data Protection Officer</h3>
            <p className="text-gray-600">For privacy-related inquiries, you can contact our Data Protection Officer at:</p>
            <p className="text-gray-600"><strong>Email:</strong> <a href="mailto:dpo@mobiles.hk" className="text-brand-orange hover:underline">dpo@mobiles.hk</a></p>
          </section>

          {/* Summary */}
          <section className="bg-orange-50 border-2 border-brand-orange p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Summary of Key Points</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>We collect information you provide and usage data</li>
              <li>We use it to provide services, improve experience, and communicate with you</li>
              <li>We do not sell your personal information</li>
              <li>We use Clerk.com for secure authentication</li>
              <li>We implement strong security measures</li>
              <li>You have rights to access, correct, and delete your data</li>
              <li>We comply with Hong Kong privacy laws</li>
              <li>Contact us anytime with privacy concerns</li>
            </ul>
          </section>

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t">
            <p className="text-gray-600 font-semibold mb-2">Thank you for trusting Mobiles.hk with your personal information.</p>
            <p className="text-sm text-gray-500">This privacy policy is effective as of the last updated date and applies to all users of our website and services.</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
