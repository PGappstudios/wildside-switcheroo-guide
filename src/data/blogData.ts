export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: number;
  tags: string[];
  image: string;
  category: 'fishing' | 'hunting';
  featured?: boolean;
  slug?: string;
  metaDescription?: string;
  metaKeywords?: string;
}

export interface BlogApiConfig {
  endpoint: string;
  method: string;
  headers: Record<string, string>;
}

// Configuration for Make.com webhook integration
export const blogApiConfig: BlogApiConfig = {
  endpoint: '/api/blog', // This will be your Make.com webhook endpoint
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY' // Replace with your actual API key
  }
};

// Sample blog posts structure for Make.com to follow
export const sampleBlogPosts: BlogPost[] = [
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

// Make.com webhook payload structure
export interface MakeComBlogPayload {
  action: 'create' | 'update' | 'delete';
  post: BlogPost;
  timestamp: string;
  source: 'make.com';
}

// Function to validate blog post data from Make.com
export const validateBlogPost = (post: any): BlogPost | null => {
  try {
    // Required fields validation
    if (!post.id || !post.title || !post.content || !post.category) {
      console.error('Missing required blog post fields');
      return null;
    }

    // Category validation
    if (!['fishing', 'hunting'].includes(post.category)) {
      console.error('Invalid category. Must be "fishing" or "hunting"');
      return null;
    }

    // Generate slug if not provided
    const slug = post.slug || post.title.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    return {
      id: post.id,
      title: post.title,
      slug: slug,
      excerpt: post.excerpt || post.content.substring(0, 200) + '...',
      content: post.content,
      author: post.author || 'Wildside Team',
      publishDate: post.publishDate || new Date().toISOString().split('T')[0],
      readTime: post.readTime || Math.ceil(post.content.split(' ').length / 200),
      tags: Array.isArray(post.tags) ? post.tags : [],
      image: post.image || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
      category: post.category,
      featured: Boolean(post.featured),
      metaDescription: post.metaDescription || post.excerpt,
      metaKeywords: post.metaKeywords || post.tags?.join(', ') || ''
    };
  } catch (error) {
    console.error('Error validating blog post:', error);
    return null;
  }
};

// Local storage functions for blog posts (until API integration)
export const getBlogPosts = (): BlogPost[] => {
  try {
    const stored = localStorage.getItem('wildside_blog_posts');
    return stored ? JSON.parse(stored) : sampleBlogPosts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return sampleBlogPosts;
  }
};

export const saveBlogPost = (post: BlogPost): boolean => {
  try {
    const posts = getBlogPosts();
    const existingIndex = posts.findIndex(p => p.id === post.id);
    
    if (existingIndex >= 0) {
      posts[existingIndex] = post;
    } else {
      posts.unshift(post); // Add new posts to the beginning
    }
    
    localStorage.setItem('wildside_blog_posts', JSON.stringify(posts));
    return true;
  } catch (error) {
    console.error('Error saving blog post:', error);
    return false;
  }
};

export const deleteBlogPost = (postId: string): boolean => {
  try {
    const posts = getBlogPosts();
    const filteredPosts = posts.filter(p => p.id !== postId);
    localStorage.setItem('wildside_blog_posts', JSON.stringify(filteredPosts));
    return true;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return false;
  }
};

// Make.com integration instructions
export const MAKE_COM_INTEGRATION_GUIDE = {
  webhookEndpoint: 'https://your-domain.com/api/blog-webhook',
  requiredFields: {
    id: 'Unique identifier for the post',
    title: 'Post title',
    content: 'HTML content of the post',
    category: 'Either "fishing" or "hunting"',
    author: 'Author name (optional, defaults to "Wildside Team")',
    publishDate: 'Date in YYYY-MM-DD format (optional, defaults to today)',
    tags: 'Array of tags (optional)',
    image: 'Featured image URL (optional, uses default if not provided)',
    featured: 'Boolean for featured status (optional)',
    excerpt: 'Short description (optional, auto-generated from content)',
    metaDescription: 'SEO meta description (optional)',
    metaKeywords: 'SEO keywords (optional)'
  },
  samplePayload: {
    action: 'create',
    post: {
      id: 'unique-post-id',
      title: 'Amazing Fishing Technique',
      content: '<h2>Introduction</h2><p>This is the post content...</p>',
      category: 'fishing',
      author: 'John Doe',
      tags: ['fishing', 'techniques', 'bass'],
      image: 'https://example.com/image.jpg',
      featured: false
    },
    timestamp: new Date().toISOString(),
    source: 'make.com'
  }
};