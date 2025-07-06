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

function calculateReadingTime(content) {
  const wordsPerMinute = 200
  const wordCount = content.split(' ').length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}

async function fixAllBlogs() {
  try {
    console.log('🔧 Starting comprehensive blog fix...')
    console.log('📋 This will add slugs and other missing fields to all blog posts')
    console.log('')
    
    // Step 1: Get all existing blog posts
    console.log('📥 Fetching all blog posts...')
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('*')
    
    if (error) {
      console.error('❌ Error fetching blogs:', error)
      return
    }
    
    console.log(`✅ Found ${blogs.length} blog posts to fix`)
    console.log('')
    
    // Step 2: Process each blog post
    let successCount = 0
    let errorCount = 0
    
    for (let i = 0; i < blogs.length; i++) {
      const blog = blogs[i]
      console.log(`🔄 Processing ${i + 1}/${blogs.length}: ${blog.title}`)
      
      // Generate missing fields
      const slug = generateSlug(blog.title)
      const excerpt = generateExcerpt(blog.content)
      const readingTime = calculateReadingTime(blog.content)
      const now = new Date().toISOString()
      
      console.log(`   📝 Slug: ${slug}`)
      console.log(`   ⏱️  Reading time: ${readingTime} min`)
      
      // Update the blog post with missing fields
      const updateData = {
        slug: slug,
        excerpt: excerpt,
        reading_time: readingTime,
        status: 'published',
        featured: false
      }
      
      // Only add these fields if they don't exist in the database
      // (we'll handle this gracefully if the columns don't exist)
      try {
        const { error: updateError } = await supabase
          .from('blogs')
          .update(updateData)
          .eq('id', blog.id)
        
        if (updateError) {
          console.log(`   ⚠️  Warning: ${updateError.message}`)
          // Try updating just the slug if other fields fail
          const { error: slugError } = await supabase
            .from('blogs')
            .update({ slug: slug })
            .eq('id', blog.id)
          
          if (slugError) {
            console.log(`   ❌ Failed to update slug: ${slugError.message}`)
            errorCount++
          } else {
            console.log(`   ✅ Updated slug only`)
            successCount++
          }
        } else {
          console.log(`   ✅ Successfully updated all fields`)
          successCount++
        }
      } catch (err) {
        console.log(`   ❌ Error: ${err.message}`)
        errorCount++
      }
      
      console.log('')
    }
    
    // Step 3: Summary
    console.log('📊 Fix Summary:')
    console.log(`✅ Successfully updated: ${successCount} blogs`)
    console.log(`❌ Failed to update: ${errorCount} blogs`)
    console.log('')
    
    // Step 4: Verify the fixes
    console.log('🔍 Verifying fixes...')
    const { data: updatedBlogs, error: verifyError } = await supabase
      .from('blogs')
      .select('title, slug')
      .limit(5)
    
    if (verifyError) {
      console.log(`⚠️  Could not verify: ${verifyError.message}`)
    } else {
      console.log('✅ Sample updated blogs:')
      updatedBlogs.forEach((blog, index) => {
        console.log(`   ${index + 1}. ${blog.title}`)
        console.log(`      Slug: ${blog.slug || 'MISSING'}`)
      })
    }
    
    console.log('')
    console.log('🎉 Blog fix completed!')
    console.log('')
    console.log('📝 Next steps:')
    console.log('1. Visit your blog list page to see the updated posts')
    console.log('2. Try clicking on a blog post to test the detail page')
    console.log('3. The URLs should now work like: /blog/why-javascript-will-remain-the-language-of-the-web')
    
  } catch (error) {
    console.error('💥 Fatal error:', error)
  }
}

// Run the fix
fixAllBlogs() 