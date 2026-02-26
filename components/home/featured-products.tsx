import { products } from '@/lib/data'
import { ProductCard } from '@/components/product-card'

export function FeaturedProducts() {
  const featured = products.slice(0, 8)

  return (
    <section className="py-16 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Produtos em Destaque</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
