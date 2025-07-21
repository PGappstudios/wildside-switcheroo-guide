// Vercel serverless function to get individual blog posts
// This handles GET requests to fetch a specific blog post by its ID

// In-memory storage for blog posts (should match blog-webhook.js)
let blogPosts = [
  {
    id: '1',
    title: 'Best Fishing Techniques for Spring Bass',
    slug: 'best-fishing-techniques-spring-bass',
    excerpt: 'Discover the most effective techniques for catching bass during the spring season when they are most active.',
    content: `
      <h2>Introduction to Spring Bass Fishing</h2>
      <p>Spring is one of the most exciting times for bass fishing. As water temperatures begin to rise and bass move from their winter haunts to shallow spawning areas, anglers have incredible opportunities to catch trophy fish.</p>
      
      <h3>Understanding Spring Bass Behavior</h3>
      <p>During the spring transition, bass behavior changes dramatically. They move from deep winter structures to shallow spawning areas, becoming more aggressive and predictable in their feeding patterns.</p>
      
      <h3>Top Spring Bass Techniques</h3>
      <h4>1. Spinnerbaits</h4>
      <p>Spinnerbaits are incredibly effective during spring. The flash and vibration mimic baitfish and trigger aggressive strikes from bass preparing to spawn.</p>
      
      <h4>2. Jigs</h4>
      <p>Jigs worked slowly along the bottom can be irresistible to bass. Focus on areas with cover like fallen trees, rock piles, and weed edges.</p>
      
      <h4>3. Crankbaits</h4>
      <p>Medium-diving crankbaits that run 6-10 feet deep are perfect for covering water and locating active fish.</p>
      
      <h3>Best Locations</h3>
      <p>Focus your efforts on:</p>
      <ul>
        <li>Shallow bays and coves</li>
        <li>Areas with hard bottom composition</li>
        <li>Locations with nearby deep water access</li>
        <li>Areas with emerging vegetation</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Spring bass fishing offers some of the year's best opportunities. By understanding bass behavior and using the right techniques, you'll increase your chances of landing that trophy fish.</p>
    `,
    author: 'Mike Johnson',
    publishDate: '2024-01-15',
    readTime: 8,
    tags: ['Bass Fishing', 'Spring Fishing', 'Techniques'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    category: 'fishing',
    featured: true,
    metaDescription: 'Learn the best spring bass fishing techniques including spinnerbaits, jigs, and crankbaits. Expert tips for successful bass fishing.',
    metaKeywords: 'spring bass fishing, bass fishing techniques, spinnerbaits, fishing jigs, crankbaits'
  },
  {
    id: '2',
    title: 'Essential Gear for Deep Sea Fishing',
    slug: 'essential-gear-deep-sea-fishing',
    excerpt: 'Complete guide to the must-have equipment for successful deep sea fishing adventures.',
    content: `
      <h2>Deep Sea Fishing Equipment Guide</h2>
      <p>Deep sea fishing requires specialized equipment designed to handle large fish and harsh marine conditions. Here's everything you need to know about selecting the right gear.</p>
      
      <h3>Rods and Reels</h3>
      <p>Your rod and reel combination is the foundation of your deep sea setup. Look for heavy-duty equipment that can handle 30-80 lb test line.</p>
      
      <h3>Essential Tackle</h3>
      <ul>
        <li>Circle hooks in various sizes</li>
        <li>Heavy sinkers (8-32 oz)</li>
        <li>Wire leaders</li>
        <li>Swivels and snaps</li>
      </ul>
      
      <h3>Safety Equipment</h3>
      <p>Never compromise on safety when heading offshore. Essential safety gear includes life jackets, flares, GPS, and radio communication.</p>
    `,
    author: 'Sarah Davis',
    publishDate: '2024-01-14',
    readTime: 12,
    tags: ['Deep Sea', 'Fishing Gear', 'Equipment'],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',
    category: 'fishing',
    metaDescription: 'Complete guide to deep sea fishing equipment including rods, reels, tackle, and safety gear for offshore fishing.',
    metaKeywords: 'deep sea fishing gear, offshore fishing equipment, fishing rods, fishing reels, fishing tackle'
  },
  {
    id: '3',
    title: 'Bow Hunting Safety: Essential Tips for Beginners',
    slug: 'bow-hunting-safety-tips-beginners',
    excerpt: 'Learn the fundamental safety practices every bow hunter should know before heading into the field.',
    content: `
      <h2>Bow Hunting Safety Fundamentals</h2>
      <p>Safety should always be the top priority in bow hunting. These essential tips will help keep you and others safe while pursuing your passion.</p>
      
      <h3>Equipment Safety</h3>
      <p>Always inspect your equipment before each hunt. Check for damaged arrows, worn strings, and loose components.</p>
      
      <h3>Tree Stand Safety</h3>
      <p>When using tree stands, always wear a full-body harness and use a lifeline system from the ground to your stand.</p>
      
      <h3>Shot Placement</h3>
      <p>Ethical shot placement is crucial. Only take shots within your effective range and when you have a clear, ethical shot opportunity.</p>
      
      
      <h3>Field Safety Rules</h3>
      <ul>
        <li>Always identify your target and what's beyond it</li>
        <li>Wear hunter orange when required</li>
        <li>Inform someone of your hunting plans</li>
        <li>Carry emergency communication devices</li>
      </ul>
    `,
    author: 'Tom Wilson',
    publishDate: '2024-01-13',
    readTime: 10,
    tags: ['Bow Hunting', 'Safety', 'Beginners'],
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80',
    category: 'hunting',
    featured: true,
    metaDescription: 'Essential bow hunting safety tips for beginners including equipment safety, tree stand safety, and field safety rules.',
    metaKeywords: 'bow hunting safety, hunting safety tips, tree stand safety, bow hunting beginners'
  }
];

module.exports = function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. This endpoint only supports GET requests.'
    });
  }

  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameter: id'
      });
    }

    // Find the blog post by ID
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
      return res.status(404).json({
        success: false,
        error: 'Blog post not found',
        id: id
      });
    }

    return res.status(200).json({
      success: true,
      post: post
    });

  } catch (error) {
    console.error('Get blog post error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error.message
    });
  }
};