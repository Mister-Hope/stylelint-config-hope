import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "./src/index.ts",
  outDir: "./dist",
  format: ["cjs", "esm"],
  exports: {
    packageJson: false,
  },
  fixedExtension: false,
  target: "node20",
  dts: true,
  minify: true,
});
