import Link from 'next/link'
import { MessageCircle, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-bold tracking-tight">Bazer</span>
            <p className="mt-3 text-sm text-background/70 leading-relaxed">
              Marketplace de lojas parceiras. Compre com seguranca e receba em casa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-4">Navegacao</h3>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/" className="text-sm text-background/70 hover:text-background transition-colors">Inicio</Link></li>
              <li><Link href="/lojas" className="text-sm text-background/70 hover:text-background transition-colors">Lojas</Link></li>
              <li><Link href="/busca" className="text-sm text-background/70 hover:text-background transition-colors">Buscar Produtos</Link></li>
              <li><Link href="/parceiro" className="text-sm text-background/70 hover:text-background transition-colors">Seja Parceiro</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-4">Legal</h3>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">Termos de Uso</Link></li>
              <li><Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">Politica de Privacidade</Link></li>
              <li><Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">Central de Ajuda</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-4">Contato</h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="text-sm text-background/70 hover:text-background transition-colors flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com/bazer" target="_blank" rel="noopener noreferrer" className="text-sm text-background/70 hover:text-background transition-colors flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10">
          <p className="text-center text-xs text-background/50">
            {'© 2025 Bazer. Todos os direitos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
