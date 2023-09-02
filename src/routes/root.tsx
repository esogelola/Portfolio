import React from "react";
import Nav from "../components/Nav";

function MainContent() {
  return (
    <div className="flex min-h-screen bg-gray-100 justify-center sm:p-4  ">
      <div className="w-full max-w-5xl mx-auto">
        {/* Navbar */}
        <div className="mt-6 mb-12 text-center flex justify-center ">
          <Nav />
        </div>

        {/* Main Content */}
      </div>
    </div>
  );
}

export default MainContent;
