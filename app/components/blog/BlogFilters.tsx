"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Search, X, ChevronDown } from 'lucide-react'
import { useBlogTags, useBlogTypes } from "../../hooks/useBlog"
import { BlogFilters, BlogSortOptions } from "../../lib/supabase"

interface BlogFiltersProps {
  filters: BlogFilters
  sort: BlogSortOptions
  onFiltersChange: (filters: BlogFilters) => void
  onSortChange: (sort: BlogSortOptions) => void
}

export default function BlogFiltersComponent({
  filters,
  sort,
  onFiltersChange,
  onSortChange,
}: BlogFiltersProps) {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState(filters.search || "")
  const [showTagDropdown, setShowTagDropdown] = useState(false)
  const [showTypeDropdown, setShowTypeDropdown] = useState(false)

  const { data: allTags = [] } = useBlogTags()
  const { data: allTypes = [] } = useBlogTypes()

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFiltersChange({ ...filters, search: searchQuery.trim() || undefined })
  }

  const handleTagToggle = (tag: string) => {
    const currentTags = filters.tags || []
    const newTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag]
    
    onFiltersChange({ ...filters, tags: newTags.length > 0 ? newTags : undefined })
  }

  const handleTypeChange = (type: string) => {
    onFiltersChange({ ...filters, type: type === filters.type ? undefined : type })
    setShowTypeDropdown(false)
  }

  const handleFeaturedToggle = () => {
    onFiltersChange({ 
      ...filters, 
      featured: filters.featured === true ? undefined : true 
    })
  }

  const clearFilters = () => {
    setSearchQuery("")
    onFiltersChange({})
    onSortChange({ field: 'created_at', direction: 'desc' })
  }

  const hasActiveFilters = !!(filters.search || filters.tags?.length || filters.type || filters.featured)

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      {/* Search */}
      <form onSubmit={handleSearchSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("")
                onFiltersChange({ ...filters, search: undefined })
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </form>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Sort */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
          <select
            value={`${sort.field}-${sort.direction}`}
            onChange={(e) => {
              const [field, direction] = e.target.value.split('-') as [any, 'asc' | 'desc']
              onSortChange({ field, direction })
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="created_at-desc">Newest First</option>
            <option value="created_at-asc">Oldest First</option>
            <option value="views-desc">Most Popular</option>
            <option value="title-asc">Title A-Z</option>
            <option value="reading_time-asc">Quick Reads</option>
          </select>
        </div>

        {/* Type Filter */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
          <button
            onClick={() => setShowTypeDropdown(!showTypeDropdown)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-left flex items-center justify-between"
          >
            <span>{filters.type || "All Types"}</span>
            <ChevronDown size={16} className={`transform transition-transform ${showTypeDropdown ? 'rotate-180' : ''}`} />
          </button>
          
          {showTypeDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
              <button
                onClick={() => handleTypeChange("")}
                className={`w-full px-3 py-2 text-left hover:bg-gray-50 ${!filters.type ? 'bg-blue-50 text-blue-600' : ''}`}
              >
                All Types
              </button>
              {allTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeChange(type)}
                  className={`w-full px-3 py-2 text-left hover:bg-gray-50 ${filters.type === type ? 'bg-blue-50 text-blue-600' : ''}`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Featured Toggle */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Featured</label>
          <button
            onClick={handleFeaturedToggle}
            className={`w-full px-3 py-2 border rounded-lg transition-colors ${
              filters.featured 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'border-gray-300 hover:bg-gray-50'
            }`}
          >
            {filters.featured ? 'Featured Only' : 'All Posts'}
          </button>
        </div>

        {/* Clear Filters */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
          <button
            onClick={clearFilters}
            disabled={!hasActiveFilters}
            className={`w-full px-3 py-2 border rounded-lg transition-colors ${
              hasActiveFilters
                ? 'border-red-300 text-red-600 hover:bg-red-50'
                : 'border-gray-300 text-gray-400 cursor-not-allowed'
            }`}
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Tags */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-gray-700">Tags</label>
          <button
            onClick={() => setShowTagDropdown(!showTagDropdown)}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            {showTagDropdown ? 'Hide' : 'Show'} All Tags
          </button>
        </div>

        {/* Selected Tags */}
        {filters.tags && filters.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {filters.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center hover:bg-blue-200 transition-colors"
              >
                #{tag}
                <X size={14} className="ml-1" />
              </button>
            ))}
          </div>
        )}

        {/* All Tags */}
        {showTagDropdown && (
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  filters.tags?.includes(tag)
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
