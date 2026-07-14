// Placeholder for the future "Nos Pains" section.
// Once product data/photos are available, follow the same pattern as
// Actualites.tsx / Contact.tsx: a <SectionTitle> header followed by a
// responsive grid of bread cards (name, description, price, photo).
//
// import { SectionTitle } from "@/components/ui/SectionTitle";
//
// interface Bread {
//   name: string;
//   description: string;
//   price: string;
// }
//
// const BREADS: Bread[] = [];
//
// export function NosPains() {
//   return (
//     <section id="nos-pains" className="w-full bg-canvas">
//       <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
//         <SectionTitle eyebrow="Nos pains" title="Façonnés chaque jour, à la main" />
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {BREADS.map((bread) => (
//             <article
//               key={bread.name}
//               className="flex flex-col gap-2 rounded-md border border-hairline bg-surface-card p-6"
//             >
//               <h3 className="font-display text-xl font-semibold text-ink">
//                 {bread.name}
//               </h3>
//               <p className="text-sm text-charcoal">{bread.description}</p>
//               <span className="text-sm font-semibold text-primary">{bread.price}</span>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
