import { FaGithub } from "react-icons/fa";
function ProjectsTBD() {
  return (
    <div className="flex flex-col items-center  min-h-screen ">
      {/* Image (replace with your preferred image) */}

      {/* Header */}
      <h1 className="text-3xl font-bold mb-4">
        Projects (Still) Under Construction
      </h1>

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
