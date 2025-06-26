"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAP = (callback: () => void | (() => void), dependencies: any[] = []) => {
  const cleanupRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    // Cleanup previous animations
    if (cleanupRef.current) {
      cleanupRef.current()
    }

    // Run the animation callback
    const cleanup = callback()
    if (typeof cleanup === "function") {
      cleanupRef.current = cleanup
    }

    // Cleanup on unmount
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
      }
    }
  }, dependencies)

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
      }
    }
  }, [])
}

export const useScrollTrigger = (
  element: HTMLElement | null,
  animation: gsap.core.Tween | gsap.core.Timeline,
  options: ScrollTrigger.Vars = {},
) => {
  useEffect(() => {
    if (!element) return

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse",
      ...options,
      animation,
    })

    return () => trigger.kill()
  }, [element, animation, options])
}
