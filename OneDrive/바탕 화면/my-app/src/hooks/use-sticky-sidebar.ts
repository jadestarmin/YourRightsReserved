"use client"

import { useEffect, useState } from "react"

export function useStickySidebar() {
  const [isSticky, setIsSticky] = useState(false)
  const [shouldShowSidebars, setShouldShowSidebars] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const headerHeight = 80 // Header height
      setIsSticky(scrollTop > headerHeight)
    }

    const handleResize = () => {
      // Hide sidebars on smaller screens
      setShouldShowSidebars(window.innerWidth >= 1024) // lg breakpoint
    }

    // Initial check
    handleResize()
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { isSticky, shouldShowSidebars }
}
