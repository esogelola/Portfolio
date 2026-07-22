import { test } from "@playwright/test";

type Route = { name: string; path: string };
type Size = { name: string; width: number; height: number };
type Theme = "light" | "dark";

const routes: Route[] = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "essay", path: "/writing/vishing-at-scale" },
];

const sizes: Size[] = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1280, height: 900 },
];

const themes: Theme[] = ["light", "dark"];

for (const route of routes) {
  for (const size of sizes) {
    for (const theme of themes) {
      test(`capture ${route.name}-${size.name}-${theme}`, async ({ page }) => {
        await page.setViewportSize({ width: size.width, height: size.height });

        // Seed theme via localStorage BEFORE the app's first JS runs.
        await page.addInitScript((t) => {
          localStorage.setItem("theme", t);
        }, theme);

        await page.goto(route.path);
        await page.waitForLoadState("networkidle");
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(500);

        await page.screenshot({
          path: `test-results/screenshots/${route.name}-${size.name}-${theme}.png`,
          fullPage: true,
        });
      });
    }
  }
}
