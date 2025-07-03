import { BlogFilters, BlogPost, BlogSortOptions, PaginationOptions, supabase } from '../lib/supabase'

class BlogService {
  async getBlogs(
    filters: BlogFilters = {},
    sort: BlogSortOptions = { field: 'created_at', direction: 'desc' },
    pagination: PaginationOptions = { page: 1, limit: 6 }
  ) {
    let query = supabase
      .from('blogs')
      .select('*', { count: 'exact' })

    // Apply filters
    if (filters.tags && filters.tags.length > 0) {
      query = query.overlaps('tags', filters.tags)
    }

    if (filters.type) {
      query = query.eq('type', filters.type)
    }

    if (filters.search) {
      query = query.or(`title.ilike.%${filters.search}%,content.ilike.%${filters.search}%`)
    }

    // Apply sorting
    query = query.order(sort.field, { ascending: sort.direction === 'asc' })

    // Apply pagination
    const from = (pagination.page - 1) * pagination.limit
    const to = from + pagination.limit - 1
    query = query.range(from, to)

    const { data, error, count } = await query

    if (error) throw error

    return {
      data: data as BlogPost[],
      count: count || 0,
      totalPages: Math.ceil((count || 0) / pagination.limit),
      currentPage: pagination.page
    }
  }

  async getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) {
      if (error.code === 'PGRST116') return null // Not found
      throw error
    }

    return data as BlogPost
  }

  async incrementViews(blogId: string) {
    const { error } = await supabase.rpc('increment_blog_views', { blog_id: blogId })
    if (error) throw error
  }

  async getBlogsByTag(tag: string, limit = 10): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .contains('tags', [tag])
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    return data as BlogPost[]
  }

  async getFeaturedBlogs(limit = 3): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    return data as BlogPost[]
  }

  async getPopularBlogs(limit = 5): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('views', { ascending: false })
      .limit(limit)

    if (error) throw error
    return data as BlogPost[]
  }

  async getRecentBlogs(limit = 5): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    return data as BlogPost[]
  }

  async getRelatedBlogs(currentBlogId: string, tags: string[], limit = 3): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .neq('id', currentBlogId)
      .overlaps('tags', tags)
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    return data as BlogPost[]
  }

  async getAllTags(): Promise<string[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('tags')

    if (error) throw error

    const allTags = data.flatMap(blog => blog.tags || [])
    return [...new Set(allTags)].sort()
  }

  async getAllTypes(): Promise<string[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('type')

    if (error) throw error

    const types = data.map(blog => blog.type).filter(Boolean)
    return [...new Set(types)].sort()
  }

  async searchBlogs(query: string, limit = 10): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    return data as BlogPost[]
  }
}

export const blogService = new BlogService()
