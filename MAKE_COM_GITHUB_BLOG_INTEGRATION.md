# Make.com GitHub Blog Integration Guide

This guide explains how to integrate Make.com with your Wildside Guide blog system using GitHub file storage and automatic Vercel deployment.

## 🚀 **New Approach: GitHub + Vercel Auto-Deploy**

Instead of using API webhooks, we're now using a more robust approach:
- ✅ **Blog posts stored as Markdown files** in GitHub
- ✅ **Automatic deployment** when files are pushed to GitHub
- ✅ **Version control** for all blog content
- ✅ **No data loss** - everything is stored in Git
- ✅ **Better content management** with Markdown format

## 📁 **File Structure**

Blog posts are stored in: `content/posts/YYYY-MM-DD-blog-post-title.md`

Example: `content/posts/2024-01-15-best-fishing-techniques-spring-bass.md`

## 🔧 **Make.com Workflow Setup**

### **Step 1: Timer Module**
- **Module**: `Timer`
- **Settings**: Schedule daily at your preferred time
- **Purpose**: Trigger daily blog post creation

### **Step 2: OpenAI Content Generation**
- **Module**: `OpenAI > Create a Chat Completion`
- **Model**: `gpt-4` or `gpt-4-turbo`
- **System Message**: 
```
You are an expert outdoor content writer specializing in fishing and hunting. Create engaging, informative blog posts that provide real value to readers. Use markdown formatting with proper headers, lists, and emphasis. Include practical tips, techniques, and expert advice.
```
- **User Message**: 
```
Write a comprehensive blog post about [TOPIC] for [fishing/hunting]. 
- Include practical tips and techniques
- Use proper markdown formatting
- Write 800-1500 words
- Include specific equipment recommendations
- Add safety considerations where relevant
- Structure with clear headers and subheaders
- End with a strong conclusion

Topic: {{1.topic}}
Category: {{1.category}}
```

### **Step 3: Content Preparation Module**
- **Module**: `Tools > Set Variable`
- **Variable Name**: `markdown_content`
- **Value**:
```
---
title: "{{2.choices[0].message.content}}"
excerpt: "Expert tips and techniques for outdoor enthusiasts"
author: "Wildside Guide"
publishDate: "{{formatDate(now; "YYYY-MM-DD")}}"
readTime: 8
tags: ["Fishing", "Tips", "Outdoor"]
image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
category: "fishing"
featured: false
slug: "{{formatDate(now; "YYYY-MM-DD")}}-fishing-tips"
metaDescription: "Expert fishing and hunting tips for outdoor enthusiasts"
metaKeywords: "fishing, hunting, outdoor, tips"
---

{{2.choices[0].message.content}}
```

### **Step 4: Base64 Encoding Module**
- **Module**: `Tools > Compose a String`
- **Text**: `{{base64(3.markdown_content)}}`

### **Step 5: GitHub File Creation via HTTP Module**
- **Module**: `HTTP > Make a Request`
- **URL**: `https://api.github.com/repos/PGappstudios/wildside-switcheroo-guide/contents/content/posts/{{formatDate(now; "YYYY-MM-DD")}}-blog-post.md`
- **Method**: `PUT`
- **Headers** (Add each as separate header):
  - **Name**: `Authorization` | **Value**: `Bearer YOUR_GITHUB_TOKEN_HERE`
  - **Name**: `Accept` | **Value**: `application/vnd.github.v3+json`
  - **Name**: `User-Agent` | **Value**: `Make.com-Bot`
- **Body Type**: `Raw`
- **Content Type**: `JSON (application/json)`
- **Request Content**:
  ```json
  {
    "message": "Add new blog post via automation",
    "content": "{{4.text}}"
  }
  ```

### **Alternative: Simple Static Approach**

If you're still getting errors, use this ultra-simple version:

**Headers** (Add each separately in Make.com):
- **Header 1**: Name: `Authorization` | Value: `Bearer YOUR_TOKEN_HERE`
- **Header 2**: Name: `Accept` | Value: `application/vnd.github.v3+json`
- **Header 3**: Name: `User-Agent` | Value: `Make.com-Bot`

**Body**:
```json
{
  "message": "Add blog post",
  "content": "LS0tCnRpdGxlOiAiTmV3IEJsb2cgUG9zdCIKZXhjZXJwdDogIkV4cGVydCB0aXBzIGFuZCB0ZWNobmlxdWVzIgphdXRob3I6ICJXaWxkc2lkZSBHdWlkZSIKcHVibGlzaERhdGU6ICIyMDI0LTAxLTE1IgpyZWFkVGltZTogOAp0YWdzOiBbIkZpc2hpbmciLCAiVGlwcyJdCmltYWdlOiAiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NDE5NzQyMzE1MzEtYzYyMjdkYjc2YjZlP2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9ODAiCmNhdGVnb3J5OiAiZmlzaGluZyIKZmVhdHVyZWQ6IGZhbHNlCnNsdWc6ICJuZXctYmxvZy1wb3N0IgptZXRhRGVzY3JpcHRpb246ICJFeHBlcnQgZmlzaGluZyB0aXBzIgptZXRhS2V5d29yZHM6ICJmaXNoaW5nLCB0aXBzIgotLS0KCiMgTmV3IEJsb2cgUG9zdAoKVGhpcyBpcyBhIHRlc3QgYmxvZyBwb3N0IGNyZWF0ZWQgdmlhIE1ha2UuY29tIGF1dG9tYXRpb24u"
}
```

### **Make.com Header Setup Instructions**

1. **In the HTTP module**, find the "Headers" section
2. **Click "Add item"** for each header
3. **Add these three headers**:

   **Header 1:**
   - Name: `Authorization`
   - Value: `Bearer YOUR_GITHUB_TOKEN_HERE`

   **Header 2:**
   - Name: `Accept` 
   - Value: `application/vnd.github.v3+json`

   **Header 3:**
   - Name: `User-Agent`
   - Value: `Make.com-Bot`

4. **Do NOT** paste JSON - add each header individually

### **Testing Steps**

1. **Start Simple**: Use the static approach first to test the connection
2. **Verify Token**: Make sure your GitHub token has `repo` permissions
3. **Check Repository**: Ensure the repository name is correct
4. **Test Path**: Verify the file path `content/posts/` exists
5. **Add Variables**: Once basic version works, add dynamic content

### **GitHub Personal Access Token Setup**

1. **Go to GitHub Settings**: https://github.com/settings/tokens
2. **Click "Generate new token"** → "Generate new token (classic)"
3. **Token Name**: `Make.com Blog Automation`
4. **Expiration**: `No expiration` (or set desired expiration)
5. **Scopes**: Select these permissions:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)
6. **Generate Token** and copy it immediately
7. **Store Securely**: Save the token in Make.com as a secure variable

### **Simplified HTTP Configuration**

For easier setup, here's a cleaner version:

**URL**: 
```
https://api.github.com/repos/PGappstudios/wildside-switcheroo-guide/contents/content/posts/{{formatDate(now; "YYYY-MM-DD")}}-blog-post.md
```

**Headers**:
```json
{
  "Authorization": "Bearer YOUR_GITHUB_TOKEN_HERE",
  "Accept": "application/vnd.github.v3+json",
  "User-Agent": "Make.com-Bot"
}
```

**Body** (JSON):
```json
{
  "message": "Add new blog post via Make.com automation",
  "content": "{{base64(2.blog_post_content_with_frontmatter)}}"
}
```

### **Content Preparation Module**

Add this module **before** the HTTP request to prepare the markdown content:

- **Module**: `Tools > Set Variable`
- **Variable Name**: `blog_post_content`
- **Value**:
```
---
title: "{{2.choices[0].message.content.title}}"
excerpt: "{{substring(2.choices[0].message.content.content; 0; 150)}}..."
author: "Wildside Guide"
publishDate: "{{formatDate(now; "YYYY-MM-DD")}}"
readTime: {{ceil(length(split(2.choices[0].message.content.content; " ")) / 200)}}
tags: ["Fishing", "Tips", "Techniques"]
image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
category: "fishing"
featured: false
slug: "{{replace(replace(lower(2.choices[0].message.content.title); "[^a-z0-9\s]"; ""); "\s+"; "-")}}"
metaDescription: "{{substring(2.choices[0].message.content.content; 0; 150)}}..."
metaKeywords: "fishing, hunting, outdoor, tips"
---

{{2.choices[0].message.content.content}}
```

## 📝 **Markdown Template and Format Requirements**

### **Required Format Structure**

All blog posts MUST follow this exact header structure:
- **H1** (`#`) - Main title (only one per post)
- **H2** (`##`) - Major sections 
- **H3** (`###`) - Subsections within H2 sections
- **H4** (`####`) - Detailed topics within H3 subsections

### **Content Guidelines**

**Structure Requirements:**
- Minimum 8-12 H2 sections for comprehensive coverage
- Each H2 should have 2-4 H3 subsections
- Use H4 for specific details, tips, and techniques
- Include bullet points with `*` for lists
- Use `**bold text**` for emphasis and categories

**No Images Policy:**
- Do NOT include any image field in frontmatter
- All posts should be text-only with no visual content
- Focus on comprehensive written content instead

**Content Depth:**
- Minimum 1000-1500 words per post
- Include specific techniques and expert advice
- Add practical tips and actionable information
- Provide comprehensive coverage of the topic

```markdown
---
title: "Your Blog Post Title"
excerpt: "Short description of the blog post (150-160 characters for SEO)"
author: "Author Name"
publishDate: "2024-01-15"
readTime: 8
tags: ["Tag1", "Tag2", "Tag3"]
category: "fishing"
featured: false
slug: "your-blog-post-slug"
metaDescription: "SEO meta description (150-160 characters)"
metaKeywords: "keyword1, keyword2, keyword3"
---

# Your Blog Post Title

## Introduction Section

Your introduction paragraph here with comprehensive overview...

## Main Content Section

### Primary Subsection

Content for primary subsection with detailed information...

#### Specific Topic

**Key Points:**
* Bullet point 1
* Bullet point 2
* Bullet point 3

**Additional Details:**
* More specific information
* Detailed explanations
* Expert tips and techniques

### Secondary Subsection

More content with proper structure and depth...

#### Sub-topic Details

**Important Considerations:**
* Critical information
* Safety considerations
* Best practices

## Advanced Techniques

### Expert-Level Information

Detailed content for experienced readers...

#### Professional Tips

**Advanced Strategies:**
* Professional techniques
* Industry best practices
* Expert recommendations

## Conclusion

Comprehensive conclusion that ties everything together and provides actionable takeaways...
```

## 🎯 **Content Strategy**

### **Daily Fishing Topics (Monday-Sunday)**
1. **Monday**: Technique Monday - Specific fishing techniques
2. **Tuesday**: Gear Tuesday - Equipment reviews and recommendations  
3. **Wednesday**: Location Wednesday - Fishing spot guides
4. **Thursday**: Species Thursday - Target fish species guides
5. **Friday**: Weekend Prep - Planning and preparation tips
6. **Saturday**: Seasonal Saturday - Seasonal fishing advice
7. **Sunday**: Sunday Stories - Fishing experiences and tips

### **Daily Hunting Topics (Monday-Sunday)**
1. **Monday**: Safety Monday - Hunting safety and preparation
2. **Tuesday**: Gear Tuesday - Hunting equipment and weapons
3. **Wednesday**: Tracking Wednesday - Animal tracking and scouting
4. **Thursday**: Species Thursday - Game animal guides
5. **Friday**: Field Friday - Hunting techniques and strategies
6. **Saturday**: Seasonal Saturday - Seasonal hunting information
7. **Sunday**: Ethics Sunday - Hunting ethics and conservation

## 🔄 **Advanced Make.com Setup**

### **Scenario 1: Fishing Blog Automation**
```json
{
  "trigger": {
    "module": "Timer",
    "schedule": "Daily at 6:00 AM"
  },
  "steps": [
    {
      "module": "OpenAI Chat Completion",
      "model": "gpt-4",
      "messages": [
        {
          "role": "system", 
          "content": "Expert fishing content writer"
        },
        {
          "role": "user",
          "content": "Write a fishing blog post about: {{fishing_topics[formatDate(now; 'e') - 1]}}"
        }
      ]
    },
    {
      "module": "GitHub Create File",
      "repository": "PGappstudios/wildside-switcheroo-guide",
      "path": "content/posts/{{formatDate(now; 'YYYY-MM-DD')}}-fishing-{{replace(2.title; ' '; '-')}}.md",
      "content": "{{frontmatter + 2.content}}"
    }
  ]
}
```

### **Scenario 2: Hunting Blog Automation**
```json
{
  "trigger": {
    "module": "Timer", 
    "schedule": "Daily at 6:30 AM"
  },
  "steps": [
    {
      "module": "OpenAI Chat Completion",
      "model": "gpt-4",
      "messages": [
        {
          "role": "system",
          "content": "Expert hunting content writer"
        },
        {
          "role": "user", 
          "content": "Write a hunting blog post about: {{hunting_topics[formatDate(now; 'e') - 1]}}"
        }
      ]
    },
    {
      "module": "GitHub Create File",
      "repository": "PGappstudios/wildside-switcheroo-guide", 
      "path": "content/posts/{{formatDate(now; 'YYYY-MM-DD')}}-hunting-{{replace(2.title; ' '; '-')}}.md",
      "content": "{{frontmatter + 2.content}}"
    }
  ]
}
```

## 🖼️ **Image Integration**

### **Unsplash Integration**
Add an Unsplash module to get relevant images:

1. **Module**: `Unsplash > Search Photos`
2. **Query**: `{{2.choices[0].message.content.topic}} fishing` or `{{2.choices[0].message.content.topic}} hunting`
3. **Count**: 1
4. **Use in frontmatter**: `image: "{{3.results[0].urls.regular}}"`

### **Image Requirements**
- **Size**: 1200x800 pixels minimum
- **Format**: JPG preferred
- **Quality**: High resolution
- **Orientation**: Landscape

## ⚙️ **Frontmatter Generation**

Use Make.com functions to generate proper frontmatter:

```javascript
// Generate slug
{{replace(replace(lower(2.title); "[^a-z0-9\s]"; ""); "\s+"; "-")}}

// Generate excerpt from content
{{substring(2.content; 0; 150)}}...

// Generate read time
{{ceil(length(split(2.content; " ")) / 200)}}

// Generate tags based on content
{{split(2.suggested_tags; ",")}}
```

## 🔍 **SEO Optimization**

### **Title Optimization**
- Keep under 60 characters
- Include target keywords
- Use power words: "Best", "Ultimate", "Essential", "Complete"

### **Meta Description**
- 150-160 characters
- Include primary keyword
- Add call-to-action

### **Keywords**
- Focus on long-tail keywords
- Include location-based terms
- Use fishing/hunting specific terminology

## 📊 **Content Quality Guidelines**

### **Fishing Content**
- Include specific techniques and equipment
- Mention seasonal considerations
- Add safety tips
- Include location types (not specific locations)
- Reference regulations and ethics

### **Hunting Content**
- Emphasize safety first
- Include ethical hunting practices
- Mention legal requirements
- Add equipment specifications
- Include conservation information

## 🚀 **Deployment Process**

1. **Make.com** creates markdown file
2. **GitHub** receives the file push
3. **Vercel** detects the change
4. **Automatic deployment** rebuilds the site
5. **New blog post** appears on the website

## 📈 **Monitoring and Analytics**

### **Track These Metrics**
- Daily post creation success rate
- GitHub commit history
- Vercel deployment logs
- Website traffic to blog posts
- SEO performance

### **Troubleshooting**
- Check Make.com execution logs
- Verify GitHub file creation
- Monitor Vercel deployment status
- Test blog post display on website

## 🎯 **Next Steps**

1. Set up GitHub access token for Make.com
2. Create the two scenarios (fishing & hunting)
3. Test with sample blog posts
4. Monitor deployment process
5. Optimize based on performance

This system provides a robust, scalable solution for daily blog content creation with full version control and automatic deployment! 

## 🚨 **Important Setup Requirements**

### **Step 0: GitHub Repository Setup**

**CRITICAL**: Before the blog integration will work, you need to:

1. **Create a GitHub Repository** (if you don't have one):
   - Go to https://github.com/new
   - Name it `wildside-switcheroo-guide-main` (or update the name in `src/data/blogData.ts`)
   - Make it **public** (private repos need authentication)
   - Initialize with README

2. **Create the Posts Directory**:
   - In your repository, create: `content/posts/`
   - Add a sample markdown file to test

3. **Update Repository Settings**:
   - In `src/data/blogData.ts`, update:
     ```javascript
     const GITHUB_OWNER = 'YOUR_GITHUB_USERNAME'; // Replace with your username
     const GITHUB_REPO = 'wildside-switcheroo-guide-main'; // Your repo name
     const USE_LOCAL_FILES = false; // Set to false to use GitHub
     ```

4. **Test the Connection**:
   - Your GitHub API URL should be accessible: 
   - `https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/contents/content/posts`

### **Why Posts Aren't Showing Up**

If your Make.com posts are being created but not appearing on the website:

1. **Wrong Repository**: The blog system is looking at `PGappstudios/wildside-switcheroo-guide` but your posts might be in a different repository
2. **Private Repository**: GitHub API can't access private repos without authentication
3. **Wrong Path**: Posts must be in `content/posts/` directory
4. **API Rate Limits**: GitHub API has rate limits for unauthenticated requests
5. **CORS Issues**: Browser might block GitHub API requests

### **Quick Fix for Development**

If you want to test the blog system immediately:

1. **In `src/data/blogData.ts`**, set:
   ```javascript
   const USE_LOCAL_FILES = true;
   ```

2. **This will use the sample blog posts** that are already in the code

3. **Once you have the correct GitHub setup**, change it back to `false` 