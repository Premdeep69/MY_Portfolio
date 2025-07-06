-- Fix duplicate slugs by adding unique identifiers
-- Run this in your Supabase SQL Editor

-- First, let's see what duplicates we have
SELECT title, COUNT(*) as count
FROM blogs 
GROUP BY title 
HAVING COUNT(*) > 1
ORDER BY count DESC;

-- Create a temporary table to generate unique slugs
WITH numbered_blogs AS (
  SELECT 
    id,
    title,
    ROW_NUMBER() OVER (PARTITION BY title ORDER BY created_at) as row_num
  FROM blogs
),
unique_slugs AS (
  SELECT 
    id,
    title,
    CASE 
      WHEN row_num = 1 THEN 
        LOWER(REGEXP_REPLACE(title, '[^a-zA-Z0-9\s]', '', 'g'))
      ELSE 
        LOWER(REGEXP_REPLACE(title, '[^a-zA-Z0-9\s]', '', 'g')) || '-' || row_num
    END as new_slug
  FROM numbered_blogs
)
UPDATE blogs 
SET slug = (
  SELECT new_slug 
  FROM unique_slugs 
  WHERE unique_slugs.id = blogs.id
);

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

-- Verify the results
SELECT title, slug FROM blogs ORDER BY title, slug; 