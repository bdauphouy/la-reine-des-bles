import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

const PILLARS = [
  {
    image: "/gallery/photo-03.jpg",
    alt: "Brioche nantaise dorée, tout juste sortie du four",
    title: "Des farines choisies",
    description:
      "Nous sélectionnons nos farines avec exigence, pour des pains au goût authentique et régulier.",
  },
  {
    image: "/gallery/photo-54.jpg",
    alt: "Fougasses façonnées à la main avant cuisson",
    title: "Un temps de pousse respecté",
    description:
      "Fermentation lente et façonnage à la main : le temps est notre meilleur ingrédient.",
  },
  {
    image: "/gallery/photo-16.jpg",
    alt: "Préparation quotidienne dans notre fournil",
    title: "Une cuisson chaque jour",
    description:
      "Tout est cuit sur place, chaque jour, pour vous garantir fraîcheur et gourmandise.",
  },
] as const;

export function SavoirFaire() {
  return (
    <section id="savoir-faire" className="w-full bg-surface-bone">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <SectionTitle
          eyebrow="Notre savoir-faire"
          title="L'artisanat, sans compromis"
          subtitle="De la sélection des farines à la sortie du four, chaque étape est pensée pour préserver le goût et le geste artisanal."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 100}>
              <div className="flex flex-col overflow-hidden rounded-md border border-hairline bg-surface-card">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-2 p-6 text-center">
                  <h3 className="font-display text-[24px] font-semibold leading-[1.33] tracking-[-0.35px] text-ink">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal">{pillar.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
