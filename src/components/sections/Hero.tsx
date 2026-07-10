import heroSneaker from '../../assets/hero-sneaker.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-graphite text-offwhite overflow-hidden">
      {/* Vertical spec strip — real product attributes, not decoration */}
      <div className="hidden lg:flex flex-col justify-between absolute left-0 top-0 h-full w-14 border-r border-white/10 py-10 px-4 text-[10px] tracking-[0.2em] text-offwhite/40 font-body uppercase">
        <span className="[writing-mode:vertical-rl] rotate-180">Peso · 312g</span>
        <span className="[writing-mode:vertical-rl] rotate-180">Drop · 8mm</span>
        <span className="[writing-mode:vertical-rl] rotate-180">Couro Nobuck</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:pl-24 lg:pr-12 grid lg:grid-cols-[1.1fr_1fr] min-h-screen items-center gap-12">
        {/* Text column */}
        <div className="py-32 lg:py-0">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-6">
            Coleção SS26 — Edição Limitada
          </p>

          <h1 className="font-display uppercase leading-[0.88] text-offwhite">
            <span className="block text-[15vw] lg:text-[6.5vw]">Feito</span>
            <span className="block text-[15vw] lg:text-[6.5vw] text-transparent [-webkit-text-stroke:1.5px_#F5F5F0]">
              Para
            </span>
            <span className="block text-[15vw] lg:text-[6.5vw] text-accent">Vencer</span>
          </h1>

          <p className="font-body text-offwhite/60 text-base lg:text-lg max-w-md mt-8 leading-relaxed">
            Cada par CHOVBLY nasce da fusão entre engenharia esportiva de alta
            performance e acabamento de manufatura de luxo. Sem atalhos, sem
            produção em massa.
          </p>

          <div className="flex items-center gap-6 mt-10">
            <button className="bg-accent text-graphite font-body font-semibold text-sm tracking-wide uppercase px-8 py-4 hover:bg-offwhite transition-colors duration-300">
              Ver Coleção
            </button>
            <button className="font-body text-sm tracking-wide uppercase text-offwhite/70 border-b border-offwhite/30 pb-1 hover:text-offwhite hover:border-offwhite transition-colors duration-300">
              Nossa Origem
            </button>
          </div>
        </div>

        {/* Product image */}
         <div className="relative h-[50vh] lg:h-[80vh] flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={heroSneaker}
              alt="Tênis CHOVBLY em suspensão, detalhe vermelho sobre fundo escuro"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 160px 90px #0D0D0D' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}