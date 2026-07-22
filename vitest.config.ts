import { defineConfig } from "vitest/config";

// Keep vitest to the unit tests under src/. The Playwright capture specs live
// in e2e/ and are run by `npm run e2e` (playwright), not vitest — without this
// scope, vitest would try to collect them and fail on the Playwright runner.
export default defineConfig({
  test: {
    include: ["src/**/*.test.ts"],
  },
});
