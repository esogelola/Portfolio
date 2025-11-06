import Card from "../components/Experimental/Card";
import BlogSection from "../components/Blog/BlogSection";
import epfpImgUrl from "../assets/images/about/epfp.png";
import thePark from "../assets/images/the_park.jpg";

function Home() {
  const interests = [
    "Security",
    "Product Design",
    "Finance",
    "Machine Learning",
  ];

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Profile Card */}
          <Card
            idNumber="073283160"
            interests={interests}
            jobTitle="Security Engineer"
            name="Emmanuel Sogelola"
            photoUrl={epfpImgUrl}
            education="McMaster University"
            location="Brooklyn, NY"
            workplace="Twitch"
            bgUrl={thePark}
          />

          {/* Blog Section */}
          <BlogSection />
        </main>
      </div>
    </div>
  );
}

export default Home;
