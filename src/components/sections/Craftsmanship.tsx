const SPECS = [
  {
    id: 1,
    title: 'Cabedal',
    detail: 'Couro nobuck de curtume certificado, costura reforçada dupla.',
  },
  {
    id: 2,
    title: 'Entressola',
    detail: 'Espuma EVA de dupla densidade, absorção progressiva de impacto.',
  },
  {
    id: 3,
    title: 'Solado',
    detail: 'Borracha vulcanizada com padrão antiderrapante multidirecional.',
  },
  {
    id: 4,
    title: 'Montagem',
    detail: 'Processo Strobel, flexibilidade natural sem perda de suporte.',
  },
];

export default function Craftsmanship() {
  return (
    <section className="bg-graphite text-offwhite py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          {/* Coluna de texto */}
          <div>
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-6">
              Construção
            </p>
            <h2 className="font-display uppercase text-4xl lg:text-5xl leading-[1.05] mb-8">
              Cada camada
              <br />
              tem um propósito.
            </h2>
            <p className="font-body text-offwhite/50 text-base lg:text-lg leading-relaxed max-w-md">
              Não terceirizamos decisões de material. Cada componente é
              testado isoladamente antes de entrar na linha de montagem —
              da entressola ao último ponto de costura.
            </p>
          </div>

          {/* Lista de especificações — numerada, estilo ficha técnica */}
          <div className="border-t border-white/10">
            {SPECS.map((spec, index) => (
              <div
                key={spec.id}
                className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-7 border-b border-white/10"
              >
                <span className="font-display text-accent text-sm w-10 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display uppercase text-xl sm:w-40 shrink-0">
                  {spec.title}
                </h3>
                <p className="font-body text-offwhite/50 text-sm leading-relaxed">
                  {spec.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
