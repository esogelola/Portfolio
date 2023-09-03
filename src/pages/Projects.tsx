import DoodlecordLogo from "../assets/images/projects/doodlecord.jpg";
import InterviewyLogo from "../assets/images/projects/Interviewy.png";
import EmazonLogo from "../assets/images/projects/emazon.png";
import PKGHoundLogo from "../assets/images/projects/pkghound.png";
import { useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
type ProjectType = {
  name: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  link: string;
  skills: string[];
  github?: string;
  devpost?: string;
};

function Projects() {
  const projects: ProjectType[] = [
    {
      name: "Doodlecord",
      shortDescription: "Simple instant messaging web app",
      description:
        "A fun and simple instant messaging web app, used to communicate in real-time with friends through peer-to-peer channels.",
      imageUrl: DoodlecordLogo,
      videoUrl: "https://youtu.be/OC8NDyvXMnc",
      link: "https://project1.com",
      skills: ["React", "Socket.io", "Node.js", "Express"],
    },
    {
      name: "Interviewy",
      shortDescription: "Practice your interview skills",
      description:
        "Interviewy provides jobseekers an accessible environment where they can practice their interview skills at any time.",
      imageUrl: InterviewyLogo,
      videoUrl: "https://youtu.be/nF7yuNg_zWE?si=5oXKWGul_9Ad2-QP",
      link: "https://project1.com",
      skills: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      name: "Emazon",
      shortDescription: "An e-commerce website",
      description:
        "An e-commerce website that allows user's to create, view and buy any product listed on the site.",
      imageUrl: EmazonLogo,
      videoUrl: "https://youtu.be/OC8NDyvXMnc",
      link: "https://project1.com",
      skills: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      name: "PKGHound",
      shortDescription: "A website to find the best packages",
      description:
        "Ionic React project built to resemble the popular website product hunt.",
      imageUrl: PKGHoundLogo,
      videoUrl: "https://youtu.be/IR5_rTCi-Bo?si=d-ttbsxH_G8Slrdw",
      link: "https://project1.com",
      skills: ["React", "Ionic5", "Node.js", "Express"],
      github: "https://github.com/username/doodlecord",
    },
  ];
  const [currentVideoUrl, setCurrentVideoUrl] = useState(projects[0].videoUrl);
  const [currentSkills, setCurrentSkills] = useState(projects[0].skills);

  return (
    <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6 px-4 md:px-0">
      <div className="flex flex-col md:flex-row p-4 md:p-8 space-y-4 md:space-y-0 md:space-x-8 w-full max-w-5xl mx-auto min-h-[100vh]">
        {/* Left Column: Video Display and Description */}
        <div className="flex flex-col w-full md:w-1/2 space-y-4 min-h-[300px]">
          <iframe
            width="100%"
            height="315"
            src={currentVideoUrl.replace(
              "https://youtu.be/",
              "https://www.youtube.com/embed/"
            )}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Skills Section */}
          <div className="mt-4">
            <h4 className="font-bold mb-2">Skills Used:</h4>
            <div className="flex flex-wrap mb-4">
              {currentSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="m-1 px-2 py-1 bg-gray-200 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            {/* Longer Description with Scroll */}

            <div className="text-stone-500 mb-4 overflow-y-auto max-h-[150px]">
              {
                projects.find((p) => p.videoUrl === currentVideoUrl)
                  ?.description
              }
            </div>

            {/* Links */}
            <div className="flex space-x-4">
              {projects.find((p) => p.videoUrl === currentVideoUrl)?.github && (
                <a
                  href={
                    projects.find((p) => p.videoUrl === currentVideoUrl)?.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-gray-500 hover:text-gray-700" />
                </a>
              )}
              {projects.find((p) => p.videoUrl === currentVideoUrl)?.link && (
                <a
                  href={
                    projects.find((p) => p.videoUrl === currentVideoUrl)?.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="text-gray-500 hover:text-gray-700" />
                </a>
              )}
              {projects.find((p) => p.videoUrl === currentVideoUrl)
                ?.devpost && (
                <a
                  href={
                    projects.find((p) => p.videoUrl === currentVideoUrl)
                      ?.devpost
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiDevpost className="text-gray-500 hover:text-gray-700" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}

        {/* Right Column: List of Projects */}
        <div className="flex flex-col w-full md:w-1/2 space-y-4 overflow-y-auto max-h-[500px] bg-gray-100 rounded-lg shadow-inner">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex space-x-4 items-start p-4 bg-white shadow-md rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-300"
              onClick={() => {
                setCurrentVideoUrl(project.videoUrl);
                setCurrentSkills(project.skills);
              }}
            >
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-20 h-20 object-cover rounded shadow-lg"
              />
              <div className="flex flex-col space-y-2 w-full">
                <h3 className="font-bold">{project.name}</h3>
                <p className="text-stone-500 mb-2">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Additional Section for Other Projects */}
      <div className="mt-8 w-full">
        <h2 className="text-xl font-bold mb-4">Other Projects</h2>
        <p className="text-stone-500 mb-4">Here are some other projects...</p>
        {/* You can add more content or project cards here */}
      </div>
    </div>
  );
}

export default Projects;
