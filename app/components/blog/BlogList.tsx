"use client"

import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useBlogPosts } from "../../hooks/useBlog"
import { BlogFilters, BlogSortOptions } from "../../lib/supabase"
import { blogAnimations } from "../../utils/blogAnimation"
import BlogCard from "./BlogCard"
import BlogFiltersComponent from "./BlogFilters"
import BlogPagination from "./BlogPagination"
import BlogSkeleton from "./BlogSkeleton"
import AnimatedPage from "../AnimatedPage"

export default function BlogList() {
  const { t } = useTranslation()
  const [filters, setFilters] = useState<BlogFilters>({})
  const [sort, setSort] = useState<BlogSortOptions>({ field: 'created_at', direction: 'desc' })
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)

  const blogGridRef = useRef<HTMLDivElement>(null)
  const filtersRef = useRef<HTMLDivElement>(null)

  const { data, isLoading, error } = useBlogPosts(filters, sort, { page: currentPage, limit: 6 })

  // Animate blog cards when data changes
  useEffect(() => {
    if (data?.data && blogGridRef.current) {
      const cards = Array.from(blogGridRef.current.children) as HTMLElement[]
      blogAnimations.animateBlogCards(cards)
    }
  }, [data?.data])

  // Animate filters when toggled
  useEffect(() => {
    if (filtersRef.current) {
      blogAnimations.animateFilters(filtersRef.current, showFilters)
    }
  }, [showFilters])

  const handleFilterChange = (newFilters: BlogFilters) => {
    setFilters(newFilters)
    setCurrentPage(1) // Reset to first page when filters change
  }

  const handleSortChange = (newSort: BlogSortOptions) => {
    setSort(newSort)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of blog list
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (error) {
    return (
      <AnimatedPage>
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Blogs</h2>
              <p className="text-gray-600">Please try again later.</p>
            </div>
          </div>
        </div>
      </AnimatedPage>
    )
  }

  return (
    <AnimatedPage>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on web development, technology, and my journey as a developer.
            </p>
          </div>

          {/* Filters Toggle */}
          <div className="mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Filters */}
          <div ref={filtersRef} className="mb-8">
            <BlogFiltersComponent
              filters={filters}
              sort={sort}
              onFiltersChange={handleFilterChange}
              onSortChange={handleSortChange}
            />
          </div>

          {/* Results Summary */}
          {data && (
            <div className="mb-6 text-gray-600">
              Showing {data.data.length} of {data.count} posts
              {currentPage > 1 && ` (Page ${currentPage} of ${data.totalPages})`}
            </div>
          )}

          {/* Blog Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <BlogSkeleton key={index} />
              ))}
            </div>
          ) : data?.data.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No blogs found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
            </div>
          ) : (
            <>
              <div ref={blogGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {data?.data.map((blog, index) => (
                  <BlogCard key={blog.id} blog={blog} index={index} />
                ))}
              </div>

              {/* Pagination */}
              {data && data.totalPages > 1 && (
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={data.totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
      </div>
    </AnimatedPage>
  )
}
