"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LogOut, Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Threats", href: "/threats" },
  { name: "Incidents", href: "/incidents" },
  { name: "Reports", href: "/reports" },
  { name: "Trainings", href: "/trainings" },
  { name: "Settings", href: "/settings" },
]

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b border-border/40">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Healthcare Cyber Support</span>
            
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Log out</span>
            </Button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  {navigation.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        pathname === link.href ? "text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}

