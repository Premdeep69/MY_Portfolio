"use client"

import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { Star, ArrowRight } from 'lucide-react'
import { useFeaturedBlogs } from "../../hooks/useBlog"
import { blogAnimations } from "../../utils/blogAnimation"
import { format } from "date-fns"

export default function FeaturedBlogs() {
  const { data: featuredBlogs = [], isLoading } = useFeaturedBlogs(3)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (featuredBlogs.length > 0 && containerRef.current) {
      const slides = Array.from(containerRef.current.children) as HTMLElement[]
      blogAnimations.animateFeaturedBlogs(slides)
    }
  }, [featuredBlogs])

  if (isLoading || featuredBlogs.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Star className="text-yellow-500 mr-2" size={24} fill="currentColor" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Posts</h2>
          </div>
          <p className="text-gray-600">Handpicked articles worth your time</p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog, index) => (
            <article
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <Link to={`/blog/${blog.slug}`}>
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                  {blog.thumbnail ? (
                    <img
                      src={blog.thumbnail || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <Star size={32} fill="currentColor" />
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center">
                    <Star size={12} className="mr-1" fill="currentColor" />
                    Featured
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{format(new Date(blog.created_at), 'MMM dd, yyyy')}</span>
                    <span>{blog.reading_time} min read</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            View All Posts
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
