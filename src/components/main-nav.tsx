'use client'

import * as React from "react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log('MainNav mounted on client')
  }, [])

  return (
    <div className="relative">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-muted-foreground hover:text-primary"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Desktop navigation */}
      <nav
        className={cn(
          "hidden md:flex items-center space-x-6",
          className
        )}
        {...props}
      >
        <DesktopLinks />
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[64px] bg-background border-b md:hidden">
          <nav className="container flex flex-col p-4 space-y-4">
            <MobileLinks setIsOpen={setIsOpen} />
          </nav>
        </div>
      )}
    </div>
  )
}

function DesktopLinks() {
  return (
    <>
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/privacy-policy"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Privacy Policy
      </Link>
      <Link
        href="/terms-of-service"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Terms of Service
      </Link>
      <Link
        href="/support"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Support
      </Link>
      <Link
        href="/impressum"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Impressum
      </Link>
    </>
  )
}

function MobileLinks({ setIsOpen }: { setIsOpen: (value: boolean) => void }) {
  return (
    <>
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link
        href="/privacy-policy"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        onClick={() => setIsOpen(false)}
      >
        Privacy Policy
      </Link>
      <Link
        href="/terms-of-service"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        onClick={() => setIsOpen(false)}
      >
        Terms of Service
      </Link>
      <Link
        href="/support"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        onClick={() => setIsOpen(false)}
      >
        Support
      </Link>
      <Link
        href="/impressum"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        onClick={() => setIsOpen(false)}
      >
        Impressum
      </Link>
    </>
  )
} 