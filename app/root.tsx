// app/root.tsx
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
} from "@remix-run/react";

// Composants globaux
import TopNavbar from "./components/Nav/TopNavbar";
import Footer from "./components/Sections/Footer";

// CSS global
import slickBaseUrl       from "slick-carousel/slick/slick.css";
import slickThemeUrl      from "slick-carousel/slick/slick-theme.css";
import indexStylesUrl from "./style/index.css";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: slickBaseUrl },
  { rel: "stylesheet", href: slickThemeUrl },
  { rel: "stylesheet", href: indexStylesUrl }, // ← grille Flexbox ici
  // Polices Google (facultatif)
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export default function App() {
  return (
    <html lang="fr">
      <head>
        {/* Injection des <link> (CSS & polices) */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>
      <body>
        <div id="top"></div>
        {/* En‑tête commun à toutes les pages */}
        <TopNavbar />

        {/* Contenu spécifique à chaque route (index.tsx, divers.tsx…) */}
        <Outlet />

        {/* Pied de page commun */}
        <Footer />

        {/* Hooks Remix indispensables */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
