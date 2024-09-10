import Card from "../components/Experimental/Card";
import doodleImgUrl from "../assets/images/about/doodle.png";
import doodleWinkUrl from "../assets/images/about/doodle_wink.png";
import thePark from "../assets/images/the_park.jpg";

function Home() {
  const interests = [
    "Security",
    "Product Design",
    "Finance",
    "Machine Learning",
  ];

  return (
    <div className="p-4">
      <Card
        idNumber="073283160"
        interests={interests}
        jobTitle="Security Engineer"
        name="Emmanuel Sogelola"
        photoUrl={doodleImgUrl}
        altUrl={doodleWinkUrl}
        education="McMaster University"
        location="Brooklyn, NY"
        workplace="Twitch"
        bgUrl={thePark}
      />
    </div>
  );
}

export default Home;
