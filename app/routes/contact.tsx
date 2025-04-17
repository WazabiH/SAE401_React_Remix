// app/routes/contact.tsx
import { Contact, Assoc, Elu, Bulletin } from "~/components/Sections/Contact";

export default function ContactRoute() {
  return (
    <>
      <Contact />
      <Assoc />
      <Elu />
      <Bulletin />
    </>
  );
}
