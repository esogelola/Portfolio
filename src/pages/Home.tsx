import About from "../components/Home/About";
import SpotifyCard from "../components/Home/SpotifyCard";
import Experiences from "../components/Home/Experiences";
import Projects from "../components/Home/Projects";

function Home() {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row mt-12 md:space-x-8 items-center justify-evenly ">
        {/* About Section */}
        <About />
        {/* Spotify Card */}
        <SpotifyCard />
      </div>

      {/* Experiences Section */}
      <div className="mt-12 flex justify-evenly">
        <Experiences />
      </div>
      {/* Projects Section */}
      <div className="mt-6 flex justify-evenly">
        <Projects />
      </div>
    </div>
  );
}

export default Home;
