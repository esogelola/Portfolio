import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { fetchNowPlaying, type Track } from "../../lib/spotify";
import flim from "../../assets/audio/flim.mp3";

/**
 * NowPlaying is a quiet, cohesive Spotify line with a real play control.
 *
 * On mount it asks the (always-resolving) spotify lib for a track. A small
 * play/pause button plays a local clip for the "on repeat" fallback (Flim);
 * the title links out to Spotify. While the promise is in flight it shows a
 * faint skeleton rather than flashing an empty line.
 */
export default function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let alive = true;
    fetchNowPlaying().then((t) => {
      if (alive) setTrack(t);
    });
    return () => {
      alive = false;
    };
  }, []);

  // Only the local fallback ("on repeat") has an audio clip to play.
  const playable = track ? !track.isLive : false;

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  if (!track) {
    return (
      <div className="flex items-center gap-2 font-mono text-xs text-ink-faint">
        <span className="h-7 w-7 animate-pulse rounded-full bg-ink-faint/15" />
        <span className="h-3 w-40 animate-pulse rounded bg-ink-faint/15" />
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-xs">
      {playable ? (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1DB954] text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
        >
          {playing ? <FaPause className="h-2.5 w-2.5" /> : <FaPlay className="ml-0.5 h-2.5 w-2.5" />}
        </button>
      ) : (
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DB954] opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1DB954]" />
        </span>
      )}

      <span className="uppercase tracking-[0.16em] text-ink-faint">
        {track.isLive ? "Now Playing" : playing ? "Playing" : "On repeat"}
      </span>
      <a
        href={track.url}
        target="_blank"
        rel="noopener noreferrer"
        className="truncate text-ink-soft transition-colors hover:text-ink hover:underline dark:text-parchment-soft dark:hover:text-parchment"
      >
        {track.title} <span className="text-ink-faint">·</span> {track.artist}
      </a>

      {playable && (
        <audio ref={audioRef} src={flim} onEnded={() => setPlaying(false)} preload="none" />
      )}
    </div>
  );
}
