import { fileURLToPath, pathToFileURL } from "node:url";

import { resolve as resolvePackage } from "import-meta-resolve";

// resolve the preset and plugin from this package's own dependencies with ESM
// resolution, so consumers do not have to declare them in their own project.
const base = pathToFileURL(__filename).href;

const resolvePath = (id: string): string => fileURLToPath(resolvePackage(id, base));

export const standardConfig = resolvePath("stylelint-config-standard");
export const scssStandardConfig = resolvePath("stylelint-config-standard-scss");
export const orderPlugin = resolvePath("stylelint-order");
