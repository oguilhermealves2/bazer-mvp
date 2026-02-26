'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export function HeroSection() {
  const [query, setQuery] = useState('')

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim()) {
      window.location.href = `/busca?q=${encodeURIComponent(query.trim())}`
    }
  }

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground text-balance">
            Tudo que voce precisa, em um so lugar
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
            Descubra produtos incriveis de lojas parceiras. Compre com seguranca via PIX e receba em casa.
          </p>
          <form onSubmit={handleSearch} className="mt-8 flex gap-2 max-w-lg mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="O que voce esta procurando?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl bg-background px-12 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background/50 shadow-lg"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-background text-primary font-semibold px-6 py-3.5 text-sm hover:bg-background/90 transition-colors shadow-lg"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
