// app/routes/index.tsx
import type { LinksFunction } from "@remix-run/node";

import Hero from "~/components/Hero";
import Accueil from "~/components/Accueil";
import stylesUrl from "~/style/index.css";
import flexboxUrl    from "~/style/flexboxgrid.min.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: flexboxUrl },
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
    <main>
      <Hero
        heroImage="/images/Hero_home1.png"
        title="Bienvenue sur APIRP"
        description="Association des professeurs d’italien de la région parisienne"
        buttonText="En savoir plus"
        scrollTo={() => {
          const target = document.getElementById("divers");
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <Accueil />
    </main>
  );
}
