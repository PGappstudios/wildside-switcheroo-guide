import https from 'https';

// Configuration
const GITHUB_TOKEN = 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN'; // Replace with your token
const OWNER = 'PGappstudios';
const REPO = 'wildside-switcheroo-guide';

// List of files to delete (from the current repository)
const filesToDelete = [
  'content/posts/2024-01-13-bow-hunting-safety-tips-beginners.md',
  'content/posts/2024-01-14-essential-gear-deep-sea-fishing.md',
  'content/posts/2024-01-15-best-fishing-techniques-spring-bass.md',
  'content/posts/2025-07-21-2025-07-21T13:34:52.000Z.md',
  'content/posts/2025-07-21-2025-07-21T13:40:49.000Z.md',
  'content/posts/2025-07-21-2025-07-21T13:54:16.000Z.md',
  'content/posts/2025-07-21-2025-07-21T14:00:09.000Z.md',
  'content/posts/2025-07-21-Mastering the Art of Fishing: Tips, Techniques, and Gear for All Anglers.md',
  'content/posts/2025-07-21-Mastering the Art of Fly Fishing: A Comprehensive Guide for Anglers.md',
  'content/posts/2025-07-21-The Ultimate Guide to Bass Fishing Techniques.md',
  'content/posts/2025-07-21-The Ultimate Guide to Bass Fishing.md',
  'content/posts/2025-07-21-blog-post.md'
];

// Function to make GitHub API request
function makeGitHubRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: path,
      method: method,
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Blog-Deletion-Script',
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(responseData);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(parsedData);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${parsedData.message || responseData}`));
          }
        } catch (error) {
          reject(new Error(`Failed to parse response: ${responseData}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

// Function to get file SHA (required for deletion)
async function getFileSHA(filePath) {
  try {
    const response = await makeGitHubRequest('GET', `/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(filePath)}`);
    return response.sha;
  } catch (error) {
    console.error(`Error getting SHA for ${filePath}:`, error.message);
    return null;
  }
}

// Function to delete a file
async function deleteFile(filePath) {
  try {
    console.log(`🗑️  Getting SHA for: ${filePath}`);
    const sha = await getFileSHA(filePath);
    
    if (!sha) {
      console.log(`❌ Could not get SHA for ${filePath}, skipping...`);
      return false;
    }

    console.log(`🗑️  Deleting: ${filePath}`);
    
    const deleteData = {
      message: `Delete blog post: ${filePath.split('/').pop()}`,
      sha: sha,
      branch: 'main'
    };

    await makeGitHubRequest('DELETE', `/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(filePath)}`, deleteData);
    console.log(`✅ Successfully deleted: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error deleting ${filePath}:`, error.message);
    return false;
  }
}

// Main deletion function
async function deleteAllPosts() {
  console.log('🚀 Starting deletion of all blog posts...\n');
  
  if (GITHUB_TOKEN === 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN') {
    console.error('❌ Please set your GitHub Personal Access Token in the script!');
    console.log('1. Go to: https://github.com/settings/tokens');
    console.log('2. Generate a new token with "repo" permissions');
    console.log('3. Replace YOUR_GITHUB_PERSONAL_ACCESS_TOKEN in this script');
    return;
  }

  let successCount = 0;
  let failCount = 0;

  for (const filePath of filesToDelete) {
    const success = await deleteFile(filePath);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Add a small delay between deletions to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log('\n📊 Deletion Summary:');
  console.log(`✅ Successfully deleted: ${successCount} files`);
  console.log(`❌ Failed to delete: ${failCount} files`);
  console.log(`📁 Total files processed: ${filesToDelete.length}`);
  
  if (successCount > 0) {
    console.log('\n🎉 Blog posts have been deleted from your GitHub repository!');
    console.log('🔄 Your website will update automatically if it\'s connected to GitHub.');
  }
}

// Run the deletion
deleteAllPosts().catch(error => {
  console.error('💥 Script failed:', error.message);
}); 