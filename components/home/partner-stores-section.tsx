import Link from 'next/link'
import Image from 'next/image'
import { stores } from '@/lib/data'
import { StarRating } from '@/components/star-rating'

export function PartnerStoresSection() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">Lojas Parceiras</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stores.map((store) => (
            <Link key={store.id} href={`/loja/${store.slug}`} className="group">
              <div className="overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:border-primary/20">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={store.cover}
                    alt={store.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-background shadow-sm flex-shrink-0">
                      <Image src={store.logo} alt="" fill className="object-cover" sizes="40px" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-card-foreground truncate">{store.name}</h3>
                      <p className="text-xs text-muted-foreground">{store.category}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <StarRating rating={store.rating} size={14} />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{store.productCount} produtos</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
