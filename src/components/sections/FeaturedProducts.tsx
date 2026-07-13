import product1 from '../../assets/product-1.jpg';
import product2 from '../../assets/product-2.jpg';
import product3 from '../../assets/product-3.jpg';
import product4 from '../../assets/product-4.jpg';

const PRODUCTS = [
  {
    id: 1,
    name: 'CHOVBLY Aetheris',
    price: 1890,
    tag: 'Edição Limitada',
    featured: true,
    image: product1,
    warmFix: false,
  },
  {
    id: 2,
    name: 'CHOVBLY Nocturne',
    price: 2150,
    tag: 'Novo',
    featured: false,
    image: product2,
    warmFix: false,
  },
  {
    id: 3,
    name: 'CHOVBLY Solaris GT',
    price: 1690,
    tag: 'Mais Vendido',
    featured: false,
    image: product3,
    warmFix: false,
  },
  {
    id: 4,
    name: 'CHOVBLY Vantage Pro',
    price: 2490,
    tag: 'Couro Premium',
    featured: false,
    image: product4,
    warmFix: true, // essa foto tem uma sombra vermelha no chão; suavizamos abaixo
  },
];

function formatPrice(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function FeaturedProducts() {
  return (
    <section className="bg-graphite text-offwhite py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-4">
          <div>
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-4">
              Seleção Atual
            </p>
            <h2 className="font-display uppercase text-4xl lg:text-5xl leading-none">
              Produtos em Destaque
            </h2>
          </div>
          <a
            href="#"
            className="font-body text-sm tracking-wide uppercase text-offwhite/70 border-b border-offwhite/30 pb-1 hover:text-offwhite hover:border-offwhite transition-colors duration-300 self-start lg:self-auto"
          >
            Ver Coleção Completa
          </a>
        </div>

        {/* Asymmetric grid — primeiro produto ganha destaque maior */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <a
              href="#"
              key={product.id}
              className={`group block ${
                product.featured ? 'lg:col-span-2 lg:row-span-2 lg:flex lg:flex-col lg:h-full' : ''
              }`}
            >
              {/* Image container — sem caixa própria, funde direto com a página como no Hero */}
              <div
                className={`relative overflow-hidden mb-5 ${
                  product.featured
                    ? 'aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-0'
                    : 'aspect-[4/5]'
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Brilho ambiente — tom de destaque da marca, unifica os 4 cards visualmente */}
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40"
                  style={{
                    background:
                      'radial-gradient(ellipse 70% 50% at 50% 75%, rgba(184,147,95,0.55) 0%, transparent 70%)',
                  }}
                />

                {/* Vinheta — funde as bordas da foto com o fundo grafite, mesma técnica do Hero */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 50px 40px #0D0D0D' }}
                />

                {/* Tag */}
                <span className="absolute top-4 left-4 font-body text-[10px] tracking-[0.2em] uppercase bg-graphite/80 text-accent-light px-3 py-1.5 rounded-sm border border-accent/20">
                  {product.tag}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-display uppercase text-lg tracking-wide transition-colors duration-300 group-hover:text-accent">
                {product.name}
              </h3>
              <p className="font-body text-accent-light text-base mt-1">
                {formatPrice(product.price)}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
