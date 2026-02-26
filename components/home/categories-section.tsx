import Link from 'next/link'
import {
  Shirt,
  Watch,
  Footprints,
  Smartphone,
  Home,
  Sparkles,
  Dumbbell,
  BookOpen,
  Heart,
} from 'lucide-react'
import { categories } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  shirt: Shirt,
  watch: Watch,
  footprints: Footprints,
  smartphone: Smartphone,
  home: Home,
  sparkles: Sparkles,
  dumbbell: Dumbbell,
  'book-open': BookOpen,
  heart: Heart,
}

export function CategoriesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">Categorias</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Shirt
            return (
              <Link
                key={cat.slug}
                href={`/busca?categoria=${cat.slug}`}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-medium text-card-foreground text-center">{cat.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
