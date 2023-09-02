import TwitchLogo from "../../assets/twitch_logo.jpeg";
import WealthsimpleLogo from "../../assets/wealthsimple_logo.png";
import ZendeskLogo from "../../assets/zendesk_logo.svg";
import SurveyMonkeyLogo from "../../assets/SurveyMonkey_Logo.png";
import { Link } from "react-router-dom";

function Experiences() {
  const displayDescription = false;
  const experiences = [
    { name: "Twitch", imageUrl: TwitchLogo, url: "https://www.twitch.tv/" },
    {
      name: "Wealthsimple",
      imageUrl: WealthsimpleLogo,
      url: "https://www.wealthsimple.com/",
    },
    { name: "Zendesk", imageUrl: ZendeskLogo, url: "https://www.zendesk.com/" },
    {
      name: "SurveyMonkey",
      imageUrl: SurveyMonkeyLogo,
      url: "https://www.surveymonkey.com/",
    },
  ];

  const handleExperienceClick = (experienceName: string) => {
    console.log(experienceName);
  };

  // const handleMoreClick = () => {
  //   console.log("move to experiences");
  // };

  return (
    <div className="flex flex-col items-start space-y-2 md:space-y-4 px-4 md:px-0">
      {/* Header */}
      <h2 className="text-black text-xs font-bold self-start">Experience</h2>

      {displayDescription && (
        <div className="w-full md:w-[530px]">
          <span className="text-stone-500 text-xs font-normal">
            I am current in my last year at{" "}
          </span>
          <span className="text-stone-500 text-xs font-bold">
            McMaster University
          </span>
          <span className="text-stone-500 text-xs font-normal">
            {" "}
            and have had the opportunity to Intern at various companies ranging
            from startup to enterprise. You can read more{" "}
          </span>
          <span className="text-stone-500 text-xs font-bold underline">
            <Link to={"/about"}>about me</Link>
          </span>
          <span className="text-stone-500 text-xs font-normal"> and my </span>
          <span className="text-stone-500 text-xs font-bold underline">
            <Link to={"experience"}>past work experience</Link>
          </span>
          <span className="text-stone-500 text-xs font-normal">.</span>
        </div>
      )}

      {/* Experiences Row */}
      <div className="flex flex-col md:flex-row w-full items-center space-y-4 md:space-y-0 md:space-x-4 ">
        {experiences.map((experience) => (
          <div
            key={experience.name}
            className="relative group w-full md:w-auto mb-4 md:mb-0"
          >
            <a href={experience.url} target="_blank">
              <img
                src={experience.imageUrl}
                alt={experience.name}
                className="md:w-[177.22px] md:h-[150px] sm:w-[100px] sm:h-[50px] rounded-lg border border-gray-300 cursor-pointer hover:scale-105 transition-transform hover:shadow-lg object-fill object-center"
                onClick={() => handleExperienceClick(experience.name)}
              />
            </a>
          </div>
        ))}
      </div>

      {/* More Button */}
      {/* <button
        className="self-end text-black text-xs font-bold mt-0.5" // Further reduced spacing
        onClick={handleMoreClick}
      >
        More
      </button> */}
    </div>
  );
}

export default Experiences;
