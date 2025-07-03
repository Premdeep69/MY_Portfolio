"use client"

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { blogService } from '../services/blogService'
import { BlogFilters, BlogSortOptions, PaginationOptions } from '../lib/supabase'

export const useBlogPosts = (
  filters: BlogFilters = {},
  sort: BlogSortOptions = { field: 'created_at', direction: 'desc' },
  pagination: PaginationOptions = { page: 1, limit: 6 }
) => {
  return useQuery({
    queryKey: ['blogs', filters, sort, pagination],
    queryFn: () => blogService.getBlogs(filters, sort, pagination),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useBlogPost = (slug: string) => {
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: ['blog', slug],
    queryFn: async () => {
      const blog = await blogService.getBlogBySlug(slug)
      if (blog) {
        // Increment views
        await blogService.incrementViews(blog.id)
        // Invalidate blog list to update view count
        queryClient.invalidateQueries({ queryKey: ['blogs'] })
      }
      return blog
    },
    enabled: !!slug,
  })
}

export const useFeaturedBlogs = (limit = 3) => {
  return useQuery({
    queryKey: ['featured-blogs', limit],
    queryFn: () => blogService.getFeaturedBlogs(limit),
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}

export const usePopularBlogs = (limit = 5) => {
  return useQuery({
    queryKey: ['popular-blogs', limit],
    queryFn: () => blogService.getPopularBlogs(limit),
    staleTime: 10 * 60 * 1000,
  })
}

export const useRecentBlogs = (limit = 5) => {
  return useQuery({
    queryKey: ['recent-blogs', limit],
    queryFn: () => blogService.getRecentBlogs(limit),
    staleTime: 5 * 60 * 1000,
  })
}

export const useRelatedBlogs = (currentBlogId: string, tags: string[], limit = 3) => {
  return useQuery({
    queryKey: ['related-blogs', currentBlogId, tags, limit],
    queryFn: () => blogService.getRelatedBlogs(currentBlogId, tags, limit),
    enabled: !!currentBlogId && tags.length > 0,
    staleTime: 10 * 60 * 1000,
  })
}

export const useBlogTags = () => {
  return useQuery({
    queryKey: ['blog-tags'],
    queryFn: () => blogService.getAllTags(),
    staleTime: 30 * 60 * 1000, // 30 minutes
  })
}

export const useBlogTypes = () => {
  return useQuery({
    queryKey: ['blog-types'],
    queryFn: () => blogService.getAllTypes(),
    staleTime: 30 * 60 * 1000,
  })
}

export const useSearchBlogs = (query: string, enabled = false) => {
  return useQuery({
    queryKey: ['search-blogs', query],
    queryFn: () => blogService.searchBlogs(query),
    enabled: enabled && query.length > 2,
    staleTime: 2 * 60 * 1000, // 2 minutes
  })
}
