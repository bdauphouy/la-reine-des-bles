import { SectionTitle } from "@/components/ui/SectionTitle";
import Image from "next/image";

export function Actualites() {
  return (
    <section id="actualites" className="w-full bg-surface-bone">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <SectionTitle
          eyebrow="Actualités"
          title="Notre boutique fait peau neuve"
          subtitle="Fin 2025, nous avons rénové notre boutique pour vous offrir un cadre encore plus chaleureux — sans jamais fermer nos portes."
        />

        <div className="grid gap-6 rounded-lg border border-hairline bg-surface-card p-6 sm:p-10 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-12">
          <div className="relative h-full min-h-[220px] overflow-hidden rounded-md">
            <Image
              src="/gallery/photo-43.jpg"
              alt="Notre vitrine de pâtisseries dans la boutique rénovée"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-[24px] font-semibold leading-[1.33] tracking-[-0.35px] text-ink">
              Rénovée fin 2025, toujours ouverte pour vous
            </h3>
            <p className="text-base leading-relaxed text-body">
              Parce que votre pain quotidien ne pouvait pas attendre, nous avons choisi de
              mener les travaux de rénovation de notre boutique sans jamais fermer nos
              portes. Une boulangerie flambant neuve, la même équipe passionnée, et le même
              engagement à vous servir chaque jour — c&apos;est notre façon de dire merci à
              celles et ceux qui nous font confiance depuis toujours.
            </p>
            <p className="text-base leading-relaxed text-body">
              Venez découvrir notre nouvel espace, pensé pour être encore plus accueillant,
              tout en gardant l&apos;âme artisanale qui fait la réputation de La Reine des
              Blés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
