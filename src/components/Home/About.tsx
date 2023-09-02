import { useState } from "react";
import doodleImgUrl from "../../assets/doodle.png";
import doodleWinkImgUrl from "../../assets/doodle_wink.png";
import { Link } from "react-router-dom";

function About() {
  const [currentImage, setCurrentImage] = useState(doodleImgUrl);

  return (
    <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6 px-4 md:px-0">
      {/* Image */}
      <img
        src={currentImage}
        alt="Emmanuel's Portrait"
        className="w-[66px] h-[66px] rounded-lg shadow-inner border border-black mx-auto md:mx-0"
        onMouseEnter={() => setCurrentImage(doodleWinkImgUrl)}
        onMouseLeave={() => setCurrentImage(doodleImgUrl)}
      />

      {/* Header Text */}
      <h1 className="max-w-[320px] text-black text-xl font-bold mx-auto md:mx-0">
        Developer, designer and photographer.
      </h1>

      {/* Paragraph Text */}
      <p className="max-w-[320px] text-stone-500 text-xs font-normal mx-auto md:mx-0">
        I'm <b>Emmanuel</b>, a Software Engineering Technology student at{" "}
        <b>McMaster University</b>. Recently, I interned as a Software Engineer
        at{" "}
        <b className="text-purple-700">
          <Link to="experience">Twitch</Link>
        </b>
        . I'm based in{" "}
        <b>
          <Link to="about">Toronto</Link>
        </b>{" "}
        and occasionally work on side{" "}
        <u>
          <Link to="/projects">projects</Link>
        </u>
        .
      </p>
    </div>
  );
}

export default About;
