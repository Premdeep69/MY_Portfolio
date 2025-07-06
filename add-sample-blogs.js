const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://lyplrfbnsjbvbtosihea.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5cGxyZmJuc2pidmJ0b3NpaGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyOTA5MjUsImV4cCI6MjA2Njg2NjkyNX0.bIzgSOtHeZZjKQYcB4GxVm_4QANqkhMVStPoNQqNy6s'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const sampleBlogs = [
  {
    title: "Getting Started with React Native Development",
    slug: "getting-started-react-native-development",
    content: `# Getting Started with React Native Development

React Native is a powerful framework for building mobile applications using JavaScript and React. In this tutorial, we'll walk through the basics of setting up a React Native project and creating your first mobile app.

## Prerequisites

Before we begin, make sure you have the following installed:
- Node.js (version 14 or higher)
- npm or yarn
- React Native CLI

## Installation

First, install the React Native CLI globally:

\`\`\`bash
npm install -g @react-native-community/cli
\`\`\`

## Creating a New Project

Create a new React Native project:

\`\`\`bash
npx react-native init MyFirstApp
cd MyFirstApp
\`\`\`

## Running Your App

To run your app on Android:

\`\`\`bash
npx react-native run-android
\`\`\`

To run your app on iOS:

\`\`\`bash
npx react-native run-ios
\`\`\`

## Basic Component Structure

Here's a simple example of a React Native component:

\`\`\`jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
\`\`\`

## Next Steps

Now that you have your first React Native app running, you can:
- Add more components
- Implement navigation
- Add state management
- Integrate with APIs

Happy coding!`,
    excerpt: "Learn the basics of React Native development and create your first mobile app with this comprehensive tutorial.",
    thumbnail: "/images/react-native-tutorial.jpg",
    video_url: "https://www.youtube.com/watch?v=0-S5a0eXPoc",
    tags: ["react-native", "mobile-development", "javascript", "tutorial"],
    type: "Tutorial",
    reading_time: 8
  },
  {
    title: "The Future of Web Development: What's Next?",
    slug: "future-web-development-whats-next",
    content: `# The Future of Web Development: What's Next?

Web development is constantly evolving, with new technologies and frameworks emerging regularly. In this opinion piece, I'll share my thoughts on where web development is heading and what developers should prepare for.

## Current Trends

### 1. Web Components
Web Components are becoming more mainstream, allowing developers to create reusable custom elements.

### 2. WebAssembly
WebAssembly is enabling high-performance applications to run in the browser, opening up new possibilities.

### 3. Progressive Web Apps (PWAs)
PWAs continue to gain traction, blurring the line between web and native applications.

## Emerging Technologies

### AI-Powered Development
AI tools are becoming more sophisticated, helping developers write code faster and more efficiently.

### Edge Computing
Edge computing is bringing computation closer to users, improving performance and reducing latency.

## What Developers Should Learn

1. **TypeScript**: Strong typing is becoming essential for large-scale applications
2. **Modern JavaScript**: ES6+ features and async/await patterns
3. **Performance Optimization**: Core Web Vitals and optimization techniques
4. **Accessibility**: Making the web accessible to everyone

## Conclusion

The future of web development is exciting and full of opportunities. By staying current with trends and continuously learning, developers can thrive in this ever-changing landscape.`,
    excerpt: "Explore the emerging trends and technologies that will shape the future of web development.",
    thumbnail: "/images/future-web-dev.jpg",
    video_url: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
    tags: ["web-development", "future", "opinion", "technology"],
    type: "Opinion",
    reading_time: 5
  },
  {
    title: "Building a Portfolio Website with Next.js and Tailwind CSS",
    slug: "building-portfolio-website-nextjs-tailwind",
    content: `# Building a Portfolio Website with Next.js and Tailwind CSS

In this comprehensive tutorial, we'll build a modern portfolio website using Next.js and Tailwind CSS. This will be a fully responsive, fast, and SEO-friendly website.

## Project Setup

First, create a new Next.js project:

\`\`\`bash
npx create-next-app@latest my-portfolio --typescript --tailwind --eslint
cd my-portfolio
\`\`\`

## Project Structure

\`\`\`
my-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
├── public/
└── tailwind.config.js
\`\`\`

## Creating the Home Page

\`\`\`tsx
// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm [Your Name]
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A passionate full-stack developer specializing in React, Node.js, and modern web technologies.
          </p>
          <div className="space-x-4">
            <Link 
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
\`\`\`

## Adding Animations

Install Framer Motion for smooth animations:

\`\`\`bash
npm install framer-motion
\`\`\`

## Deployment

Deploy your portfolio to Vercel:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Conclusion

You now have a modern, responsive portfolio website! Continue to customize it with your own content, projects, and styling.`,
    excerpt: "Learn how to build a modern, responsive portfolio website using Next.js and Tailwind CSS with this step-by-step tutorial.",
    thumbnail: "/images/portfolio-tutorial.jpg",
    video_url: "https://www.youtube.com/watch?v=1WmNXEVia8I",
    tags: ["nextjs", "tailwind-css", "portfolio", "tutorial", "web-development"],
    type: "Tutorial",
    reading_time: 12
  }
]

async function addSampleBlogs() {
  try {
    console.log('Adding sample blog posts...')
    
    for (const blog of sampleBlogs) {
      console.log(`Adding blog: ${blog.title}`)
      
      const { error } = await supabase
        .from('blogs')
        .insert({
          title: blog.title,
          slug: blog.slug,
          content: blog.content,
          excerpt: blog.excerpt,
          thumbnail: blog.thumbnail,
          video_url: blog.video_url,
          tags: blog.tags,
          type: blog.type,
          reading_time: blog.reading_time,
          views: 0,
          status: 'published',
          featured: false
        })
      
      if (error) {
        console.error(`Error adding blog "${blog.title}":`, error)
      } else {
        console.log(`✓ Added blog: ${blog.title}`)
      }
    }
    
    console.log('Sample blogs added successfully!')
    
  } catch (error) {
    console.error('Failed to add sample blogs:', error)
  }
}

addSampleBlogs() 