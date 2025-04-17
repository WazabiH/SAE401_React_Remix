// app/routes/index.tsx
import type { LinksFunction } from "@remix-run/node";

import Hero from "../components/Hero";
import Accueil from "../components/Accueil";

// CSS spécifique à la home (facultatif)
import stylesUrl from "../style/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function Index() {
  return (
    <main>
      {/* 1) La bannière Hero */}
      <Hero
        heroImage="../images/Hero_home1.png"  // chemin racine vers public/images
        title=""
        description=""
        buttonText=""
        scrollTo={() => {
          document
            .getElementById("divers")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 2) Ton composant Accueil */}
      <Accueil />
    </main>
  );
}
