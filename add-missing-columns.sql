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

-- Verify the changes
SELECT 
  column_name, 
  data_type, 
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'blogs' 
ORDER BY ordinal_position;