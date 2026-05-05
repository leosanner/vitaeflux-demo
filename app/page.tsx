import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/0000000000"; // placeholder

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="w-full border-b border-line/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <a href="/" aria-label="Vitae Flux — início" className="flex items-center gap-3">
            <Image
              src="/vitae-flux-logo.png"
              alt=""
              width={64}
              height={64}
              priority
              className="h-10 w-auto object-contain"
            />
            <span className="font-serif text-xl tracking-tight text-ink">
              Vitae Flux
            </span>
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
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-line to-transparent"
          />
        </section>

        <Abordagem />
      </main>
    </div>
  );
}

const PILARES = [
  "Apoio à microcirculação",
  "Regulação do estresse fisiológico",
  "Suporte à recuperação funcional",
  "Otimização da vitalidade celular",
  "Equilíbrio dos sistemas",
];

function Abordagem() {
  return (
    <section id="abordagem" className="border-t border-line/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
              <span className="h-px w-8 bg-accent" />
              Abordagem
            </p>
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink md:text-5xl">
              Biofísica
              <br />
              <em className="italic text-accent">aplicada à saúde.</em>
            </h2>
          </div>

          <div className="md:col-span-7 md:pt-4">
            <p className="text-lg leading-relaxed text-muted">
              A biofísica da saúde investiga como diferentes fatores — como
              frequências, campos, ondas, eletromagnetismo e biofotônica —
              influenciam a comunicação e a regulação dos sistemas biológicos.
              As terapias biofísicas utilizam estímulos naturais e controlados
              para apoiar os mecanismos de autorregulação, equilíbrio e
              recuperação do organismo.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-12 md:mt-32 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <h3 className="font-serif text-3xl leading-[1.15] tracking-tight text-ink md:text-4xl">
              Como essa abordagem
              <br />
              <em className="italic text-accent">pode contribuir.</em>
            </h3>
          </div>

          <ul className="md:col-span-7">
            {PILARES.map((pilar, i) => (
              <li
                key={pilar}
                className="group flex items-baseline gap-6 border-t border-line py-5 first:border-t-0 first:pt-0 md:gap-10 md:py-6"
              >
                <span className="font-serif text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-ink md:text-xl">{pilar}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-square w-full">
      <div
        aria-hidden
        className="absolute inset-[10%] rounded-full bg-accent/6 blur-3xl"
      />
      <Image
        src="/vitae-flux-logo.png"
        alt="Vitae Flux"
        fill
        priority
        sizes="(min-width: 768px) 40vw, 80vw"
        className="object-contain"
      />
    </div>
  );
}
