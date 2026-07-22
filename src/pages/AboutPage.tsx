import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import PhotoSlideshow from "../components/about/PhotoSlideshow";
import DragonBand from "../components/about/DragonBand";

import profileImage from "../assets/images/portraits/headshot.jpeg";
import profileImageBack from "../assets/images/portraits/outdoor.jpeg";
import photo1 from "../assets/images/gallery/photo_1.jpeg";
import photo2 from "../assets/images/gallery/photo_2.jpeg";
import photo3 from "../assets/images/gallery/photo_3.jpeg";
import photo4 from "../assets/images/gallery/photo_4.jpeg";
import photo5 from "../assets/images/gallery/photo_5.jpeg";
import photo6 from "../assets/images/gallery/photo_6.jpeg";
import photo7 from "../assets/images/gallery/photo_7.jpeg";
import photo8 from "../assets/images/gallery/photo_8.jpeg";
import photo9 from "../assets/images/gallery/photo_9.jpeg";

function AboutPage() {
  const [confettiClicked, setConfettiClicked] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [photoAspect, setPhotoAspect] = useState(1);

  const confettiRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLImageElement>(null);

  function getAge(d1: Date, d2: Date | undefined = undefined) {
    d2 = d2 || new Date();
    const diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }
  const today = new Date();
  const isBirthday = today.getDate() === 1 && today.getMonth() === 8;

  useEffect(() => {
    if (confettiRef.current) {
      setHeight(confettiRef.current.clientHeight);
      setWidth(confettiRef.current.clientWidth);
    }

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
    <div ref={confettiRef} className="w-full max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-12">
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
                className={`absolute inset-0 w-full h-full object-cover ${
                  isFlipped ? "invisible" : ""
                }`}
              />
              <img
                src={profileImage}
                alt="Emmanuel Sogelola portrait"
                className={`absolute inset-0 w-full h-full object-cover rotate-y-180 ${
                  isFlipped ? "" : "invisible"
                }`}
              />
              {confettiClicked && (
                <Confetti numberOfPieces={150} width={width} height={height} />
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-2 text-sm font-mono text-gray-700">
            <div className="font-bold text-base text-black">Emmanuel Sogelola</div>
            <div>
              <span className="text-gray-500">Location:</span> Brooklyn, NY
            </div>
            <div>
              <span className="text-gray-500">Age:</span> {getAge(new Date(2000, 10, 22))}
              {isBirthday && (
                <span
                  className={`${confettiClicked ? "" : "animate-pulse"} ml-2 cursor-pointer`}
                  onClick={() => setConfettiClicked(true)}
                >
                  🎉
                </span>
              )}
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

      <div className="flex flex-col p-4 md:p-6 bg-white border-2 border-gray-300 rounded-2xl shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-black">📸 My Photos</h2>
        <PhotoSlideshow
          photos={[
            {
              photoUrl: photo1,
              title: "Pacifica, California",
              description: "Taken on my way to surf at Pacifica Beach",
            },
            {
              photoUrl: photo2,
              title: "Bay Bridge, San Francisco",
              description: "Nice photo of the Bay Bridge with birds",
            },
            {
              photoUrl: photo3,
              title: "Land's End, San Francisco",
              description: "Went biking with my friends to Land's End",
            },
            {
              photoUrl: photo4,
              title: "ROM Museum, Toronto",
              description: "Header piece at the ROM Museum in Toronto",
            },
            {
              photoUrl: photo5,
              title: "Ocean Beach, San Francisco",
              description: "On my way to Land's End, I stopped by Ocean Beach",
            },
            {
              photoUrl: photo6,
              title: "Pacifica Beach, San Francisco",
              description: "Better view of the Pacifica Beach",
            },
            {
              photoUrl: photo7,
              title: "Wildcat Canyon Regional Park, San Francisco",
              description: "Hiking at Wildcat Canyon Regional Park",
            },
            {
              photoUrl: photo8,
              title: "Golden Gate Park, San Francisco",
              description: "Walking through Golden Gate Park",
            },
            {
              photoUrl: photo9,
              title: "Dolores Park, San Francisco",
              description: "Amazing view of San Francisco from Dolores Park",
            },
          ]}
        />
      </div>

      <DragonBand />
    </div>
  );
}
export default AboutPage;
