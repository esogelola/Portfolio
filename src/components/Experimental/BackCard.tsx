import React from "react";

const BackCard: React.FC = () => {
  return (
    <div className="absolute backface-hidden w-full h-full bg-blue-600 text-white shadow-lg rounded-2xl p-4 transform rotate-y-180">
      <h2 className="text-xl font-bold">About Me</h2>
      <p className="text-sm mt-2">
        I am a software developer with a passion for finance, product design,
        and security. Always curious, always learning!
      </p>
      {/* Barcode */}
      <div className="mt-auto">
        <img
          src="https://via.placeholder.com/300x50?text=Barcode"
          alt="Hash Barcode"
          className="w-full h-12 mt-4"
        />
      </div>
    </div>
  );
};

export default BackCard;
