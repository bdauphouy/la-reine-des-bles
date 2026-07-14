import { Hero } from "@/components/sections/Hero";
import { Histoire } from "@/components/sections/Histoire";
import { SavoirFaire } from "@/components/sections/SavoirFaire";
import { Produits } from "@/components/sections/Produits";
import { OnlineOrder } from "@/components/sections/OnlineOrder";
import { Actualites } from "@/components/sections/Actualites";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";
import { FEATURES } from "@/lib/feature-flags";
// import { NosPains } from "@/components/sections/NosPains";
// import { NosPatisseries } from "@/components/sections/NosPatisseries";

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <Histoire />
      </Reveal>

      <Reveal>
        <SavoirFaire />
      </Reveal>

      <Reveal>
        <Produits />
      </Reveal>

      {/* Future section — see components/sections/NosPains.tsx */}
      {/* <NosPains /> */}

      {/* Future section — see components/sections/NosPatisseries.tsx */}
      {/* <NosPatisseries /> */}

      {FEATURES.onlineOrdering && (
        <Reveal>
          <OnlineOrder />
        </Reveal>
      )}

      <Reveal>
        <Actualites />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
