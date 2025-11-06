import React, { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaCanadianMapleLeaf, FaGithub, FaTwitter } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { Badge } from "../ui/Badge";

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
}) => {
  const [currentImage] = useState(photoUrl);

  return (
    <div className="mb-16 flex justify-center">
      <div className="bg-white border-2 border-gray-300 rounded-lg p-8 md:p-10 shadow-sm max-w-4xl w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column: Photo and Links */}
          <div className="flex flex-col items-center gap-4 md:w-48 shrink-0">
            <div className="w-44 h-44 border-2 border-gray-300 rounded-lg overflow-hidden bg-white flex items-center justify-center">
              <img
                src={currentImage}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/emmanuelsogelola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="LinkedIn"
              >
                <AiFillLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/esogelola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/esogelola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="X (Twitter)"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://substack.com/@esogelola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="Substack"
              >
                <SiSubstack className="w-5 h-5" />
              </a>
            </div>
            <Badge variant="secondary" className="font-mono text-xs">
              Digital
            </Badge>
          </div>

          {/* Right Column: Details */}
          <div className="flex-1 space-y-6">
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h1 className="font-mono text-3xl md:text-4xl font-bold">
                  {name}
                </h1>
                <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-sm px-3 py-1">
                  SEC1
                </Badge>
              </div>
              <p className="font-mono text-base text-gray-600">
                {jobTitle} at{" "}
                <a
                  href="https://twitch.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  {workplace}
                </a>
              </p>
              <div className="h-px bg-gray-300 w-full" />
            </div>

            {/* Details Section */}
            <div className="space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Details
              </h2>
              <div className="space-y-2 pl-4 border-l-2 border-gray-300">
                <p className="font-mono text-sm">
                  <span className="text-gray-600">ID:</span>{" "}
                  <span className="text-gray-800">{idNumber}</span>
                </p>
                <p className="font-mono text-sm">
                  <span className="text-gray-600">Location:</span>{" "}
                  <span className="text-gray-800">{location}</span>
                </p>
                <p className="font-mono text-sm">
                  <span className="text-gray-600">Education:</span>{" "}
                  <span className="text-gray-800">
                    {education}{" "}
                    <a href="https://www.canada.ca/en.html">
                      <FaCanadianMapleLeaf className="inline-block ml-1 text-red-600 transition-transform transform hover:rotate-45 cursor-pointer" />
                    </a>
                  </span>
                </p>
              </div>
            </div>

            {/* Interests Section */}
            <div className="space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Interests
              </h2>
              <div className="grid grid-cols-2 gap-3 pl-4 border-l-2 border-gray-300">
                {interests.map((interest, index) => (
                  <div key={index} className="font-mono text-sm text-gray-800">
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;
