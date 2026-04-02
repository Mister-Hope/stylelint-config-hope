import { defineHopeConfig } from "oxc-config-hope/oxlint";

export default defineHopeConfig({
  rules: {
    "jsdoc/check-tag-names": ["warn", { definedTags: ["experimental"] }],
  },
});
