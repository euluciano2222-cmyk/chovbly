const STATS = [
  { id: 1, value: '2019', label: 'Fundação' },
  { id: 2, value: '100%', label: 'Couro Nobuck' },
  { id: 3, value: '48h', label: 'Produção por Lote' },
];

export default function AboutBrand() {
  return (
    <section className="bg-graphite text-offwhite py-24 lg:py-36">
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-8">
          Nossa Filosofia
        </p>

        <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-6xl leading-[1.05]">
          Não fazemos tênis
          <br />
          para <span className="text-accent">todos</span>. Fazemos para quem
          <br />
          exige mais de cada passo.
        </h2>

        <p className="font-body text-offwhite/50 text-base lg:text-lg max-w-xl mx-auto mt-10 leading-relaxed">
          CHOVBLY nasceu da recusa em escolher entre performance e
          acabamento. Cada lote é produzido em pequena escala, com controle
          rígido de material e construção — sem atalhos, sem produção em
          massa.
        </p>
      </div>

      {/* Faixa de números reais da marca — mesma linguagem visual da faixa de specs do Hero */}
      <div className="max-w-[1000px] mx-auto px-6 mt-16 lg:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 border-t border-white/10 pt-10">
          {STATS.map((stat) => (
            <div key={stat.id} className="text-center">
              <p className="font-display text-3xl lg:text-4xl text-accent-light">
                {stat.value}
              </p>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-offwhite/40 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
