import "./globals.css"
import type { Metadata } from "next"
import { Playfair_Display, Roboto } from "next/font/google"
import type React from "react"

import { cn } from "@/lib/utils"

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const fontSans = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Reveal",
  description: "A feed for the latest in science and technology.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontSerif.variable)}>
        {children}
      </body>
    </html>
  )
}
