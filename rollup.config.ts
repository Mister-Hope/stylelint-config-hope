import esbuild from "rollup-plugin-esbuild";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: "./dist/index.js",
      format: "esm",
    },
    {
      file: "./dist/index.cjs",
      format: "cjs",
    },
  ],
  plugins: [
    esbuild({
      minify: true,
      target: "node18",
    }),
  ],
};
