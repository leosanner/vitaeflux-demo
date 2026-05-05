const WHATSAPP_URL = "https://wa.me/0000000000"; // placeholder

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="w-full border-b border-line/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <a
            href="/"
            className="font-serif text-2xl tracking-tight text-ink"
          >
            vitaeflux
          </a>

          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#abordagem" className="hover:text-ink transition-colors">
              Abordagem
            </a>
            <a href="#analises" className="hover:text-ink transition-colors">
              Análises
            </a>
            <a href="#terapias" className="hover:text-ink transition-colors">
              Terapias
            </a>
            <a href="#contato" className="hover:text-ink transition-colors">
              Contato
            </a>
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-canvas-elevated transition-colors hover:bg-accent-hover md:inline-flex"
          >
            Agendar consulta
          </a>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-12 md:gap-12 md:px-10 md:py-32 lg:py-40">
            <div className="md:col-span-7">
              <p className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
                <span className="h-px w-8 bg-accent" />
                Clínica de biofísica
              </p>

              <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
                Olhamos além
                <br />
                do <em className="italic text-accent">sintoma.</em>
              </h1>

              <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">
                Terapias biofísicas e integrativas que apoiam o equilíbrio
                físico, emocional e funcional do organismo — com protocolos
                personalizados e avaliação cuidadosa.
              </p>

              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-medium text-canvas-elevated transition-colors hover:bg-accent-hover"
                >
                  Agendar consulta
                </a>
                <a
                  href="#abordagem"
                  className="inline-flex h-12 items-center justify-center px-2 text-sm font-medium text-ink underline decoration-accent/40 underline-offset-[6px] transition-colors hover:decoration-accent"
                >
                  Conheça a abordagem
                </a>
              </div>
            </div>

            <div className="relative md:col-span-5">
              <HeroVisual />
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
          />
        </section>
      </main>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] w-full">
      <svg
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9A7A1F" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#9A7A1F" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9A7A1F" stopOpacity="0" />
            <stop offset="50%" stopColor="#9A7A1F" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9A7A1F" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[180, 140, 100, 60].map((r, i) => (
          <circle
            key={r}
            cx="220"
            cy="250"
            r={r}
            stroke="url(#ring)"
            strokeWidth={i === 0 ? 1.2 : 0.6}
            opacity={1 - i * 0.18}
          />
        ))}

        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d={`M 20 ${250 + (i - 3) * 6} Q 220 ${
              250 + (i - 3) * 24
            } 420 ${250 + (i - 3) * 6}`}
            stroke="url(#wave)"
            strokeWidth="0.8"
            opacity={0.6 - Math.abs(i - 3) * 0.12}
          />
        ))}

        <circle cx="220" cy="250" r="3" fill="#9A7A1F" />
      </svg>
    </div>
  );
}
