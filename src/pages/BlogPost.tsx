import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import AdBanner from '../components/AdBanner';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { BlogPost, getBlogPost, getBlogPosts } from '../data/blogData';

const BlogPostComponent = () => {
  const { id } = useParams<{ id: string }>();
  const { mode, themeColors } = useTheme();
  const [post, setPost] = React.useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadPost = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const loadedPost = await getBlogPost(id);
        setPost(loadedPost);
        
        if (loadedPost) {
          // Load related posts
          const allPosts = await getBlogPosts();
          const related = allPosts
            .filter(p => p.category === loadedPost.category && p.id !== loadedPost.id)
            .slice(0, 2);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadPost();
  }, [id]);

  if (!mode) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.id}` }
  ];

  const shareUrl = `https://wildside-guide.com/blog/${post.id}`;
  const shareText = `Check out this ${post.category} article: ${post.title}`;

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image || 'https://wildside-guide.com/lovable-uploads/9afe033d-e67a-4acb-942a-09877b7ae9a6.png',
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wildside Guide",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wildside-guide.com/lovable-uploads/9afe033d-e67a-4acb-942a-09877b7ae9a6.png"
      }
    },
    "datePublished": post.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${post.title} | Wildside Guide`}
        description={post.metaDescription || post.excerpt}
        keywords={post.metaKeywords || post.tags.join(', ')}
        canonical={`https://wildside-guide.com/blog/${post.id}`}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        ogImage={post.image || 'https://wildside-guide.com/lovable-uploads/9afe033d-e67a-4acb-942a-09877b7ae9a6.png'}
        ogType="article"
        schemaData={schemaData}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="outline" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        {post.image && (
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            {post.featured && (
              <div className="absolute top-4 left-4">
                <Badge className={`bg-gradient-to-r ${themeColors.gradient} text-white`}>
                  Featured
                </Badge>
              </div>
            )}
          </div>
        )}
        
        {/* Featured badge for posts without images */}
        {!post.image && post.featured && (
          <div className="mb-8">
            <Badge className={`bg-gradient-to-r ${themeColors.gradient} text-white`}>
              Featured
            </Badge>
          </div>
        )}

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Tag className="h-4 w-4 text-gray-500" />
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Top Ad Banner */}
        <div className="mb-8">
          <AdBanner size="leaderboard" />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-gray-800 leading-relaxed"
          />
        </article>

        {/* Middle Ad Banner */}
        <div className="mb-8">
          <AdBanner size="large-banner" />
        </div>

        {/* Share Buttons */}
        <footer className="border-t pt-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Share this article</h3>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleShare('twitter')}
                  className="hover:bg-blue-50"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleShare('facebook')}
                  className="hover:bg-blue-50"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleShare('linkedin')}
                  className="hover:bg-blue-50"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <Button 
              className={`bg-gradient-to-r ${themeColors.gradient} text-white hover:opacity-90`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top
            </Button>
          </div>
        </footer>

        {/* Related Posts */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">More {post.category === 'fishing' ? 'Fishing' : 'Hunting'} Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.id}`}
                  className="group block bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {relatedPost.image && (
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">{relatedPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{relatedPost.author}</span>
                      <span>{new Date(relatedPost.publishDate).toLocaleDateString()}</span>
                      <span>{relatedPost.readTime} min read</span>
                    </div>
                  </div>
                </Link>
            ))}
          </div>
        </section>

        {/* Bottom Ad Banner */}
        <div className="mb-8">
          <AdBanner size="leaderboard" />
        </div>

        {/* Newsletter Signup */}
        <section className="bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Get More {post.category === 'fishing' ? 'Fishing' : 'Hunting'} Tips
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest tips, techniques, and expert advice delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className={`bg-gradient-to-r ${themeColors.gradient} text-white px-6`}>
              Subscribe
            </Button>
          </div>
        </section>
      </div>

      <style jsx>{`
        .prose h2 {
          @apply text-2xl font-bold text-gray-800 mt-8 mb-4;
        }
        .prose h3 {
          @apply text-xl font-semibold text-gray-800 mt-6 mb-3;
        }
        .prose h4 {
          @apply text-lg font-semibold text-gray-800 mt-4 mb-2;
        }
        .prose p {
          @apply mb-4 text-gray-700 leading-relaxed;
        }
        .prose ul {
          @apply mb-4 ml-6;
        }
        .prose li {
          @apply mb-2 text-gray-700 list-disc;
        }
        .prose strong {
          @apply font-semibold text-gray-800;
        }
        .prose em {
          @apply italic;
        }
      `}</style>
    </div>
  );
};

export default BlogPostComponent;