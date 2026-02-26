'use client'

import { useState } from 'react'
import { notFound, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Store } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StarRating } from '@/components/star-rating'
import { Button } from '@/components/ui/button'
import { products, formatPrice } from '@/lib/data'

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const router = useRouter()
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null)

  // Handle async params
  if (!resolvedParams) {
    params.then(setResolvedParams)
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </main>
      </div>
    )
  }

  const product = products.find((p) => p.id === resolvedParams.id)
  if (!product) notFound()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-8">
          {/* Breadcrumb */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image gallery */}
            <div>
              <div className="relative aspect-square overflow-hidden rounded-xl bg-card border border-border">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative h-20 w-20 overflow-hidden rounded-lg border-2 transition-colors ${
                        selectedImage === i ? 'border-primary' : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product info */}
            <div>
              <Link
                href={`/loja/${product.storeName.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-3"
              >
                <Store className="h-4 w-4" />
                {product.storeName}
              </Link>

              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{product.name}</h1>

              <StarRating rating={product.storeRating} size={18} />

              <p className="text-3xl md:text-4xl font-bold text-primary mt-6 mb-2">
                {formatPrice(product.price)}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                {'ou 3x de '}
                {formatPrice(product.price / 3)}
                {' sem juros'}
              </p>

              <Button
                onClick={() => router.push(`/checkout/${product.id}`)}
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-6 rounded-xl font-semibold"
              >
                Comprar Agora
              </Button>

              <div className="mt-8 pt-6 border-t border-border">
                <h2 className="text-lg font-semibold text-foreground mb-3">Descricao</h2>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div className="mt-6 rounded-xl bg-card border border-border p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Store className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Vendido por {product.storeName}</p>
                    <p className="text-xs text-muted-foreground">Intermediado pela Bazer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
