'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push('/pedidos')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-secondary/30 py-12">
        <div className="mx-auto w-full max-w-sm px-4">
          <div className="text-center mb-8">
            <span className="text-3xl font-bold text-primary">Bazer</span>
            <p className="mt-2 text-muted-foreground">Faca login para continuar</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Senha</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="Sua senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span className="sr-only">{showPassword ? 'Ocultar senha' : 'Mostrar senha'}</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-input h-4 w-4 accent-primary" />
                  <span className="text-xs text-muted-foreground">Lembrar de mim</span>
                </label>
                <Link href="#" className="text-xs text-primary hover:text-primary/80 transition-colors">
                  Esqueceu a senha?
                </Link>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold py-6"
              >
                Entrar
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-5">
              {'Nao tem conta? '}
              <Link href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">
                Criar conta
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
