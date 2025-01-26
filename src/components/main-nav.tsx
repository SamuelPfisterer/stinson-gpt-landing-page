'use client'

import * as React from "react"
import Link from "next/link"
import { useEffect } from "react"
import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  useEffect(() => {
    console.log('MainNav mounted on client')
  }, [])

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
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
    </nav>
  )
} 