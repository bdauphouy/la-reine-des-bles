// Placeholder for the future "Nos Pâtisseries" section.
// Same structure as NosPains.tsx: a <SectionTitle> header followed by a
// responsive grid of pastry cards (name, description, price, photo).
//
// import { SectionTitle } from "@/components/ui/SectionTitle";
//
// interface Pastry {
//   name: string;
//   description: string;
//   price: string;
// }
//
// const PASTRIES: Pastry[] = [];
//
// export function NosPatisseries() {
//   return (
//     <section id="nos-patisseries" className="w-full bg-surface-bone">
//       <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
//         <SectionTitle eyebrow="Nos pâtisseries" title="Des gourmandises pensées avec soin" />
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {PASTRIES.map((pastry) => (
//             <article
//               key={pastry.name}
//               className="flex flex-col gap-2 rounded-md border border-hairline bg-surface-card p-6"
//             >
//               <h3 className="font-display text-xl font-semibold text-ink">
//                 {pastry.name}
//               </h3>
//               <p className="text-sm text-charcoal">{pastry.description}</p>
//               <span className="text-sm font-semibold text-primary">{pastry.price}</span>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
