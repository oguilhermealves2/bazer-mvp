import Image from 'next/image'
import { Package, Truck, ExternalLink } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { orders, formatPrice, getStatusLabel, getStatusStep } from '@/lib/data'

const statusSteps = [
  'Pedido recebido',
  'Pagamento confirmado',
  'Produto em separacao',
  'Enviado',
  'Entregue',
]

export default function OrdersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Meus Pedidos</h1>
          <p className="text-muted-foreground mb-8">Acompanhe o status dos seus pedidos.</p>

          <div className="flex flex-col gap-6">
            {orders.map((order) => {
              const currentStep = getStatusStep(order.status)
              return (
                <div key={order.id} className="rounded-xl border border-border bg-card overflow-hidden">
                  {/* Order header */}
                  <div className="flex items-center justify-between px-5 py-3 bg-secondary/50 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-mono font-medium text-foreground">{order.id}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{new Date(order.date).toLocaleDateString('pt-BR')}</span>
                  </div>

                  <div className="p-5">
                    {/* Product info */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-muted flex-shrink-0">
                        <Image src={order.productImage} alt={order.productName} fill className="object-cover" sizes="64px" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-card-foreground text-sm truncate">{order.productName}</h3>
                        <p className="text-xs text-muted-foreground">{order.storeName}</p>
                      </div>
                      <p className="text-lg font-bold text-primary flex-shrink-0">{formatPrice(order.price)}</p>
                    </div>

                    {/* Status badge */}
                    <div className="mb-5">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                        order.status === 'delivered'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'shipped'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-amber-100 text-amber-700'
                      }`}>
                        {order.status === 'shipped' && <Truck className="h-3 w-3" />}
                        {getStatusLabel(order.status)}
                      </span>
                    </div>

                    {/* Progress stepper */}
                    <div className="flex items-center gap-1">
                      {statusSteps.map((stepLabel, i) => {
                        const stepNum = i + 1
                        const isComplete = stepNum <= currentStep
                        const isCurrent = stepNum === currentStep
                        return (
                          <div key={stepLabel} className="flex-1 flex flex-col items-center gap-1.5">
                            <div
                              className={`h-1.5 w-full rounded-full transition-colors ${
                                isComplete ? 'bg-primary' : 'bg-border'
                              }`}
                            />
                            <span className={`text-[10px] text-center leading-tight hidden sm:block ${
                              isCurrent ? 'text-primary font-medium' : isComplete ? 'text-muted-foreground' : 'text-muted-foreground/50'
                            }`}>
                              {stepLabel}
                            </span>
                          </div>
                        )
                      })}
                    </div>

                    {/* Tracking code */}
                    {order.trackingCode && (
                      <div className="mt-4 flex items-center gap-2 rounded-lg bg-secondary/50 px-4 py-3">
                        <Truck className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Rastreio:</span>
                        <span className="text-sm font-mono font-medium text-foreground">{order.trackingCode}</span>
                        <a
                          href={`https://www.linkcorreios.com.br/?id=${order.trackingCode}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">Rastrear no Correios</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
