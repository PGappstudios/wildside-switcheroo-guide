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
    image: '',
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
    image: '',
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
      <h2>Introduction to Bow Hunting Safety</h2>
      <p>Safety should always be the top priority in bow hunting. These essential tips will help keep you and others safe while pursuing your passion for archery hunting. Whether you're new to the sport or looking to refresh your knowledge, following these guidelines will ensure you have safe and successful hunting experiences.</p>
      
      <h2>Equipment Safety</h2>
      <p>Your equipment is your lifeline in the field. Proper inspection, maintenance, and handling of your bow, arrows, and accessories are crucial for both safety and success.</p>
      
      <h3>Pre-Hunt Equipment Checklist</h3>
      <p>Before every hunting trip, conduct a thorough inspection of your equipment:</p>
      
      <h4>Bow Inspection:</h4>
      <ul>
        <li>Check for cracked or damaged limbs</li>
        <li>Inspect the bowstring for fraying or worn areas</li>
        <li>Examine the cams and cables for proper alignment</li>
        <li>Test the draw weight and ensure smooth operation</li>
        <li>Verify all bolts and screws are tight</li>
      </ul>
      
      <h4>Arrow Safety:</h4>
      <ul>
        <li>Use only arrows recommended for your bow's draw weight</li>
        <li>Inspect each arrow for cracks, bends, or damaged fletching</li>
        <li>Replace damaged arrows immediately - never shoot compromised arrows</li>
        <li>Ensure proper arrow spine for your bow setup</li>
        <li>Keep broadheads sharp and properly aligned</li>
      </ul>
      
      <h3>Broadhead Safety</h3>
      <p>Broadheads are razor-sharp and require special attention:</p>
      <ul>
        <li>Always keep broadheads covered when not in use</li>
        <li>Use a broadhead wrench for installation and removal</li>
        <li>Practice with field points, hunt with broadheads</li>
        <li>Store broadheads in a secure case or holder</li>
        <li>Handle with extreme care to prevent cuts</li>
      </ul>
      
      <h2>Tree Stand Safety</h2>
      <p>Tree stand accidents are among the most serious hunting injuries, but they're entirely preventable with proper safety protocols.</p>
      
      <h3>Essential Tree Stand Safety Rules</h3>
      
      <h4>The Three-Point Rule:</h4>
      <ul>
        <li>Always maintain three points of contact while climbing</li>
        <li>Two hands and one foot, or two feet and one hand</li>
        <li>Never rush when climbing or descending</li>
      </ul>
      
      <h4>Full-Body Harness System:</h4>
      <ul>
        <li>Wear a full-body harness from the moment you leave the ground</li>
        <li>Use a lifeline system for climbing and while on stand</li>
        <li>Inspect your harness before each use for wear or damage</li>
        <li>Replace harnesses every 3-5 years or after any fall</li>
      </ul>
      
      <h2>Shot Placement and Ethics</h2>
      <p>Ethical shot placement is crucial for both safety and responsible hunting practices.</p>
      
      <h3>Shot Selection Guidelines</h3>
      
      <h4>Know Your Limits:</h4>
      <ul>
        <li>Only take shots within your effective range</li>
        <li>Practice regularly to maintain proficiency</li>
        <li>Be honest about your shooting abilities</li>
        <li>Consider weather conditions that may affect accuracy</li>
      </ul>
      
      <h4>Proper Shot Angles:</h4>
      <ul>
        <li>Wait for broadside or quartering away shots</li>
        <li>Avoid steep angle shots that can deflect</li>
        <li>Never shoot at sounds or movement</li>
        <li>Be certain of your target and what's beyond it</li>
      </ul>
      
      <h2>Field Safety Rules</h2>
      
      <h3>The Four Cardinal Rules of Hunting Safety</h3>
      <ol>
        <li><strong>Always identify your target and what's beyond it</strong></li>
        <li><strong>Wear hunter orange when required by law</strong></li>
        <li><strong>Inform someone of your hunting plans and expected return</strong></li>
        <li><strong>Carry emergency communication devices</strong></li>
      </ol>
      
      <h3>Weather Awareness</h3>
      
      <h4>Pre-Hunt Weather Check:</h4>
      <ul>
        <li>Monitor weather forecasts before heading out</li>
        <li>Understand how weather affects animal behavior</li>
        <li>Be prepared for sudden weather changes</li>
        <li>Know the signs of dangerous weather conditions</li>
      </ul>
      
      <h2>First Aid Preparedness</h2>
      <p>Every hunter should carry a basic first aid kit containing essential wound care and emergency supplies.</p>
      
      <h3>Emergency Response Procedures</h3>
      <ul>
        <li>Use GPS coordinates or landmark references</li>
        <li>Download offline maps to your phone</li>
        <li>Mark your hunting location before heading out</li>
        <li>Share your location with trusted contacts</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Bow hunting safety is not just about following rules - it's about developing a mindset that prioritizes safety in every decision you make in the field. By following these comprehensive guidelines and continuously educating yourself, you'll be able to enjoy many safe and successful hunting seasons.</p>
      
      <p>Remember, no trophy is worth risking your life or the lives of others. Always prioritize safety over success, and never compromise on the fundamental safety practices that keep you and fellow hunters safe in the field. The best hunt is one where everyone returns home safely with great memories and stories to share.</p>
    `,
    author: 'Tom Wilson',
    publishDate: '2024-01-13',
    readTime: 10,
    tags: ['Bow Hunting', 'Safety', 'Beginners'],
    image: '',
    category: 'hunting',
    featured: true,
    metaDescription: 'Essential bow hunting safety tips for beginners including equipment safety, tree stand safety, and field safety rules.',
    metaKeywords: 'bow hunting safety, hunting safety tips, tree stand safety, bow hunting beginners'
  },
  {
    id: '4',
    title: 'Wild Hog Hunting Strategies for Beginners',
    slug: 'wild-hog-hunting-strategies-beginners',
    excerpt: 'Master the art of wild hog hunting with proven strategies, essential gear recommendations, and safety tips for successful boar hunting.',
    content: `
      <h2>Introduction to Wild Hog Hunting</h2>
      <p>Hunting wild hogs can be an exhilarating adventure that combines skill, strategy, and adrenaline. These intelligent and adaptable creatures are not only widespread across the United States but also provide a challenging hunt that requires specific techniques and knowledge.</p>
      
      <h2>Understanding Wild Hogs and Their Behavior</h2>
      <p>Before embarking on a hog hunt, it's crucial to understand the behavior and ecology of wild hogs. This knowledge forms the foundation of successful hunting strategies.</p>
      
      <h3>Know Your Prey</h3>
      <p>Wild hogs are highly intelligent and adaptable animals with several key characteristics:</p>
      
      <h4>Physical Attributes:</h4>
      <ul>
        <li>Adult boars can weigh 200-400+ pounds</li>
        <li>Females (sows) typically weigh 100-250 pounds</li>
        <li>Excellent sense of smell - 7 times better than dogs</li>
        <li>Poor eyesight but keen hearing</li>
        <li>Razor-sharp tusks that can cause serious injury</li>
      </ul>
      
      <h4>Behavioral Patterns:</h4>
      <ul>
        <li>Primarily nocturnal and crepuscular (active at dawn/dusk)</li>
        <li>Travel in family groups called sounders</li>
        <li>Highly territorial and protective of young</li>
        <li>Omnivorous feeders with opportunistic eating habits</li>
      </ul>
      
      <h3>Habitat and Movement Patterns</h3>
      <p>Understanding where hogs live and travel is essential for hunting success:</p>
      
      <h4>Preferred Habitats:</h4>
      <ul>
        <li>Dense brush and thick cover for bedding</li>
        <li>Areas near water sources (creeks, ponds, wallows)</li>
        <li>Agricultural fields with crops like corn, soybeans, and peanuts</li>
        <li>Oak forests during acorn season</li>
        <li>Swampy areas and creek bottoms</li>
      </ul>
      
      <h2>Hunting Methods and Strategies</h2>
      <p>There are several effective methods for hunting wild hogs, each with its own advantages and challenges.</p>
      
      <h3>Still Hunting</h3>
      <p>Still hunting involves moving slowly and quietly through hog habitat, stopping frequently to listen and observe.</p>
      
      <h4>Technique:</h4>
      <ul>
        <li>Move into the wind to avoid detection</li>
        <li>Take 2-3 steps, then stop and listen for 30-60 seconds</li>
        <li>Focus on thick cover near feeding areas</li>
        <li>Hunt during early morning or late evening</li>
        <li>Be prepared for quick shots at close range</li>
      </ul>
      
      <h3>Stand Hunting</h3>
      <p>Using elevated stands or ground blinds near feeding areas or travel corridors.</p>
      
      <h4>Stand Placement:</h4>
      <ul>
        <li>Position downwind of expected hog approach routes</li>
        <li>Choose locations with clear shooting lanes</li>
        <li>Place stands near water sources, food plots, or bait stations</li>
        <li>Ensure safe shooting angles and backstops</li>
      </ul>
      
      <h2>Choosing the Right Gear for Hog Hunting</h2>
      <p>Having the right equipment can make the difference between success and failure in hog hunting.</p>
      
      <h3>Weapons and Calibers</h3>
      
      <h4>Rifles:</h4>
      <ul>
        <li>.243 Winchester - minimum for smaller hogs</li>
        <li>.308 Winchester - excellent all-around choice</li>
        <li>.30-06 Springfield - proven performer</li>
        <li>.300 Winchester Magnum - for large boars at distance</li>
      </ul>
      
      <h4>Shotguns:</h4>
      <ul>
        <li>12-gauge with slug or buckshot</li>
        <li>Effective range limited to 75 yards</li>
        <li>Excellent for thick cover hunting</li>
        <li>Quick follow-up shots available</li>
      </ul>
      
      <h2>Safety Considerations</h2>
      <p>Wild hog hunting presents unique safety challenges that require careful attention and preparation.</p>
      
      <h3>Understanding Hog Aggression</h3>
      
      <h4>When Hogs Attack:</h4>
      <ul>
        <li>Wounded hogs can be extremely dangerous</li>
        <li>Sows with piglets are highly protective</li>
        <li>Large boars may charge when cornered</li>
        <li>Always have an escape plan</li>
      </ul>
      
      <h4>Warning Signs:</h4>
      <ul>
        <li>Hair standing up on neck and back</li>
        <li>Chomping or popping teeth</li>
        <li>Aggressive posturing and pawing</li>
        <li>Direct stare and forward movement</li>
      </ul>
      
      <h3>Shot Placement and Ethics</h3>
      
      <h4>Vital Areas:</h4>
      <ul>
        <li>Heart/lung area just behind the front shoulder</li>
        <li>Neck shots for experienced hunters only</li>
        <li>Avoid head shots due to thick skull plate</li>
        <li>Brain shots only at very close range</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Wild hog hunting offers exciting opportunities for hunters of all skill levels. These intelligent and challenging animals require specific strategies, proper equipment, and thorough preparation for consistent success. By understanding hog behavior, mastering various hunting techniques, and prioritizing safety, you'll be well-equipped to enjoy successful and rewarding hog hunting adventures.</p>
      
      <p>Remember that wild hogs are formidable animals that demand respect and careful planning. Start with easier hunting situations and gradually work up to more challenging scenarios as your skills and confidence develop. Most importantly, always prioritize safety and ethical hunting practices.</p>
    `,
    author: 'Jake Thompson',
    publishDate: '2024-01-16',
    readTime: 12,
    tags: ['Wild Hog', 'Hunting Strategies', 'Beginners', 'Boar Hunting'],
    image: '',
    category: 'hunting',
    featured: true,
    metaDescription: 'Learn proven wild hog hunting strategies including tracking, gear selection, safety tips, and field dressing techniques for successful boar hunting.',
    metaKeywords: 'wild hog hunting, boar hunting strategies, pig hunting tips, hunting wild boar, hog hunting gear'
  },
  {
    id: '5',
    title: 'Essential Hunting Gear: Complete Equipment Guide',
    slug: 'essential-hunting-gear-complete-guide',
    excerpt: 'Comprehensive guide to must-have hunting equipment including weapons, optics, clothing, and accessories for successful hunting adventures.',
    content: `
      <h2>Introduction to Hunting Equipment</h2>
      <p>Selecting the right hunting gear can make the difference between a successful hunt and a disappointing experience. Whether you're a beginner building your first hunting kit or an experienced hunter looking to upgrade your equipment, this comprehensive guide covers everything you need to know about essential hunting gear.</p>
      
      <h2>Weapons and Ammunition</h2>
      <p>Your choice of weapon is the most critical decision in hunting gear selection. The right weapon depends on your target game, hunting style, and personal preferences.</p>
      
      <h3>Hunting Rifles</h3>
      <p>Rifles are the most versatile hunting weapons, suitable for a wide range of game and hunting situations.</p>
      
      <h4>Popular Hunting Calibers:</h4>
      
      <h5>Small Game (.22 LR, .17 HMR):</h5>
      <ul>
        <li>Perfect for rabbits, squirrels, and small varmints</li>
        <li>Low recoil makes them ideal for beginners</li>
        <li>Ammunition is inexpensive for practice</li>
        <li>Effective range up to 100 yards</li>
      </ul>
      
      <h5>Medium Game (.243 Win, .270 Win, .308 Win):</h5>
      <ul>
        <li>Excellent for deer-sized game</li>
        <li>.243 Winchester: Great for youth and recoil-sensitive shooters</li>
        <li>.270 Winchester: Flat-shooting with excellent range</li>
        <li>.308 Winchester: Versatile and widely available ammunition</li>
      </ul>
      
      <h5>Large Game (.30-06, .300 Win Mag, .338 Win Mag):</h5>
      <ul>
        <li>Suitable for elk, moose, and large bears</li>
        <li>.30-06 Springfield: Time-tested performance</li>
        <li>.300 Winchester Magnum: Extended range capability</li>
        <li>.338 Winchester Magnum: Maximum stopping power</li>
      </ul>
      
      <h3>Archery Equipment</h3>
      <p>Bowhunting offers a primitive and challenging hunting experience that many hunters find deeply rewarding.</p>
      
      <h4>Compound Bows:</h4>
      <ul>
        <li>Modern design with cams and pulleys</li>
        <li>Let-off reduces holding weight at full draw</li>
        <li>Faster arrow speeds than traditional bows</li>
        <li>More accurate for most hunters</li>
      </ul>
      
      <h4>Traditional Bows:</h4>
      <ul>
        <li>Recurve and longbows offer traditional experience</li>
        <li>Require more skill and practice</li>
        <li>Quieter than compound bows</li>
        <li>Legal in all archery seasons</li>
      </ul>
      
      <h2>Optics and Sighting Systems</h2>
      <p>Quality optics can significantly improve your hunting success by helping you identify targets and make accurate shots.</p>
      
      <h3>Riflescopes</h3>
      <p>A good riflescope is essential for accurate shooting at extended ranges.</p>
      
      <h4>Magnification Ranges:</h4>
      <ul>
        <li>Fixed power (4x, 6x): Simple and reliable</li>
        <li>Variable power (3-9x, 4-12x): Versatile for various situations</li>
        <li>High magnification (5-25x): Long-range hunting and target identification</li>
      </ul>
      
      <h3>Binoculars</h3>
      <p>Binoculars are essential for spotting game and assessing hunting situations.</p>
      
      <h4>Popular Configurations:</h4>
      <ul>
        <li>8x42: Excellent all-around choice</li>
        <li>10x42: More magnification for open country</li>
        <li>8x32: Compact and lightweight</li>
        <li>10x50: Maximum light gathering</li>
      </ul>
      
      <h2>Hunting Clothing and Footwear</h2>
      <p>Proper clothing keeps you comfortable, concealed, and safe in various hunting conditions.</p>
      
      <h3>Base Layers</h3>
      <p>Quality base layers regulate body temperature and manage moisture.</p>
      
      <h4>Material Options:</h4>
      <ul>
        <li>Merino wool: Natural odor resistance and warmth</li>
        <li>Synthetic materials: Quick-drying and durable</li>
        <li>Silk: Lightweight and comfortable</li>
      </ul>
      
      <h3>Hunting Footwear</h3>
      <p>Proper boots are crucial for comfort and performance in the field.</p>
      
      <h4>Boot Types:</h4>
      <ul>
        <li>Leather boots: Durable and supportive</li>
        <li>Rubber boots: Waterproof and scent-free</li>
        <li>Insulated boots: Warmth for cold conditions</li>
        <li>Lightweight boots: Comfort for long hikes</li>
      </ul>
      
      <h2>Hunting Accessories</h2>
      <p>The right accessories can enhance your hunting experience and improve your chances of success.</p>
      
      <h3>Knives and Tools</h3>
      <p>Sharp, reliable cutting tools are essential for field dressing and processing game.</p>
      
      <h4>Knife Types:</h4>
      <ul>
        <li>Fixed-blade knives: Strong and reliable</li>
        <li>Folding knives: Compact and versatile</li>
        <li>Skinning knives: Curved blade for hide removal</li>
        <li>Fillet knives: Flexible blade for fish and birds</li>
      </ul>
      
      <h3>Safety Equipment</h3>
      <p>Safety gear protects you and others during hunting activities.</p>
      
      <h4>Essential Safety Items:</h4>
      <ul>
        <li>Hunter orange clothing: Required in many areas</li>
        <li>Tree stand safety harness: Prevents falls</li>
        <li>First aid kit: Handle injuries in the field</li>
        <li>Emergency whistle: Signal for help</li>
      </ul>
      
      <h2>Budget Considerations</h2>
      <p>Building a hunting gear collection requires careful budget planning and prioritization.</p>
      
      <h3>Essential vs. Nice-to-Have</h3>
      
      <h4>Must-Have Items:</h4>
      <ul>
        <li>Weapon and ammunition</li>
        <li>Basic optics (scope or iron sights)</li>
        <li>Hunter orange safety gear</li>
        <li>Sharp knife for field dressing</li>
      </ul>
      
      <h4>Upgrade Priorities:</h4>
      <ul>
        <li>Quality optics improve success rates</li>
        <li>Comfortable boots prevent problems</li>
        <li>Weather-appropriate clothing</li>
        <li>Reliable backpack for gear transport</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Selecting the right hunting gear is a personal process that depends on your hunting style, target game, and budget. Start with quality basics and gradually build your collection based on experience and specific needs. Remember that the most expensive gear isn't always the best choice – focus on reliability, functionality, and suitability for your hunting conditions.</p>
      
      <p>Quality gear enhances your hunting experience by improving comfort, safety, and success rates. Take time to research options, read reviews, and when possible, try before you buy. Most importantly, learn to use your equipment properly through practice and training.</p>
    `,
    author: 'Mark Rodriguez',
    publishDate: '2024-01-17',
    readTime: 15,
    tags: ['Hunting Gear', 'Equipment', 'Hunting Tips', 'Gear Reviews'],
    image: '',
    category: 'hunting',
    featured: false,
    metaDescription: 'Complete hunting gear guide covering rifles, bows, optics, clothing, and accessories. Expert recommendations for all hunting situations.',
    metaKeywords: 'hunting gear, hunting equipment, hunting rifles, hunting bows, hunting optics, hunting clothing'
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
} 