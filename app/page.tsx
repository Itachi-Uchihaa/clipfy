import {
  ArrowRight,
  Check,
  Clock,
  Download,
  Link as LinkIcon,
  Play,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { UrlVideoForm } from "@/components/url-video-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-8 items-center justify-center rounded-full bg-white text-black",
        className
      )}
      aria-hidden
    >
      <Play className="size-3.5 fill-current pl-0.5" />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-heading text-lg font-semibold tracking-tight text-white">
            Clipify
          </span>
        </Link>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          <a
            href="#how-it-works"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Comment ça marche
          </a>
          <a
            href="#pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Tarifs
          </a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground" render={<a href="#" />}>
            Connexion
          </Button>
          <Button size="sm" className="rounded-lg px-4">
            Commencer
          </Button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 sm:pt-16 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.25),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-[280px] w-[280px] rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <Badge
          variant="secondary"
          className="mb-6 border border-violet-500/35 bg-violet-950/70 px-3 py-1 text-violet-200"
        >
          <Sparkles className="size-3.5" />
          Vidéo promotionnelle par IA
        </Badge>
        <h1 className="font-heading text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem] lg:leading-[1.1]">
          Transformez n’importe quel site en vidéo virale
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
          Collez une URL et regardez l’IA créer une vidéo marketing qui capte l’attention en
          quelques secondes. Aucune compétence en montage requise.
        </p>
        <div className="mt-10 w-full">
          <UrlVideoForm />
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-4xl">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,28rem)] w-[min(90vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500/20 via-violet-600/15 to-transparent blur-3xl" />

        <div className="relative flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
          <Card className="absolute left-0 top-1/4 z-10 hidden w-[200px] -translate-x-2 border-white/10 bg-zinc-950/90 shadow-xl backdrop-blur-sm md:block lg:left-4 lg:w-[220px]">
            <CardContent className="flex items-start gap-3 pt-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                <Check className="size-4" strokeWidth={2.5} />
              </div>
              <div className="space-y-0.5 text-left">
                <p className="text-xs font-medium text-white">Vidéo prête !</p>
                <p className="text-xs text-muted-foreground">18 secondes</p>
              </div>
            </CardContent>
          </Card>

          <div className="relative z-[1] mx-auto w-[min(100%,220px)] shrink-0">
            <div className="aspect-[9/18] w-full rounded-[2rem] border border-white/10 bg-zinc-950 p-2 shadow-2xl ring-1 ring-white/5">
              <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[1.35rem] bg-gradient-to-b from-zinc-900 to-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.06),transparent_55%)]" />
                <div className="relative flex flex-col items-center gap-6 px-6">
                  <div className="flex size-16 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10">
                    <Play className="size-8 fill-white pl-1" />
                  </div>
                  <div className="w-full space-y-2">
                    <div className="h-2 w-full rounded-full bg-white/10" />
                    <div className="mx-auto h-2 w-4/5 rounded-full bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="absolute right-0 top-1/4 z-10 hidden w-[200px] translate-x-2 border-white/10 bg-zinc-950/90 shadow-xl backdrop-blur-sm md:block lg:right-4 lg:w-[230px]">
            <CardContent className="flex items-start gap-3 pt-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
                <Zap className="size-4" />
              </div>
              <div className="space-y-0.5 text-left">
                <p className="text-xs font-medium text-white">Optimisé par l’IA</p>
                <p className="text-xs text-muted-foreground">Pour les réseaux sociaux</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    step: "Étape 1",
    title: "Collez l’URL",
    description: "Indiquez la page produit, landing ou article que vous voulez mettre en avant.",
    icon: LinkIcon,
  },
  {
    step: "Étape 2",
    title: "L’IA s’occupe du reste",
    description:
      "Analyse du contenu, script, voix et mise en forme automatiques pour un rendu pro.",
    icon: Sparkles,
  },
  {
    step: "Étape 3",
    title: "Téléchargez et publiez",
    description: "Export prêt pour TikTok, Instagram, LinkedIn ou vos campagnes publicitaires.",
    icon: Download,
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Comment ça marche
          </h2>
          <p className="mt-4 text-muted-foreground">
            Trois étapes simples pour passer du lien à la vidéo prête à diffuser.
          </p>
        </div>

        <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          <div
            className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block"
            aria-hidden
          />
          {steps.map((s) => (
            <div key={s.title} className="relative flex flex-col items-center text-center">
              <div className="relative z-[1] flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                <s.icon className="size-5" />
              </div>
              <p className="mt-6 text-xs font-medium uppercase tracking-wider text-violet-400/90">
                {s.step}
              </p>
              <h3 className="mt-2 font-heading text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Clock,
    stat: "10× plus rapide",
    title: "Gagnez des heures",
    description: "Fini le montage manuel : la vidéo est structurée et stylée automatiquement.",
  },
  {
    icon: Sparkles,
    stat: "3× plus d’engagement",
    title: "Pensé pour le scroll",
    description: "Rythme, sous-titres et hooks adaptés aux flux courts des réseaux sociaux.",
  },
  {
    icon: Zap,
    stat: "Zéro friction",
    title: "Prêt à l’emploi",
    description: "Des exports optimisés pour chaque plateforme, sans réglages compliqués.",
  },
];

function FeaturesSection() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Pourquoi les équipes choisissent Clipify
          </h2>
          <p className="mt-4 text-muted-foreground">
            Moins de temps en production, plus de temps sur le message et la diffusion.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <Card
              key={f.title}
              className="border-white/10 bg-zinc-950/80 ring-white/5 transition-colors hover:border-white/15"
            >
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
                  <f.icon className="size-5" />
                </div>
                <p className="pt-2 font-heading text-2xl font-semibold text-white">{f.stat}</p>
                <CardTitle className="text-lg">{f.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {f.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const freeFeatures = [
  "1 vidéo par mois",
  "Watermark Clipify",
  "Résolution 720p",
];
const proFeatures = [
  "Vidéos illimitées",
  "Sans watermark",
  "Voix & styles premium",
  "Export 1080p & vertical",
  "Support prioritaire",
];

function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24 px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Tarifs simples
          </h2>
          <p className="mt-4 text-muted-foreground">
            Commencez gratuitement, passez en Pro quand vous scalez vos campagnes.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Card className="border-white/10 bg-zinc-950/80">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Gratuit</CardTitle>
              <CardDescription className="text-base">Pour tester sur un projet.</CardDescription>
              <p className="pt-4 font-heading text-4xl font-semibold text-white">0 €</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {freeFeatures.map((line) => (
                <div key={line} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 shrink-0 text-emerald-500" strokeWidth={2.5} />
                  {line}
                </div>
              ))}
            </CardContent>
            <CardFooter className="border-t border-white/5 bg-transparent pt-6">
              <Button variant="outline" className="w-full rounded-xl" size="lg">
                Commencer gratuitement
              </Button>
            </CardFooter>
          </Card>

          <Card
            className={cn(
              "relative border-violet-500/40 bg-zinc-950/90 shadow-[0_0_60px_-12px_rgba(139,92,246,0.35)]",
              "ring-1 ring-violet-500/30"
            )}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="border border-violet-400/40 bg-violet-600 px-3 text-white">
                Le plus populaire
              </Badge>
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="font-heading text-2xl">Pro</CardTitle>
              <CardDescription className="text-base">Pour les équipes marketing & créateurs.</CardDescription>
              <p className="pt-4 font-heading text-4xl font-semibold text-white">
                29 €<span className="text-lg font-normal text-muted-foreground">/mois</span>
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              {proFeatures.map((line) => (
                <div key={line} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 shrink-0 text-emerald-500" strokeWidth={2.5} />
                  {line}
                </div>
              ))}
            </CardContent>
            <CardFooter className="border-t border-white/5 bg-transparent pt-6">
              <Button className="w-full rounded-xl" size="lg">
                Essai gratuit
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="px-4 pb-24 pt-4 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-950 to-black px-6 py-16 text-center sm:px-12">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Prêt à faire le buzz ?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Collez votre première URL et obtenez une vidéo promotionnelle prête à être partagée sur
          tous vos canaux.
        </p>
        <Button size="lg" className="mt-8 rounded-xl px-8" render={<a href="#" />}>
          Créer gratuitement
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/5 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2">
            <LogoMark className="size-7" />
            <span className="font-heading font-semibold text-white">Clipify</span>
          </div>
          <nav className="flex items-center gap-6 md:hidden">
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Comment ça marche
            </a>
            <a
              href="#pricing"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Tarifs
            </a>
          </nav>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Clipify</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-black text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
