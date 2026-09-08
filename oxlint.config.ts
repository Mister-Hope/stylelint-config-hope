import { defineHopeConfig } from "oxc-config-hope/oxlint";

export default defineHopeConfig(
  {
    rules: {
      "jsdoc/check-tag-names": ["warn", { definedTags: ["experimental"] }],
    },
  },
  {
    files: ["src/paths.ts"],
    rules: {
      // __filename is required to resolve dependencies in the CJS build
      "unicorn/prefer-module": "off",
      // node builtins are required for ESM resolution in a node-only package
      "import/no-nodejs-modules": "off",
    },
  },
);
