const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://lyplrfbnsjbvbtosihea.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5cGxyZmJuc2pidmJ0b3NpaGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyOTA5MjUsImV4cCI6MjA2Njg2NjkyNX0.bIzgSOtHeZZjKQYcB4GxVm_4QANqkhMVStPoNQqNy6s'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function checkSchema() {
  try {
    console.log('Checking database schema...')
    
    // Try to fetch a single blog to see what columns are available
    const { data: blog, error } = await supabase
      .from('blogs')
      .select('*')
      .limit(1)
    
    if (error) {
      console.error('Error fetching blog:', error)
      return
    }
    
    if (blog && blog.length > 0) {
      console.log('Available columns in blogs table:')
      console.log(Object.keys(blog[0]))
      
      console.log('\nSample blog data:')
      console.log(JSON.stringify(blog[0], null, 2))
    } else {
      console.log('No blogs found in the database.')
    }
    
  } catch (error) {
    console.error('Schema check failed:', error)
  }
}

checkSchema() 