import { useState, useRef } from "react";
import sadeImgUrl from "../../assets/images/about/spotify/sade.png";
import SocialCard from "./SocialCard";
import "./SpotifyCard.css";
import { FaPlay, FaPause } from "react-icons/fa";
import sadeSongUrl from "../../assets/songs/sade_like_a_tattoo.mov";

function SpotifyCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlaySnippet = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSongEnd = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset song to the beginning
      setIsPlaying(false); // Set play button to initial state
    }
  };

  return (
    <div className="flex flex-col justify-center items-stretch  mt-6 ">
      <div className="relative flex items-center  space-x-4 w-[260px] h-[111.80px] bg-white rounded-lg shadow p-4 ">
        {/* Dancing Icon (Play/Pause Button) */}
        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={handlePlaySnippet}
        >
          {isPlaying ? (
            <FaPause className="h-4 w-4 text-stone-500 hover:text-black hover:scale-110 transition-transform" />
          ) : (
            <FaPlay className="h-4 w-4 text-stone-500 hover:text-black hover:scale-110 transition-transform" />
          )}
        </div>

        {/* Column 1: Song Photo */}
        <div className="flex-none relative">
          <img
            className={`w-[65.50px] h-[65px] rounded-lg shadow object-cover object-center ${
              isPlaying ? "animate-pulse" : ""
            }`}
            src={sadeImgUrl}
            alt="Song Cover"
          />
          {isPlaying && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 equalizer flex justify-center space-x-1">
              <div className="bar bg-stone-500"></div>
              <div className="bar bg-stone-500"></div>
              <div className="bar bg-stone-500"></div>
              <div className="bar bg-stone-500"></div>
              <div className="bar bg-stone-500"></div>
            </div>
          )}
        </div>

        {/* Column 2: Song Details */}
        <div className="flex flex-col justify-center space-y-2">
          {/* Last Played */}
          <span className="text-stone-500 text-[8px] font-normal">
            Last played
          </span>

          {/* Song Title */}
          <h2 className="text-stone-500 text-[11px] font-bold">
            Like a Tattoo
          </h2>

          {/* Artist Name */}
          <span className="text-stone-500 text-[8px] font-normal">Sade</span>
        </div>
      </div>

      <audio ref={audioRef} src={sadeSongUrl} onEnded={handleSongEnd} />

      <SocialCard />
    </div>
  );
}

export default SpotifyCard;
