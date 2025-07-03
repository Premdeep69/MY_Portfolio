import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://lyplrfbnsjbvbtosihea.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5cGxyZmJuc2pidmJ0b3NpaGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyOTA5MjUsImV4cCI6MjA2Njg2NjkyNX0.bIzgSOtHeZZjKQYcB4GxVm_4QANqkhMVStPoNQqNy6s'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Storage bucket names
export const STORAGE_BUCKETS = {
  blogImages: 'blog-images',
  blogVideos: 'blog-videos',
  blogAssets: 'blog-assets'
} as const

// Helper function to get public URL for storage files
export const getStorageUrl = (bucket: string, path: string) => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}

// Database types
export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  thumbnail?: string
  video_url?: string
  created_at: string
  updated_at: string
  published_at?: string
  views: number
  reading_time: number
  tags: string[]
  type: string
  status: 'draft' | 'published' | 'archived'
  featured: boolean
}

export interface BlogFilters {
  tags?: string[]
  type?: string
  status?: string
  search?: string
  featured?: boolean
}

export interface BlogSortOptions {
  field: 'created_at' | 'views' | 'title' | 'reading_time'
  direction: 'asc' | 'desc'
}

export interface PaginationOptions {
  page: number
  limit: number
}
