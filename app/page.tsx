"use client"

import { Suspense, useEffect } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import I18nProvider from "./components/I18nProvider"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

export default function App() {
  useEffect(() => {
    // Ensure i18n is ready
    console.log("App mounted, i18n should be ready")
  }, [])

  return (
    <I18nProvider>
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
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </Suspense>
    </I18nProvider>
  )
}
