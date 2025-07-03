import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export const blogAnimations = {
  // Animate blog cards in a staggered fashion
  animateBlogCards: (cards: HTMLElement[]) => {
    gsap.set(cards, { opacity: 0, y: 50, scale: 0.9 })

    return gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cards[0]?.parentElement,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })
  },

  // Animate blog detail page elements
  animateBlogDetail: (elements: {
    header?: HTMLElement | null
    content?: HTMLElement | null
    sidebar?: HTMLElement | null
    tags?: HTMLElement | null
  }) => {
    const tl = gsap.timeline()

    if (elements.header) {
      gsap.set(elements.header, { opacity: 0, y: -30 })
      tl.to(elements.header, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
    }

    if (elements.content) {
      gsap.set(elements.content, { opacity: 0, y: 20 })
      tl.to(elements.content, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")
    }

    if (elements.tags) {
      gsap.set(elements.tags, { opacity: 0, scale: 0.8 })
      tl.to(elements.tags, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.4")
    }

    if (elements.sidebar) {
      gsap.set(elements.sidebar, { opacity: 0, x: 30 })
      tl.to(elements.sidebar, { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }, "-=0.5")
    }

    return tl
  },

  // Animate filter panel
  animateFilters: (filterPanel: HTMLElement, isOpen: boolean) => {
    if (isOpen) {
      gsap.set(filterPanel, { opacity: 0, height: 0, overflow: "hidden" })
      return gsap.to(filterPanel, {
        opacity: 1,
        height: "auto",
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(filterPanel, { overflow: "visible" })
        },
      })
    } else {
      return gsap.to(filterPanel, {
        opacity: 0,
        height: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(filterPanel, { overflow: "hidden" })
        },
      })
    }
  },

  // Animate search results
  animateSearchResults: (results: HTMLElement[]) => {
    gsap.set(results, { opacity: 0, x: -20 })

    return gsap.to(results, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.out",
    })
  },

  // Animate pagination
  animatePagination: (pagination: HTMLElement) => {
    gsap.set(pagination, { opacity: 0, y: 20 })

    return gsap.to(pagination, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: pagination,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    })
  },

  // Animate featured blogs carousel
  animateFeaturedBlogs: (slides: HTMLElement[]) => {
    gsap.set(slides, { opacity: 0, scale: 0.8, rotationY: 45 })

    return gsap.to(slides, {
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    })
  },

  // Animate blog hero section
  animateBlogHero: (elements: {
    title?: HTMLElement | null
    subtitle?: HTMLElement | null
    stats?: HTMLElement | null
  }) => {
    const tl = gsap.timeline()

    if (elements.title) {
      gsap.set(elements.title, { opacity: 0, y: 50 })
      tl.to(elements.title, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
    }

    if (elements.subtitle) {
      gsap.set(elements.subtitle, { opacity: 0, y: 30 })
      tl.to(elements.subtitle, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
    }

    if (elements.stats) {
      gsap.set(elements.stats, { opacity: 0, scale: 0.8 })
      tl.to(elements.stats, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.3")
    }

    return tl
  },
}
