import { useState } from 'react';

const FAQS = [
  {
    id: 1,
    question: 'Como escolho o tamanho ideal?',
    answer:
      'Nossa numeração segue o padrão brasileiro. Em caso de dúvida entre dois tamanhos, recomendamos o maior — o cabedal em couro nobuck ajusta levemente após os primeiros usos.',
  },
  {
    id: 2,
    question: 'Qual o prazo de entrega?',
    answer:
      'Entre 5 e 12 dias úteis, dependendo da região. Compras acima de R$ 800 têm frete grátis para todo o Brasil.',
  },
  {
    id: 3,
    question: 'Posso trocar se o tênis não servir?',
    answer:
      'Sim, você tem 30 dias corridos a partir do recebimento. O processo é iniciado 100% online, sem burocracia.',
  },
  {
    id: 4,
    question: 'Os materiais são realmente premium?',
    answer:
      'Cabedal em couro nobuck de curtume certificado, entressola em EVA de dupla densidade e solado em borracha vulcanizada. Cada componente é testado isoladamente antes da montagem.',
  },
  {
    id: 5,
    question: 'Vocês têm loja física?',
    answer:
      'No momento, a CHOVBLY opera exclusivamente online, o que nos permite manter controle rígido de qualidade em pequenos lotes.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="bg-graphite text-offwhite py-24 lg:py-32">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="mb-14 text-center">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-4">
            Dúvidas
          </p>
          <h2 className="font-display uppercase text-4xl lg:text-5xl leading-none">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="border-t border-white/10">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-white/10">
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-display uppercase text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-accent text-xl transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-body text-offwhite/50 text-sm leading-relaxed pb-6 pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
