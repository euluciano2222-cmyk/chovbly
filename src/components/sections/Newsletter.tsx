import { useState } from 'react';
import type { FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setEmail('');
  }

  return (
    <section className="relative bg-graphite text-offwhite py-24 lg:py-32 overflow-hidden">
      {/* Brilho ambiente — mesma assinatura de luz usada nas outras seções */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(184,147,95,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[600px] mx-auto px-6 text-center">
        <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-6">
          Fique por Dentro
        </p>
        <h2 className="font-display uppercase text-3xl lg:text-4xl leading-[1.1] mb-6">
          Seja o primeiro a saber
          <br />
          de cada lançamento.
        </h2>
        <p className="font-body text-offwhite/50 text-sm mb-10">
          Sem spam. Só avisos de novas coleções e acesso antecipado a edições limitadas.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            placeholder="seu@email.com"
            className="flex-1 bg-surface border border-white/10 rounded-sm px-5 py-3.5 font-body text-sm text-offwhite placeholder:text-offwhite/30 focus:outline-none focus:border-accent/50 transition-colors duration-300"
          />
          <button
            type="submit"
            className="bg-accent text-graphite font-body font-semibold text-sm tracking-wide uppercase px-8 py-3.5 hover:bg-offwhite transition-colors duration-300 shrink-0"
          >
            Inscrever
          </button>
        </form>

        <div className="h-6 mt-4">
          {status === 'success' && (
            <p className="font-body text-xs text-accent-light">
              Inscrição confirmada. Bem-vindo à lista CHOVBLY.
            </p>
          )}
          {status === 'error' && (
            <p className="font-body text-xs text-red-400/80">
              Digite um e-mail válido.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
