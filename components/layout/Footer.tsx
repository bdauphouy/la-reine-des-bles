import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-surface-deep text-on-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div className="flex flex-col gap-3">
          <span className="relative block h-16 w-16">
            <Image
              src="/brand/logo.png"
              alt="La Reine des Blés"
              fill
              sizes="80px"
              className="object-contain invert"
            />
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-on-dark-mute">
            Boulangerie artisanale et commerce de proximité, au cœur de Guémené-Penfao.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-on-dark-mute">
            Nous trouver
          </span>
          <address className="not-italic text-on-dark">
            1 Rue Garde Dieu
            <br />
            44290 Guémené-Penfao, France
          </address>
          <a href="tel:0244040732" className="text-on-dark transition-colors hover:text-primary">
            02 44 04 07 32
          </a>
        </div>

        <div className="w-full overflow-hidden rounded-md border border-divider-dark lg:w-80">
          <iframe
            src="https://maps.google.com/maps?q=1+Rue+Garde+Dieu,+44290+Gu%C3%A9men%C3%A9-Penfao,+France&output=embed"
            title="Localisation de La Reine des Blés sur la carte"
            width="100%"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="border-t border-divider-dark px-4 py-4 sm:px-6 lg:px-10">
        <p className="mx-auto max-w-6xl text-xs text-on-dark-mute">
          © {new Date().getFullYear()} La Reine des Blés — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
