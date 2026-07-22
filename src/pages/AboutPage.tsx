import { useEffect, useRef, useState } from "react";
import DragonBand from "../components/about/DragonBand";

const profileImage = "/images/emmanuel-sogelola-headshot.jpg";
const profileImageBack = "/images/emmanuel-sogelola-outdoors.jpg";

function AboutPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [photoAspect, setPhotoAspect] = useState(1);

  const profileRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = profileRef.current;
    const updateAspect = () => {
      if (img && img.naturalWidth && img.naturalHeight) {
        setPhotoAspect(img.naturalWidth / img.naturalHeight);
      }
    };

    if (img) {
      if (img.complete) {
        updateAspect();
      } else {
        img.addEventListener("load", updateAspect);
      }
    }

    return () => {
      if (img) {
        img.removeEventListener("load", updateAspect);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 items-start">
        {/* Left Column: Image and details */}
        <div className="flex flex-col space-y-4">
          <div
            className="relative w-full max-w-[320px] mx-auto rounded-2xl border-2 border-gray-300 overflow-hidden shadow-lg bg-white"
            style={{ aspectRatio: photoAspect }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div
              className={`absolute inset-0 transition-transform duration-500 ${
                isFlipped ? "rotate-y-180" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                ref={profileRef}
                src={profileImageBack}
                alt="Emmanuel Sogelola"
                width="1192"
                height="1588"
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover ${
                  isFlipped ? "invisible" : ""
                }`}
              />
              <img
                src={profileImage}
                alt="Emmanuel Sogelola portrait"
                width="800"
                height="800"
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover rotate-y-180 ${
                  isFlipped ? "" : "invisible"
                }`}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2 text-sm font-mono text-gray-700">
            <div className="font-bold text-base text-black">Emmanuel Sogelola</div>
            <div>
              <span className="text-gray-500">Location:</span> Brooklyn, NY
            </div>
            <div>
              <span className="text-gray-500">Hobbies:</span> Snowboarding, video games, hiking
            </div>
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-black">About</h1>
          <p className="text-stone-700 font-mono text-sm leading-7">
            I am Emmanuel Sogelola, a builder, thinker, and occasional snow covered snowboarder.
            This past year I have been working on the front lines of security at Twitch as a SIRT
            Engineer, where I have handled incidents, developed Python based runbooks, and built
            detections to navigate a constantly shifting threat landscape. At my core I stay curious
            about the edges where disciplines meet. My work lives at the intersection of technology
            and finance: from building predictive LSTM models on Kaggle NBA data in university, to
            designing financial planning and advisory workflows, and exploring fiduciary design at
            Wealthsimple. I have prototyped with CNNs, state machines, and LLMs not for the hype, but
            to ask better questions. I care about systems that explain themselves, agents that wait
            for instruction, and design that dignifies the user. Whether it is mapping financial
            knowledge graphs, designing investment workflows, or sketching product ideas late at night,
            I build with a bias toward clarity and calm. You will also find me writing, watching films
            I overanalyze on Letterboxd, and pursuing research ideas through serendipity, most
            recently as part of the Cansbridge Scholars program.
          </p>
        </div>
      </div>

      <DragonBand />
    </div>
  );
}
export default AboutPage;
