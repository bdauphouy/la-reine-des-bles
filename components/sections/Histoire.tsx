import { SectionTitle } from "@/components/ui/SectionTitle";
import Image from "next/image";

export function Histoire() {
  return (
    <section id="histoire" className="w-full bg-canvas">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <SectionTitle
            align="left"
            eyebrow="Notre histoire"
            title="Un ancrage local, avant tout"
          />
          <p className="text-lg leading-[1.56] text-body">
            La Reine des Blés est née d&apos;une conviction simple : une boulangerie doit
            avant tout être au service de son quartier. À Guémené-Penfao, nous avons à cœur
            de rester ce commerce de proximité où l&apos;on connaît ses clients par leur
            prénom et où la porte reste toujours ouverte, matin après matin.
          </p>
          <p className="text-lg leading-[1.56] text-body">
            Cet engagement, nous l&apos;avons prouvé fin 2025 : plutôt que de fermer boutique
            le temps des travaux de rénovation, nous avons choisi de continuer à vous servir
            chaque jour. Une décision qui résume bien notre état d&apos;esprit —
            l&apos;artisanat local et sincère, avant tout.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-md lg:w-1/2">
          <Image
            src="/gallery/photo-47.jpg"
            alt="Fougasses façonnées à la main dans notre fournil"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
