import { describe, it, expect } from "vitest";
import { parseNowPlaying, FALLBACK_TRACK } from "./spotify";

describe("parseNowPlaying", () => {
  it("returns fallback when payload is empty (204 / nothing playing)", () => {
    expect(parseNowPlaying(null)).toEqual(FALLBACK_TRACK);
  });
  it("maps a playing item to a Track", () => {
    const payload = {
      is_playing: true,
      item: { name: "Flim", artists: [{ name: "Aphex Twin" }],
        external_urls: { spotify: "https://open.spotify.com/track/x" } },
    };
    expect(parseNowPlaying(payload)).toEqual({
      isLive: true, title: "Flim", artist: "Aphex Twin",
      url: "https://open.spotify.com/track/x",
    });
  });
  it("falls back when is_playing is false", () => {
    expect(parseNowPlaying({ is_playing: false, item: null })).toEqual(FALLBACK_TRACK);
  });
});
