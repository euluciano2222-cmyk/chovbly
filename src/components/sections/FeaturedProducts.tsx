const PRODUCTS = [
  {
    id: 1,
    name: 'CHOVBLY Aetheris',
    price: 1890,
    tag: 'Edição Limitada',
    featured: true,
  },
  {
    id: 2,
    name: 'CHOVBLY Nocturne',
    price: 2150,
    tag: 'Novo',
    featured: false,
  },
  {
    id: 3,
    name: 'CHOVBLY Solaris GT',
    price: 1690,
    tag: 'Mais Vendido',
    featured: false,
  },
  {
    id: 4,
    name: 'CHOVBLY Vantage Pro',
    price: 2490,
    tag: 'Couro Premium',
    featured: false,
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
              {/* Image container */}
              <div
                className={`relative bg-surface rounded-md overflow-hidden mb-5 shadow-card border border-white/5 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-elevated ${
                  product.featured
                    ? 'aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-0'
                    : 'aspect-[4/5]'
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <span className="font-body text-[10px] tracking-[0.25em] uppercase text-offwhite/25 text-center px-6">
                    Imagem do produto<br />em breve
                  </span>
                </div>

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
