"use client";

import { useMemo, useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

interface Product {
  id: string;
  name: string;
  price: number;
  icon: string;
}

const PRODUCTS: Product[] = [
  { id: "baguette", name: "Baguette tradition", price: 1.3, icon: "🥖" },
  { id: "campagne", name: "Pain de campagne", price: 3.5, icon: "🍞" },
  { id: "croissant", name: "Croissant pur beurre", price: 1.4, icon: "🥐" },
  { id: "chocolat", name: "Pain au chocolat", price: 1.5, icon: "🍫" },
];

export function OnlineOrder() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const itemCount = useMemo(
    () => Object.values(quantities).reduce((sum, qty) => sum + qty, 0),
    [quantities],
  );

  const total = useMemo(
    () =>
      PRODUCTS.reduce((sum, product) => sum + (quantities[product.id] ?? 0) * product.price, 0),
    [quantities],
  );

  function updateQuantity(id: string, delta: number) {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, (prev[id] ?? 0) + delta) }));
    setSubmitted(false);
  }

  return (
    <section id="commande" className="w-full bg-canvas">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-full border border-hairline bg-surface-card px-2.5 py-1 text-xs text-charcoal">
            Aperçu — bientôt disponible
          </span>
          <SectionTitle eyebrow="Commande en ligne" title="Réservez vos gourmandises à l'avance" />
          <p className="max-w-2xl text-lg leading-[1.56] text-charcoal">
            Un aperçu de notre future commande en ligne : composez votre panier, on prépare le
            reste. Cette fonctionnalité est en cours de finalisation et n&apos;est pas encore
            active.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {PRODUCTS.map((product, index) => {
              const quantity = quantities[product.id] ?? 0;
              return (
                <Reveal key={product.id} delay={index * 80}>
                  <div className="flex items-center justify-between gap-4 rounded-md border border-hairline bg-surface-card p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl" aria-hidden="true">
                        {product.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-ink">{product.name}</span>
                        <span className="text-xs text-charcoal">
                          {product.price.toFixed(2)} €
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, -1)}
                        aria-label={`Retirer un ${product.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline-strong text-ink transition-colors hover:bg-canvas"
                      >
                        −
                      </button>
                      <span className="w-4 text-center text-sm font-semibold text-ink">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, 1)}
                        aria-label={`Ajouter un ${product.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline-strong text-ink transition-colors hover:bg-canvas"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 rounded-lg bg-surface-dark p-6 text-on-dark sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-on-dark-mute">
              Votre panier
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-on-dark-mute">
                {itemCount} article{itemCount > 1 ? "s" : ""}
              </span>
              <span className="font-display text-2xl font-bold text-on-dark">
                {total.toFixed(2)} €
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(true)}
              disabled={itemCount === 0}
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-on-primary transition-colors hover:bg-primary-deep disabled:cursor-not-allowed disabled:opacity-50"
            >
              Valider ma commande
            </button>

            {submitted && (
              <p className="text-sm text-on-dark-mute">
                Merci ! La commande en ligne arrive bientôt — en attendant, appelez-nous au{" "}
                <a href="tel:0244040732" className="font-semibold text-primary">
                  02 44 04 07 32
                </a>
                .
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
