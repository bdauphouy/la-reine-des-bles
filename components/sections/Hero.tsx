import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="accueil" className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/gallery/photo-37.jpg"
          alt="L'équipe de La Reine des Blés derrière le comptoir de la boutique"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-deep/90 via-surface-deep/50 to-surface-deep/20" />
      </div>

      <div className="relative mx-auto flex min-h-[560px] max-w-6xl flex-col items-start justify-center gap-6 px-4 py-24 text-left sm:min-h-[640px] sm:px-6 sm:py-32 lg:min-h-[720px] lg:px-10 lg:py-40">
        <span className="inline-flex items-center rounded-full border border-divider-dark bg-white/10 px-2.5 py-1 text-xs text-on-dark-mute">
          Boulangerie artisanale · Guémené-Penfao
        </span>
        <h1 className="font-display text-[40px] font-bold leading-none tracking-[-1.5px] text-on-dark sm:text-[56px] sm:tracking-[-1.8px] lg:text-[72px]">
          Bienvenue à La Reine des Blés
        </h1>
        <p className="max-w-xl text-lg leading-[1.56] text-on-dark-mute sm:text-xl">
          Ici, chaque pain est pétri, façonné et cuit avec le même soin qu&apos;à nos
          débuts. Un artisanat local et sincère, pensé pour faire de votre boulangerie un
          vrai lieu de vie et de partage.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#contact" variant="primary">
            Venir en boutique
          </Button>
          <Button href="#actualites" variant="outline">
            Découvrir nos actualités
          </Button>
        </div>
      </div>
    </section>
  );
}
