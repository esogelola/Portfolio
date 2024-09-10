import { FaGithub } from "react-icons/fa";
import doodleImgUrl from "../assets/images/about/doodle.png";
function ProjectsTBD() {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-100">
      {/* Image (replace with your preferred image) */}
      <img
        src={doodleImgUrl}
        alt="Under Construction"
        className="w-64 h-64 mb-8 "
      />

      {/* Header */}
      <h1 className="text-3xl font-bold mb-4">Projects Under Construction</h1>

      {/* Subtitle */}
      <h2 className="text-xl mb-4">
        I'm currently working on some cool stuff!
      </h2>

      {/* Description */}
      <p className="text-center mb-4">
        In the meantime, you can check out my progress and other repositories on
        <a
          href="https://github.com/esogelola"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-stone-500 ml-2"
        >
          GitHub <FaGithub className="inline" />
        </a>
        .
      </p>
    </div>
  );
}

export default ProjectsTBD;
