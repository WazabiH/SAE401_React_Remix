// app/routes/index.tsx
import type { LinksFunction } from "@remix-run/node";
import Accueil from "~/components/Accueil";        // ← ton vrai composant
import stylesUrl from "~/style/index.css";
import flexboxUrl from "~/style/flexboxgrid.min.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: flexboxUrl },
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
    <main>
      <Accueil />
    </main>
  );
}
