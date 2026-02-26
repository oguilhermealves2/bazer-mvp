import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StarRating } from '@/components/star-rating'
import { stores } from '@/lib/data'
import { MapPin } from 'lucide-react'

export default function StoresPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Lojas Parceiras</h1>
          <p className="text-muted-foreground mb-8">Conheca nossas lojas parceiras e descubra produtos incriveis.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stores.map((store) => (
              <Link key={store.id} href={`/loja/${store.slug}`} className="group">
                <div className="overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:border-primary/20">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={store.cover}
                      alt={store.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-background shadow-sm flex-shrink-0 -mt-10">
                        <Image src={store.logo} alt="" fill className="object-cover" sizes="56px" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-card-foreground">{store.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          {store.city}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <StarRating rating={store.rating} size={14} />
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">{store.description}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{store.category}</span>
                      <span className="text-xs text-muted-foreground">{store.productCount} produtos</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
