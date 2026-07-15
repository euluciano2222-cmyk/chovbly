import lookbook1 from '../../assets/lookbook-1.jpg';
import lookbook2 from '../../assets/lookbook-2.jpg';
import lookbook3 from '../../assets/lookbook-3.jpg';
import lookbook4 from '../../assets/lookbook-4.jpg';

const LOOKS = [
  { id: 1, label: 'Urban Performance', image: lookbook1, size: 'lg:row-span-2' },
  { id: 2, label: 'Trilha ao Amanhecer', image: lookbook2 },
  { id: 3, label: 'Fim de Tarde', image: lookbook3 },
  { id: 4, label: 'Corrida Matinal', image: lookbook4 },
];

export default function Lookbook() {
  return (
    <section className="bg-graphite text-offwhite py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-4">
          <div>
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-4">
              Editorial
            </p>
            <h2 className="font-display uppercase text-4xl lg:text-5xl leading-none">
              Lookbook
            </h2>
          </div>
          <p className="font-body text-offwhite/50 text-sm max-w-xs">
            Como a coleção se comporta fora do estúdio — no asfalto, na trilha, na rotina real.
          </p>
        </div>

        {/* Grid assimétrico tipo mosaico */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[180px] lg:auto-rows-[200px]">
          {LOOKS.map((look) => (
            <div
              key={look.id}
              className={`group relative overflow-hidden rounded-md ${look.size ?? ''}`}
            >
              <img
                src={look.image}
                alt={look.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Vinheta — funde as bordas da foto com o fundo grafite, mesma técnica do Hero */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 50px 30px #0D0D0D' }}
              />

              {/* Label — aparece sobre a base da imagem */}
              <span className="absolute bottom-4 left-4 font-body text-[10px] tracking-[0.2em] uppercase text-offwhite/80">
                {look.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
