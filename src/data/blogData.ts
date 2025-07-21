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

// GitHub API configuration
const GITHUB_OWNER = 'PGappstudios';
const GITHUB_REPO = 'wildside-switcheroo-guide';
const GITHUB_API_BASE = 'https://api.github.com';

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

// Helper function to convert markdown to HTML (basic conversion)
function markdownToHtml(markdown: string): string {
  return markdown
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold and italic
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Lists
    .replace(/^\* (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    // Paragraphs
    .replace(/^(?!<[h|u|l])(.*$)/gm, '<p>$1</p>')
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(\s*)<\/p>/g, '');
}

// Function to fetch blog posts from GitHub
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    // Fetch the content/posts directory from GitHub
    const response = await fetch(`${GITHUB_API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/content/posts`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const files = await response.json();
    const blogPosts: BlogPost[] = [];

    // Process each markdown file
    for (const file of files) {
      if (file.name.endsWith('.md')) {
        try {
          // Fetch the file content
          const fileResponse = await fetch(file.download_url);
          const fileContent = await fileResponse.text();
          
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
            title: frontMatter.title,
            excerpt: frontMatter.excerpt,
            content: htmlContent,
            author: frontMatter.author,
            publishDate: frontMatter.publishDate,
            readTime,
            tags: frontMatter.tags || [],
            image: frontMatter.image || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
            category: frontMatter.category,
            featured: frontMatter.featured || false,
            slug: frontMatter.slug || id,
            metaDescription: frontMatter.metaDescription || frontMatter.excerpt,
            metaKeywords: frontMatter.metaKeywords || frontMatter.tags?.join(', ') || ''
          };
          
          blogPosts.push(blogPost);
        } catch (error) {
          console.error(`Error processing blog post ${file.name}:`, error);
        }
      }
    }

    // Sort by publish date (newest first)
    return blogPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    
  } catch (error) {
    console.error('Error loading blog posts from GitHub:', error);
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