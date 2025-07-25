"use client"

import type React from "react"

import { useStickySidebar } from "@/hooks/use-sticky-sidebar"
import { cn } from "@/lib/utils"

interface StickySidebarProps {
  children: React.ReactNode
  side: "left" | "right"
  className?: string
}

export function StickySidebar({ children, side, className }: StickySidebarProps) {
  const { isSticky, shouldShowSidebars } = useStickySidebar()

  if (!shouldShowSidebars) {
    return null
  }

  return (
    <aside className={cn("w-[287.5px] flex-shrink-0", className)}>
      <div
        className={cn(
          "space-y-3 transition-all duration-300 ease-in-out", // Reduced from space-y-6 to space-y-3
          isSticky ? "sticky top-24" : "sticky top-24",
        )}
        style={{
          maxHeight: isSticky ? "calc(100vh - 6rem)" : "none",
          overflowY: isSticky ? "auto" : "visible",
        }}
      >
        {children}
      </div>
    </aside>
  )
}
