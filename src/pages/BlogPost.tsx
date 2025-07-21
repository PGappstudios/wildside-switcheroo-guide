import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import AdBanner from '../components/AdBanner';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { BlogPost, getBlogPosts } from '../data/blogData';

const BlogPostComponent = () => {
  const { id } = useParams<{ id: string }>();
  const { mode, themeColors } = useTheme();

  if (!mode) return null;

  // Load blog posts and find the post by ID
  const allPosts = getBlogPosts();
  const post = allPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className={`bg-gradient-to-r ${themeColors.gradient}`}>
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${post.title} | Wildside Guide`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonical={`https://wildside-guide.com/blog/${post.id}`}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        ogImage={post.image}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image,
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
          "dateModified": post.publishDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://wildside-guide.com/blog/${post.id}`
          }
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Back to Blog Button */}
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="outline" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          {/* Featured Badge */}
          {post.featured && (
            <div className="mb-4">
              <Badge className={`bg-gradient-to-r ${themeColors.gradient} text-white`}>
                Featured Article
              </Badge>
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{formatDate(post.publishDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Share Button */}
          <div className="flex gap-4">
            <Button
              onClick={handleShare}
              variant="outline"
              className="group"
            >
              <Share2 className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Share Article
            </Button>
          </div>
        </header>

        {/* Top Ad Banner */}
        <div className="mb-8">
          <AdBanner size="leaderboard" />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Middle Ad Banner */}
        <div className="mb-8">
          <AdBanner size="large-banner" />
        </div>

        {/* Article Footer */}
        <footer className="border-t pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600">Tagged:</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <Button
              onClick={handleShare}
              variant="outline"
              size="sm"
              className="group"
            >
              <Share2 className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Share
            </Button>
          </div>
        </footer>

        {/* Related Posts */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">More {post.category === 'fishing' ? 'Fishing' : 'Hunting'} Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {allPosts
              .filter(p => p.category === post.category && p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.id}`}
                  className="group block bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">{relatedPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{formatDate(relatedPost.publishDate)}</span>
                    <span>{relatedPost.readTime} min read</span>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* Bottom Ad Banner */}
        <div className="mb-8">
          <AdBanner size="leaderboard" />
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Want More {post.category === 'fishing' ? 'Fishing' : 'Hunting'} Tips?
          </h3>
          <p className="text-gray-600 mb-6">
            Explore our comprehensive guides and discover the best spots, gear, and techniques.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/blog">
              <Button className={`bg-gradient-to-r ${themeColors.gradient}`}>
                Read More Articles
              </Button>
            </Link>
            <Link to={post.category === 'fishing' ? '/spots' : '/areas'}>
              <Button variant="outline">
                Explore {post.category === 'fishing' ? 'Fishing Spots' : 'Hunting Areas'}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .article-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }
        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #374151;
        }
        .article-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: #4b5563;
        }
        .article-content p {
          margin-bottom: 1rem;
          line-height: 1.7;
          color: #4b5563;
        }
        .article-content ul {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        .article-content li {
          margin-bottom: 0.5rem;
          color: #4b5563;
        }
      `}</style>
    </div>
  );
};

export default BlogPostComponent;