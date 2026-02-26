'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Users, BarChart3, ShieldCheck, Check } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Exposicao para novos clientes',
    description: 'Sua loja ganha visibilidade para milhares de compradores que acessam a Bazer diariamente.',
  },
  {
    icon: BarChart3,
    title: 'Processo organizado',
    description: 'Gerencie seus produtos, pedidos e entregas de forma simples e intuitiva.',
  },
  {
    icon: ShieldCheck,
    title: 'Intermediacao da Bazer',
    description: 'A Bazer cuida do pagamento e da experiencia do cliente, voce foca em vender.',
  },
]

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    responsavel: '',
    loja: '',
    whatsapp: '',
    cidade: '',
    categoria: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function updateForm(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
              Seja um parceiro Bazer
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
              Cadastre sua loja na Bazer e venda atraves da nossa plataforma.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 bg-secondary/30">
          <div className="mx-auto max-w-lg px-4">
            {submitted ? (
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-card-foreground mb-2">Cadastro recebido!</h2>
                <p className="text-muted-foreground">
                  Obrigado pelo interesse em ser parceiro. Nossa equipe entrara em contato em breve.
                </p>
              </div>
            ) : (
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-bold text-card-foreground mb-1">Cadastre sua loja</h2>
                <p className="text-sm text-muted-foreground mb-6">Preencha os dados abaixo e entraremos em contato.</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Nome do responsavel</label>
                    <input
                      type="text"
                      required
                      value={form.responsavel}
                      onChange={(e) => updateForm('responsavel', e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Nome da loja</label>
                    <input
                      type="text"
                      required
                      value={form.loja}
                      onChange={(e) => updateForm('loja', e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="Nome da sua loja"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={(e) => updateForm('whatsapp', e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="(00) 00000-0000"
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
                      placeholder="Sua cidade e estado"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Categoria de produtos</label>
                    <select
                      required
                      value={form.categoria}
                      onChange={(e) => updateForm('categoria', e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    >
                      <option value="">Selecione uma categoria</option>
                      <option value="roupas">Roupas</option>
                      <option value="acessorios">Acessorios</option>
                      <option value="calcados">Calcados</option>
                      <option value="tecnologia">Tecnologia</option>
                      <option value="casa-decoracao">Casa e Decoracao</option>
                      <option value="beleza">Beleza</option>
                      <option value="esportes">Esportes</option>
                      <option value="livros">Livros</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold py-6"
                  >
                    Quero ser parceiro
                  </Button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
