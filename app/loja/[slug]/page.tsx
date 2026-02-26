import { notFound } from 'next/navigation'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StarRating } from '@/components/star-rating'
import { ProductCard } from '@/components/product-card'
import { stores, products } from '@/lib/data'

export function generateStaticParams() {
  return stores.map((store) => ({ slug: store.slug }))
}

export default async function StorePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const store = stores.find((s) => s.slug === slug)
  if (!store) notFound()

  const storeProducts = products.filter((p) => p.storeId === store.id)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Cover */}
        <div className="relative h-48 md:h-64 overflow-hidden bg-muted">
          <Image
            src={store.cover}
            alt={store.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Store info */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative -mt-8 flex items-end gap-4 pb-6 border-b border-border">
            <div className="relative h-20 w-20 overflow-hidden rounded-xl border-4 border-background shadow-lg flex-shrink-0">
              <Image src={store.logo} alt="" fill className="object-cover" sizes="80px" />
            </div>
            <div className="flex-1 min-w-0 pb-1">
              <h1 className="text-2xl font-bold text-foreground">{store.name}</h1>
              <div className="flex flex-wrap items-center gap-3 mt-1">
                <StarRating rating={store.rating} size={16} />
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {store.city}
                </span>
                <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{store.category}</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">{store.description}</p>

          {/* Products */}
          <div className="mt-8 mb-12">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Produtos ({storeProducts.length})
            </h2>
            {storeProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {storeProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-12">
                Esta loja ainda nao tem produtos cadastrados.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
