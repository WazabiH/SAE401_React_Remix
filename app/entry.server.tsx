import { RemixServer } from "@remix-run/react";
import type { EntryContext } from "@remix-run/node";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  // 1️⃣ Nouvelle instance pour CHAQUE requête
  const sheet = new ServerStyleSheet();
  let html: string;
  let styles: string;

  try {
    // 2️⃣ Envelopper le rendu pour collecter les styles
    html = renderToString(
      sheet.collectStyles(
        <RemixServer context={remixContext} url={request.url} />
      )
    );
    // 3️⃣ Récupérer les <style> générées
    styles = sheet.getStyleTags();
  } finally {
    // 4️⃣ Sceller la feuille de styles
    sheet.seal();
  }

  // 5️⃣ Injecter le HTML et remplacer le placeholder
  responseHeaders.set("Content-Type", "text/html");
  const markup =
    "<!DOCTYPE html>" + html.replace("__STYLES__", styles);

  return new Response(markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
