const CATEGORIES = [
  {
    id: 1,
    name: 'Performance',
    description: 'Engenharia de corrida e treino de alta intensidade.',
    number: '01',
    size: 'lg:flex-[1.6]',
  },
  {
    id: 2,
    name: 'Heritage',
    description: 'Linhas atemporais, construção clássica.',
    number: '02',
    size: 'lg:flex-1',
  },
  {
    id: 3,
    name: 'Edição Limitada',
    description: 'Peças exclusivas, produção restrita.',
    number: '03',
    size: 'lg:flex-1',
  },
];

export default function Categories() {
  return (
    <section className="bg-surface text-offwhite py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-4">
            Explore Por Linha
          </p>
          <h2 className="font-display uppercase text-4xl lg:text-5xl leading-none">
            Categorias
          </h2>
        </div>

        {/* Layout horizontal assimétrico — três larguras diferentes, sem depender de foto */}
        <div className="flex flex-col lg:flex-row gap-6">
          {CATEGORIES.map((category) => (
            <a
              href="#"
              key={category.id}
              className={`group relative overflow-hidden bg-graphite rounded-md min-h-[340px] lg:min-h-[420px] flex flex-col justify-between p-8 transition-all duration-300 hover:bg-graphite/80 ${category.size}`}
            >
              {/* Brilho ambiente — mesma assinatura de luz usada no Hero e em Produtos */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(184,147,95,0.35) 0%, transparent 70%)',
                }}
              />

              {/* Número — textura de identidade, não decoração aleatória */}
              <span className="font-display text-transparent text-6xl lg:text-7xl [-webkit-text-stroke:1px_rgba(245,245,240,0.15)] leading-none">
                {category.number}
              </span>

              <div className="relative">
                <h3 className="font-display uppercase text-3xl lg:text-4xl leading-none mb-3 transition-colors duration-300 group-hover:text-accent">
                  {category.name}
                </h3>
                <p className="font-body text-offwhite/50 text-sm max-w-[220px] mb-6">
                  {category.description}
                </p>
                <span className="font-body text-xs tracking-[0.25em] uppercase text-offwhite/70 border-b border-offwhite/30 pb-1 group-hover:text-accent-light group-hover:border-accent-light transition-colors duration-300">
                  Explorar
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
