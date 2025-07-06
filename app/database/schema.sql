-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  thumbnail VARCHAR(500),
  video_url VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  views INTEGER DEFAULT 0,
  reading_time INTEGER DEFAULT 5,
  tags TEXT[] DEFAULT '{}',
  type VARCHAR(50) NOT NULL DEFAULT 'Tutorial',
  status VARCHAR(20) DEFAULT 'published',
  featured BOOLEAN DEFAULT FALSE
);

-- Create blog_types table
CREATE TABLE IF NOT EXISTS blog_types (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  color VARCHAR(7),
  icon VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog_tags table
CREATE TABLE IF NOT EXISTS blog_tags (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  slug VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  usage_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog_views table for tracking
CREATE TABLE IF NOT EXISTS blog_views (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  blog_id UUID REFERENCES blogs(id) ON DELETE CASCADE,
  ip_address INET,
  user_agent TEXT,
  viewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blogs_status ON blogs(status);
CREATE INDEX IF NOT EXISTS idx_blogs_type ON blogs(type);
CREATE INDEX IF NOT EXISTS idx_blogs_featured ON blogs(featured);
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON blogs(created_at);
CREATE INDEX IF NOT EXISTS idx_blogs_views ON blogs(views);
CREATE INDEX IF NOT EXISTS idx_blogs_tags ON blogs USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);

-- Create function to increment blog views
CREATE OR REPLACE FUNCTION increment_blog_views(blog_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE blogs 
  SET views = views + 1 
  WHERE id = blog_id;
END;
$$ LANGUAGE plpgsql;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON blogs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_views ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Blogs are viewable by everyone" 
ON blogs FOR SELECT 
USING (status = 'published');

CREATE POLICY "Blog types are viewable by everyone" 
ON blog_types FOR SELECT 
USING (true);

CREATE POLICY "Blog tags are viewable by everyone" 
ON blog_tags FOR SELECT 
USING (true);

-- Create policy for blog views (allow inserts for tracking)
CREATE POLICY "Anyone can insert blog views" 
ON blog_views FOR INSERT 
WITH CHECK (true);

-- Create storage buckets (run these in Supabase dashboard)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('blog-videos', 'blog-videos', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('blog-assets', 'blog-assets', true);

-- Create storage policies
-- CREATE POLICY "Blog images are publicly accessible" ON storage.objects FOR SELECT USING (bucket_id = 'blog-images');
-- CREATE POLICY "Blog videos are publicly accessible" ON storage.objects FOR SELECT USING (bucket_id = 'blog-videos');
-- CREATE POLICY "Blog assets are publicly accessible" ON storage.objects FOR SELECT USING (bucket_id = 'blog-assets');

-- Add missing columns to the blogs table
-- Run this in your Supabase SQL Editor

-- Add slug column
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS slug VARCHAR(255);

-- Add excerpt column  
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS excerpt TEXT;

-- Add updated_at column
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Add published_at column
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Add reading_time column
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS reading_time INTEGER DEFAULT 5;

-- Add status column
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'published';

-- Add featured column
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT FALSE;

-- Create unique index on slug
CREATE UNIQUE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);

-- Create index on status
CREATE INDEX IF NOT EXISTS idx_blogs_status ON blogs(status);

-- Create index on featured
CREATE INDEX IF NOT EXISTS idx_blogs_featured ON blogs(featured);

-- Create index on reading_time
CREATE INDEX IF NOT EXISTS idx_blogs_reading_time ON blogs(reading_time);

-- Update existing records to have default values
UPDATE blogs SET 
  slug = LOWER(REGEXP_REPLACE(title, '[^a-zA-Z0-9\s]', '', 'g')),
  excerpt = SUBSTRING(content FROM 1 FOR 200) || '...',
  updated_at = created_at,
  published_at = created_at,
  reading_time = GREATEST(1, CEIL(LENGTH(content) / 200)),
  status = 'published',
  featured = FALSE
WHERE slug IS NULL;

-- Clean up slug values (remove extra spaces and hyphens)
UPDATE blogs SET 
  slug = REGEXP_REPLACE(
    REGEXP_REPLACE(
      REGEXP_REPLACE(slug, '\s+', '-', 'g'),
      '-+', '-', 'g'
    ),
    '^-+|-+$', '', 'g'
  )
WHERE slug IS NOT NULL;

-- Make slug column NOT NULL after populating it
ALTER TABLE blogs ALTER COLUMN slug SET NOT NULL;
