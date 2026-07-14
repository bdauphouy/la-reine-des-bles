import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const HOURS = [
  { day: "Lundi", hours: "6h30 – 19h00" },
  { day: "Mardi", hours: "6h30 – 19h00" },
  { day: "Mercredi", hours: "Fermé" },
  { day: "Jeudi", hours: "6h30 – 19h00" },
  { day: "Vendredi", hours: "6h30 – 19h00" },
  { day: "Samedi", hours: "6h30 – 19h00" },
  { day: "Dimanche", hours: "7h00 – 13h00" },
] as const;

export function Contact() {
  return (
    <section id="contact" className="w-full bg-surface-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="max-w-xl">
          <SectionTitle
            tone="dark"
            align="left"
            eyebrow="Nous trouver"
            title="Venez nous rendre visite"
            subtitle="Toute l'équipe de La Reine des Blés vous accueille avec plaisir dans notre boutique rénovée, au cœur de Guémené-Penfao."
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-lg bg-surface-card p-6 sm:p-8">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-charcoal">
                  Adresse
                </span>
                <address className="not-italic text-base text-ink">
                  1 Rue Garde Dieu
                  <br />
                  44290 Guémené-Penfao, France
                </address>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-charcoal">
                  Téléphone
                </span>
                <a
                  href="tel:0244040732"
                  className="text-base font-semibold text-primary transition-colors hover:text-primary-deep"
                >
                  02 44 04 07 32
                </a>
              </div>

              <Button href="tel:0244040732" variant="primary" className="w-full">
                Nous appeler
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col gap-4 rounded-lg bg-surface-card p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-charcoal">
                Horaires d&apos;ouverture
              </span>
              <ul className="flex flex-col divide-y divide-hairline">
                {HOURS.map((slot) => (
                  <li key={slot.day} className="flex items-center justify-between py-2 text-sm">
                    <span className="font-medium text-ink">{slot.day}</span>
                    <span className={slot.hours === "Fermé" ? "text-ash" : "text-ink"}>
                      {slot.hours}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-ash">Les horaires peuvent varier les jours fériés.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
