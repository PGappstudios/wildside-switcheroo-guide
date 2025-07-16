
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import SEO from '../components/SEO';

const Terms = () => {
  const { mode, themeColors } = useTheme();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions - Wildside Guide",
    "description": "Terms and conditions for using Wildside Guide website and services",
    "url": "https://wildside-guide.com/terms"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms and Conditions - Wildside Guide"
        description="Terms and conditions for using Wildside Guide website and services"
        keywords="terms, conditions, legal, wildside guide, fishing, hunting"
        canonical="https://wildside-guide.com/terms"
        schemaData={schemaData}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className={`bg-gradient-to-r ${themeColors.gradient} text-white p-8 rounded-lg mb-8`}>
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-lg opacity-90">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using Wildside Guide ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily download one copy of the materials on Wildside Guide for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Amazon Affiliate Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                Wildside Guide is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
              </p>
              <p className="text-muted-foreground mb-4">
                When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. Affiliate programs and affiliations include, but are not limited to, the Amazon Associates Program.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                The materials on Wildside Guide are provided on an 'as is' basis. Wildside Guide makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-muted-foreground mb-4">
                Further, Wildside Guide does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Limitations</h2>
              <p className="text-muted-foreground mb-4">
                In no event shall Wildside Guide or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Wildside Guide, even if Wildside Guide or its authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Safety and Legal Compliance</h2>
              <p className="text-muted-foreground mb-4">
                All {mode === 'fishing' ? 'fishing' : 'hunting'} activities described on this website should be conducted in accordance with local, state, and federal laws and regulations. Users are responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
                <li>Obtaining proper licenses and permits</li>
                <li>Following all safety guidelines and best practices</li>
                <li>Respecting private property and conservation areas</li>
                <li>Understanding and complying with seasonal restrictions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Content Accuracy</h2>
              <p className="text-muted-foreground mb-4">
                While we strive to provide accurate and up-to-date information about {mode === 'fishing' ? 'fishing spots, techniques, and regulations' : 'hunting areas, seasons, and regulations'}, information may change without notice. Users should always verify current conditions, regulations, and safety requirements with appropriate authorities before engaging in any {mode === 'fishing' ? 'fishing' : 'hunting'} activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Revisions and Errata</h2>
              <p className="text-muted-foreground mb-4">
                The materials appearing on Wildside Guide could include technical, typographical, or photographic errors. Wildside Guide does not warrant that any of the materials on its website are accurate, complete, or current. Wildside Guide may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms and Conditions, please contact us through our website contact form.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
