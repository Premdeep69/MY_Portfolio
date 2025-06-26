"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { pageTransitions } from "../utils/animation"

interface AnimatedPageProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedPage({ children, className = "" }: AnimatedPageProps) {
  const pageRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    if (pageRef.current) {
      // Different animations for different routes
      switch (location.pathname) {
        case "/":
          pageTransitions.fadeIn(pageRef.current)
          break
        case "/about":
          pageTransitions.slideInFromLeft(pageRef.current)
          break
        case "/projects":
          pageTransitions.slideInFromRight(pageRef.current)
          break
        case "/contact":
          pageTransitions.fadeIn(pageRef.current)
          break
        default:
          pageTransitions.fadeIn(pageRef.current)
      }
    }
  }, [location.pathname])

  return (
    <div ref={pageRef} className={className}>
      {children}
    </div>
  )
}
