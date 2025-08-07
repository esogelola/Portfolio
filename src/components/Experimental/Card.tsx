import React, { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaCanadianMapleLeaf } from "react-icons/fa";

type IDCardProps = {
  name: string;
  jobTitle: string;
  interests: string[];
  photoUrl: string;
  idNumber: string;
  location: string;
  workplace: string;
  education: string;
  rating?: number;
  altUrl: string;
  bgUrl: string;
};

const IDCard: React.FC<IDCardProps> = ({
  name,
  jobTitle,
  interests,
  photoUrl,
  idNumber,
  location,
  workplace,
  education,
  altUrl,
}) => {
  const [currentImage, setCurrentImage] = useState(photoUrl);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-lg mx-auto perspective">
      <div
        className={`relative w-full h-64 md:h-64 transition-transform duration-500 transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of the Card */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden bg-white shadow-lg rounded-2xl p-3 md:p-4"
          style={{ transform: "rotateY(0deg)", backfaceVisibility: "hidden" }}
        >
          <div className="absolute top-0 right-0 bg-emerald-600 text-white px-2 py-1 rounded-bl-lg text-sm">
            SEC1
          </div>

          <div className="flex flex-row gap-6 max-sm:justify-between">
            {/* Left Section: Photo */}
            <div className="flex-shrink-0 mr-0 md:mr-4 mb-3 md:mb-0 relative cursor-pointer">
              <img
                className="relative h-28 w-28 md:h-32 md:w-32 object-cover border-2 bg-white border-gray-300 z-10 rounded-lg"
                src={currentImage}
                alt={`${name}'s photo`}
                onMouseEnter={() => setCurrentImage(altUrl)}
                onMouseLeave={() => setCurrentImage(photoUrl)}
              />

              {/* LinkedIn Icon */}
              <div className="mt-1 text-xs italic text-gray-500 flex justify-start gap-2">
                <a
                  href="https://linkedin.com/in/emmanuelsogelola"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin
                    data-toggle="tooltip"
                    title="LinkedIn"
                    className="h-5 w-5 text-stone-500 hover:text-black hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>
            {/* Stamp/Signature */}
            <div className="absolute bottom-0 left-0 bg-blue-200 text-xs text-blue-900 px-2 py-1 rounded-tr-lg rounded-bl-lg">
              Digital
            </div>

            {/* Right Section: Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-gray-800">
                  {name}
                </h2>
                <p className="text-xs md:text-sm text-gray-600">
                  {jobTitle} at{" "}
                  <span className="underline text-purple-600">{workplace}</span>
                </p>
                <p className="text-xs text-gray-500">ID: {idNumber}</p>
                <p className="text-xs md:text-sm text-gray-600">
                  <span className="cursor-pointer">{location}</span>
                </p>
                <p className="text-xs md:text-sm text-gray-600 font-bold">
                  {education}
                  <a href="https://www.canada.ca/en.html">
                    <FaCanadianMapleLeaf className="inline-block ml-1 text-red-600 transition-transform transform hover:rotate-45 cursor-pointer" />
                  </a>
                </p>
              </div>

              {/* Interests in 2x2 Grid */}
              <div className="mt-2 md:mt-3">
                <hr className="my-2 border-gray-200" />

                <div className="grid grid-cols-2 gap-1 md:gap-2 mt-2">
                  {interests.map((interest, index) => (
                    <div key={index} className="text-xs text-gray-600">
                      {interest}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of the Card */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden bg-gray-100 shadow-lg rounded-2xl p-4 md:p-4"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="flex flex-col items-center justify-between h-full">
            <h2 className="text-lg md:text-xl font-bold">ID Details</h2>

            <div className="text-center">
              <p className="text-xs md:text-sm text-gray-600 mb-2">
                Emmanuel Sogelola, McMaster University
              </p>
              <p className="text-xs md:text-sm text-gray-600">
                Security Engineer at{" "}
                <span className="font-bold text-purple-600">Twitch</span>
              </p>
              <p className="text-xs md:text-sm text-gray-600">
                Enthusiast in hackathons, startups, and prototyping.
              </p>
            </div>

            <div className="flex justify-center w-full">
              <p className="text-xs text-gray-500 mb-4">
                You can contact me via LinkedIn.
              </p>
            </div>

            {/* Barcode Section */}
            <div className="absolute bottom-3 right-3">
              <div className="w-20 h-5 md:w-24 md:h-6 bg-gray-800">
                <p className="text-white text-right text-xs md:text-sm">
                  000011211
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;
