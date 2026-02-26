'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft, QrCode, Copy, Check, ShieldCheck } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { products, formatPrice } from '@/lib/data'

type CheckoutStep = 'form' | 'payment' | 'confirmed'

export default function CheckoutPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [step, setStep] = useState<CheckoutStep>('form')
  const [copied, setCopied] = useState(false)
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null)
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    cep: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  })

  useEffect(() => {
    params.then(setResolvedParams)
  }, [params])

  if (!resolvedParams) {
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
  if (!product) {
    router.push('/')
    return null
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStep('payment')
  }

  function handleCopyPix() {
    navigator.clipboard.writeText('bazer@pix.com.br')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function handleConfirmPayment() {
    setStep('confirmed')
  }

  function updateForm(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-8">
          {step !== 'confirmed' && (
            <button
              onClick={() => step === 'payment' ? setStep('form') : router.back()}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </button>
          )}

          {/* Steps indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {['Dados', 'Pagamento', 'Confirmacao'].map((label, i) => {
              const stepIndex = step === 'form' ? 0 : step === 'payment' ? 1 : 2
              return (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                      i <= stepIndex
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span className={`text-sm font-medium hidden sm:inline ${i <= stepIndex ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {label}
                  </span>
                  {i < 2 && <div className={`w-8 sm:w-16 h-0.5 ${i < stepIndex ? 'bg-primary' : 'bg-border'}`} />}
                </div>
              )
            })}
          </div>

          {/* Product summary */}
          <div className="rounded-xl border border-border bg-card p-4 mb-6 flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-muted flex-shrink-0">
              <Image src={product.image} alt={product.name} fill className="object-cover" sizes="64px" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-card-foreground text-sm truncate">{product.name}</h3>
              <p className="text-xs text-muted-foreground">{product.storeName}</p>
            </div>
            <p className="text-lg font-bold text-primary flex-shrink-0">{formatPrice(product.price)}</p>
          </div>

          {/* Form step */}
          {step === 'form' && (
            <form onSubmit={handleFormSubmit} className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-card-foreground mb-5">Dados para entrega</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-1.5">Nome completo</label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => updateForm('nome', e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">CPF</label>
                  <input
                    type="text"
                    required
                    value={form.cpf}
                    onChange={(e) => updateForm('cpf', e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="000.000.000-00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Telefone</label>
                  <input
                    type="tel"
                    required
                    value={form.telefone}
                    onChange={(e) => updateForm('telefone', e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">CEP</label>
                  <input
                    type="text"
                    required
                    value={form.cep}
                    onChange={(e) => updateForm('cep', e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="00000-000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Estado</label>
                  <input
                    type="text"
                    required
                    value={form.estado}
                    onChange={(e) => updateForm('estado', e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="SP"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-1.5">Endereco</label>
                  <input
                    type="text"
                    required
                    value={form.endereco}
                    onChange={(e) => updateForm('endereco', e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="Rua, Avenida..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Numero</label>
                  <input
                    type="text"
                    required
                    value={form.numero}
                    onChange={(e) => updateForm('numero', e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Bairro</label>
                  <input
                    type="text"
                    required
                    value={form.bairro}
                    onChange={(e) => updateForm('bairro', e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="Bairro"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Cidade</label>
                  <input
                    type="text"
                    required
                    value={form.cidade}
                    onChange={(e) => updateForm('cidade', e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="Cidade"
                  />
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold py-6"
              >
                Continuar para pagamento
              </Button>
            </form>
          )}

          {/* Payment step */}
          {step === 'payment' && (
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <h2 className="text-lg font-semibold text-card-foreground mb-2">Pagamento via PIX</h2>
              <p className="text-sm text-muted-foreground mb-6">Escaneie o QR Code ou copie a chave PIX</p>

              {/* QR Code placeholder */}
              <div className="mx-auto mb-6 flex h-52 w-52 items-center justify-center rounded-2xl bg-foreground p-4">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-background">
                  <QrCode className="h-24 w-24 text-foreground" />
                </div>
              </div>

              {/* PIX key */}
              <div className="mx-auto max-w-sm">
                <p className="text-xs text-muted-foreground mb-2">Chave PIX:</p>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-3">
                  <span className="flex-1 text-sm font-mono text-foreground truncate">bazer@pix.com.br</span>
                  <button
                    onClick={handleCopyPix}
                    className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
              </div>

              <p className="text-2xl font-bold text-primary mt-6">{formatPrice(product.price)}</p>

              <Button
                onClick={handleConfirmPayment}
                size="lg"
                className="w-full max-w-sm mx-auto mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold py-6"
              >
                Ja paguei
              </Button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4" />
                Pagamento seguro intermediado pela Bazer
              </div>
            </div>
          )}

          {/* Confirmation step */}
          {step === 'confirmed' && (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground mb-2">Pedido confirmado com sucesso!</h2>
              <p className="text-muted-foreground mb-1">Seu pedido foi recebido e esta sendo processado.</p>
              <p className="text-sm text-muted-foreground mb-8">
                {'Numero do pedido: '}
                <span className="font-mono font-semibold text-foreground">BZR-2024-{String(Math.floor(Math.random() * 1000)).padStart(3, '0')}</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  onClick={() => router.push('/pedidos')}
                  variant="default"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
                >
                  Acompanhar Pedido
                </Button>
                <Button
                  onClick={() => router.push('/')}
                  variant="outline"
                  className="rounded-xl"
                >
                  Voltar para inicio
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
