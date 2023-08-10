const { build } = require("esbuild");
const fs = require("fs");
build({
  entryPoints: ["index.tsx"],
  bundle: true,
  minify: true,
  sourcemap: false,
  outfile: "dist/compiled.js",
  format: "esm",
  write: false,
}).then(({ outputFiles }) => {
  fs.writeFileSync(
    outputFiles[0].path,
    new TextDecoder()
      .decode(outputFiles[0].contents)
      .replace(new RegExp("import.meta.env", "g"), "undefined")
  );
});
