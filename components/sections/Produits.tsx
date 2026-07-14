import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

const CATEGORIES = [
  {
    image: "/gallery/photo-11.jpg",
    alt: "Baguettes tradition alignées à la sortie du four",
    title: "Nos pains",
    description: "Tradition, campagne, céréales… façonnés chaque matin.",
  },
  {
    image: "/gallery/photo-45.jpg",
    alt: "Brioche en forme de cœur, spécialité maison",
    title: "Nos viennoiseries",
    description: "Croissants et pains au chocolat pur beurre.",
  },
  {
    image: "/gallery/photo-22.jpg",
    alt: "Galette des rois La Reine des Blés",
    title: "Nos pâtisseries",
    description: "Des gourmandises pensées avec soin, pour toutes les occasions.",
  },
] as const;

export function Produits() {
  return (
    <section id="produits" className="w-full bg-canvas">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <SectionTitle
          eyebrow="Nos produits"
          title="Une gamme pensée chaque jour"
          subtitle="Pains, viennoiseries et pâtisseries : le détail de notre carte arrive très prochainement sur ce site."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {CATEGORIES.map((category, index) => (
            <Reveal key={category.title} delay={index * 100}>
              <div className="flex flex-col overflow-hidden rounded-md border border-hairline bg-surface-card">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-2 p-6 text-center">
                  <h3 className="font-display text-[24px] font-semibold leading-[1.33] tracking-[-0.35px] text-ink">
                    {category.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal">{category.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
