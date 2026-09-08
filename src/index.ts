import type { Config } from "stylelint";

import { orderRules } from "./order/index.js";
import { orderPlugin, standardConfig } from "./paths.js";
import { scssConfig } from "./scss.js";
import type { Rules } from "./typings.js";

export { scssConfig } from "./scss.js";

export const defaultRules: Rules = {
  // disabled for properties order
  "declaration-empty-line-before": null,

  // new rules
  "color-hex-alpha": "never",
  "color-hex-length": "short",
  "color-named": "never",
  "max-nesting-depth": [
    3,
    {
      ignoreAtRules: ["blockless-at-rules", "pseudo-classes", "media", "print", "supports"],
    },
  ],
  "selector-max-attribute": 2,
  "selector-max-class": 4,
  "selector-max-compound-selectors": 4,
  "selector-max-id": 1,
  ...orderRules,
};

export interface HopeStylelintOptions extends Config {
  scss?: boolean;
  vue?: boolean;
  scssInVue?: boolean;
}

export const defineHopeConfig = ({
  rules = {},
  scss = false,
  vue = false,
  scssInVue = false,
  overrides = [],
  ...rest
}: HopeStylelintOptions = {}): Config => {
  const finalOverrides = [...overrides];

  if (vue) {
    finalOverrides.unshift({
      files: ["**/*.vue"],
      customSyntax: "postcss-html",
    });
  }

  if (scss) {
    if (vue && scssInVue) {
      finalOverrides[0] = {
        ...finalOverrides[0],
        ...scssConfig,
      };
    }

    finalOverrides.unshift({
      files: ["**/*.scss"],
      ...scssConfig,
    });
  }

  return {
    extends: [standardConfig],
    plugins: [orderPlugin],
    ...rest,
    rules: {
      ...defaultRules,
      ...rules,
    },
    overrides: finalOverrides,
  };
};

// Default export so that `extends: ["stylelint-config-hope"]` in a
// stylelintrc file keeps working, matching the pre-v12 behavior.
// SCSS and Vue support are enabled to preserve the old defaults.
export default defineHopeConfig({ scss: true, vue: true, scssInVue: true });
