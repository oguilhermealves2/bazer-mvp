'use client'

import { Suspense, useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { products, categories, stores } from '@/lib/data'

type SortOption = 'relevance' | 'price_asc' | 'price_desc' | 'rating'

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const categoryParam = searchParams.get('categoria') || ''

  const [sortBy, setSortBy] = useState<SortOption>('relevance')
  const [selectedCategory, setSelectedCategory] = useState(categoryParam)
  const [selectedStore, setSelectedStore] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (query) {
      const q = query.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.storeName.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }

    if (selectedCategory) {
      const cat = categories.find((c) => c.slug === selectedCategory)
      if (cat) {
        result = result.filter((p) => p.category === cat.name)
      }
    }

    if (selectedStore) {
      result = result.filter((p) => p.storeId === selectedStore)
    }

    switch (sortBy) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price_desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.storeRating - a.storeRating)
        break
    }

    return result
  }, [query, selectedCategory, selectedStore, sortBy])

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Page header */}
      <div className="mb-6">
        {query ? (
          <h1 className="text-2xl font-bold text-foreground">
            Resultados para <span className="text-primary">{`"${query}"`}</span>
          </h1>
        ) : selectedCategory ? (
          <h1 className="text-2xl font-bold text-foreground">
            {categories.find((c) => c.slug === selectedCategory)?.name || 'Categoria'}
          </h1>
        ) : (
          <h1 className="text-2xl font-bold text-foreground">Todos os Produtos</h1>
        )}
        <p className="text-sm text-muted-foreground mt-1">
          {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Filters bar */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors md:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filtros
        </button>

        {/* Sort dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="appearance-none rounded-lg border border-border bg-card px-4 py-2.5 pr-9 text-sm font-medium text-foreground hover:bg-accent transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="relevance">Relevancia</option>
            <option value="price_asc">Menor preco</option>
            <option value="price_desc">Maior preco</option>
            <option value="rating">Melhor avaliacao</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        </div>

        {/* Category filters - desktop */}
        <div className="hidden md:flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
              !selectedCategory
                ? 'bg-primary text-primary-foreground'
                : 'border border-border bg-card text-foreground hover:bg-accent'
            }`}
          >
            Todas
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(selectedCategory === cat.slug ? '' : cat.slug)}
              className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                selectedCategory === cat.slug
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-card text-foreground hover:bg-accent'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar filters */}
        <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="md:hidden mb-5">
              <h3 className="text-sm font-semibold text-foreground mb-3">Categoria</h3>
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    !selectedCategory ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-accent'
                  }`}
                >
                  Todas
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(selectedCategory === cat.slug ? '' : cat.slug)}
                    className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedCategory === cat.slug ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-accent'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <h3 className="text-sm font-semibold text-foreground mb-3">Loja</h3>
            <div className="flex flex-col gap-1.5">
              <button
                onClick={() => setSelectedStore('')}
                className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  !selectedStore ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-accent'
                }`}
              >
                Todas as lojas
              </button>
              {stores.map((store) => (
                <button
                  key={store.id}
                  onClick={() => setSelectedStore(selectedStore === store.id ? '' : store.id)}
                  className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    selectedStore === store.id ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-accent'
                  }`}
                >
                  {store.name}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
                <SlidersHorizontal className="h-7 w-7 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Nenhum produto encontrado</h3>
              <p className="text-sm text-muted-foreground">Tente ajustar os filtros ou buscar por outro termo.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-secondary/30">
        <Suspense fallback={
          <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="h-8 w-48 bg-muted animate-pulse rounded-lg mb-6" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="aspect-square bg-muted animate-pulse rounded-xl" />
              ))}
            </div>
          </div>
        }>
          <SearchContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
