import type { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
  scripts: {
    hello: {
      cmd: "deno run hello_deno.ts",
      "allow": ["run"]
    },
    "constructor:constructor_function": {
      cmd: "deno run src/constructor_pattern/constructor_function/example.js",
    },
    "constructor:prototype_constructor": {
      cmd: "deno run src/constructor_pattern/prototype_constructor/example.js",
    },
  },
};

export default config;