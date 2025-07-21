import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import AdBanner from '../components/AdBanner';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { BlogPost, getBlogPosts } from '../data/blogData';

// Simple badge component to avoid TypeScript issues
const SimpleBadge = ({ children, className = '', variant = 'default', ...props }: { children: any; className?: string; variant?: string; [key: string]: any }) => {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors";
  const variantClasses = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 bg-gray-100 text-gray-800",
    outline: "text-foreground border-gray-300"
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant as keyof typeof variantClasses] || variantClasses.default} ${className}`} {...props}>
      {children}
    </div>
  );
};

const Blog = () => {
  const { mode, themeColors } = useTheme();
  const [selectedTag, setSelectedTag] = React.useState('');
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const loadedPosts = await getBlogPosts();
        setPosts(loadedPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadPosts();
  }, []);

  if (!mode) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  // Filter posts by current mode
  const modePosts = posts.filter(post => post.category === mode);
  const featuredPosts = modePosts.filter(post => post.featured);
  const regularPosts = modePosts.filter(post => !post.featured);

  // Get all unique tags for the current mode
  const allTags = [...new Set(modePosts.flatMap(post => post.tags))];

  // Filter posts by selected tag
  const filteredPosts = selectedTag 
    ? modePosts.filter(post => post.tags.includes(selectedTag))
    : modePosts;

  const seoData = mode === 'fishing' 
    ? {
        title: 'Fishing Blog - Expert Tips, Techniques & Guides | Wildside Guide',
        description: 'Stay updated with the latest fishing tips, techniques, and expert guides. Daily fishing content covering gear reviews, locations, and seasonal advice.',
        keywords: 'fishing blog, fishing tips, fishing techniques, fishing guides, fishing news, angling advice, fishing gear reviews'
      }
    : {
        title: 'Hunting Blog - Expert Tips, Techniques & Guides | Wildside Guide',
        description: 'Stay updated with the latest hunting tips, techniques, and expert guides. Daily hunting content covering gear reviews, locations, and seasonal advice.',
        keywords: 'hunting blog, hunting tips, hunting techniques, hunting guides, hunting news, hunting advice, hunting gear reviews'
      };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical="https://wildside-guide.com/blog"
        ogTitle={seoData.title}
        ogDescription={seoData.description}
        ogImage="https://wildside-guide.com/lovable-uploads/9afe033d-e67a-4acb-942a-09877b7ae9a6.png"
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {mode === 'fishing' ? 'Fishing' : 'Hunting'} Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest {mode} tips, techniques, and expert guides. 
            Fresh content added daily to help you improve your outdoor adventures.
          </p>
        </div>

        {/* Top Ad Banner */}
        <div className="mb-8">
          <AdBanner size="leaderboard" />
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.publishDate)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime} min read
                      </div>
                    </div>
                    <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <SimpleBadge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </SimpleBadge>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="group"
                      onClick={() => window.location.href = `/blog/${post.id}`}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Tag Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="h-5 w-5 text-gray-600" />
            <span className="font-semibold text-gray-800">Filter by topic:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedTag === '' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedTag('')}
              className={selectedTag === '' ? `bg-gradient-to-r ${themeColors.gradient}` : ''}
            >
              All Posts
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className={selectedTag === tag ? `bg-gradient-to-r ${themeColors.gradient}` : ''}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Middle Ad Banner */}
        <div className="mb-8">
          <AdBanner size="large-banner" />
        </div>

        {/* All Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Latest {mode === 'fishing' ? 'Fishing' : 'Hunting'} Posts
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No posts found for the selected filter.</p>
              <Button
                variant="outline"
                onClick={() => setSelectedTag('')}
                className="mt-4"
              >
                View All Posts
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.publishDate)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime} min
                      </div>
                    </div>
                    <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <SimpleBadge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </SimpleBadge>
                      ))}
                      {post.tags.length > 2 && (
                        <SimpleBadge variant="secondary" className="text-xs">
                          +{post.tags.length - 2}
                        </SimpleBadge>
                      )}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group"
                      onClick={() => window.location.href = `/blog/${post.id}`}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Bottom Ad Banner */}
        <div className="mt-12">
          <AdBanner size="leaderboard" />
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className={`bg-gradient-to-r ${themeColors.gradient} text-white hover:opacity-90`}
          >
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;