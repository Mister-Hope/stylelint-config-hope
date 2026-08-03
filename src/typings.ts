import type { Config } from "stylelint";

export type Rules = Exclude<Config["rules"], undefined>;

export type Override = Exclude<Config["overrides"], undefined>[number];
