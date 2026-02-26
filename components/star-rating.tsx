import { Star, StarHalf } from 'lucide-react'

export function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.3
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

  return (
    <div className="flex items-center gap-0.5" aria-label={`Avaliacao: ${rating} de 5 estrelas`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className="fill-amber-400 text-amber-400" style={{ width: size, height: size }} />
      ))}
      {hasHalf && <StarHalf className="fill-amber-400 text-amber-400" style={{ width: size, height: size }} />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className="text-border" style={{ width: size, height: size }} />
      ))}
      <span className="ml-1 text-sm font-medium text-muted-foreground">{rating.toFixed(1)}</span>
    </div>
  )
}
