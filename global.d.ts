// global.d.ts
declare namespace JSX {
    interface IntrinsicElements {
      "__STYLES__": any;      // ton placeholder
      [elemName: string]: any; // toutes les autres balises HTML/React
    }
  }
  