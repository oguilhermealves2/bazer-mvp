'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Search, Menu, X, ShoppingBag, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/lojas', label: 'Lojas' },
    { href: '/parceiro', label: 'Seja Parceiro' },
  ]

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/busca?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-tight text-primary">Bazer</span>
          </Link>

          {/* Search bar - desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="O que voce esta procurando?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-10 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
          </form>

          {/* Nav links - desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.href
                    ? 'text-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link href="/pedidos" className="hidden md:flex">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Meus Pedidos</span>
              </Button>
            </Link>
            <Link href="/entrar" className="hidden md:flex">
              <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <User className="h-4 w-4 mr-1.5" />
                Entrar
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <form onSubmit={handleSearch} className="md:hidden mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="O que voce esta procurando?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-10 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>
        </form>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-3 py-3 border-t border-border flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.href
                    ? 'text-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/pedidos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-accent flex items-center gap-2"
            >
              <ShoppingBag className="h-4 w-4" />
              Meus Pedidos
            </Link>
            <Link
              href="/entrar"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2"
            >
              <Button variant="default" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <User className="h-4 w-4 mr-1.5" />
                Entrar
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
