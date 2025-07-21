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

export interface BlogFrontMatter {
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime?: number;
  tags: string[];
  image?: string;
  category: 'fishing' | 'hunting';
  featured?: boolean;
  slug?: string;
  metaDescription?: string;
  metaKeywords?: string;
}

// Sample blog posts for fallback
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
    author: 'Wildside Guide',
    publishDate: '2024-01-15',
    readTime: 8,
    tags: ['Bass Fishing', 'Spring', 'Techniques'],
    image: 'https://images.unsplash.com/photo-1445251836269-d158eaa028a6?auto=format&fit=crop&w=800&q=80',
    category: 'fishing',
    featured: true,
    metaDescription: 'Learn the most effective spring bass fishing techniques including spinnerbaits, jigs, and crankbaits.',
    metaKeywords: 'spring bass fishing, bass techniques, fishing tips, spinnerbaits, jigs'
  },
  {
    id: '2',
    title: 'Essential Gear for Deep Sea Fishing',
    slug: 'essential-gear-deep-sea-fishing',
    excerpt: 'Complete guide to the essential equipment needed for successful deep sea fishing adventures.',
    content: `
      <h2>Deep Sea Fishing Gear Essentials</h2>
      <p>Deep sea fishing requires specialized equipment to handle large fish and harsh marine conditions. This comprehensive guide covers all the essential gear you need for a successful offshore fishing trip.</p>
      
      <h3>Rods and Reels</h3>
      <h4>Heavy-Duty Rods</h4>
      <p>Choose rods rated for 50-80 lb line with strong backbone for fighting large fish. Length should be 6-7 feet for boat fishing.</p>
      
      <h4>Conventional Reels</h4>
      <p>High-capacity reels with strong drag systems are essential. Look for reels that can hold 300+ yards of heavy line.</p>
      
      <h3>Terminal Tackle</h3>
      <ul>
        <li>Circle hooks in various sizes (6/0 to 12/0)</li>
        <li>Heavy-duty swivels and snaps</li>
        <li>Wire leaders for toothy fish</li>
        <li>Sinkers from 8oz to 2lbs</li>
      </ul>
      
      <h3>Safety Equipment</h3>
      <p>Safety should always be your top priority when deep sea fishing:</p>
      <ul>
        <li>Life jackets for all passengers</li>
        <li>First aid kit</li>
        <li>Emergency flares</li>
        <li>Radio communication device</li>
        <li>GPS and fish finder</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Proper equipment is crucial for deep sea fishing success. Invest in quality gear that can handle the demands of offshore fishing.</p>
    `,
    author: 'Wildside Guide',
    publishDate: '2024-01-14',
    readTime: 6,
    tags: ['Deep Sea', 'Gear', 'Equipment'],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',
    category: 'fishing',
    featured: false,
    metaDescription: 'Complete guide to essential deep sea fishing gear including rods, reels, tackle, and safety equipment.',
    metaKeywords: 'deep sea fishing gear, fishing equipment, offshore fishing, fishing tackle'
  },
  {
    id: '3',
    title: 'Bow Hunting Safety Tips for Beginners',
    slug: 'bow-hunting-safety-tips-beginners',
    excerpt: 'Essential safety guidelines and tips for new bow hunters to ensure safe and successful hunting experiences.',
    content: `
      <h2>Bow Hunting Safety Fundamentals</h2>
      <p>Bow hunting is an exciting and challenging pursuit, but safety must always be your top priority. This guide covers essential safety tips for beginning bow hunters.</p>
      
      <h3>Equipment Safety</h3>
      <h4>Bow Maintenance</h4>
      <p>Regular inspection and maintenance of your bow is crucial for safety:</p>
      <ul>
        <li>Check strings and cables for fraying</li>
        <li>Inspect cams and wheels for damage</li>
        <li>Ensure arrows are straight and properly fletched</li>
        <li>Verify broadheads are sharp and secure</li>
      </ul>
      
      <h3>Tree Stand Safety</h3>
      <p>Tree stand accidents are a leading cause of hunting injuries. Always:</p>
      <ul>
        <li>Use a full-body harness</li>
        <li>Inspect stands before each use</li>
        <li>Maintain three points of contact when climbing</li>
        <li>Never hunt alone</li>
      </ul>
      
      <h3>Shot Placement and Ethics</h3>
      <p>Ethical bow hunting requires precise shot placement:</p>
      <ul>
        <li>Practice regularly at various distances</li>
        <li>Know your effective range</li>
        <li>Wait for broadside shots</li>
        <li>Avoid risky shots</li>
      </ul>
      
      <h3>Emergency Preparedness</h3>
      <p>Always be prepared for emergencies:</p>
      <ul>
        <li>Carry a first aid kit</li>
        <li>Bring communication device</li>
        <li>Tell someone your hunting plan</li>
        <li>Know your location</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Safe bow hunting practices protect you and others while ensuring ethical harvests. Never compromise on safety for the sake of a shot opportunity.</p>
    `,
    author: 'Wildside Guide',
    publishDate: '2024-01-13',
    readTime: 7,
    tags: ['Bow Hunting', 'Safety', 'Beginners'],
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80',
    category: 'hunting',
    featured: true,
    metaDescription: 'Essential bow hunting safety tips for beginners including equipment safety, tree stand safety, and emergency preparedness.',
    metaKeywords: 'bow hunting safety, hunting tips, tree stand safety, bow hunting beginners'
  }
];

// GitHub API configuration
// IMPORTANT: Updated with the correct repository where Make.com creates posts
const GITHUB_OWNER = 'PGappstudios'; // Your GitHub username
const GITHUB_REPO = 'wildside-switcheroo-guide'; // Correct repository name
const GITHUB_API_BASE = 'https://api.github.com';

// Development settings
// NOTE: Repository is private, so browser cannot access GitHub API without authentication
// Using local files until we set up authentication or make the repository public
const USE_LOCAL_FILES = true; // Set to true because repository is private
const DEBUG_MODE = true; // Set to true to see detailed logging

// Private repository notice - commented out to prevent build issues
// Large console logs can cause Rollup build errors during deployment

// Manual repository override - set this if you know the exact repository name
const MANUAL_REPO_OVERRIDE = null; // Not needed since we found the correct repo

// Instructions for finding your repository:
// 1. Go to your GitHub account where Make.com is creating files
// 2. Find the repository containing the blog posts (the files from your screenshot)
// 3. Copy the repository name from the URL: https://github.com/USERNAME/REPOSITORY_NAME
// 4. Update GITHUB_OWNER and GITHUB_REPO above, or set MANUAL_REPO_OVERRIDE
// 5. Set USE_LOCAL_FILES = false

// Configuration help - commented out to prevent build issues
// Large console logs can cause Rollup build errors during deployment

// Helper function to test different repository configurations
const testRepositoryConfigurations = [
  {
    name: 'Current Config',
    owner: GITHUB_OWNER,
    repo: GITHUB_REPO,
    url: `${GITHUB_API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/content/posts`
  },
  {
    name: 'Main Branch Alternative',
    owner: GITHUB_OWNER,
    repo: `${GITHUB_REPO}-main`,
    url: `${GITHUB_API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}-main/contents/content/posts`
  },
  {
    name: 'Without Switcheroo',
    owner: GITHUB_OWNER,
    repo: 'wildside-guide',
    url: `${GITHUB_API_BASE}/repos/${GITHUB_OWNER}/wildside-guide/contents/content/posts`
  },
  {
    name: 'Alternative Path',
    owner: GITHUB_OWNER,
    repo: GITHUB_REPO,
    url: `${GITHUB_API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/posts`
  },
  {
    name: 'Blog Path',
    owner: GITHUB_OWNER,
    repo: GITHUB_REPO,
    url: `${GITHUB_API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/blog`
  }
];

// Function to test GitHub API access
const testGitHubAPI = async () => {
  if (DEBUG_MODE) {
    console.log('🔍 Testing GitHub API configurations...');
  }
  
  for (const config of testRepositoryConfigurations) {
    try {
      if (DEBUG_MODE) {
        console.log(`🧪 Testing: ${config.name} - ${config.url}`);
      }
      
      const response = await fetch(config.url);
      
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          if (DEBUG_MODE) {
            console.log(`✅ Found working configuration: ${config.name}`);
            console.log(`📂 Found ${data.length} files`);
          }
          return config;
        }
      }
      
      if (DEBUG_MODE) {
        console.log(`❌ ${config.name}: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      if (DEBUG_MODE) {
        console.log(`❌ ${config.name}: ${error}`);
      }
    }
  }
  
  if (DEBUG_MODE) {
    console.log('❌ No working GitHub API configuration found');
  }
  return null;
};

// Helper function to parse markdown frontmatter
function parseFrontMatter(content: string): { frontMatter: BlogFrontMatter; content: string } {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontMatterRegex);
  
  if (!match) {
    throw new Error('Invalid markdown format - missing frontmatter');
  }

  const [, frontMatterText, markdownContent] = match;
  const frontMatter: any = {};
  
  // Parse YAML-like frontmatter
  frontMatterText.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      
      // Handle arrays (tags)
      if (value.startsWith('[') && value.endsWith(']')) {
        frontMatter[key.trim()] = value.slice(1, -1).split(',').map(s => s.trim().replace(/"/g, ''));
      }
      // Handle booleans
      else if (value === 'true' || value === 'false') {
        frontMatter[key.trim()] = value === 'true';
      }
      // Handle numbers
      else if (!isNaN(Number(value))) {
        frontMatter[key.trim()] = Number(value);
      }
      // Handle strings
      else {
        frontMatter[key.trim()] = value.replace(/"/g, '');
      }
    }
  });

  return { frontMatter, content: markdownContent };
}

// Simple markdown to HTML converter
function markdownToHtml(markdown: string): string {
  return markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Lists
    .replace(/^\* (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.*)$/gim, '<p>$1</p>')
    // Clean up
    .replace(/<p><h/g, '<h')
    .replace(/<\/h([1-6])><\/p>/g, '</h$1>')
    .replace(/<p><ul>/g, '<ul>')
    .replace(/<\/ul><\/p>/g, '</ul>')
    .replace(/<p>(<li>.*<\/li>)<\/p>/g, '$1')
    .replace(/<p>\s*<\/p>/g, '');
}

// Function to fetch blog posts from GitHub
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  // If using local files for development, return sample posts
  if (USE_LOCAL_FILES) {
    if (DEBUG_MODE) {
      console.log('📝 Using local sample blog posts for development');
    }
    return sampleBlogPosts;
  }

  try {
    if (DEBUG_MODE) {
      console.log('🚀 Attempting to fetch blog posts from GitHub...');
    }

    // First, try to find the correct repository configuration
    const workingConfig = await testGitHubAPI();
    
    if (!workingConfig) {
      throw new Error('No accessible GitHub repository found with blog posts');
    }

    // Use the working configuration to fetch posts
    const response = await fetch(workingConfig.url);
    
    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} - ${response.statusText}`);
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const files = await response.json();
    
    // Check if the response is an error message
    if (files.message) {
      console.error('GitHub API returned error:', files.message);
      throw new Error(files.message);
    }

    if (DEBUG_MODE) {
      console.log(`📂 Processing ${files.length} files from GitHub...`);
    }

    const blogPosts: BlogPost[] = [];

    // Process each markdown file
    for (const file of files) {
      if (file.name && file.name.endsWith('.md')) {
        try {
          if (DEBUG_MODE) {
            console.log(`📄 Processing: ${file.name}`);
          }

          // Fetch the file content
          const fileResponse = await fetch(file.download_url);
          
          if (!fileResponse.ok) {
            console.error(`Failed to fetch file ${file.name}: ${fileResponse.status}`);
            continue;
          }
          
          const fileContent = await fileResponse.text();
          
          if (DEBUG_MODE) {
            console.log(`📝 Content length: ${fileContent.length} characters`);
            console.log(`🔍 First 200 chars: ${fileContent.substring(0, 200)}...`);
          }
          
          // Parse frontmatter and content
          const { frontMatter, content } = parseFrontMatter(fileContent);
          
          // Generate ID from filename
          const id = file.name.replace('.md', '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
          
          // Convert markdown to HTML
          const htmlContent = markdownToHtml(content);
          
          // Calculate read time if not provided
          const readTime = frontMatter.readTime || Math.ceil(content.split(' ').length / 200);
          
          const blogPost: BlogPost = {
            id,
            title: frontMatter.title || 'Untitled Post',
            excerpt: frontMatter.excerpt || 'No excerpt available',
            content: htmlContent,
            author: frontMatter.author || 'Wildside Guide',
            publishDate: frontMatter.publishDate || new Date().toISOString().split('T')[0],
            readTime,
            tags: frontMatter.tags || [],
            image: frontMatter.image || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
            category: frontMatter.category || 'fishing',
            featured: frontMatter.featured || false,
            slug: frontMatter.slug || id,
            metaDescription: frontMatter.metaDescription || frontMatter.excerpt || 'No description available',
            metaKeywords: frontMatter.metaKeywords || frontMatter.tags?.join(', ') || ''
          };
          
          blogPosts.push(blogPost);

          if (DEBUG_MODE) {
            console.log(`✅ Successfully processed: ${blogPost.title}`);
          }
        } catch (error) {
          console.error(`Error processing blog post ${file.name}:`, error);
        }
      }
    }

    if (DEBUG_MODE) {
      console.log(`🎉 Successfully loaded ${blogPosts.length} blog posts from GitHub`);
    }

    // Sort by publish date (newest first)
    return blogPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    
  } catch (error) {
    console.error('Error loading blog posts from GitHub:', error);
    if (DEBUG_MODE) {
      console.log('🔄 Falling back to sample data');
    }
    // Fallback to sample data
    return sampleBlogPosts;
  }
};

// Function to fetch a single blog post from GitHub
export const getBlogPost = async (id: string): Promise<BlogPost | null> => {
  try {
    const allPosts = await getBlogPosts();
    return allPosts.find(post => post.id === id || post.slug === id) || null;
  } catch (error) {
    console.error('Error loading blog post from GitHub:', error);
    // Fallback to sample data
    const fallbackPost = sampleBlogPosts.find(p => p.id === id);
    return fallbackPost || null;
  }
};

// Make.com integration guide for GitHub-based blog system
export const MAKE_COM_GITHUB_INTEGRATION_GUIDE = {
  workflow: [
    {
      step: 1,
      module: "Timer",
      description: "Schedule daily blog post creation",
      settings: "Set to run daily at your preferred time"
    },
    {
      step: 2,
      module: "OpenAI > Create a Chat Completion",
      description: "Generate blog post content",
      settings: {
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert outdoor content writer. Create engaging blog posts about fishing or hunting."
          },
          {
            role: "user", 
            content: "Write a comprehensive blog post about [TOPIC]. Include practical tips, techniques, and expert advice. Format as markdown with proper headers."
          }
        ]
      }
    },
    {
      step: 3,
      module: "GitHub > Create or Update a File",
      description: "Push blog post to GitHub repository",
      settings: {
        repository: "PGappstudios/wildside-switcheroo-guide",
        filePath: "content/posts/{{formatDate(now; 'YYYY-MM-DD')}}-{{replace(2.choices[0].message.content.title; ' '; '-')}}.md",
        content: "Generated markdown content with frontmatter",
        commitMessage: "Add new blog post: {{2.choices[0].message.content.title}}",
        branch: "main"
      }
    }
  ],
  benefits: [
    "Automatic daily content creation",
    "Version control with Git",
    "Automatic deployment via Vercel",
    "SEO-optimized content structure",
    "Scalable content management"
  ]
};