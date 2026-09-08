import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "./src/index.ts",
  outDir: "./dist",
  format: ["cjs", "esm"],
  fixedExtension: false,
  target: "node22",
  dts: true,
  minify: true,
  shims: true,
  cjsDefault: false,
  deps: {
    alwaysBundle: ["import-meta-resolve"],
    onlyBundle: false,
  },
});
