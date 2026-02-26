import { ShoppingCart, QrCode, Truck } from 'lucide-react'

const steps = [
  {
    icon: ShoppingCart,
    title: 'Escolha o produto',
    description: 'Navegue pelas lojas parceiras e encontre o que precisa.',
  },
  {
    icon: QrCode,
    title: 'Pague via PIX',
    description: 'Pagamento rapido e seguro com PIX. Confirmacao instantanea.',
  },
  {
    icon: Truck,
    title: 'Acompanhe sua entrega',
    description: 'Rastreie seu pedido em tempo real ate chegar na sua porta.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-foreground text-center mb-4">Como funciona</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          Comprar na Bazer e simples, rapido e seguro.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-5">
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
