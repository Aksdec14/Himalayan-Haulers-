import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored tooling, not app source. Without this, every lint run reports
    // ~94 no-unused-expressions warnings from minified third-party scripts and
    // buries anything real. Add it to .gitignore too if it is not tracked.
    ".agents/**",
  ]),
]);

export default eslintConfig;
