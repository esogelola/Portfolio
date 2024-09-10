import theParkImg from "../../assets/images/image.png";
import SpotifyCard from "./SpotifyCard";
import doodleImgUrl from "../../assets/images/about/doodle.png";

export default function Moma() {
  return (
    <div className="relative max-w-[1320px] mx-auto h-screen">
      <h3 className="text-3xl font-light text-black mt-10">
        Hi, I'm Emmanuel Sogelola
      </h3>

      <div className="w-full h-0 pb-[51.36%] relative">
        <img
          src={theParkImg}
          alt="The Park"
          className="absolute inset-0 w-full h-full "
        />
        <p className="absolute inset-0 flex items-center justify-center text-moma md:text-2xl sm:text-sm text-justify mx-4">
          curiosity is the lust of the mind
        </p>
      </div>
      <h1 className="text-2xl text-stone-700 font-bold text-center my-3">
        Developer, Designer and Photographer.
      </h1>
      <div className="w-16 h-1 bg-[#696565] mb-4"></div>
      <div className="flex flex-col md:flex-row mt-12 justify-between">
        <div className="flex flex-row justify-evenly space-x-4">
          <img
            src={doodleImgUrl}
            alt="Emmanuel's Portrait"
            className="w-[66px] h-[66px] rounded-lg shadow-inner border border-black mx-auto md:mx-0"
          />
          <div>
            <p className="text-center">
              I'm Emmanuel, I graduated from{" "}
              <span className="font-bold">McMaster University</span> with a
              bachelor degree in Software Engineering Technology.
            </p>
            <p>
              Currently a Security Engineer at{" "}
              <span className="font-bold text-purple-600">Twitch</span>
            </p>
            <p>
              Based in <span className="font-bold">Brooklyn, NY</span>
            </p>
            <p>
              Occasionally work on{" "}
              <a href="#" className="text-blue-500 underline">
                side projects
              </a>
            </p>
            <p>Focused on finance, product design and security</p>
          </div>
        </div>
      </div>
    </div>
  );
}
