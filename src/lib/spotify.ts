export interface Track { isLive: boolean; title: string; artist: string; url: string; }

export const FALLBACK_TRACK: Track = {
  isLive: false,
  title: "Flim",
  artist: "Aphex Twin",
  url: "https://open.spotify.com/track/2Hb8eqygyTQinJChM4S2qX",
};

interface SpotifyNowPlaying {
  is_playing?: boolean;
  item?: {
    name?: string;
    artists?: { name: string }[];
    external_urls?: { spotify?: string };
  };
}

export function parseNowPlaying(payload: unknown): Track {
  const data = payload as SpotifyNowPlaying | null | undefined;
  if (!data || data.is_playing !== true || !data.item) return FALLBACK_TRACK;
  const item = data.item;
  return {
    isLive: true,
    title: item.name as string,
    artist: (item.artists ?? []).map((a) => a.name).join(", "),
    url: item.external_urls?.spotify ?? FALLBACK_TRACK.url,
  };
}

// Network fetch is best-effort; any failure resolves to the fallback.
export async function fetchNowPlaying(): Promise<Track> {
  const token = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN as string | undefined;
  if (!token) return FALLBACK_TRACK;
  try {
    const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.status === 204 || !res.ok) return FALLBACK_TRACK;
    return parseNowPlaying(await res.json());
  } catch {
    return FALLBACK_TRACK;
  }
}
