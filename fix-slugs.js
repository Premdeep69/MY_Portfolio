const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://lyplrfbnsjbvbtosihea.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFub24iLCJpYXQiOjE3NTEyOTA5MjUsImV4cCI6MjA2Njg2NjkyNX0.bIzgSOtHeZZjKQYcB4GxVm_4QANqkhMVStPoNQqNy6s'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim('-') // Remove leading/trailing hyphens
}

async function fixSlugs() {
  try {
    console.log('Fetching blog posts without slugs...')
    
    // Get all blog posts
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('*')
    
    if (error) {
      console.error('Error fetching blogs:', error)
      return
    }
    
    console.log(`Found ${blogs.length} blog posts`)
    
    // Update each blog post with a slug
    for (const blog of blogs) {
      if (!blog.slug) {
        const slug = generateSlug(blog.title)
        console.log(`Adding slug "${slug}" to "${blog.title}"`)
        
        const { error: updateError } = await supabase
          .from('blogs')
          .update({ slug })
          .eq('id', blog.id)
        
        if (updateError) {
          console.error(`Error updating blog ${blog.id}:`, updateError)
        } else {
          console.log(`✓ Updated blog: ${blog.title}`)
        }
      } else {
        console.log(`Blog already has slug: ${blog.title} (${blog.slug})`)
      }
    }
    
    console.log('Slug update completed!')
    
  } catch (error) {
    console.error('Fix slugs failed:', error)
  }
}

fixSlugs() 