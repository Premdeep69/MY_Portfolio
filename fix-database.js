const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://lyplrfbnsjbvbtosihea.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5cGxyZmJuc2pidmJ0b3NpaGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyOTA5MjUsImV4cCI6MjA2Njg2NjkyNX0.bIzgSOtHeZZjKQYcB4GxVm_4QANqkhMVStPoNQqNy6s'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

function generateExcerpt(content) {
  // Extract the first paragraph from markdown content
  const firstParagraph = content.split('\n\n')[1] || content.split('\n')[0] || ''
  return firstParagraph.replace(/^#+\s*/, '').substring(0, 200) + '...'
}

async function fixDatabase() {
  try {
    console.log('Fixing database schema and adding slugs...')
    
    // Get all existing blog posts
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('*')
    
    if (error) {
      console.error('Error fetching blogs:', error)
      return
    }
    
    console.log(`Found ${blogs.length} blog posts to update`)
    
    // Update each blog post with missing fields
    for (const blog of blogs) {
      const slug = generateSlug(blog.title)
      const excerpt = generateExcerpt(blog.content)
      const now = new Date().toISOString()
      
      console.log(`Updating blog: ${blog.title}`)
      console.log(`  Slug: ${slug}`)
      
      const { error: updateError } = await supabase
        .from('blogs')
        .update({
          slug: slug,
          excerpt: excerpt,
          updated_at: now,
          published_at: blog.created_at,
          reading_time: Math.ceil(blog.content.split(' ').length / 200), // Rough estimate
          status: 'published',
          featured: false
        })
        .eq('id', blog.id)
      
      if (updateError) {
        console.error(`Error updating blog ${blog.id}:`, updateError)
      } else {
        console.log(`✓ Updated blog: ${blog.title}`)
      }
    }
    
    console.log('Database fix completed!')
    
    // Verify the updates
    console.log('\nVerifying updates...')
    const { data: updatedBlogs, error: verifyError } = await supabase
      .from('blogs')
      .select('title, slug, excerpt')
      .limit(3)
    
    if (verifyError) {
      console.error('Error verifying updates:', verifyError)
    } else {
      console.log('Sample updated blogs:')
      updatedBlogs.forEach(blog => {
        console.log(`- ${blog.title} (slug: ${blog.slug})`)
      })
    }
    
  } catch (error) {
    console.error('Database fix failed:', error)
  }
}

fixDatabase() 