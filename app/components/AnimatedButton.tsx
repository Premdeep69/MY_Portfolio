"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { createButtonHoverAnimation } from "../utils/animation"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function AnimatedButton({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const animationRef = useRef<{ play: () => void; reverse: () => void } | null>(null)

  useEffect(() => {
    if (buttonRef.current && !disabled) {
      animationRef.current = createButtonHoverAnimation(buttonRef.current)
    }
  }, [disabled])

  const handleMouseEnter = () => {
    if (animationRef.current && !disabled) {
      animationRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (animationRef.current && !disabled) {
      animationRef.current.reverse()
    }
  }

  return (
    <button
      ref={buttonRef}
      type={type}
      className={`transition-colors ${className}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
