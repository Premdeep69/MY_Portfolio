"use client"

import { format } from "date-fns"
import { ArrowLeft, Calendar, Clock, Eye, Share2, Tag, User } from 'lucide-react'
import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import ReactMarkdown from "react-markdown"
import { Link, useParams } from "react-router-dom"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import { useBlogPost, useRelatedBlogs } from "../../hooks/useBlog"
import { blogAnimations } from "../../utils/blogAnimation"
import AnimatedPage from "../AnimatedPage"
import BlogCard from "./BlogCard"

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()
  
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)

  const { data: blog, isLoading, error } = useBlogPost(slug!)
  const { data: relatedBlogs = [] } = useRelatedBlogs(
    blog?.id || "",
    blog?.tags || [],
    3
  )



  // Animate elements when blog loads
  useEffect(() => {
    if (blog) {
      blogAnimations.animateBlogDetail({
        header: headerRef.current,
        content: contentRef.current,
        sidebar: sidebarRef.current,
        tags: tagsRef.current,
      })
    }
  }, [blog])

  const handleShare = async () => {
    if (navigator.share && blog) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href)
        alert('URL copied to clipboard!')
      }
    } else {
      // Fallback for browsers without Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert('URL copied to clipboard!')
    }
  }

  const getBlogTypeColor = (type: string) => {
    const colors = {
      Tutorial: "bg-blue-100 text-blue-800",
      Opinion: "bg-purple-100 text-purple-800",
      "Project Update": "bg-green-100 text-green-800",
      Announcement: "bg-yellow-100 text-yellow-800",
      Interview: "bg-pink-100 text-pink-800",
      "Case Study": "bg-indigo-100 text-indigo-800",
    }
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  if (isLoading) {
    return (
      <AnimatedPage>
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded mb-4"></div>
              <div className="h-64 bg-gray-300 rounded mb-8"></div>
              <div className="space-y-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    )
  }

  if (!blog && !isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
        <h2 className="text-2xl font-bold mb-2">{t('blog.blogNotFound')}</h2>
        <p className="text-gray-600 mb-4">{t('blog.blogNotFoundDescription')}</p>
        <a href="/blog" className="text-blue-600 hover:underline">{t('blog.backToBlog')}</a>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <AnimatedPage>
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('blog.blogPostNotFound')}</h1>
            <p className="text-gray-600 mb-8">{t('blog.blogPostNotFoundDescription')}</p>
            <Link
              to="/blog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              {t('blog.backToBlog')}
            </Link>
          </div>
        </div>
      </AnimatedPage>
    )
  }

  return (
    <AnimatedPage>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              {t('blog.backToBlog')}
            </Link>
          </div>

          {/* Header */}
          <header ref={headerRef} className="mb-12">
            {/* Type Badge */}
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getBlogTypeColor(blog.type)}`}>
                {blog.type}
              </span>
              {blog.featured && (
                <span className="ml-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>Premdeep Rai</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{format(new Date(blog.created_at), 'MMMM dd, yyyy')}</span>
              </div>
                          <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{blog.reading_time} {t('blog.readingTime')}</span>
            </div>
            <div className="flex items-center">
              <Eye size={16} className="mr-2" />
              <span>{blog.views} {t('blog.views')}</span>
            </div>
            </div>

            {/* Share Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleShare}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Share2 size={16} className="mr-2" />
                {t('blog.share')}
              </button>
            </div>

            {/* Thumbnail */}
            {blog.thumbnail && (
              <div className="mt-8 rounded-lg overflow-hidden">
                <img
                  src={blog.thumbnail || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            )}
          </header>

          {/* Content */}
          <div className="grid lg:grid-cols-4 gap-12">
            <div ref={contentRef} className="lg:col-span-3">
              {/* Video Embed */}
              {blog.video_url && (
                <div className="mb-8">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    {blog.video_url.includes('youtube.com') || blog.video_url.includes('youtu.be') ? (
                      <iframe
                        src={blog.video_url.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                        title={blog.title}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={blog.video_url}
                        controls
                        className="w-full h-full"
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Blog Content */}
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight, rehypeRaw]}
                  components={{
                    img: ({ src, alt, ...props }) => (
                      <img
                        src={src || "/placeholder.svg"}
                        alt={alt}
                        className="rounded-lg shadow-md w-full"
                        {...props}
                      />
                    ),
                    a: ({ href, children, ...props }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                        {...props}
                      >
                        {children}
                      </a>
                    ),
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </div>

              {/* Tags */}
              <div ref={tagsRef} className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Tag size={18} className="mr-2" />
                  {t('blog.tags')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog?tags=${encodeURIComponent(tag)}`}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside ref={sidebarRef} className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Table of Contents (if needed) */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">{t('blog.quickInfo')}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('blog.published')}:</span>
                      <span className="font-medium">{format(new Date(blog.created_at), 'MMM dd, yyyy')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('blog.readingTime')}:</span>
                      <span className="font-medium">{blog.reading_time} min</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('blog.views')}:</span>
                      <span className="font-medium">{blog.views}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('blog.type')}:</span>
                      <span className="font-medium">{blog.type}</span>
                    </div>
                  </div>
                </div>

                {/* Author Info */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">{t('blog.aboutAuthor')}</h3>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg">
                      PR
                    </div>
                    <h4 className="font-medium text-gray-900">Premdeep Rai</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      {t('blog.authorDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Blogs */}
          {relatedBlogs.length > 0 && (
            <section className="mt-16 pt-16 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('blog.relatedPosts')}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <BlogCard key={relatedBlog.id} blog={relatedBlog} />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </AnimatedPage>
  )
}
