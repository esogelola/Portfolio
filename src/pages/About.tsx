import React, { useEffect, useRef, useState } from "react";
import profileImage from "../assets/headshot.jpeg";
import doodleImgUrl from "../assets/doodle.png";
import profileImageBack from "../assets/headshot_back.jpeg";
import Confetti from "react-confetti";
import PhotoSlideshow from "../components/About/PhotoSlideshow";

import photo1 from "../assets/about/photo_1.jpeg";
import photo2 from "../assets/about/photo_2.jpeg";
import photo3 from "../assets/about/photo_3.jpeg";
import photo4 from "../assets/about/photo_4.jpeg";
import photo5 from "../assets/about/photo_5.jpeg";
import photo6 from "../assets/about/photo_6.jpeg";
import photo7 from "../assets/about/photo_7.jpeg";
import photo8 from "../assets/about/photo_8.jpeg";
import photo9 from "../assets/about/photo_9.jpeg";

function About() {
  const [confettiClicked, setConfettiClicked] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const confettiRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <div ref={confettiRef}>
      <div className="flex flex-col md:flex-row items-start p-4 md:p-8 space-y-4 md:space-y-0 md:space-x-8 w-full max-w-5xl mx-auto justify-around">
        {/* Left Column: Image and MySpace-like Content */}
        <div className="flex flex-col space-y-4 w-64">
          {/* Image */}
          <div className="relative w-64 h-64 mb-4">
            <div
              className={`w-full h-full absolute top-0 left-0 rounded overflow-hidden transform transition-transform duration-500 ${
                isFlipped ? "rotate-y-180" : ""
              }`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front Image */}
              <img
                src={profileImageBack}
                alt="Emmanuel Sogelola"
                className={`rounded w-64 h-64 object-cover shadow-lg ${
                  isFlipped ? "invisible" : ""
                }`}
              />
              {/* Back Image */}
              <img
                src={profileImage}
                alt="Emmanuel Sogelola - Back"
                className={`rounded w-64 h-64 object-cover shadow-lg absolute top-0 left-0  rotate-y-180 ${
                  isFlipped ? "" : "invisible"
                }`}
              />
              {confettiClicked && (
                <Confetti numberOfPieces={150} width={width} height={height} />
              )}
            </div>
          </div>

          {/* MySpace-like Content */}
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-lg">Emmanuel Sogelola</h2>
            <p className="text-stone-500 text-sm">
              <span className="text-black text-md ">📍 Location: </span>
              Toronto, Canada
            </p>
            <p className="text-stone-500 text-sm">
              <span className="text-black text-md">🎂 Age:</span>{" "}
              {getAge(new Date(2000, 10, 22))}
              {isBirthday && (
                <span
                  className={`${
                    confettiClicked ? "" : "animate-pulse"
                  } ml-2 cursor-pointer`}
                  onClick={() => setConfettiClicked(true)}
                >
                  🎉
                </span>
              )}
            </p>
            <p className="text-stone-500 text-sm">
              <span className="text-black text-md">🎨 Hobbies:</span>{" "}
              Snowboarding, Video Games, Hiking
            </p>
          </div>
        </div>

        {/* Right Column: Text */}
        <div className="flex flex-col space-y-4">
          <SectionHeader title="Introduction" emoji="👋🏾" />
          <p className="text-stone-500 font-normal text-sm">
            Hello! I'm <b>Emmanuel Sogelola</b>, a Software Engineering
            Technology student at <b>McMaster University</b>. After graduating
            with a Diploma in Computer Programmer Analysis from{" "}
            <b>George Brown College</b>, I pursued a degree to deepen my
            understanding of Computer Science.
          </p>

          <SectionHeader title="Professional Journey" emoji="🚀" />
          <p className="text-stone-500 font-normal text-sm">
            My journey began in 2021 at <b>InnovFin Consulting</b>, a blockchain
            startup. Here, I dived into the innovative world of blockchain and
            helped develop a platform accessed by over 1000+ monthly readers. In
            2022, I joined <b>SurveyMonkey</b>, where I enhanced productivity by
            replacing legacy Jenkins jobs and automating test suites. My passion
            for backend engineering grew during my time at <b>Zendesk</b>, where
            I worked on system architecting and REST APIs. At{" "}
            <b>Wealthsimple</b>, I collaborated on the development of WS Work
            and enhanced troubleshooting skills. Currently, I'm excited to have
            joined <b>Twitch</b> this past summer, and have already launched
            features like the Multi-Language Selector for iOS.
          </p>

          <SectionHeader title="Beyond Work" emoji="💡" />
          <p className="text-stone-500 font-normal text-sm">
            Beyond my professional experiences, I have a passion for hackathons,
            having mentored, developed, and participated in over <b>6+</b>{" "}
            events. I'm also enthusiastic about startups and design, often
            brainstorming and prototyping new ideas. Some see the light of day,
            while others remain in the shadows. If you're interested in
            collaborating on a side project, feel free to reach out on LinkedIn!
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col md:items-start sm:items-center p-4 md:p-8 space-y-4 md:space-y-0  w-full max-w-5xl mx-auto justify-around">
        <h2 className="text-lg font-bold text-black mb-4">📸 My Photos</h2>
        <PhotoSlideshow
          photos={[
            {
              photoUrl: photo1,
              title: "Pacifica, California",
              description: "Taken on my way to Surf at Pacifica Beach",
            },
            {
              photoUrl: photo2,
              title: "Bay Bridge, San Francisco",
              description: "Nice photo of the Bay Bridge + Birds",
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
              description:
                "Better view of the Pacifica Beach (really nice waves)",
            },
            {
              photoUrl: photo7,
              title: "Wildcat Canyon Regional Park, San Francisco",
              description: "Hiking at Wildcat Canyon Regional Park + Cows 🐄",
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
    </div>
  );
}

const SectionHeader: React.FC<{ title: string; emoji: string }> = ({
  title,
  emoji,
}) => (
  <h2 className="text-md font-bold text-black">
    {emoji} {title}
  </h2>
);

export default About;
