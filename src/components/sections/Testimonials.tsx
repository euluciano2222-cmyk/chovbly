const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rafael Monteiro',
    product: 'Comprou: CHOVBLY Aetheris',
    quote:
      'Uso pra corrida e pro dia a dia. Nunca vi um tênis de performance com acabamento tão bem cuidado — parece peça de vitrine, não de academia.',
    initials: 'RM',
  },
  {
    id: 2,
    name: 'Camila Duarte',
    product: 'Comprou: CHOVBLY Nocturne',
    quote:
      'O couro nobuck realmente entrega o que promete. Depois de seis meses de uso, ainda parece novo. Vale cada centavo.',
    initials: 'CD',
  },
  {
    id: 3,
    name: 'Bruno Azevedo',
    product: 'Comprou: CHOVBLY Solaris GT',
    quote:
      'Comprei pela estética, fiquei pelo conforto. O suporte de entressola faz diferença real em treino longo.',
    initials: 'BA',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface text-offwhite py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-14 text-center">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-4">
            Depoimentos
          </p>
          <h2 className="font-display uppercase text-4xl lg:text-5xl leading-none">
            Quem Já Vestiu
          </h2>
        </div>

        {/* Grid simétrico — quebra de ritmo em relação às seções assimétricas anteriores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-graphite rounded-md p-8 flex flex-col"
            >
              <div className="flex gap-1 text-accent mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-sm">★</span>
                ))}
              </div>

              <p className="font-body text-offwhite/70 text-sm leading-relaxed mb-8 flex-1">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-surface border border-accent/30 flex items-center justify-center shrink-0">
                  <span className="font-display text-accent-light text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm text-offwhite">{testimonial.name}</p>
                  <p className="font-body text-xs text-offwhite/40">{testimonial.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
