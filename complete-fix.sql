-- Complete database fix for blogs table
-- Run this in your Supabase SQL Editor

-- Step 1: Drop the unique constraint if it exists
DROP INDEX IF EXISTS idx_blogs_slug;

-- Step 2: Add missing columns
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS slug VARCHAR(255);
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS excerpt TEXT;
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS reading_time INTEGER DEFAULT 5;
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'published';
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT FALSE;

-- Step 3: Generate initial slugs (without unique constraint)
UPDATE blogs SET 
  slug = LOWER(REGEXP_REPLACE(title, '[^a-zA-Z0-9\s]', '', 'g')),
  excerpt = SUBSTRING(content FROM 1 FOR 200) || '...',
  updated_at = created_at,
  published_at = created_at,
  reading_time = GREATEST(1, CEIL(LENGTH(content) / 200)),
  status = 'published',
  featured = FALSE
WHERE slug IS NULL;

-- Step 4: Clean up slug values
UPDATE blogs SET 
  slug = REGEXP_REPLACE(
    REGEXP_REPLACE(
      REGEXP_REPLACE(slug, '\s+', '-', 'g'),
      '-+', '-', 'g'
    ),
    '^-+|-+$', '', 'g'
  )
WHERE slug IS NOT NULL;

-- Step 5: Handle duplicates by adding unique identifiers
WITH numbered_blogs AS (
  SELECT 
    id,
    title,
    slug,
    ROW_NUMBER() OVER (PARTITION BY slug ORDER BY created_at) as row_num
  FROM blogs
  WHERE slug IS NOT NULL
),
unique_slugs AS (
  SELECT 
    id,
    CASE 
      WHEN row_num = 1 THEN slug
      ELSE slug || '-' || row_num
    END as new_slug
  FROM numbered_blogs
)
UPDATE blogs 
SET slug = (
  SELECT new_slug 
  FROM unique_slugs 
  WHERE unique_slugs.id = blogs.id
);

-- Step 6: Create indexes
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_status ON blogs(status);
CREATE INDEX IF NOT EXISTS idx_blogs_featured ON blogs(featured);
CREATE INDEX IF NOT EXISTS idx_blogs_reading_time ON blogs(reading_time);

-- Step 7: Make slug NOT NULL
ALTER TABLE blogs ALTER COLUMN slug SET NOT NULL;

-- Step 8: Verify the results
SELECT 
  title, 
  slug, 
  reading_time,
  status,
  featured
FROM blogs 
ORDER BY created_at DESC; 