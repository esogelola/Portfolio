import { useEffect, useState } from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillFilePdf,
} from "react-icons/ai";

function SocialCard() {
  const [jump, setJump] = useState(false);

  // after 3000ms, setJump to true
  useEffect(() => {
    setTimeout(() => {
      setJump(true);
    }, 10000);
  }, []);

  return (
    <div className="flex items-center justify-around p-3 bg-white rounded-lg shadow mt-4">
      <a
        href="https://github.com/esogelola"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub
          data-toggle="tooltip"
          title="Github"
          className="h-5 w-5 text-stone-500 hover:text-black hover:scale-110 transition-transform"
        />
      </a>
      <a
        href="https://twitter.com/esogelola"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineTwitter
          data-toggle="tooltip"
          title="Twitter"
          className="h-5 w-5 text-stone-500 hover:text-black hover:scale-110 transition-transform"
        />
      </a>
      <a
        href="https://linkedin.com/in/emmanuelsogelola"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin
          data-toggle="tooltip"
          title="LinkedIn"
          className="h-5 w-5 text-stone-500 hover:text-black hover:scale-110 transition-transform"
        />
      </a>
      <a
        href="Emmanuel_Sogelola_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillFilePdf
          data-toggle="tooltip"
          title="Resume"
          className={`h-5 w-5 text-stone-500 hover:text-black hover:scale-110 transition-transform ${
            jump ? "animate-bounce" : ""
          }`}
        />
      </a>
    </div>
  );
}

export default SocialCard;
