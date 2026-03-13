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
import slickBaseUrl from "slick-carousel/slick/slick.css?url";
import slickThemeUrl from "slick-carousel/slick/slick-theme.css?url";
import indexStylesUrl from "./style/index.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: slickBaseUrl },
  { rel: "stylesheet", href: slickThemeUrl },
  { rel: "stylesheet", href: indexStylesUrl },
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>
      <body>
        <div id="top"></div>
        <TopNavbar />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}