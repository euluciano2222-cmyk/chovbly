const BENEFITS = [
  {
    id: 1,
    title: 'Frete Grátis',
    detail: 'Para todo o Brasil em compras acima de R$ 800.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="14" width="24" height="16" rx="1.5" />
        <path d="M28 20h8l6 6v4a2 2 0 0 1-2 2h-2" />
        <circle cx="14" cy="34" r="3.5" />
        <circle cx="34" cy="34" r="3.5" />
        <path d="M17.5 34h13" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Garantia de 2 Anos',
    detail: 'Cobertura total contra defeitos de fabricação.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 6l16 6v10c0 10-7 17-16 20C15 39 8 32 8 22V12l16-6z" />
        <path d="M17 24l5 5 9-10" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Trocas em 30 Dias',
    detail: 'Sem burocracia, processo iniciado 100% online.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 20a14 14 0 0 1 24-9.5" />
        <path d="M34 4v7h-7" />
        <path d="M38 28a14 14 0 0 1-24 9.5" />
        <path d="M14 44v-7h7" />
      </svg>
    ),
  },
];

export default function Guarantees() {
  return (
    <section className="bg-surface text-offwhite py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {BENEFITS.map((benefit) => (
            <div key={benefit.id} className="flex flex-col items-start">
              <div className="w-11 h-11 text-accent mb-5">{benefit.icon}</div>
              <h3 className="font-display uppercase text-lg tracking-wide mb-2">
                {benefit.title}
              </h3>
              <p className="font-body text-offwhite/50 text-sm leading-relaxed max-w-[260px]">
                {benefit.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
