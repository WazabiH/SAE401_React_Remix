// babel.config.js
module.exports = {
    presets: ["@babel/preset-typescript", "@babel/preset-react"],
    plugins: [
      ["babel-plugin-styled-components", { ssr: true, displayName: true }]
    ]
  };
   