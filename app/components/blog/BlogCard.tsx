"use client"

import { format } from "date-fns"
import { Calendar, Clock, Eye, Tag } from 'lucide-react'
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { BlogPost } from "../../lib/supabase"

interface BlogCardProps {
  blog: BlogPost
  index?: number
}

export default function BlogCard({ blog, index = 0 }: BlogCardProps) {
  const { t } = useTranslation()
  const cardRef = useRef<HTMLDivElement>(null)

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

  return (
    <article
      ref={cardRef}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
    >
      <Link to={`/blog/${blog.slug || blog.id}`} className="block">
        {/* Thumbnail */}
        <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
          {blog.thumbnail ? (
            <img
              src={blog.thumbnail || "/placeholder.svg"}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <Tag size={32} className="mx-auto mb-2" />
                <p className="text-sm font-medium">{blog.type}</p>
              </div>
            </div>
          )}
          
          {/* Featured badge */}
          {blog.featured && (
            <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
              Featured
            </div>
          )}

          {/* Type badge */}
          <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getBlogTypeColor(blog.type)}`}>
            {blog.type}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {blog.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hover:bg-blue-100 hover:text-blue-700 transition-colors"
              >
                #{tag}
              </span>
            ))}
            {blog.tags.length > 3 && (
              <span className="text-gray-500 text-xs">+{blog.tags.length - 3} more</span>
            )}
          </div>

          {/* Meta information */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{format(new Date(blog.created_at), 'MMM dd, yyyy')}</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{blog.reading_time} min read</span>
              </div>
            </div>
            <div className="flex items-center">
              <Eye size={14} className="mr-1" />
              <span>{blog.views} views</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}