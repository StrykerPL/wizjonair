"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Realizacje", href: "#work" },
  { label: "Usługi", href: "#services" },
  { label: "O Nas", href: "#about" },
  { label: "Kontakt", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-light tracking-widest text-foreground transition-colors hover:text-primary"
        >
          WIZJONAIR
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-light tracking-wide text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden rounded-none border border-primary bg-transparent px-6 py-2 text-sm font-light tracking-wide text-primary transition-all hover:bg-primary hover:text-primary-foreground md:block"
        >
          Kontakt
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-16 bg-background/98 backdrop-blur-md transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-8 pt-20">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-light tracking-wide text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-8">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="border border-primary bg-transparent px-8 py-3 text-sm font-light tracking-wide text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Skontaktuj Sie
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
