import type { Config } from "stylelint";

import { orderOptions } from "./orderOptions.js";
import { propertiesOrderOptions } from "./propertiesOrderOptions.js";

export const orderRules = {
  "order/order": [
    orderOptions,
    {
      unspecified: "ignore",
      severity: "warning",
    },
  ],
  "order/properties-order": [
    propertiesOrderOptions,
    {
      unspecified: "bottomAlphabetical",
      emptyLineBeforeUnspecified: "threshold",
      emptyLineMinimumPropertyThreshold: 5,
      severity: "warning",
    },
  ],
};

export const order: Config = {
  plugins: ["stylelint-order"],
  rules: orderRules,
};
