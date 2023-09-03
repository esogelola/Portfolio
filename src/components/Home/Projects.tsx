import DoodlecordLogo from "../../assets/images/projects/doodlecord.jpg";
import InterviewyLogo from "../../assets/images/projects/Interviewy.png";
import EmazonLogo from "../../assets/images/projects/emazon.png";
import PKGHoundLogo from "../../assets/images/projects/pkghound.png";

function Projects() {
  const displayDescription = false;
  const projects = [
    {
      name: "Doodlecord",
      imageUrl: DoodlecordLogo,
      url: "https://doodlecord.com",
    },
    {
      name: "Interviewy",
      imageUrl: InterviewyLogo,
      url: "https://interviewy.ca",
    },
    { name: "Emazon", imageUrl: EmazonLogo, url: "https://emazon.ca" },
    { name: "PKGHound", imageUrl: PKGHoundLogo, url: "https://pkghound.com" },
  ];

  const handleProjectClick = (projectName: string) => {
    console.log(projectName);
  };

  // const handleMoreClick = () => {
  //   console.log("move to projects");
  // };

  return (
    <div className="flex flex-col items-start space-y-2 md:space-y-4 px-4 md:px-0">
      {/* Header */}
      <h2 className="text-black text-xs font-bold self-start">Projects</h2>

      {displayDescription && (
        <div className="w-full md:w-[536px]">
          <span className="text-stone-500 text-xs font-normal">
            I build very small (but cool, I think){" "}
          </span>
          <span className="text-stone-500 text-xs font-bold underline">
            side projects
          </span>
          <span className="text-stone-500 text-xs font-normal">
            {" "}
            that are either an attempt at learning large concepts, or a random
            startup idea (like, Data Management CRUD, TypeScript Backend Stack,
            or trying to understand different microservice tools).
          </span>
        </div>
      )}

      {/* Projects Row */}
      <div className="flex flex-col md:flex-row w-full items-center space-y-4 md:space-y-0 md:space-x-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="relative group w-full md:w-auto mb-4 md:mb-0"
          >
            <a href={project.url} target="_blank">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="md:w-[177.22px] md:h-[150px] sm:w-[100px] sm:h-[50px] rounded-lg border border-gray-300 cursor-pointer hover:scale-105 transition-transform hover:shadow-lg object-fill object-center"
                onClick={() => handleProjectClick(project.name)}
              />
            </a>
          </div>
        ))}
      </div>

      {/* More Button */}
      {/* <button
        className="self-end text-black text-xs font-bold mt-0.5"
        onClick={handleMoreClick}
      >
        More
      </button> */}
    </div>
  );
}

export default Projects;
