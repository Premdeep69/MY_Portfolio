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

    // Transform the data to match the BlogPost interface
    const transformedData = (data as any[]).map(blog => this.transformBlogData(blog)) as BlogPost[]

    return {
      data: transformedData,
      count: count || 0,
      totalPages: Math.ceil((count || 0) / pagination.limit),
      currentPage: pagination.page
    }
  }

  async getBlogBySlug(slug: string): Promise<BlogPost | null> {
    // First try to find by slug
    let { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error && error.code === 'PGRST116') {
      // If slug doesn't exist, try to find by ID (fallback for existing posts)
      const { data: idData, error: idError } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', slug)
        .single()
      
      if (idError && idError.code === 'PGRST116') {
        // If ID doesn't exist, try to find by title (fallback for existing posts)
        const titleFromSlug = slug
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
        
        const { data: titleData, error: titleError } = await supabase
          .from('blogs')
          .select('*')
          .ilike('title', `%${titleFromSlug}%`)
          .single()
        
        if (titleError) {
          return null // Not found
        }
        
        data = titleData
      } else if (idError) {
        throw idError
      } else {
        data = idData
      }
    } else if (error) {
      throw error
    }

    if (!data) return null

    return this.transformBlogData(data)
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  private generateExcerpt(content: string): string {
    const firstParagraph = content.split('\n\n')[1] || content.split('\n')[0] || ''
    return firstParagraph.replace(/^#+\s*/, '').substring(0, 200) + '...'
  }

  private transformBlogData(data: any): BlogPost {
    return {
      id: data.id,
      title: data.title,
      slug: data.slug || this.generateSlug(data.title),
      content: data.content,
      excerpt: data.excerpt || this.generateExcerpt(data.content),
      thumbnail: data.thumbnail,
      video_url: data.video_url,
      created_at: data.created_at,
      updated_at: data.updated_at || data.created_at,
      published_at: data.published_at || data.created_at,
      views: data.views || 0,
      reading_time: data.reading_time || Math.ceil(data.content.split(' ').length / 200),
      tags: data.tags || [],
      type: data.type || 'Tutorial',
      status: data.status || 'published',
      featured: data.featured || false
    }
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
    return (data as any[]).map(blog => this.transformBlogData(blog)) as BlogPost[]
  }

  async getFeaturedBlogs(limit = 3): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    
    return (data as any[]).map(blog => ({
      id: blog.id,
      title: blog.title,
      slug: blog.slug || this.generateSlug(blog.title),
      content: blog.content,
      excerpt: blog.excerpt || this.generateExcerpt(blog.content),
      thumbnail: blog.thumbnail,
      video_url: blog.video_url,
      created_at: blog.created_at,
      updated_at: blog.updated_at || blog.created_at,
      published_at: blog.published_at || blog.created_at,
      views: blog.views || 0,
      reading_time: blog.reading_time || Math.ceil(blog.content.split(' ').length / 200),
      tags: blog.tags || [],
      type: blog.type || 'Tutorial',
      status: blog.status || 'published',
      featured: blog.featured || false
    })) as BlogPost[]
  }

  async getPopularBlogs(limit = 5): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('views', { ascending: false })
      .limit(limit)

    if (error) throw error
    
    return (data as any[]).map(blog => ({
      id: blog.id,
      title: blog.title,
      slug: blog.slug || this.generateSlug(blog.title),
      content: blog.content,
      excerpt: blog.excerpt || this.generateExcerpt(blog.content),
      thumbnail: blog.thumbnail,
      video_url: blog.video_url,
      created_at: blog.created_at,
      updated_at: blog.updated_at || blog.created_at,
      published_at: blog.published_at || blog.created_at,
      views: blog.views || 0,
      reading_time: blog.reading_time || Math.ceil(blog.content.split(' ').length / 200),
      tags: blog.tags || [],
      type: blog.type || 'Tutorial',
      status: blog.status || 'published',
      featured: blog.featured || false
    })) as BlogPost[]
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
