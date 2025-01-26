'use client'

import Link from "next/link"
import { useEffect } from "react"

export function Footer() {
  useEffect(() => {
    console.log('Footer mounted on client')
  }, [])

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Drainbee GmbH. All rights reserved.
            </p>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link href="/support" className="text-sm text-muted-foreground hover:text-primary">
              Support
            </Link>
            <Link href="/impressum" className="text-sm text-muted-foreground hover:text-primary">
              Impressum
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
} 