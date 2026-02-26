export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  storeId: string
  storeName: string
  storeRating: number
  description: string
  images: string[]
}

export interface Store {
  id: string
  slug: string
  name: string
  cover: string
  logo: string
  rating: number
  description: string
  category: string
  city: string
  productCount: number
}

export interface Order {
  id: string
  productName: string
  productImage: string
  storeName: string
  price: number
  status: 'received' | 'payment_confirmed' | 'separating' | 'shipped' | 'delivered'
  trackingCode?: string
  date: string
}

export const categories = [
  { name: 'Roupas', icon: 'shirt', slug: 'roupas' },
  { name: 'Acessorios', icon: 'watch', slug: 'acessorios' },
  { name: 'Calcados', icon: 'footprints', slug: 'calcados' },
  { name: 'Tecnologia', icon: 'smartphone', slug: 'tecnologia' },
  { name: 'Casa e Decoracao', icon: 'home', slug: 'casa-decoracao' },
  { name: 'Beleza', icon: 'sparkles', slug: 'beleza' },
  { name: 'Esportes', icon: 'dumbbell', slug: 'esportes' },
  { name: 'Livros', icon: 'book-open', slug: 'livros' },
  { name: 'Moda Evangelica', icon: 'heart', slug: 'moda-evangelica' },
]

export const stores: Store[] = [
  {
    id: '1',
    slug: 'moda-divina',
    name: 'Moda Divina',
    cover: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
    rating: 4.8,
    description: 'Loja especializada em moda evangelica e casual feminina. Roupas de qualidade com precos acessiveis para todas as ocasioes.',
    category: 'Roupas',
    city: 'Sao Paulo, SP',
    productCount: 45,
  },
  {
    id: '2',
    slug: 'tech-store',
    name: 'Tech Store',
    cover: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop',
    rating: 4.6,
    description: 'Tudo em tecnologia: celulares, notebooks, fones e acessorios. Garantia e suporte tecnico para todos os produtos.',
    category: 'Tecnologia',
    city: 'Rio de Janeiro, RJ',
    productCount: 120,
  },
  {
    id: '3',
    slug: 'lar-doce-lar',
    name: 'Lar Doce Lar',
    cover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=100&h=100&fit=crop',
    rating: 4.9,
    description: 'Decoracao moderna e funcional para sua casa. Produtos selecionados com carinho para transformar seu lar.',
    category: 'Casa e Decoracao',
    city: 'Belo Horizonte, MG',
    productCount: 80,
  },
  {
    id: '4',
    slug: 'esporte-total',
    name: 'Esporte Total',
    cover: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=300&fit=crop',
    logo: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100&h=100&fit=crop',
    rating: 4.5,
    description: 'Artigos esportivos para todas as modalidades. Roupas, calcados e equipamentos das melhores marcas.',
    category: 'Esportes',
    city: 'Curitiba, PR',
    productCount: 95,
  },
  {
    id: '5',
    slug: 'cris-rosa-modas',
    name: 'Cris Rosa Modas',
    cover: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=300&fit=crop',
    logo: 'https://i.imgur.com/CQrPELx.png',
    rating: 5.0,
    description: 'Loja especializada em moda evangelica feminina, com vestidos elegantes, confortaveis e sofisticados para todas as ocasioes. Trabalhamos com pecas modernas, tecidos de qualidade e modelagens que valorizam a silhueta com modestia e estilo.',
    category: 'Moda Evangelica',
    city: 'Brasil',
    productCount: 3,
  },
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Evangelica Premium',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'Roupas',
    storeId: '1',
    storeName: 'Moda Divina',
    storeRating: 4.8,
    description: 'Camiseta evangelica em algodao premium 100%. Estampa exclusiva com mensagem de fe. Disponivel nos tamanhos P, M, G e GG. Tecido macio e confortavel, ideal para o dia a dia.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4f94032fc?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '2',
    name: 'Vestido Midi Floral',
    price: 149.90,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop',
    category: 'Roupas',
    storeId: '1',
    storeName: 'Moda Divina',
    storeRating: 4.8,
    description: 'Vestido midi com estampa floral elegante. Tecido leve e fluido, perfeito para dias quentes. Modelagem confortavel que valoriza a silhueta.',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '3',
    name: 'Fone Bluetooth Pro Max',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Tecnologia',
    storeId: '2',
    storeName: 'Tech Store',
    storeRating: 4.6,
    description: 'Fone de ouvido bluetooth com cancelamento de ruido ativo. Bateria de longa duracao (30h). Som Hi-Fi com graves profundos. Design ergonomico e dobravel.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '4',
    name: 'Smartwatch Fitness',
    price: 459.90,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'Tecnologia',
    storeId: '2',
    storeName: 'Tech Store',
    storeRating: 4.6,
    description: 'Smartwatch com monitor cardiaco, GPS integrado e tela AMOLED. Resistente a agua. Mais de 100 modos de exercicio. Bateria de 7 dias.',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '5',
    name: 'Luminaria Moderna LED',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=400&fit=crop',
    category: 'Casa e Decoracao',
    storeId: '3',
    storeName: 'Lar Doce Lar',
    storeRating: 4.9,
    description: 'Luminaria de mesa LED com design minimalista. 3 tons de luz ajustaveis. Base em madeira natural. Perfeita para escritorio e quarto.',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '6',
    name: 'Kit Almofadas Decorativas',
    price: 129.90,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop',
    category: 'Casa e Decoracao',
    storeId: '3',
    storeName: 'Lar Doce Lar',
    storeRating: 4.9,
    description: 'Kit com 4 almofadas decorativas em tons neutros. Capas removiveis e lavaveis. Enchimento em fibra de silicone. Tamanho 45x45cm.',
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '7',
    name: 'Tenis Running Performance',
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'Esportes',
    storeId: '4',
    storeName: 'Esporte Total',
    storeRating: 4.5,
    description: 'Tenis de corrida com tecnologia de amortecimento avancada. Cabedal em mesh respiravel. Solado em borracha de alta durabilidade. Ideal para corridas longas.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '8',
    name: 'Garrafa Termica Inox 1L',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
    category: 'Esportes',
    storeId: '4',
    storeName: 'Esporte Total',
    storeRating: 4.5,
    description: 'Garrafa termica em aco inoxidavel. Mantem a temperatura por ate 24h. Capacidade de 1 litro. Tampa com bico dosador. Ideal para academia e trilhas.',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1523362628745-0c100fc988a4?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '9',
    name: 'Vestido Aline Jacar Paris',
    price: 89.90,
    image: 'https://i.imgur.com/vv7KLmX.jpeg',
    category: 'Moda Evangelica',
    storeId: '5',
    storeName: 'Cris Rosa Modas',
    storeRating: 5.0,
    description: 'Vestido Aline - Um classico com charme atemporal. Confeccionado no sofisticado tecido Jacar Paris, o vestido Aline une conforto, elegancia e detalhes que fazem toda a diferenca. Modelagem longa e fluida. Botoes funcionais: praticidade e estilo. Detalhes em jarda na gola e no bolsinho: um toque de delicadeza. Bolsos laterais: praticidade sem perder o charme. Cinto faixa que valoriza a cintura. Tamanhos: M (38/40), G (42/44). Disponivel nas cores: Mostarda, Preto, Marsala, Marrom.',
    images: [
      'https://i.imgur.com/vv7KLmX.jpeg',
     
    ],
  },
  {
    id: '10',
    name: 'Vestido Teresa Plus Size',
    price: 49.99,
    image: 'https://i.imgur.com/TdnxrDs.jpeg',
    category: 'Moda Evangelica',
    storeId: '5',
    storeName: 'Cris Rosa Modas',
    storeRating: 5.0,
    description: 'Vestido em creponado europeu, com bolsos laterais e leve babado super fresquinho. Tamanhos: M (38-40-42), G (44-46), GG (48-50). Disponivel em 3 estampas. Ideal para o dia a dia com conforto e elegancia plus size.',
    images: [
      'https://i.imgur.com/TdnxrDs.jpeg'
    ],
  },
  {
    id: '11',
    name: 'Vestido Teresa',
    price: 49.99,
    image: 'https://i.imgur.com/HxFrGnW.jpeg',
    category: 'Moda Evangelica',
    storeId: '5',
    storeName: 'Cris Rosa Modas',
    storeRating: 5.0,
    description: 'Vestido Teresa - Elegancia e conforto em um so look! Feito em tecido creponado europeu, com bolsos laterais e um leve babado na barra. Use soltinho para um toque casual ou com cinto para marcar a silhueta! Tamanhos: M (38-42), G (44-46), GG (48-50).',
    images: [
      'https://i.imgur.com/HxFrGnW.jpeg'
    ],
  },
]

export const orders: Order[] = [
  {
    id: 'BZR-2024-001',
    productName: 'Camiseta Evangelica Premium',
    productImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop',
    storeName: 'Moda Divina',
    price: 79.90,
    status: 'shipped',
    trackingCode: 'BR123456789XX',
    date: '2024-12-15',
  },
  {
    id: 'BZR-2024-002',
    productName: 'Fone Bluetooth Pro Max',
    productImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
    storeName: 'Tech Store',
    price: 299.90,
    status: 'delivered',
    date: '2024-12-10',
  },
  {
    id: 'BZR-2024-003',
    productName: 'Luminaria Moderna LED',
    productImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=200&h=200&fit=crop',
    storeName: 'Lar Doce Lar',
    price: 189.90,
    status: 'separating',
    date: '2024-12-18',
  },
]

export function formatPrice(price: number): string {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function getStatusLabel(status: Order['status']): string {
  const labels: Record<Order['status'], string> = {
    received: 'Pedido recebido',
    payment_confirmed: 'Pagamento confirmado',
    separating: 'Produto em separacao',
    shipped: 'Enviado',
    delivered: 'Entregue',
  }
  return labels[status]
}

export function getStatusStep(status: Order['status']): number {
  const steps: Record<Order['status'], number> = {
    received: 1,
    payment_confirmed: 2,
    separating: 3,
    shipped: 4,
    delivered: 5,
  }
  return steps[status]
}
