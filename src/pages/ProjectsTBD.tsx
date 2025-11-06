import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import epfpImgUrl from "../assets/images/about/epfp.png";
import doodleWinkImgUrl from "../assets/images/about/doodle_wink.png";

function ProjectsTBD() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCoinClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center mt-10 min-h-screen px-4">
      {/* Coin Container */}
      <div className="perspective-1000 mb-8">
        <div
          className={`relative w-64 h-64 cursor-pointer transition-transform duration-700 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
          onClick={handleCoinClick}
        >
          {/* Front of Coin - Hero Image */}
          <div
            className="absolute inset-0 w-full h-full backface-hidden rounded-full border-8 border-emerald-600 shadow-2xl overflow-hidden bg-white"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={epfpImgUrl}
              alt="Emmanuel Sogelola"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back of Coin - Old PFP */}
          <div
            className="absolute inset-0 w-full h-full backface-hidden rounded-full border-8 border-purple-600 shadow-2xl overflow-hidden bg-white"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <img
              src={doodleWinkImgUrl}
              alt="Emmanuel Sogelola - Classic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Header */}
      <h1 className="text-3xl font-bold font-mono mb-4 text-center">
        Projects Under Renovation
      </h1>

      {/* Description */}
      <p className="text-center font-mono text-sm text-gray-600 mb-6 max-w-md">
        Currently cleaning up and reorganizing my project portfolio. In the
        meantime, check out my latest work on
        <a
          href="https://github.com/esogelola"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-gray-800 hover:text-emerald-600 transition-colors ml-1"
        >
          GitHub <FaGithub className="inline" />
        </a>
      </p>

      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border-2 border-amber-400 rounded-lg">
        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
        <span className="font-mono text-xs font-semibold text-amber-800">
          Work in Progress
        </span>
      </div>
    </div>
  );
}

export default ProjectsTBD;
