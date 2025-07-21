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
    image: '',
    category: 'hunting',
    featured: true,
    metaDescription: 'Essential bow hunting safety tips for beginners including equipment safety, tree stand safety, and field safety rules.',
    metaKeywords: 'bow hunting safety, hunting safety tips, tree stand safety, bow hunting beginners'
  }
];

// GitHub API configuration
// IMPORTANT: Updated with the correct repository where Make.com creates posts
const GITHUB_OWNER = 'PGappstudios'; // Your GitHub username
const GITHUB_REPO = 'wildside-switcheroo-guide'; // Correct repository name
const GITHUB_API_BASE = 'https://api.github.com';

// Development settings
// NOTE: Repository is now public! We can fetch posts from GitHub
// Switching to GitHub API to show real posts created by Make.com
const USE_LOCAL_FILES = false; // Set to false to fetch from GitHub API
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
  // Add the manual override first if provided
  ...(MANUAL_REPO_OVERRIDE ? [MANUAL_REPO_OVERRIDE] : []),
  
  // Test common variations
  { owner: GITHUB_OWNER, repo: GITHUB_REPO },
  { owner: 'PGappstudios', repo: 'wildside-switcheroo-guide-main' },
  { owner: 'PGappstudios', repo: 'wildside-switcheroo-guide' },
  { owner: 'PGappstudios', repo: 'wildside-guide' },
  { owner: 'PGappstudios', repo: 'BabyIDAI' },
  { owner: 'PGappstudios', repo: 'Docyscan' },
  { owner: 'PGappstudios', repo: 'momlink' },
  { owner: 'PGappstudios', repo: 'pgappstudios' },
  { owner: 'PGappstudios', repo: 'PGappstudios.github.io' },
];

// Function to test GitHub API access
async function testGitHubAPI() {
  if (DEBUG_MODE) {
    console.log('🔍 Testing GitHub API configurations...');
  }
  
  for (const config of testRepositoryConfigurations) {
    try {
      const testUrl = `${GITHUB_API_BASE}/repos/${config.owner}/${config.repo}/contents/content/posts`;
      if (DEBUG_MODE) {
        console.log(`Testing: ${testUrl}`);
      }
      
      const response = await fetch(testUrl);
      
      if (response.ok) {
        const data = await response.json();
        if (DEBUG_MODE) {
          console.log(`✅ Found working repository: ${config.owner}/${config.repo}`);
          console.log(`📁 Found ${data.length} files in content/posts/`);
        }
        return { ...config, url: testUrl };
      } else {
        if (DEBUG_MODE) {
          console.log(`❌ ${config.owner}/${config.repo}: ${response.status} ${response.statusText}`);
        }
      }
    } catch (error) {
      if (DEBUG_MODE) {
        console.log(`❌ ${config.owner}/${config.repo}: ${error.message}`);
      }
    }
  }
  
  return null;
}

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

  // Fix malformed Make.com posts where content is stuffed in title field
  if (frontMatter.title && frontMatter.title.includes('```markdown')) {
    // Extract the actual title and content from the malformed title field
    const titleContent = frontMatter.title;
    
    // Remove markdown code blocks
    let cleanContent = titleContent.replace(/```markdown\n?/g, '').replace(/```$/g, '');
    
    // Extract the first heading as the title
    const titleMatch = cleanContent.match(/^##?\s+(.+)/m);
    if (titleMatch) {
      frontMatter.title = titleMatch[1].trim();
      // Use the clean content as the main content instead of the original markdownContent
      return { frontMatter, content: cleanContent };
    }
  }

  return { frontMatter, content: markdownContent };
}

// Enhanced markdown to HTML converter for better formatting
function markdownToHtml(markdown: string): string {
  // Clean up any remaining markdown code blocks first
  let content = markdown
    .replace(/```markdown\n?/g, '')
    .replace(/```$/g, '')
    .trim();
  
  // Split into lines for better processing
  const lines = content.split('\n');
  const processedLines: string[] = [];
  let inList = false;
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Skip empty lines initially
    if (!line.trim()) {
      if (!inList) {
        processedLines.push('');
      }
      continue;
    }
    
    // Headers
    if (line.match(/^#{1,4}\s+/)) {
      if (inList) {
        processedLines.push('</ul>');
        inList = false;
      }
      line = line.replace(/^#### (.*$)/, '<h4>$1</h4>')
                 .replace(/^### (.*$)/, '<h3>$1</h3>')
                 .replace(/^## (.*$)/, '<h2>$1</h2>')
                 .replace(/^# (.*$)/, '<h1>$1</h1>');
      processedLines.push(line);
      continue;
    }
    
    // Lists (both - and * bullets)
    if (line.match(/^[-*]\s+/)) {
      if (!inList) {
        processedLines.push('<ul>');
        inList = true;
      }
      line = line.replace(/^[-*]\s+(.*)$/, '<li>$1</li>');
      processedLines.push(line);
      continue;
    }
    
    // End list if we're in one and hit non-list content
    if (inList) {
      processedLines.push('</ul>');
      inList = false;
    }
    
    // Bold and italic
    line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
               .replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Links
    line = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Regular paragraph
    if (line.trim()) {
      processedLines.push(`<p>${line}</p>`);
    }
  }
  
  // Close any open list
  if (inList) {
    processedLines.push('</ul>');
  }
  
  return processedLines.join('\n')
    // Clean up extra whitespace and empty paragraphs
    .replace(/<p>\s*<\/p>/g, '')
    .replace(/\n\n+/g, '\n')
    .trim();
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
            image: '', // No images policy - all blog posts should have empty image field
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
  markdownTemplate: `---
title: "Your Blog Post Title"
excerpt: "Short description of the blog post"
author: "Author Name"
publishDate: "2024-01-15"
readTime: 8
tags: ["Tag1", "Tag2", "Tag3"]
image: "https://images.unsplash.com/photo-example"
category: "fishing"
featured: false
slug: "your-blog-post-slug"
metaDescription: "SEO meta description"
metaKeywords: "keyword1, keyword2, keyword3"
---

# Your Blog Post Title

## Introduction

Your introduction paragraph here...

## Main Content

### Subsection 1

Content for subsection 1...

### Subsection 2

Content for subsection 2...

## Conclusion

Your conclusion here...`,
  
  fileNaming: "content/posts/YYYY-MM-DD-blog-post-title.md",
  
  automationTips: [
    "Use the Timer module to schedule daily posts",
    "Alternate between fishing and hunting topics",
    "Include relevant tags for better organization", 
    "Use high-quality Unsplash images",
    "Set featured: true for important posts",
    "Vercel will auto-deploy when files are pushed to GitHub"
  ]
}; 