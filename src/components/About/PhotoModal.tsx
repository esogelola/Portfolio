// PhotoModal.tsx

import React, { useRef, useEffect } from "react";

interface Props {
  photo: string;
  title: string;
  description: string;
  onClose: () => void;
}

const PhotoModal: React.FC<Props> = ({
  photo,
  title,
  description,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Function to handle outside click
  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  // Function to handle the "Escape" key press
  const handleEscapeKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKeyPress);
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg"
        ref={modalRef}
      >
        <img
          src={photo}
          alt="Selected"
          className="w-full max-w-lg max-h-96 rounded-lg mb-4 object-cover"
        />
        <h3 className="text-center text-md text-black font-bold">{title}</h3>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-gray-200"
        >
          ✖️
        </button>
        <div>
          <p className="text-center text-stone-500 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
