import { describe, it, expect } from "vitest";
import { getPosts, getFeaturedPost, getProjects } from "./content";

describe("content integrity", () => {
  it("has exactly one featured post", () => {
    expect(getPosts().filter((p) => p.featured)).toHaveLength(1);
    expect(getFeaturedPost()).toBeTruthy();
  });
  it("never exposes the stealth company", () => {
    // Synchronized stays hidden; Munk Financial is intentionally shown.
    const blob = JSON.stringify([...getPosts(), ...getProjects()]).toLowerCase();
    expect(blob).not.toContain("synchronized");
  });
  it("live posts have a url; soon posts do not link out", () => {
    for (const p of getPosts()) {
      if (p.state === "live" && !p.local) expect(p.url).toMatch(/^https?:\/\//);
      if (p.state === "soon") expect(p.url).toBe("");
    }
  });
  it("local essays carry a markdown file", () => {
    for (const p of getPosts()) if (p.local) expect(p.markdownFile).toBeTruthy();
  });
});
