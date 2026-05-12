import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Heart,
  Scissors,
  Gift,
  Instagram,
  Facebook,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import logo from "@/assets/munno-logo.png";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MUNNO Arte e Festa — Personalizados criativos e artesanais" },
      {
        name: "description",
        content:
          "Ateliê de personalizados, decoração artesanal e papelaria criativa para festas inesquecíveis. Feito com carinho.",
      },
      { property: "og:title", content: "MUNNO Arte e Festa" },
      { property: "og:description", content: "Transformando papel em memórias inesquecíveis." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,700;1,9..144,500&family=Quicksand:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const INSTAGRAM = "https://www.instagram.com/munnoarteefesta?utm_source=chatgpt.com";
const FACEBOOK = "https://www.facebook.com/share/1MeQAdr9rU/?utm_source=chatgpt.com";
const SHOPEE = "https://shopee.com.br/mayramunno?utm_source=chatgpt.com";

function Balloon({
  className,
  color,
  r = "0deg",
  delay = "0s",
}: {
  className?: string;
  color: string;
  r?: string;
  delay?: string;
}) {
  return (
    <div
      className={`absolute pointer-events-none animate-float ${className ?? ""}`}
      style={{ ["--r" as string]: r, animationDelay: delay }}
      aria-hidden
    >
      <div
        className="w-16 h-20 rounded-[50%] shadow-soft"
        style={{ backgroundColor: `var(--${color})` }}
      />
      <div
        className="mx-auto w-px h-14"
        style={{ backgroundColor: "var(--muted-foreground)", opacity: 0.4 }}
      />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 inset-x-0 z-30">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-2">
            <img
              src={logo}
              alt="MUNNO Arte e Festa"
              className="w-12 h-12 rounded-full shadow-soft"
            />
            <span className="font-display text-lg hidden sm:inline">MUNNO</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#sobre" className="hover:text-primary transition">
              Sobre
            </a>
            <a href="#portfolio" className="hover:text-primary transition">
              Portfólio
            </a>
            <a href="#diferenciais" className="hover:text-primary transition">
              Diferenciais
            </a>
          </div>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Encomendar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-confetti">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background pointer-events-none" />

        <Balloon className="top-24 left-[6%] hidden md:block" color="orange-soft" r="-10deg" />
        <Balloon className="top-40 right-[10%]" color="pink-soft" r="8deg" delay="1.2s" />
        <Balloon
          className="top-72 right-[22%] hidden lg:block"
          color="blue-soft"
          r="-4deg"
          delay="0.6s"
        />
        <Balloon
          className="top-28 left-[40%] hidden lg:block"
          color="mint-soft"
          r="6deg"
          delay="2s"
        />

        <div className="relative max-w-5xl mx-auto px-6 text-center animate-fade-up">
          <img
            src={logo}
            alt="MUNNO Arte e Festa logo"
            className="mx-auto w-28 h-28 md:w-36 md:h-36 rounded-full shadow-pop animate-wiggle"
            width={144}
            height={144}
          />
          <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Ateliê de personalizados artesanais
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05]">
            Transformando papel em <br className="hidden sm:block" />
            <span className="text-gradient-warm italic">memórias inesquecíveis</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-base md:text-lg text-muted-foreground">
            Personalizados criativos e feitos com carinho para tornar a sua festa única.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold shadow-pop hover:scale-[1.03] transition"
            >
              Ver Portfólio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-sm font-semibold hover:bg-muted transition"
            >
              <Instagram className="w-4 h-4" /> @munnoarteefesta
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Sobre o ateliê
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              Pequenos detalhes que viram{" "}
              <em className="text-gradient-warm not-italic">grandes lembranças</em>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A MUNNO Arte e Festa cria personalizados únicos para aniversários, mesversários e
              momentos especiais. Cada detalhe é pensado com criatividade, delicadeza e muito amor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Aniversários", "Mesversários", "Chá de bebê", "Casamentos"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-card border border-border px-4 py-1.5 text-sm shadow-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Heart, label: "Feito à mão", color: "pink-soft" },
                { icon: Scissors, label: "Papelaria", color: "mint-soft" },
                { icon: Gift, label: "Lembrancinhas", color: "yellow-soft" },
                { icon: Sparkles, label: "Decoração", color: "blue-soft" },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="aspect-square rounded-3xl flex flex-col items-center justify-center gap-3 shadow-soft hover:-translate-y-1 transition"
                  style={{ backgroundColor: `var(--${color})` }}
                >
                  <Icon className="w-8 h-8 text-foreground/70" strokeWidth={1.5} />
                  <span className="text-sm font-semibold text-foreground/80">{label}</span>
                </div>
              ))}
            </div>
            <div
              className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-70 blur-2xl"
              style={{ backgroundColor: "var(--orange-soft)" }}
            />
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section
        id="portfolio"
        className="relative py-24 md:py-32"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Portfólio
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold">
              Um pouco do <span className="text-gradient-warm italic">nosso trabalho</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Cada criação é feita para deixar a sua comemoração ainda mais especial.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                src: portfolio1,
                alt: "Mesa de festa personalizada em tons pastel",
                tag: "Festa Infantil",
              },
              {
                src: portfolio2,
                alt: "Caixinhas e lembrancinhas artesanais",
                tag: "Lembrancinhas",
              },
              { src: portfolio3, alt: "Topo de bolo personalizado e decoração", tag: "Decoração" },
            ].map((p, i) => (
              <figure
                key={p.alt}
                className="group relative overflow-hidden rounded-[2rem] shadow-soft bg-card hover:shadow-pop transition-all duration-500 hover:-translate-y-2"
                style={{ transform: `rotate(${i === 1 ? "0" : i === 0 ? "-1.2" : "1.2"}deg)` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <figcaption className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold">
                  {p.tag}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-10 py-5 text-base md:text-lg font-semibold shadow-pop hover:scale-[1.03] transition"
            >
              <Instagram className="w-5 h-5" />
              Mais fotos aqui
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Veja o feed completo no nosso Instagram
            </p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Por que a MUNNO
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Carinho em <span className="text-gradient-warm italic">cada detalhe</span>
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Personalização exclusiva",
                desc: "Cada projeto é único, pensado para a sua história.",
                color: "pink-soft",
              },
              {
                icon: Scissors,
                title: "Feito artesanalmente",
                desc: "Cortado, montado e finalizado à mão com capricho.",
                color: "yellow-soft",
              },
              {
                icon: Heart,
                title: "Atendimento com carinho",
                desc: "Conversa próxima do começo ao dia da festa.",
                color: "blue-soft",
              },
              {
                icon: Gift,
                title: "Produtos criativos e únicos",
                desc: "Ideias originais para encantar quem você ama.",
                color: "mint-soft",
              },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <article
                key={title}
                className="relative rounded-3xl p-7 bg-card border border-border shadow-soft hover:-translate-y-1 hover:shadow-pop transition"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `var(--${color})` }}
                >
                  <Icon className="w-7 h-7 text-foreground/80" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <span className="absolute top-5 right-5 text-xs font-display text-muted-foreground/60">
                  0{i + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 text-center shadow-pop"
            style={{
              background:
                "linear-gradient(135deg, var(--pink-soft), var(--orange-soft) 60%, var(--yellow-soft))",
            }}
          >
            <Balloon className="-top-2 left-6 hidden md:block" color="blue-soft" r="-10deg" />
            <Balloon
              className="-top-2 right-6 hidden md:block"
              color="mint-soft"
              r="10deg"
              delay="1s"
            />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Vamos celebrar juntos?
            </h2>
            <p className="mt-4 text-foreground/80 max-w-xl mx-auto">
              Conte sua ideia e a gente transforma em uma festa cheia de afeto e personalidade.
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-sm font-semibold hover:scale-[1.03] transition"
            >
              <Instagram className="w-4 h-4" /> Falar no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3 items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MUNNO Arte e Festa" className="w-14 h-14 rounded-full" />
            <div>
              <p className="font-display text-lg leading-tight">MUNNO</p>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">
                Arte e Festa
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground italic">
            Feito com amor para momentos especiais.
          </p>

          <div className="flex md:justify-end items-center gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={SHOPEE}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shopee"
              className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
            >
              <ShoppingBag className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MUNNO Arte e Festa. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
