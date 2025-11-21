// app/blog/[slug]/page.js
import { notFound } from 'next/navigation'
import BlogPostClient from '@/components/blog/BlogPostClient'

// Example data source (replace with real fetch / CMS)
const blogPosts = [
  {
    id: 1,
    title: '10 Essential Tips for Modern Web Development in 2024',
    subtitle: 'A comprehensive guide to building better web applications',
    slug: 'essential-web-development-tips-2024',
    excerpt: 'Discover the latest best practices and tools that are shaping modern web development...',
    content: `
      <h2>Introduction</h2>
      <p>Modern web development is constantly evolving, and staying up-to-date with the latest practices is crucial...</p>
      <h2>1. Embrace Modern JavaScript Features</h2>
      <p>The JavaScript ecosystem continues to evolve with new features and improvements...</p>
    `,
    category: 'web-development',
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah-64.png',
      role: 'Senior Developer',
      bio: 'Full-stack developer with 8+ years of experience in building scalable web applications.',
    },
    publishedAt: '2024-02-15',
    readTime: '8 min read',
    thumbnail: '/images/blog/featured-1200x600.jpg',
    tags: ['React', 'Performance', 'Best Practices'],
    engagement: { views: 1520, comments: 23, shares: 45, bookmarks: 67, likes: 89 },
  },
]

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | Your Company Blog`,
    description: post.excerpt || post.subtitle,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.subtitle,
      images: [post.thumbnail],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  }
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return <BlogPostClient post={post} />
}
