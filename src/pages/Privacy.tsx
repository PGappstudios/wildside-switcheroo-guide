
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import SEO from '../components/SEO';

const Privacy = () => {
  const { mode, themeColors } = useTheme();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Wildside Guide",
    "description": "Privacy policy for Wildside Guide website and data collection practices",
    "url": "https://wildside-guide.com/privacy"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy - Wildside Guide"
        description="Privacy policy for Wildside Guide website and data collection practices"
        keywords="privacy, policy, data protection, wildside guide, fishing, hunting"
        canonical="https://wildside-guide.com/privacy"
        schemaData={schemaData}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className={`bg-gradient-to-r ${themeColors.gradient} text-white p-8 rounded-lg mb-8`}>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-90">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                At Wildside Guide, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Information You Provide</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
                <li>Contact information when you reach out to us</li>
                <li>Comments or feedback you submit</li>
                <li>Newsletter subscription information</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">Information Automatically Collected</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Device type and operating system</li>
                <li>Referral source (how you found our website)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
                <li>Provide and improve our website content and user experience</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send newsletters and updates (only if you subscribe)</li>
                <li>Analyze website usage to improve our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Amazon Affiliate Program</h2>
              <p className="text-muted-foreground mb-4">
                Wildside Guide participates in the Amazon Services LLC Associates Program. When you click on Amazon product links on our site and make purchases, Amazon may share certain information with us for commission tracking purposes. This may include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
                <li>Order information (without personal details)</li>
                <li>Commission earned from your purchase</li>
                <li>General geographic location</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We do not receive your personal information, payment details, or specific purchase history from Amazon.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience. Types of cookies we use:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Affiliate Cookies:</strong> Track referrals to Amazon and other partners</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                You can control cookies through your browser settings, but disabling them may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                We may use third-party services that collect information about your use of our website:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
                <li><strong>Google Analytics:</strong> Website traffic analysis</li>
                <li><strong>Amazon Associates:</strong> Affiliate link tracking</li>
                <li><strong>Social Media Platforms:</strong> If you interact with our social content</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                These services have their own privacy policies and are not controlled by Wildside Guide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibent mb-4 text-foreground">7. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Unsubscribe from our communications</li>
                <li>Opt-out of certain data collection practices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated "Last updated" date. Your continued use of our website after any changes constitutes acceptance of the new policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us through our website contact form. We will respond to your inquiry within a reasonable timeframe.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">11. California Privacy Rights</h2>
              <p className="text-muted-foreground mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete personal information, and the right to opt-out of the sale of personal information. We do not sell personal information to third parties.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
