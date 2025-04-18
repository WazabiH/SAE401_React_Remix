// app/routes/activites.tsx
import type { LinksFunction } from "@remix-run/node";
import { HeaderActivités, Activités } from "../components/Sections/Activités";
import flexboxUrl    from "~/style/flexboxgrid.min.css";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: flexboxUrl },

];

export default function ActivitesRoute() {
  return (
    <>
      <HeaderActivités />
      <Activités />
    </>
  );
}
