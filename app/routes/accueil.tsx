// app/routes/accueil.tsx
import { redirect } from "@remix-run/node";

export const loader = () => {
  return redirect("/");
};

export default function AccueilRedirect() {
  return null;
}
