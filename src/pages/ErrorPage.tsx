import React, { useState } from "react";
import doodleImgUrl from "../assets/doodle.png";
import under_catstruction from "../assets/under_catstruction.png";
import doodleWinkImgUrl from "../assets/doodle_wink.png"; // Import the wink version

const ErrorPage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover
  const randomNumber = Math.floor(Math.random() * 10) + 1; // Generate random number between 1 and 10
  const luckyNumber = 2; // Lucky number to display under catstruction image
  return (
    <div className="flex flex-col items-center mt-36 h-screen bg-gray-100 text-center">
      <img
        src={
          isHovered
            ? doodleWinkImgUrl
            : randomNumber == luckyNumber
            ? under_catstruction
            : doodleImgUrl
        }
        alt="Doodle Character"
        className={`w-40 h-40 mb-4 ${
          isHovered && randomNumber != luckyNumber ? "animate-pulse" : ""
        }`} // Add spin animation on hover
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
      />
      <h1 className="text-xl font-bold text-black">Oops! Page not found.</h1>
      <p className="text-gray-600 mt-2">
        The page you're looking for doesn't exist or is under{" "}
        {randomNumber == 2 ? "catstruction" : "construction"} ^^
      </p>
    </div>
  );
};

export default ErrorPage;
