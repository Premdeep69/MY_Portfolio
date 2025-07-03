"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense, useEffect } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import I18nProvider from "./components/I18nProvider"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import BlogCard from "./components/blog/BlogCard"
import BlogDetail from "./components/blog/BlogDetail"
import BlogFilters from "./components/blog/BlogFilters"
import BlogList from "./components/blog/BlogList"
import BlogPagination from "./components/blog/BlogPagination"
import BlogSkeleton from "./components/blog/BlogSkeleton"
import FeaturedBlogs from "./components/blog/FeaturedBlogs"

const queryClient = new QueryClient()

export default function App() {
  useEffect(() => {
    // Ensure i18n is ready
    console.log("App mounted, i18n should be ready")
  }, [])

  return (
    <I18nProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Router>
            <div className="min-h-screen bg-gray-50">
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<BlogList />} />
                  <Route path="/blog/:slug" element={<BlogDetail />} />
                  <Route path="/blog/card" element={<BlogCard blog={{ id: '', title: 'Demo Card', slug: 'demo-card', content: '', excerpt: '', thumbnail: '', video_url: '', created_at: '', updated_at: '', published_at: '', views: 0, reading_time: 1, tags: [], type: '', status: 'published', featured: false }} />} />
                  <Route path="/blog/filters" element={<BlogFilters filters={{}} sort={{ field: 'created_at', direction: 'desc' }} onFiltersChange={() => {}} onSortChange={() => {}} />} />
                  <Route path="/blog/pagination" element={<BlogPagination currentPage={1} totalPages={5} onPageChange={() => {}} />} />
                  <Route path="/blog/skeleton" element={<BlogSkeleton />} />
                  <Route path="/blog/featured" element={<FeaturedBlogs />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </Suspense>
      </QueryClientProvider>
    </I18nProvider>
  )
}
