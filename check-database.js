const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://lyplrfbnsjbvbtosihea.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5cGxyZmJuc2pidmJ0b3NpaGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyOTA5MjUsImV4cCI6MjA2Njg2NjkyNX0.bIzgSOtHeZZjKQYcB4GxVm_4QANqkhMVStPoNQqNy6s'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function checkDatabase() {
  try {
    console.log('Checking database connection...')
    
    // Check if blogs table exists and has data
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('*')
      .limit(5)
    
    if (error) {
      console.error('Error fetching blogs:', error)
      return
    }
    
    console.log('Database connection successful!')
    console.log('Number of blog posts found:', blogs.length)
    
    if (blogs.length > 0) {
      console.log('Sample blog posts:')
      blogs.forEach((blog, index) => {
        console.log(`${index + 1}. ${blog.title} (slug: ${blog.slug})`)
      })
    } else {
      console.log('No blog posts found in the database.')
    }
    
  } catch (error) {
    console.error('Database check failed:', error)
  }
}

checkDatabase() 