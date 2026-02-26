import Link from 'next/link'
import Image from 'next/image'
import { formatPrice, type Product } from '@/lib/data'
import { StarRating } from '@/components/star-rating'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produto/${product.id}`} className="group">
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:border-primary/20">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-1">{product.storeName}</p>
          <h3 className="text-sm font-semibold text-card-foreground leading-snug line-clamp-2 mb-2">{product.name}</h3>
          <StarRating rating={product.storeRating} size={12} />
          <p className="text-lg font-bold text-primary mt-2">{formatPrice(product.price)}</p>
        </div>
      </div>
    </Link>
  )
}
