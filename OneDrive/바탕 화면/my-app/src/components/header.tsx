"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bell, MessageSquare, Search, User } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [activeLink, setActiveLink] = useState("Community")
  const navLinks = ["Community", "Trends", "Magazine", "Connections"]

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-brand-gray-light sticky top-0 z-50">
      <div className="flex justify-center">
        <div className="flex gap-8 w-full max-w-[1160px]">
          {/* Left section aligned with left wing */}
          <div className="w-[287.5px] flex items-center">
            <Link href="/" className="text-3xl font-serif font-bold text-brand-text-dark">
              Reveal<span className="text-brand-green">*</span>
            </Link>
          </div>

          {/* Center section aligned with center column */}
          <div className="w-[585px] flex items-center justify-center h-20">
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  onClick={() => setActiveLink(link)}
                  className="text-base text-brand-text-light hover:text-brand-text-dark transition-colors relative py-2"
                >
                  {link}
                  {activeLink === link && (
                    <>
                      <span className="absolute top-1 right-[-10px] w-1.5 h-1.5 bg-brand-red rounded-full" />
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green" />
                    </>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right section aligned with right wing */}
          <div className="w-[287.5px] flex items-center justify-end space-x-4 h-20">
            <div className="relative hidden sm:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-gray-dark" />
              <Input
                type="search"
                placeholder="Search papers, people, topics..."
                className="pl-10 w-64 bg-white border-brand-gray-light rounded-full focus:border-2 focus:border-brand-green"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-brand-text-light hover:text-brand-text-dark"
            >
              <Bell className="h-6 w-6" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-brand-text-light hover:text-brand-text-dark"
            >
              <MessageSquare className="h-6 w-6" />
              <span className="sr-only">Messages</span>
            </Button>
            <button className="rounded-full w-10 h-10 bg-brand-green flex items-center justify-center text-white">
              <User className="h-6 w-6" />
              <span className="sr-only">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
