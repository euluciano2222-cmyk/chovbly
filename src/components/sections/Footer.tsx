const LINK_COLUMNS = [
  {
    id: 1,
    title: 'Loja',
    links: ['Performance', 'Heritage', 'Edição Limitada', 'Todos os Produtos'],
  },
  {
    id: 2,
    title: 'Empresa',
    links: ['Sobre Nós', 'Sustentabilidade', 'Carreiras', 'Imprensa'],
  },
  {
    id: 3,
    title: 'Ajuda',
    links: ['Contato', 'Trocas e Devoluções', 'Guia de Tamanhos', 'Perguntas Frequentes'],
  },
];

const SOCIAL_LINKS = ['Instagram', 'TikTok', 'Pinterest'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface text-offwhite border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 lg:gap-8">
          {/* Brand column */}
          <div>
            <p className="font-display uppercase text-2xl tracking-wide">CHOVBLY</p>
            <p className="font-body text-offwhite/50 text-sm mt-4 max-w-[260px] leading-relaxed">
              Performance encontra manufatura de luxo. Sem atalhos, sem produção em massa.
            </p>
            <div className="flex gap-5 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-body text-xs tracking-[0.15em] uppercase text-offwhite/50 hover:text-accent transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {LINK_COLUMNS.map((column) => (
            <div key={column.id}>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-accent mb-5">
                {column.title}
              </p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-offwhite/60 hover:text-offwhite transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-offwhite/40">
            © {year} CHOVBLY. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-body text-xs text-offwhite/40 hover:text-offwhite/70 transition-colors duration-300"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="font-body text-xs text-offwhite/40 hover:text-offwhite/70 transition-colors duration-300"
            >
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
