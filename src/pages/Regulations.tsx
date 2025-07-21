
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';

const Regulations = () => {
  const { mode, themeColors } = useTheme();

  const seoData = mode === 'fishing'
    ? {
        title: 'Fishing Regulations & Laws - Stay Legal While Fishing | Wildside Guide',
        description: 'Complete fishing regulations guide covering licenses, limits, and laws. Stay legal and fish responsibly with our comprehensive regulatory information.',
        keywords: 'fishing regulations, fishing laws, fishing licenses, bag limits, fishing permits, legal fishing requirements'
      }
    : {
        title: 'Hunting Regulations & Laws - Legal Hunting Guide | Wildside Guide',
        description: 'Comprehensive hunting regulations guide covering licenses, seasons, and legal requirements. Hunt safely and within the law with expert guidance.',
        keywords: 'hunting regulations, hunting laws, hunting licenses, hunting permits, legal hunting requirements, hunting safety'
      };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seoData.title,
    "description": seoData.description,
    "url": "https://wildside-guide.com/regulations",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Wildside Guide",
      "url": "https://wildside-guide.com"
    }
  };

  const regulations = mode === 'fishing' 
    ? [
        {
          region: 'United States',
          requirements: ['Valid fishing license', 'Compliance with bag limits', 'Adherence to seasonal closures'],
          details: 'Licenses vary by state. Some species require special permits.',
          links: [
            { name: 'National Marine Fisheries Service', url: 'https://www.fisheries.noaa.gov/rules-and-regulations' },
            { name: 'State Fishing Licenses', url: 'https://www.takemefishing.org/fishing/fishing-licenses/' },
            { name: 'Federal Fishing Regulations', url: 'https://www.law.cornell.edu/cfr/text/50/part-622' }
          ]
        },
        {
          region: 'Canada',
          requirements: ['Provincial fishing license', 'Species-specific regulations', 'Conservation requirements'],
          details: 'Each province has different rules. Non-residents need special licenses.',
          links: [
            { name: 'Fisheries and Oceans Canada', url: 'https://www.dfo-mpo.gc.ca/fisheries-peches/recreational-recreative/index-eng.html' },
            { name: 'Provincial Fishing Regulations', url: 'https://www.canada.ca/en/environment-climate-change/services/canadian-environmental-protection-act-registry/substances-list/toxic/fishing-regulations.html' }
          ]
        },
        {
          region: 'European Union',
          requirements: ['National fishing permits', 'Quota compliance', 'Protected species awareness'],
          details: 'Regulations vary by country. Some areas have strict conservation measures.',
          links: [
            { name: 'European Commission Fisheries', url: 'https://ec.europa.eu/fisheries/cfp_en' },
            { name: 'EU Fishing Regulations', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013R1380' }
          ]
        }
      ]
    : [
        {
          region: 'United States',
          requirements: ['Hunter education certificate', 'Valid hunting license', 'Appropriate tags/stamps'],
          details: 'Hunter safety course required. Some states have reciprocity agreements.',
          links: [
            { name: 'U.S. Fish & Wildlife Service', url: 'https://www.fws.gov/hunting' },
            { name: 'Hunter Education Courses', url: 'https://www.hunter-ed.com/' },
            { name: 'State Hunting Regulations', url: 'https://www.eregulations.com/hunting' }
          ]
        },
        {
          region: 'Canada',
          requirements: ['Hunter education course', 'Provincial hunting license', 'Wildlife management stamps'],
          details: 'Courses required for first-time hunters. Non-residents need guide in some areas.',
          links: [
            { name: 'Canadian Wildlife Service', url: 'https://www.canada.ca/en/environment-climate-change/services/wildlife-habitat-private-land/habitat-stewardship-program.html' },
            { name: 'Provincial Hunting Regulations', url: 'https://www.canada.ca/en/environment-climate-change/services/migratory-birds/hunting-regulations-summary.html' }
          ]
        },
        {
          region: 'European Union',
          requirements: ['National hunting license', 'Weapon registration', 'Insurance requirements'],
          details: 'Strict weapon laws. Hunting tests required in most countries.',
          links: [
            { name: 'European Hunting Laws', url: 'https://www.face.eu/hunting-in-europe/' },
            { name: 'EU Wildlife Regulations', url: 'https://ec.europa.eu/environment/nature/legislation/index_en.htm' }
          ]
        }
      ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical="https://wildside-guide.com/regulations"
        ogTitle={seoData.title}
        ogDescription={seoData.description}
        schemaData={schemaData}
      />

      <div className={`bg-gradient-to-r ${themeColors.gradient} text-white py-20`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            {mode === 'fishing' ? 'Fishing Regulations' : 'Hunting Regulations'}
          </h1>
          <p className="text-xl">
            {mode === 'fishing' 
              ? 'Stay legal and fish responsibly' 
              : 'Hunt safely and within the law'
            }
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-lg">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Important Notice:</strong> Regulations change frequently and vary by location. 
                Always check with local authorities before {mode === 'fishing' ? 'fishing' : 'hunting'}.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {regulations.map((reg, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {reg.region}
              </h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Requirements:</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {reg.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className={`${themeColors.secondary} p-3 rounded-lg`}>
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Additional Details:</h3>
                <p className="text-gray-600">{reg.details}</p>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Official Resources:</h3>
                <div className="flex flex-wrap gap-3">
                  {reg.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${themeColors.primary} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity`}
                    >
                      <span>{link.name}</span>
                      <ExternalLink size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {mode === 'fishing' ? 'Fishing Ethics' : 'Hunting Ethics'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Best Practices:</h3>
              <ul className="space-y-2 text-gray-600">
                {(mode === 'fishing' 
                  ? ['Practice catch and release', 'Respect private property', 'Follow bag limits', 'Use barbless hooks when possible']
                  : ['Practice fair chase', 'Respect landowner rights', 'Follow safety protocols', 'Use appropriate equipment']
                ).map((practice, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    {practice}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Conservation:</h3>
              <ul className="space-y-2 text-gray-600">
                {(mode === 'fishing' 
                  ? ['Protect spawning areas', 'Report tagged fish', 'Dispose of waste properly', 'Support habitat conservation']
                  : ['Support wildlife management', 'Report violations', 'Minimize environmental impact', 'Educate others']
                ).map((conservation, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {conservation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regulations;
