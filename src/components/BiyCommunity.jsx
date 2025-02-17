import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import curtain1 from "../assets/BiyCommunity/curtain1.png";
import curtain2 from "../assets/BiyCommunity/curtain2.png";
import curtain_stage from "../assets/BiyCommunity/curtain_stage.jpg";

const BIYCommunity = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger the opening animation after a short delay
    setTimeout(() => setIsOpen(true), 1000);
  }, []);

  return (
    <section>
      <Navbar />
      <div className="relative w-full h-screen overflow-hidden ">
        {/* Left Curtain */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 z-20 transform transition-transform duration-1000 ${
            isOpen ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <img
            loading="lazy"
            src={curtain1}
            alt=""
            className="w-full h-screen z-20"
          />
        </div>

        {/* Right Curtain */}
        <div
          className={`absolute top-0 right-0 h-full w-1/2 z-20 transform transition-transform duration-1000 ${
            isOpen ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <img
            loading="lazy"
            src={curtain2}
            alt=""
            className="w-full h-screen z-20"
          />
        </div>

        {/* Main Content */}
        <div
          className={`relative flex items-center justify-center h-full w-full transition-opacity duration-1500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container mx-auto text-center h-[80vh] flex justify-center items-center flex-col -z-10">
            <img
              loading="lazy"
              src={curtain_stage}
              alt=""
              className="absolute w-full max-md:h-screen -z-10"
            />
            <h2 className="text-3xl max-md:text-xl font-bold mb-4">
              BIY Community
            </h2>
            <p className="text-xl text-gray-700 font-Minion max-md:w-[80%]">
              Exciting things are happening behind the curtains, watch this
              space for more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BIYCommunity;
