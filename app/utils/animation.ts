import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Animation configurations
export const animationConfig = {
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.1,
}

// Hero animations
export const animateHeroEntry = (elements: {
  greeting: HTMLElement | null
  name: HTMLElement | null
  tagline: HTMLElement | null
  description: HTMLElement | null
  buttons: HTMLElement | null
  contactInfo: HTMLElement | null
}) => {
  const tl = gsap.timeline()

  // Set initial states
  gsap.set(
    [elements.greeting, elements.name, elements.tagline, elements.description, elements.buttons, elements.contactInfo],
    {
      opacity: 0,
      y: 50,
    },
  )

  // Animate in sequence
  tl.to(elements.greeting, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
    .to(elements.name, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")
    .to(elements.tagline, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
    .to(elements.description, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
    .to(elements.buttons, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2")
    .to(elements.contactInfo, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")

  return tl
}

// Skills stagger animation
export const animateSkillsStagger = (skillElements: HTMLElement[]) => {
  gsap.set(skillElements, { opacity: 0, y: 30, scale: 0.8 })

  return gsap.to(skillElements, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.5,
    stagger: 0.1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: skillElements[0]?.parentElement,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  })
}

// Project cards scroll animation
export const animateProjectCards = (cardElements: HTMLElement[]) => {
  cardElements.forEach((card, index) => {
    gsap.set(card, { opacity: 0, y: 50, scale: 0.9 })

    gsap.to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      delay: index * 0.1,
    })
  })
}

// Section fade-in animation
export const animateSectionFadeIn = (element: HTMLElement, direction: "up" | "down" | "left" | "right" = "up") => {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  }

  gsap.set(element, { opacity: 0, ...directions[direction] })

  return gsap.to(element, {
    opacity: 1,
    y: 0,
    x: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  })
}

// Button hover animations
export const createButtonHoverAnimation = (button: HTMLElement) => {
  const tl = gsap.timeline({ paused: true })

  tl.to(button, { scale: 1.05, duration: 0.2, ease: "power2.out" }).to(button, {
    scale: 1.02,
    duration: 0.1,
    ease: "power2.out",
  })

  return {
    play: () => tl.play(),
    reverse: () => tl.reverse(),
  }
}

// Form success animation
export const animateFormSuccess = (element: HTMLElement) => {
  const tl = gsap.timeline()

  gsap.set(element, { scale: 0, opacity: 0 })

  tl.to(element, { scale: 1.1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }).to(element, {
    scale: 1,
    duration: 0.2,
    ease: "power2.out",
  })

  return tl
}

// Page transition animations
export const pageTransitions = {
  fadeIn: (element: HTMLElement) => {
    gsap.set(element, { opacity: 0 })
    return gsap.to(element, { opacity: 1, duration: 0.5, ease: "power2.out" })
  },

  slideInFromRight: (element: HTMLElement) => {
    gsap.set(element, { x: 100, opacity: 0 })
    return gsap.to(element, { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" })
  },

  slideInFromLeft: (element: HTMLElement) => {
    gsap.set(element, { x: -100, opacity: 0 })
    return gsap.to(element, { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" })
  },
}

// Parallax effect
export const createParallaxEffect = (element: HTMLElement, speed = 0.5) => {
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  })
}

// Cleanup function
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  gsap.killTweensOf("*")
}
