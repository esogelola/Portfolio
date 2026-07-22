// PhotoSlideshow.tsx

import React, { useState, useEffect } from "react";
import PhotoModal from "./PhotoModal";

interface Photo {
  photoUrl: string;
  title: string;
  description: string;
}

interface Props {
  photos: Photo[];
  duration?: number;
}

const PhotoSlideshow: React.FC<Props> = ({ photos, duration = 5000 }) => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    // Only auto-scroll on desktop screens
    if (window.innerWidth > 768) {
      const interval = setInterval(() => {
        setCurrentStartIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, duration);

      return () => clearInterval(interval);
    }
  }, [photos, duration]);

  return (
    <div>
      <div className="relative w-full overflow-hidden">
        {/* Mobile Layout */}
        <div
          className="md:hidden flex space-x-6 transition-transform duration-1000"
          style={{ transform: `translateX(-${currentStartIndex * 100}%)` }}
        >
          <img
            key={currentMobileIndex}
            src={photos[currentMobileIndex].photoUrl}
            alt={photos[currentMobileIndex].title}
            className="w-full h-auto rounded-lg border border-gray-300 cursor-pointer hover:scale-105 transition-transform hover:shadow-lg object-fill object-center"
            style={{ maxWidth: "300px", maxHeight: "225px" }}
            onClick={() => setSelectedPhoto(photos[currentMobileIndex])}
          />
        </div>

        {/* Desktop Layout */}
        <div
          className="hidden md:flex space-x-6 transition-transform duration-1000"
          style={{
            transform: `translateX(-${currentStartIndex * (400 + 24)}px)`,
          }}
        >
          {photos.concat(photos).map((photoObj, index) => (
            <img
              key={index}
              src={photoObj.photoUrl}
              alt={photoObj.title}
              className="w-100 h-75 rounded-lg border border-gray-300 cursor-pointer hover:scale-105 transition-transform hover:shadow-lg object-fill object-center"
              style={{ width: "400px", height: "300px" }}
              onClick={() => setSelectedPhoto(photoObj)}
            />
          ))}
        </div>

        {/* Arrows for Mobile */}
        <button
          className="md:hidden absolute top-1/2 left-0 transform -translate-y-1/2 text-black"
          onClick={() => {
            if (currentMobileIndex == 0) {
              setCurrentMobileIndex(photos.length - 1);
            } else {
              setCurrentMobileIndex((prevIndex) => prevIndex - 1);
            }
          }}
        >
          ◀️
        </button>
        <button
          className="md:hidden absolute top-1/2 right-0 transform -translate-y-1/2 text-black"
          onClick={() => {
            if (currentMobileIndex === photos.length - 1) {
              setCurrentMobileIndex(0);
            } else {
              setCurrentMobileIndex((prevIndex) => prevIndex + 1);
            }
          }}
        >
          ▶️
        </button>

        {selectedPhoto && (
          <PhotoModal
            photo={selectedPhoto.photoUrl}
            title={selectedPhoto.title}
            description={selectedPhoto.description}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </div>
    </div>
  );
};

export default PhotoSlideshow;
