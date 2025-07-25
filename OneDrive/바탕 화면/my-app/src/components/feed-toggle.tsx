"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe, User } from "lucide-react"

export function FeedToggle() {
  const [active, setActive] = useState("global")

  return (
    <div className="relative p-1 bg-gray-200/70 rounded-full flex items-center shadow-inner">
      {/* Animated slider background */}
      <div
        className={`absolute top-1 bottom-1 w-1/2 bg-brand-green rounded-full shadow-md transition-transform duration-300 ease-in-out ${
          active === "personal" ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Buttons */}
      <Button
        onClick={() => setActive("global")}
        className={`relative z-10 flex-1 rounded-full h-8 transition-all duration-300 ${
          active === "global" ? "text-white" : "text-brand-green bg-transparent hover:bg-transparent"
        }`}
      >
        <Globe className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => setActive("personal")}
        className={`relative z-10 flex-1 rounded-full h-8 transition-all duration-300 ${
          active === "personal" ? "text-white" : "text-brand-green bg-transparent hover:bg-transparent"
        }`}
      >
        <User className="w-4 h-4" />
      </Button>
    </div>
  )
}
