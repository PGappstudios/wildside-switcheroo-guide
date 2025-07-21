# Make.com GitHub Blog Integration Guide

This guide explains how to integrate Make.com with your Wildside Guide blog system using GitHub file storage and automatic Vercel deployment.

## 🚀 **New Approach: GitHub + Vercel Auto-Deploy**

Instead of using API webhooks, we're now using a more robust approach:
- ✅ **Blog posts stored as Markdown files** in GitHub
- ✅ **Automatic deployment** when files are pushed to GitHub
- ✅ **Version control** for all blog content
- ✅ **No data loss** - everything is stored in Git
- ✅ **Better content management** with Markdown format

## 🚨 **Important Setup Requirements**

### **Step 0: GitHub Repository Setup**

**CRITICAL**: Before the blog integration will work, you need to:

1. **Create a GitHub Repository** (if you don't have one):
   - Go to https://github.com/new
   - Name it `wildside-switcheroo-guide` (or update the name in `src/data/blogData.ts`)
   - Make it **public** (private repos need authentication)
   - Initialize with README

2. **Create the Posts Directory**:
   - In your repository, create: `content/posts/`
   - Add a sample markdown file to test

3. **Update Repository Settings**:
   - In `src/data/blogData.ts`, update:
     ```javascript
     const GITHUB_OWNER = 'PGappstudios'; // Your username
     const GITHUB_REPO = 'wildside-switcheroo-guide'; // Your repo name
     const USE_LOCAL_FILES = false; // Set to false to use GitHub
     ```

4. **Test the Connection**:
   - Your GitHub API URL should be accessible: 
   - `https://api.github.com/repos/PGappstudios/wildside-switcheroo-guide/contents/content/posts`

### **Why Posts Aren't Showing Up**

If your Make.com posts are being created but not appearing on the website:

1. **Wrong Repository**: The blog system is looking at the wrong repository
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

This system provides a robust, scalable solution for daily blog content creation with full version control and automatic deployment!