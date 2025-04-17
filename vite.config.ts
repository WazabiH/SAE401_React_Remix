import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";            
import tsconfigPaths from "vite-tsconfig-paths";     
import { vitePlugin as remix } from "@remix-run/dev";

export default defineConfig({
  plugins: [
    // 1️⃣ Plugin React, avec Babel + styled-components pour SSR
    react({
      babel: {
        plugins: [
          ["babel-plugin-styled-components", { ssr: true, displayName: true }],
        ],
      },
    }),
    // 2️⃣ Résolution des chemins d’après tsconfig.json
    tsconfigPaths(),
    // 3️⃣ Plugin officiel Remix
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
  ],
  // 4️⃣ Force Vite à inclure styled-components dans le bundle SSR
  ssr: {
    noExternal: ["styled-components"],
  },
  server: {
    hmr: {
      overlay: false, // désactive l’overlay d’erreur Vite
    },
  },
});
