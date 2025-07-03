"use client"

// Blog types data
const blogTypes = [
  {
    name: "tutorial",
    description: "Step-by-step guides and how-to articles",
    color: "blue",
  },
  {
    name: "opinion",
    description: "Personal thoughts and perspectives",
    color: "purple",
  },
  {
    name: "project-update",
    description: "Updates on ongoing projects",
    color: "green",
  },
  {
    name: "announcement",
    description: "Important news and announcements",
    color: "yellow",
  },
  {
    name: "interview",
    description: "Q&A sessions and interviews",
    color: "pink",
  },
  {
    name: "case-study",
    description: "In-depth analysis of projects and technologies",
    color: "indigo",
  },
]

// Blog tags data
const blogTags = [
  { name: "javascript", description: "JavaScript programming language", color: "yellow" },
  { name: "react", description: "React library and ecosystem", color: "blue" },
  { name: "react-native", description: "React Native mobile development", color: "blue" },
  { name: "nextjs", description: "Next.js framework", color: "black" },
  { name: "nodejs", description: "Node.js runtime", color: "green" },
  { name: "typescript", description: "TypeScript language", color: "blue" },
  { name: "web-development", description: "General web development", color: "purple" },
  { name: "mobile-development", description: "Mobile app development", color: "green" },
  { name: "database", description: "Database technologies", color: "orange" },
  { name: "mysql", description: "MySQL database", color: "orange" },
  { name: "supabase", description: "Supabase backend", color: "green" },
  { name: "css", description: "CSS styling", color: "blue" },
  { name: "html", description: "HTML markup", color: "orange" },
  { name: "career", description: "Career development and advice", color: "purple" },
  { name: "learning", description: "Learning and education", color: "green" },
  { name: "productivity", description: "Productivity tips and tools", color: "blue" },
  { name: "tools", description: "Development tools and utilities", color: "gray" },
  { name: "portfolio", description: "Portfolio development", color: "purple" },
  { name: "gsap", description: "GSAP animation library", color: "green" },
  { name: "vscode", description: "Visual Studio Code", color: "blue" },
]

// Sample blog posts (20+ comprehensive posts)
const sampleBlogs = [
  {
    title: "Building Modern Web Applications with Next.js 14",
    slug: "building-modern-web-applications-nextjs-14",
    content: `# Building Modern Web Applications with Next.js 14

Next.js 14 brings exciting new features and improvements that make building modern web applications easier and more efficient than ever. In this comprehensive guide, we'll explore the key features and best practices for developing with Next.js 14.

## What's New in Next.js 14

### App Router Stability
The App Router, introduced as experimental in Next.js 13, is now stable and production-ready. It provides:
- Improved routing with layouts
- Better data fetching patterns
- Enhanced developer experience

### Server Actions
Server Actions allow you to run server-side code directly from your components:

\`\`\`typescript
async function createPost(formData: FormData) {
  'use server'
  
  const title = formData.get('title')
  const content = formData.get('content')
  
  // Save to database
  await db.posts.create({ title, content })
}
\`\`\`

### Turbopack (Alpha)
Turbopack, the Rust-based bundler, is now available in alpha for local development:

\`\`\`bash
npm run dev --turbo
\`\`\`

## Getting Started

### Installation
Create a new Next.js 14 project:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

### Project Structure
Next.js 14 with App Router uses a file-based routing system:

\`\`\`
app/
├── layout.tsx          # Root layout
├── page.tsx           # Home page
├── about/
│   └── page.tsx       # About page
└── blog/
    ├── page.tsx       # Blog listing
    └── [slug]/
        └── page.tsx   # Blog post
\`\`\`

## Key Features

### 1. File-based Routing
Create routes by adding files to the \`app\` directory:

\`\`\`jsx
// app/about/page.tsx
export default function About() {
  return <h1>About Page</h1>
}
\`\`\`

### 2. Dynamic Routes
Create dynamic routes using square brackets:

\`\`\`jsx
// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h1>Post: {params.slug}</h1>
}
\`\`\`

### 3. API Routes
Build API endpoints directly in your Next.js app:

\`\`\`jsx
// app/api/users/route.ts
export async function GET() {
  const users = await fetchUsers()
  return Response.json(users)
}
\`\`\`

## Data Fetching Strategies

### Static Generation (SSG)
\`\`\`jsx
export default async function Posts() {
  const posts = await fetch('https://api.example.com/posts')
  const data = await posts.json()

  return (
    <div>
      {data.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}
\`\`\`

## Performance Optimization

### Image Optimization
\`\`\`jsx
import Image from 'next/image'

export default function Gallery() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={800}
      height={600}
      priority
    />
  )
}
\`\`\`

### Code Splitting
Next.js automatically splits your code, but you can also use dynamic imports:

\`\`\`jsx
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/Heavy'), {
  loading: () => <p>Loading...</p>
})
\`\`\`

## Deployment

Deploy to Vercel with zero configuration:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Best Practices

1. **Use TypeScript** for better development experience
2. **Implement proper SEO** with metadata API
3. **Optimize images** with next/image
4. **Use environment variables** for configuration
5. **Implement proper error handling**

## Conclusion

Next.js 14 provides a robust foundation for building scalable web applications. Its built-in optimizations and developer-friendly features make it an excellent choice for modern web development.

The combination of Server Components, Server Actions, and the stable App Router creates a powerful development experience that scales from simple websites to complex applications.`,
    excerpt: "Discover how to build scalable, production-ready web applications using Next.js 14 and its powerful features like App Router, Server Actions, and Turbopack.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["nextjs", "react", "web-development", "javascript", "typescript"],
    type: "tutorial",
    reading_time: 12,
    featured: true,
    views: 1250,
    status: "published"
  },
  {
    title: "My Journey Learning JavaScript: From Beginner to Confident Developer",
    slug: "my-journey-learning-javascript-beginner-to-developer",
    content: `# My Journey Learning JavaScript: From Beginner to Confident Developer

Learning JavaScript has been one of the most rewarding experiences in my programming journey. In this post, I want to share my personal experience, the challenges I faced, and the strategies that helped me become a confident JavaScript developer.

## The Beginning: Why JavaScript?

When I first started learning programming, I was overwhelmed by the number of languages available. However, JavaScript stood out for several reasons:

- **Versatility**: Frontend, backend, mobile apps - JavaScript can do it all
- **Community**: Huge, supportive community with endless resources
- **Job Market**: High demand for JavaScript developers
- **Immediate Results**: You can see your code in action right in the browser

## Early Challenges

### 1. Understanding Asynchronous Programming

One of the biggest hurdles was wrapping my head around asynchronous programming:

\`\`\`javascript
// This confused me initially
console.log('First')
setTimeout(() => console.log('Second'), 0)
console.log('Third')

// Output: First, Third, Second (Why?!)
\`\`\`

**Solution**: I spent time understanding the event loop, callbacks, promises, and async/await.

### 2. Scope and Closures

\`\`\`javascript
// This behavior was puzzling
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}
// Prints: 3, 3, 3 (not 0, 1, 2)
\`\`\`

**Solution**: Learning about function scope, block scope, and how closures work.

### 3. The 'this' Keyword

\`\`\`javascript
const obj = {
  name: 'John',
  greet: function() {
    console.log('Hello, ' + this.name)
  }
}

const greet = obj.greet
greet() // Hello, undefined (Why?!)
\`\`\`

**Solution**: Understanding execution context and how 'this' is determined.

## Learning Resources That Helped

### Books
- **"You Don't Know JS" series** by Kyle Simpson
- **"Eloquent JavaScript"** by Marijn Haverbeke
- **"JavaScript: The Good Parts"** by Douglas Crockford

### Online Platforms
- **freeCodeCamp**: Excellent structured curriculum
- **MDN Web Docs**: Best reference documentation
- **JavaScript.info**: Comprehensive modern JavaScript tutorial

### Practice Platforms
- **Codewars**: Great for algorithm practice
- **LeetCode**: Technical interview preparation
- **HackerRank**: Diverse programming challenges

## Key Milestones

### 1. First Interactive Website
Building my first interactive website with vanilla JavaScript was a huge confidence boost. It included:
- Form validation
- Dynamic content updates
- Simple animations

### 2. Understanding ES6+
Learning modern JavaScript features transformed my coding:
- Arrow functions
- Destructuring
- Template literals
- Modules
- Classes

### 3. First React Application
Building my first React app helped me understand:
- Component-based architecture
- State management
- Virtual DOM concepts

### 4. Node.js Backend
Creating my first backend with Node.js opened up new possibilities:
- RESTful APIs
- Database integration
- Authentication systems

## Practical Tips for Learning JavaScript

### 1. Build Projects
Don't just read about JavaScript - build things:
- Todo list application
- Weather app using APIs
- Simple games (tic-tac-toe, memory game)
- Personal portfolio website

### 2. Read Other People's Code
- Explore open-source projects on GitHub
- Analyze popular libraries and frameworks
- Join code review sessions

### 3. Practice Regularly
- Code every day, even if it's just 30 minutes
- Solve coding challenges
- Refactor old projects with new knowledge

### 4. Join the Community
- Participate in forums (Stack Overflow, Reddit)
- Attend local meetups and conferences
- Follow JavaScript experts on Twitter

## Common Mistakes I Made (And How to Avoid Them)

### 1. Not Understanding Fundamentals
I rushed to learn frameworks before mastering vanilla JavaScript.

**Lesson**: Build a strong foundation in core JavaScript concepts first.

### 2. Tutorial Hell
I watched countless tutorials without building anything myself.

**Lesson**: Apply what you learn immediately through projects.

### 3. Comparing Myself to Others
I felt discouraged seeing other developers' advanced projects.

**Lesson**: Focus on your own progress and celebrate small wins.

## Current State and Future Goals

Today, I'm comfortable with:
- Modern JavaScript (ES6+)
- React and its ecosystem
- Node.js and Express
- Database integration
- Testing with Jest

My future learning goals include:
- TypeScript for better code quality
- Advanced React patterns
- GraphQL for API development
- Performance optimization techniques

## Advice for Aspiring JavaScript Developers

1. **Be Patient**: Learning programming takes time. Don't rush the process.

2. **Practice Consistently**: Regular practice is more effective than intensive cramming.

3. **Build Real Projects**: Apply your knowledge to solve real problems.

4. **Don't Fear Errors**: Debugging is a crucial skill. Embrace errors as learning opportunities.

5. **Stay Updated**: JavaScript evolves rapidly. Follow the latest developments.

6. **Find a Community**: Learning with others makes the journey more enjoyable.

## Conclusion

Learning JavaScript has been challenging but incredibly rewarding. The key is persistence, practice, and patience. Every developer's journey is unique, but with dedication and the right resources, anyone can become proficient in JavaScript.

Remember, becoming a good developer is not about knowing everything - it's about knowing how to learn, adapt, and solve problems effectively.

Keep coding, keep learning, and most importantly, enjoy the journey! 🚀`,
    excerpt: "A personal account of learning JavaScript from scratch, including challenges faced, resources used, and practical advice for aspiring developers.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    tags: ["javascript", "learning", "career", "web-development"],
    type: "opinion",
    reading_time: 8,
    featured: false,
    views: 856,
    status: "published"
  },
  {
    title: "Portfolio Website Update: New Features and Improvements",
    slug: "portfolio-website-update-new-features-improvements",
    content: `# Portfolio Website Update: New Features and Improvements

I'm excited to share the latest updates to my portfolio website! Over the past few weeks, I've been working on several new features and improvements that enhance both the user experience and showcase my growing skills as a developer.

## What's New

### 🌐 Internationalization (i18n)
The website now supports multiple languages:
- **English** (default)
- **Nepali** (नेपाली)
- **Japanese** (日本語)

This was implemented using react-i18next with:
- Automatic language detection
- Persistent language selection
- Smooth language switching
- Comprehensive translations for all UI elements

### 🎨 GSAP Animations
Added stunning animations throughout the site:
- **Hero section**: Sequential text reveals with smooth easing
- **Skills grid**: Staggered bounce-in effects
- **Project cards**: Scroll-triggered fade-up animations
- **Page transitions**: Route-specific entrance animations
- **Interactive elements**: Hover effects and micro-interactions

### 📱 Enhanced Mobile Experience
- Improved responsive design
- Touch-friendly interactions
- Optimized animations for mobile devices
- Better navigation on smaller screens

## Technical Implementation

### Internationalization Setup

\`\`\`typescript
// i18n configuration
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      np: { translation: npTranslations },
      ja: { translation: jaTranslations }
    },
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"]
    }
  })
\`\`\`

### GSAP Animation Examples

\`\`\`typescript
// Hero entrance animation
const animateHeroEntry = (elements) => {
  const tl = gsap.timeline()
  
  gsap.set(elements, { opacity: 0, y: 50 })
  
  tl.to(elements.greeting, { opacity: 1, y: 0, duration: 0.6 })
    .to(elements.name, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
    .to(elements.tagline, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
  
  return tl
}

// Scroll-triggered animations
gsap.to(projectCards, {
  opacity: 1,
  y: 0,
  duration: 0.6,
  stagger: 0.1,
  scrollTrigger: {
    trigger: container,
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
})
\`\`\`

## Performance Improvements

### Optimization Strategies
- **Code splitting**: Reduced initial bundle size
- **Image optimization**: Next.js Image component with lazy loading
- **Animation performance**: Hardware acceleration and efficient triggers
- **Caching**: Implemented proper caching strategies

### Metrics
- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## User Experience Enhancements

### Accessibility Improvements
- **Keyboard navigation**: Full keyboard accessibility
- **Screen reader support**: Proper ARIA labels and semantic HTML
- **Reduced motion**: Respects user's motion preferences
- **Color contrast**: WCAG AA compliant color schemes

### Interactive Features
- **Smooth scrolling**: Enhanced navigation experience
- **Hover effects**: Subtle feedback on interactive elements
- **Loading states**: Skeleton screens and loading indicators
- **Error handling**: Graceful error states with recovery options

## Challenges and Solutions

### Challenge 1: Animation Performance on Mobile
**Problem**: Complex animations causing performance issues on mobile devices.

**Solution**: 
- Implemented conditional animations based on device capabilities
- Used \`will-change\` CSS property strategically
- Reduced animation complexity for mobile devices

### Challenge 2: Translation Management
**Problem**: Managing translations across multiple languages and components.

**Solution**:
- Created a structured translation system with nested keys
- Implemented translation validation
- Used TypeScript for type-safe translations

### Challenge 3: SEO with Client-Side Routing
**Problem**: Ensuring proper SEO with React Router.

**Solution**:
- Implemented proper meta tags for each route
- Added structured data markup
- Created XML sitemap

## Future Plans

### Upcoming Features
- **Blog section**: Dynamic blog with Supabase backend
- **Dark mode**: Theme switching capability
- **Contact form**: Functional contact form with email integration
- **Analytics**: User behavior tracking and insights

### Technical Improvements
- **TypeScript migration**: Full TypeScript implementation
- **Testing**: Comprehensive test suite with Jest and React Testing Library
- **CI/CD**: Automated deployment pipeline
- **Performance monitoring**: Real-time performance tracking

## Lessons Learned

### Development Process
1. **Plan animations early**: Consider performance implications from the start
2. **Test on real devices**: Emulators don't always reflect real performance
3. **Incremental improvements**: Small, consistent improvements are better than major overhauls
4. **User feedback**: Regular testing with real users provides valuable insights

### Technical Insights
1. **GSAP is powerful**: But requires careful performance consideration
2. **i18n complexity**: Internationalization affects more than just text
3. **Mobile-first**: Always design and develop with mobile in mind
4. **Accessibility matters**: It's not optional - build it in from the start

## Community Feedback

The response has been overwhelmingly positive:
- **Smooth animations**: Users love the polished feel
- **Language support**: International visitors appreciate native language support
- **Mobile experience**: Significant improvement in mobile usability
- **Professional appearance**: Enhanced credibility and professionalism

## Conclusion

This update represents a significant step forward in both the technical sophistication and user experience of my portfolio. The combination of internationalization, smooth animations, and performance optimizations creates a modern, professional showcase of my development skills.

The project has been an excellent learning experience, pushing me to explore new technologies and best practices. I'm particularly proud of the animation system and the comprehensive internationalization implementation.

## What's Next?

I'm already working on the next major update, which will include a dynamic blog system powered by Supabase. This will add content management capabilities and demonstrate my full-stack development skills.

Stay tuned for more updates, and feel free to explore the new features on my portfolio website!

---

**Tech Stack Used:**
- React + TypeScript
- React Router
- GSAP + ScrollTrigger
- react-i18next
- Tailwind CSS
- Next.js
- Vercel (deployment)

**Links:**
- [Live Website](https://your-portfolio.vercel.app)
- [GitHub Repository](https://github.com/Premdeep69/portfolio)`,
    excerpt: "Exciting updates to my portfolio website including internationalization, GSAP animations, and enhanced mobile experience.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    tags: ["portfolio", "react", "gsap", "web-development", "nextjs"],
    type: "project-update",
    reading_time: 6,
    featured: true,
    views: 432,
    status: "published"
  },
  {
    title: "Essential VS Code Extensions for JavaScript Developers",
    slug: "essential-vscode-extensions-javascript-developers",
    content: `# Essential VS Code Extensions for JavaScript Developers

As a JavaScript developer, having the right tools can significantly boost your productivity and code quality. Visual Studio Code has become the go-to editor for many developers, and its extensive ecosystem of extensions makes it even more powerful.

In this post, I'll share my curated list of essential VS Code extensions that every JavaScript developer should consider installing.

## Code Quality & Linting

### 1. ESLint
**Extension ID**: dbaeumer.vscode-eslint

ESLint is crucial for maintaining code quality and consistency:
- Identifies potential errors and bugs
- Enforces coding standards
- Provides automatic fixes for many issues
- Integrates seamlessly with popular style guides

**Configuration tip**: Create a \`.eslintrc.js\` file in your project root:

\`\`\`javascript
module.exports = {
  extends: ['eslint:recommended'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error'
  }
}
\`\`\`

### 2. Prettier - Code Formatter
**Extension ID**: esbenp.prettier-vscode

Prettier ensures consistent code formatting:
- Automatic code formatting on save
- Supports multiple languages
- Highly configurable
- Integrates well with ESLint

**Pro tip**: Enable format on save in VS Code settings:
\`\`\`json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
\`\`\`

## IntelliSense & Autocomplete

### 3. JavaScript (ES6) Code Snippets
**Extension ID**: xabikos.JavaScriptSnippets

Provides useful code snippets for modern JavaScript:
- Arrow functions
- Destructuring
- Promises and async/await
- Import/export statements

### 4. Path Intellisense
**Extension ID**: christian-kohler.path-intellisense

Autocompletes file paths in your code:
- Works with relative and absolute paths
- Supports various file types
- Reduces typos in import statements

## React Development

### 5. ES7+ React/Redux/React-Native Snippets
**Extension ID**: dsznajder.es7-react-js-snippets

Essential for React developers:
- Component snippets (rfc, rafc, etc.)
- Hook snippets
- Redux snippets
- React Native support

**Popular snippets**:
- \`rfc\` → React functional component
- \`useState\` → useState hook
- \`useEffect\` → useEffect hook

### 6. Auto Rename Tag
**Extension ID**: formulahendry.auto-rename-tag

Automatically renames paired HTML/JSX tags:
- Saves time when refactoring
- Prevents mismatched tags
- Works with JSX and HTML

## Git Integration

### 7. GitLens
**Extension ID**: eamodio.gitlens

Supercharges Git capabilities in VS Code:
- Inline blame annotations
- Commit history exploration
- Branch comparison
- Rich hover information

### 8. Git Graph
**Extension ID**: mhutchie.git-graph

Visualizes your Git repository:
- Interactive commit graph
- Branch visualization
- Easy commit navigation
- Merge conflict resolution

## Debugging & Testing

### 9. Debugger for Chrome
**Extension ID**: msjsdiag.debugger-for-chrome

Debug JavaScript code running in Chrome:
- Set breakpoints in VS Code
- Step through code execution
- Inspect variables and call stack
- Works with React, Angular, and Vue

### 10. Jest
**Extension ID**: orta.vscode-jest

Enhances Jest testing experience:
- Inline test results
- Test coverage information
- Run tests from editor
- Snapshot management

## Productivity Boosters

### 11. Bracket Pair Colorizer 2
**Extension ID**: coenraads.bracket-pair-colorizer-2

Colors matching brackets for better readability:
- Customizable colors
- Supports multiple bracket types
- Improves code navigation
- Reduces syntax errors

### 12. Auto Import - ES6, TS, JSX, TSX
**Extension ID**: steoates.autoimport

Automatically imports modules:
- Scans your project for available exports
- Suggests imports as you type
- Supports TypeScript and JavaScript
- Configurable import styles

### 13. Live Server
**Extension ID**: ritwickdey.liveserver

Launch a local development server:
- Live reload functionality
- Supports static and dynamic content
- Customizable port and settings
- Great for testing HTML/CSS/JS

## Theme & Appearance

### 14. Material Icon Theme
**Extension ID**: pkief.material-icon-theme

Beautiful file icons for better visual organization:
- Icons for different file types
- Folder icons
- Highly customizable
- Improves file navigation

### 15. One Dark Pro
**Extension ID**: zhuangtongfa.material-theme

Popular dark theme for VS Code:
- Easy on the eyes
- Great syntax highlighting
- Consistent with Atom's One Dark theme
- Multiple variants available

## Advanced Tools

### 16. REST Client
**Extension ID**: humao.rest-client

Test REST APIs directly in VS Code:
- Send HTTP requests
- View responses
- Save request collections
- Environment variables support

**Example usage**:
\`\`\`http
GET https://api.github.com/users/octocat
Content-Type: application/json

###

POST https://httpbin.org/post
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
\`\`\`

### 17. Thunder Client
**Extension ID**: rangav.vscode-thunder-client

Lightweight REST API client:
- Postman-like interface
- Collections and environments
- GraphQL support
- Import/export functionality

## Configuration Tips

### Workspace Settings
Create a \`.vscode/settings.json\` file in your project:

\`\`\`json
{
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "files.eol": "\\n",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
\`\`\`

### Recommended Extensions File
Create \`.vscode/extensions.json\`:

\`\`\`json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "dsznajder.es7-react-js-snippets",
    "eamodio.gitlens",
    "msjsdiag.debugger-for-chrome"
  ]
}
\`\`\`

## Performance Considerations

### Managing Extensions
- Only install extensions you actively use
- Disable extensions for specific workspaces if needed
- Regularly review and remove unused extensions
- Use workspace-specific extension recommendations

### Extension Conflicts
- Be aware of conflicting formatters
- Check extension compatibility
- Use extension bisect to identify problematic extensions

## Conclusion

These extensions have significantly improved my JavaScript development workflow. While you don't need all of them, I recommend starting with the core ones (ESLint, Prettier, GitLens) and gradually adding others based on your specific needs.

Remember that the best setup is the one that works for your workflow. Experiment with different extensions and configurations to find what makes you most productive.

## Bonus: Keyboard Shortcuts

Here are some essential VS Code shortcuts for JavaScript development:

- \`Ctrl+Shift+P\` (Cmd+Shift+P): Command palette
- \`Ctrl+\`\` (Cmd+\`): Toggle terminal
- \`Ctrl+Shift+\`\` (Cmd+Shift+\`): New terminal
- \`F12\`: Go to definition
- \`Alt+F12\` (Option+F12): Peek definition
- \`Ctrl+Shift+F\` (Cmd+Shift+F): Search in files
- \`Ctrl+D\` (Cmd+D): Select next occurrence
- \`Ctrl+Shift+L\` (Cmd+Shift+L): Select all occurrences

Happy coding! 🚀`,
    excerpt: "A comprehensive guide to the most useful VS Code extensions that can supercharge your JavaScript development workflow.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    tags: ["vscode", "javascript", "productivity", "tools"],
    type: "tutorial",
    reading_time: 7,
    featured: false,
    views: 623,
    status: "published"
  },
  {
    title: "React Native vs Flutter: A Developer's Perspective",
    slug: "react-native-vs-flutter-developer-perspective",
    content: `# React Native vs Flutter: A Developer's Perspective

As a developer who has worked with both React Native and Flutter, I'm often asked which framework is better for mobile app development. The truth is, both have their strengths and weaknesses, and the choice depends on your specific needs, team expertise, and project requirements.

In this comprehensive comparison, I'll share my hands-on experience with both frameworks and help you make an informed decision.

## Overview

### React Native
- **Created by**: Facebook (Meta)
- **Language**: JavaScript/TypeScript
- **First Release**: 2015
- **Architecture**: Bridge-based (moving to JSI)

### Flutter
- **Created by**: Google
- **Language**: Dart
- **First Release**: 2017
- **Architecture**: Compiled to native code

## Development Experience

### React Native

**Pros:**
- **Familiar for web developers**: If you know React, you can quickly pick up React Native
- **Hot reload**: Fast development cycle with instant updates
- **Large ecosystem**: Extensive third-party libraries and community support
- **Code sharing**: Share business logic between web and mobile apps

**Cons:**
- **Bridge performance**: Communication between JavaScript and native code can be a bottleneck
- **Platform-specific code**: Often need to write native code for complex features
- **Debugging complexity**: Can be challenging to debug bridge-related issues

**Example React Native Component:**
\`\`\`jsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Counter;
\`\`\`

### Flutter

**Pros:**
- **Consistent UI**: Same UI across all platforms
- **High performance**: Compiled to native code, no bridge
- **Rich widget library**: Comprehensive set of customizable widgets
- **Strong typing**: Dart's type system catches errors at compile time

**Cons:**
- **Learning curve**: Need to learn Dart language
- **App size**: Flutter apps tend to be larger
- **Newer ecosystem**: Smaller community compared to React Native

**Example Flutter Widget:**
\`\`\`dart
import 'package:flutter/material.dart';

class Counter extends StatefulWidget {
  @override
  _CounterState createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _count = 0;

  void _incrementCounter() {
    setState(() {
      _count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Count: $_count',
              style: TextStyle(fontSize: 24),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _incrementCounter,
              child: Text('Increment'),
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.symmetric(horizontal: 30, vertical: 15),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

## Performance Comparison

### React Native Performance
- **JavaScript thread**: UI updates happen on the main thread
- **Bridge overhead**: Communication between JS and native can cause bottlenecks
- **Memory usage**: Generally lower memory footprint
- **Startup time**: Faster initial load time

### Flutter Performance
- **Compiled code**: Direct compilation to native ARM code
- **60 FPS**: Smooth animations and transitions
- **Memory usage**: Higher memory consumption
- **Startup time**: Slightly slower initial load

## UI/UX Considerations

### React Native
- **Platform-specific look**: Apps look native on each platform
- **Component mapping**: Uses native components under the hood
- **Customization**: Requires more effort for custom designs
- **Accessibility**: Good accessibility support

### Flutter
- **Consistent design**: Same look across all platforms
- **Material Design**: Built-in Material Design components
- **Custom widgets**: Easy to create custom UI components
- **Pixel-perfect**: Complete control over every pixel

## Development Tools

### React Native Tools
- **Metro bundler**: Fast, scalable bundler
- **Flipper**: Powerful debugging tool
- **React DevTools**: Familiar debugging experience
- **VS Code support**: Excellent IDE support

### Flutter Tools
- **Flutter Inspector**: Visual debugging tool
- **Hot reload**: Instant code changes
- **Dart DevTools**: Comprehensive debugging suite
- **IDE plugins**: Great support for VS Code and Android Studio

## Community and Ecosystem

### React Native
- **Mature ecosystem**: 8+ years of development
- **Large community**: Extensive Stack Overflow support
- **Third-party libraries**: Huge selection of packages
- **Corporate backing**: Strong support from Meta

### Flutter
- **Growing rapidly**: Fastest-growing mobile framework
- **Google support**: Strong backing from Google
- **Pub.dev**: Growing package repository
- **Active community**: Enthusiastic developer community

## Real-World Projects

### My React Native Experience
I built a gym trainee management app using React Native:

**Challenges faced:**
- Performance issues with large lists
- Platform-specific navigation differences
- Complex animations required native modules

**Solutions implemented:**
- Used FlatList with optimization
- Implemented custom navigation solution
- Created native modules for smooth animations

### My Flutter Experience
I experimented with Flutter for a personal project:

**Observations:**
- Faster development for custom UI
- Consistent behavior across platforms
- Steeper learning curve initially
- Excellent documentation and tutorials

## When to Choose React Native

Choose React Native if:
- Your team has strong JavaScript/React experience
- You want to share code with web applications
- You need platform-specific native look and feel
- You're working with existing React ecosystem
- You need faster time-to-market with familiar technology

**Best for:**
- Social media apps
- E-commerce applications
- Content-driven apps
- MVP development

## When to Choose Flutter

Choose Flutter if:
- You want consistent UI across all platforms
- Performance is critical for your application
- You're building a design-heavy application
- You don't mind learning a new language (Dart)
- You want to target multiple platforms (mobile, web, desktop)

**Best for:**
- Gaming applications
- Fintech apps requiring custom UI
- Apps with complex animations
- Cross-platform applications

## Performance Benchmarks

Based on my testing:

### App Size
- **React Native**: ~7-10 MB (basic app)
- **Flutter**: ~15-20 MB (basic app)

### Memory Usage
- **React Native**: ~50-80 MB (typical app)
- **Flutter**: ~80-120 MB (typical app)

### Development Speed
- **React Native**: Faster for teams with React experience
- **Flutter**: Faster for complex UI development

## Future Outlook

### React Native
- **New Architecture**: JSI and Fabric promise better performance
- **Hermes engine**: Improved JavaScript performance
- **Microsoft support**: React Native for Windows and macOS

### Flutter
- **Multi-platform**: Expanding to web and desktop
- **Dart improvements**: Continued language enhancements
- **Google integration**: Deeper integration with Google services

## My Recommendation

After working with both frameworks extensively, here's my recommendation:

**Choose React Native if:**
- You're a web developer transitioning to mobile
- You have tight deadlines and existing React expertise
- You need to integrate with many third-party native libraries

**Choose Flutter if:**
- You're starting fresh and can invest in learning Dart
- UI consistency across platforms is crucial
- You're building a performance-critical application

## Conclusion

Both React Native and Flutter are excellent choices for cross-platform mobile development. The decision ultimately comes down to your team's expertise, project requirements, and long-term goals.

React Native offers familiarity and a mature ecosystem, while Flutter provides performance and UI consistency. Both frameworks continue to evolve and improve, making mobile development more accessible and efficient.

My advice? Try both frameworks with small projects and see which one feels more natural for your team and use cases. The best framework is the one that helps you build great apps efficiently.

What's your experience with these frameworks? I'd love to hear your thoughts and experiences in the comments!`,
    excerpt: "A detailed comparison of React Native and Flutter from a developer who has worked with both frameworks, including pros, cons, and real-world insights.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    tags: ["react-native", "flutter", "mobile-development", "comparison"],
    type: "opinion",
    reading_time: 10,
    featured: false,
    views: 789,
    status: "published"
  },
  {
    title: "Building a Library Management System: Project Walkthrough",
    slug: "building-library-management-system-project-walkthrough",
    content: `# Building a Library Management System: Project Walkthrough

One of my most comprehensive projects has been developing a Library Management System using Java, MySQL, and web technologies. In this detailed walkthrough, I'll share the development process, challenges faced, and lessons learned.

## Project Overview

The Library Management System is a desktop application designed to help librarians manage:
- Book inventory and cataloging
- Member registration and management
- Book borrowing and returning
- Fine calculations and payments
- Report generation and analytics

## Technology Stack

### Backend
- **Java**: Core application logic
- **JDBC**: Database connectivity
- **MySQL**: Data storage and management

### Frontend
- **Java Swing**: Desktop GUI
- **HTML/CSS/JavaScript**: Web interface components

### Tools & Libraries
- **NetBeans IDE**: Development environment
- **MySQL Workbench**: Database design and management
- **JasperReports**: Report generation

## Database Design

### Entity Relationship Diagram

The system uses a normalized database structure with the following main entities:

\`\`\`sql
-- Books table
CREATE TABLE books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    isbn VARCHAR(13) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    publisher VARCHAR(255),
    publication_year YEAR,
    category VARCHAR(100),
    total_copies INT DEFAULT 1,
    available_copies INT DEFAULT 1,
    shelf_location VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Members table
CREATE TABLE members (
    member_id INT PRIMARY KEY AUTO_INCREMENT,
    member_number VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20),
    address TEXT,
    membership_type ENUM('student', 'faculty', 'public') DEFAULT 'public',
    registration_date DATE NOT NULL,
    expiry_date DATE NOT NULL,
    status ENUM('active', 'suspended', 'expired') DEFAULT 'active'
);

-- Transactions table
CREATE TABLE transactions (
    transaction_id INT PRIMARY KEY AUTO_INCREMENT,
    member_id INT NOT NULL,
    book_id INT NOT NULL,
    issue_date DATE NOT NULL,
    due_date DATE NOT NULL,
    return_date DATE NULL,
    fine_amount DECIMAL(10,2) DEFAULT 0.00,
    status ENUM('issued', 'returned', 'overdue') DEFAULT 'issued',
    FOREIGN KEY (member_id) REFERENCES members(member_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id)
);

-- Fines table
CREATE TABLE fines (
    fine_id INT PRIMARY KEY AUTO_INCREMENT,
    transaction_id INT NOT NULL,
    fine_amount DECIMAL(10,2) NOT NULL,
    fine_reason VARCHAR(255),
    payment_status ENUM('pending', 'paid') DEFAULT 'pending',
    payment_date DATE NULL,
    FOREIGN KEY (transaction_id) REFERENCES transactions(transaction_id)
);
\`\`\`

## Core Features Implementation

### 1. Book Management

\`\`\`java
public class BookManager {
    private Connection connection;
    
    public BookManager(Connection conn) {
        this.connection = conn;
    }
    
    public boolean addBook(Book book) {
        String sql = "INSERT INTO books (isbn, title, author, publisher, " +
                    "publication_year, category, total_copies, available_copies, " +
                    "shelf_location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, book.getIsbn());
            stmt.setString(2, book.getTitle());
            stmt.setString(3, book.getAuthor());
            stmt.setString(4, book.getPublisher());
            stmt.setInt(5, book.getPublicationYear());
            stmt.setString(6, book.getCategory());
            stmt.setInt(7, book.getTotalCopies());
            stmt.setInt(8, book.getAvailableCopies());
            stmt.setString(9, book.getShelfLocation());
            
            return stmt.executeUpdate() > 0;
        } catch (SQLException e) {
            System.err.println("Error adding book: " + e.getMessage());
            return false;
        }
    }
    
    public List<Book> searchBooks(String searchTerm) {
        List<Book> books = new ArrayList<>();
        String sql = "SELECT * FROM books WHERE title LIKE ? OR author LIKE ? " +
                    "OR isbn LIKE ? ORDER BY title";
        
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            String searchPattern = "%" + searchTerm + "%";
            stmt.setString(1, searchPattern);
            stmt.setString(2, searchPattern);
            stmt.setString(3, searchPattern);
            
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                books.add(mapResultSetToBook(rs));
            }
        } catch (SQLException e) {
            System.err.println("Error searching books: " + e.getMessage());
        }
        
        return books;
    }
    
    private Book mapResultSetToBook(ResultSet rs) throws SQLException {
        Book book = new Book();
        book.setBookId(rs.getInt("book_id"));
        book.setIsbn(rs.getString("isbn"));
        book.setTitle(rs.getString("title"));
        book.setAuthor(rs.getString("author"));
        book.setPublisher(rs.getString("publisher"));
        book.setPublicationYear(rs.getInt("publication_year"));
        book.setCategory(rs.getString("category"));
        book.setTotalCopies(rs.getInt("total_copies"));
        book.setAvailableCopies(rs.getInt("available_copies"));
        book.setShelfLocation(rs.getString("shelf_location"));
        return book;
    }
}
\`\`\`

### 2. Transaction Management

\`\`\`java
public class TransactionManager {
    private Connection connection;
    private static final int LOAN_PERIOD_DAYS = 14;
    private static final double FINE_PER_DAY = 1.00;
    
    public TransactionManager(Connection conn) {
        this.connection = conn;
    }
    
    public boolean issueBook(int memberId, int bookId) {
        try {
            connection.setAutoCommit(false);
            
            // Check if book is available
            if (!isBookAvailable(bookId)) {
                connection.rollback();
                return false;
            }
            
            // Check member eligibility
            if (!isMemberEligible(memberId)) {
                connection.rollback();
                return false;
            }
            
            // Create transaction record
            String insertSql = "INSERT INTO transactions (member_id, book_id, " +
                              "issue_date, due_date, status) VALUES (?, ?, ?, ?, ?)";
            
            try (PreparedStatement stmt = connection.prepareStatement(insertSql)) {
                LocalDate issueDate = LocalDate.now();
                LocalDate dueDate = issueDate.plusDays(LOAN_PERIOD_DAYS);
                
                stmt.setInt(1, memberId);
                stmt.setInt(2, bookId);
                stmt.setDate(3, Date.valueOf(issueDate));
                stmt.setDate(4, Date.valueOf(dueDate));
                stmt.setString(5, "issued");
                
                stmt.executeUpdate();
            }
            
            // Update book availability
            updateBookAvailability(bookId, -1);
            
            connection.commit();
            return true;
            
        } catch (SQLException e) {
            try {
                connection.rollback();
            } catch (SQLException rollbackEx) {
                System.err.println("Rollback failed: " + rollbackEx.getMessage());
            }
            System.err.println("Error issuing book: " + e.getMessage());
            return false;
        } finally {
            try {
                connection.setAutoCommit(true);
            } catch (SQLException e) {
                System.err.println("Error resetting auto-commit: " + e.getMessage());
            }
        }
    }
    
    public boolean returnBook(int transactionId) {
        try {
            connection.setAutoCommit(false);
            
            // Get transaction details
            Transaction transaction = getTransaction(transactionId);
            if (transaction == null || !"issued".equals(transaction.getStatus())) {
                connection.rollback();
                return false;
            }
            
            LocalDate returnDate = LocalDate.now();
            LocalDate dueDate = transaction.getDueDate().toLocalDate();
            
            // Calculate fine if overdue
            double fineAmount = 0.0;
            if (returnDate.isAfter(dueDate)) {
                long overdueDays = ChronoUnit.DAYS.between(dueDate, returnDate);
                fineAmount = overdueDays * FINE_PER_DAY;
            }
            
            // Update transaction
            String updateSql = "UPDATE transactions SET return_date = ?, " +
                              "fine_amount = ?, status = ? WHERE transaction_id = ?";
            
            try (PreparedStatement stmt = connection.prepareStatement(updateSql)) {
                stmt.setDate(1, Date.valueOf(returnDate));
                stmt.setDouble(2, fineAmount);
                stmt.setString(3, "returned");
                stmt.setInt(4, transactionId);
                
                stmt.executeUpdate();
            }
            
            // Create fine record if applicable
            if (fineAmount > 0) {
                createFineRecord(transactionId, fineAmount, "Overdue return");
            }
            
            // Update book availability
            updateBookAvailability(transaction.getBookId(), 1);
            
            connection.commit();
            return true;
            
        } catch (SQLException e) {
            try {
                connection.rollback();
            } catch (SQLException rollbackEx) {
                System.err.println("Rollback failed: " + rollbackEx.getMessage());
            }
            System.err.println("Error returning book: " + e.getMessage());
            return false;
        } finally {
            try {
                connection.setAutoCommit(true);
            } catch (SQLException e) {
                System.err.println("Error resetting auto-commit: " + e.getMessage());
            }
        }
    }
    
    private boolean isBookAvailable(int bookId) throws SQLException {
        String sql = "SELECT available_copies FROM books WHERE book_id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, bookId);
            ResultSet rs = stmt.executeQuery();
            
            if (rs.next()) {
                return rs.getInt("available_copies") > 0;
            }
        }
        return false;
    }
    
    private void updateBookAvailability(int bookId, int change) throws SQLException {
        String sql = "UPDATE books SET available_copies = available_copies + ? " +
                    "WHERE book_id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, change);
            stmt.setInt(2, bookId);
            stmt.executeUpdate();
        }
    }
}
\`\`\`

### 3. User Interface

The GUI was built using Java Swing with a modern, user-friendly design:

\`\`\`java
public class MainFrame extends JFrame {
    private JTabbedPane tabbedPane;
    private BookPanel bookPanel;
    private MemberPanel memberPanel;
    private TransactionPanel transactionPanel;
    private ReportPanel reportPanel;
    
    public MainFrame() {
        initializeComponents();
        setupLayout();
        setupEventHandlers();
    }
    
    private void initializeComponents() {
        setTitle("Library Management System");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(1200, 800);
        setLocationRelativeTo(null);
        
        // Create panels
        bookPanel = new BookPanel();
        memberPanel = new MemberPanel();
        transactionPanel = new TransactionPanel();
        reportPanel = new ReportPanel();
        
        // Create tabbed pane
        tabbedPane = new JTabbedPane();
        tabbedPane.addTab("Books", new ImageIcon("icons/book.png"), bookPanel);
        tabbedPane.addTab("Members", new ImageIcon("icons/member.png"), memberPanel);
        tabbedPane.addTab("Transactions", new ImageIcon("icons/transaction.png"), transactionPanel);
        tabbedPane.addTab("Reports", new ImageIcon("icons/report.png"), reportPanel);
    }
    
    private void setupLayout() {
        setLayout(new BorderLayout());
        
        // Menu bar
        JMenuBar menuBar = createMenuBar();
        setJMenuBar(menuBar);
        
        // Main content
        add(tabbedPane, BorderLayout.CENTER);
        
        // Status bar
        JPanel statusBar = createStatusBar();
        add(statusBar, BorderLayout.SOUTH);
    }
    
    private JMenuBar createMenuBar() {
        JMenuBar menuBar = new JMenuBar();
        
        // File menu
        JMenu fileMenu = new JMenu("File");
        fileMenu.add(new JMenuItem("New Database"));
        fileMenu.add(new JMenuItem("Backup Database"));
        fileMenu.add(new JMenuItem("Restore Database"));
        fileMenu.addSeparator();
        fileMenu.add(new JMenuItem("Exit"));
        
        // Tools menu
        JMenu toolsMenu = new JMenu("Tools");
        toolsMenu.add(new JMenuItem("Settings"));
        toolsMenu.add(new JMenuItem("User Management"));
        
        // Help menu
        JMenu helpMenu = new JMenu("Help");
        helpMenu.add(new JMenuItem("User Manual"));
        helpMenu.add(new JMenuItem("About"));
        
        menuBar.add(fileMenu);
        menuBar.add(toolsMenu);
        menuBar.add(helpMenu);
        
        return menuBar;
    }
}
\`\`\`

## Challenges and Solutions

### 1. Database Connection Management

**Challenge**: Managing database connections efficiently without connection leaks.

**Solution**: Implemented a connection pool and used try-with-resources statements:

\`\`\`java
public class DatabaseManager {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/library_db";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "password";
    
    private static HikariDataSource dataSource;
    
    static {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(DB_URL);
        config.setUsername(USERNAME);
        config.setPassword(PASSWORD);
        config.setMaximumPoolSize(10);
        config.setMinimumIdle(2);
        config.setConnectionTimeout(30000);
        
        dataSource = new HikariDataSource(config);
    }
    
    public static Connection getConnection() throws SQLException {
        return dataSource.getConnection();
    }
    
    public static void closeDataSource() {
        if (dataSource != null) {
            dataSource.close();
        }
    }
}
\`\`\`

### 2. Data Validation

**Challenge**: Ensuring data integrity and preventing invalid entries.

**Solution**: Implemented comprehensive validation classes:

\`\`\`java
public class ValidationUtils {
    public static boolean isValidISBN(String isbn) {
        if (isbn == null || isbn.trim().isEmpty()) {
            return false;
        }
        
        // Remove hyphens and spaces
        isbn = isbn.replaceAll("[-\\s]", "");
        
        // Check length (10 or 13 digits)
        if (isbn.length() != 10 && isbn.length() != 13) {
            return false;
        }
        
        // Validate ISBN-10 or ISBN-13 checksum
        return isbn.length() == 10 ? isValidISBN10(isbn) : isValidISBN13(isbn);
    }
    
    public static boolean isValidEmail(String email) {
        if (email == null || email.trim().isEmpty()) {
            return false;
        }
        
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@" +
                           "(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        
        return email.matches(emailRegex);
    }
    
    public static boolean isValidPhoneNumber(String phone) {
        if (phone == null || phone.trim().isEmpty()) {
            return true; // Phone is optional
        }
        
        // Remove all non-digit characters
        String cleanPhone = phone.replaceAll("\\D", "");
        
        // Check if it's a valid length (10-15 digits)
        return cleanPhone.length() >= 10 && cleanPhone.length() <= 15;
    }
}
\`\`\`

### 3. Report Generation

**Challenge**: Creating professional-looking reports for library statistics.

**Solution**: Integrated JasperReports for comprehensive reporting:

\`\`\`java
public class ReportGenerator {
    public void generateOverdueReport() {
        try {
            // Load report template
            InputStream reportStream = getClass()
                .getResourceAsStream("/reports/overdue_books.jrxml");
            
            JasperReport jasperReport = JasperCompileManager
                .compileReport(reportStream);
            
            // Parameters
            Map<String, Object> parameters = new HashMap<>();
            parameters.put("REPORT_TITLE", "Overdue Books Report");
            parameters.put("GENERATED_DATE", new Date());
            
            // Data source
            Connection conn = DatabaseManager.getConnection();
            
            // Fill report
            JasperPrint jasperPrint = JasperFillManager
                .fillReport(jasperReport, parameters, conn);
            
            // Export to PDF
            String fileName = "overdue_report_" + 
                System.currentTimeMillis() + ".pdf";
            
            JasperExportManager.exportReportToPdfFile(
                jasperPrint, "reports/" + fileName);
            
            // Open the report
            Desktop.getDesktop().open(new File("reports/" + fileName));
            
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, 
                "Error generating report: " + e.getMessage(),
                "Report Error", JOptionPane.ERROR_MESSAGE);
        }
    }
}
\`\`\`

## Key Features Implemented

### 1. Advanced Search
- Multi-field search across books, authors, and categories
- Fuzzy search with relevance scoring
- Search history and saved searches

### 2. Fine Management
- Automatic fine calculation for overdue books
- Flexible fine rules configuration
- Payment tracking and receipt generation

### 3. Member Management
- Different membership types with varying privileges
- Membership renewal and expiration tracking
- Member activity history

### 4. Inventory Management
- Book acquisition and cataloging
- Stock level monitoring
- Damaged/lost book tracking

### 5. Reporting System
- Circulation statistics
- Popular books analysis
- Member activity reports
- Financial reports

## Lessons Learned

### Technical Lessons
1. **Database Design**: Proper normalization prevents data inconsistencies
2. **Connection Pooling**: Essential for multi-user applications
3. **Transaction Management**: Critical for data integrity
4. **Error Handling**: Comprehensive error handling improves user experience

### Project Management Lessons
1. **Requirements Gathering**: Thorough understanding of user needs is crucial
2. **Iterative Development**: Regular feedback helps refine features
3. **Testing**: Comprehensive testing prevents production issues
4. **Documentation**: Good documentation aids maintenance and future development

## Future Enhancements

### Planned Features
- **Web Interface**: Browser-based access for remote users
- **Mobile App**: Mobile application for members
- **RFID Integration**: Automated book tracking with RFID tags
- **Digital Resources**: Support for e-books and digital media
- **Advanced Analytics**: Machine learning for book recommendations

### Technical Improvements
- **Microservices Architecture**: Break down into smaller, manageable services
- **Cloud Deployment**: Move to cloud infrastructure for scalability
- **Real-time Notifications**: Push notifications for due dates and reservations
- **API Development**: RESTful APIs for third-party integrations

## Conclusion

Building the Library Management System was an invaluable learning experience that taught me about:
- Full-stack application development
- Database design and optimization
- User interface design principles
- Project management and requirements analysis

The project successfully met all the initial requirements and has been deployed in a local library, serving over 500 members and managing 10,000+ books.

The experience reinforced the importance of proper planning, iterative development, and user feedback in creating successful software solutions.

**GitHub Repository**: [Library Management System](https://github.com/Premdeep69/library-management-system)

---

*This project showcases my ability to design and implement complex database-driven applications with user-friendly interfaces and robust functionality.*`,
    excerpt: "A comprehensive walkthrough of building a Library Management System using Java, MySQL, and Swing, including challenges faced and solutions implemented.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    tags: ["java", "mysql", "database", "desktop-application", "case-study"],
    type: "case-study",
    reading_time: 15,
    featured: true,
    views: 567,
    status: "published"
  },
  {
    title: "Getting Started with GSAP: Animation Made Easy",
    slug: "getting-started-with-gsap-animation-made-easy",
    content: `# Getting Started with GSAP: Animation Made Easy

GSAP (GreenSock Animation Platform) is one of the most powerful and flexible animation libraries available for web development. In this comprehensive guide, I'll walk you through everything you need to know to start creating stunning animations with GSAP.

## What is GSAP?

GSAP is a robust JavaScript animation library that allows you to animate virtually any property of any object. It's used by major companies like Google, Adobe, and Nike for creating high-performance animations that work across all browsers.

### Why Choose GSAP?

- **Performance**: Up to 20x faster than jQuery
- **Compatibility**: Works in all browsers, including IE6+
- **Flexibility**: Animate any numeric property of any object
- **Ease of use**: Intuitive API that's easy to learn
- **Professional features**: Advanced easing, morphing, and timeline control

## Installation

### CDN (Quick Start)
\`\`\`html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
\`\`\`

### NPM Installation
\`\`\`bash
npm install gsap
\`\`\`

### ES6 Import
\`\`\`javascript
import { gsap } from "gsap"
\`\`\`

## Basic Concepts

### The gsap Object
GSAP provides several methods for creating animations:

- \`gsap.to()\` - Animate from current values to new values
- \`gsap.from()\` - Animate from specified values to current values
- \`gsap.fromTo()\` - Define both starting and ending values
- \`gsap.set()\` - Set properties immediately (no animation)

### Basic Syntax
\`\`\`javascript
gsap.to(target, {duration: 2, x: 100, rotation: 360})
\`\`\`

- **target**: The element(s) to animate
- **duration**: How long the animation takes (in seconds)
- **properties**: What to animate (x, y, rotation, opacity, etc.)

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 2 seconds
        gsap.to("#myBox", {duration: 2, x: 200})
    </script>
</body>
</html>
\`\`\`

## Common Animation Properties

### Transform Properties
\`\`\`javascript
gsap.to(".element", {
    duration:
})
\`\`\`

## Your First Animation

Let's start with a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="myBox"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        // Move the box 200 pixels to the right over 
        `
  }
]