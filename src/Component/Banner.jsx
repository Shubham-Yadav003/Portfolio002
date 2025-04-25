import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import pdf from "../assets/resume.pdf"; // Ensure this is in the right path
import ProfileImage from "../assets/profileImage.jpeg"; // Ensure this is in the right path
import "./banner.css";

const Banner = () => {
  const [isPreparing, setIsPreparing] = useState(false);

  const handleDownload = () => {
    setIsPreparing(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = pdf;
      link.download = "resume.pdf";
      link.click();
      setIsPreparing(false);
    }, 1000);
  };
  return (
    <div id="home">
      <div className="w-full bg-transparent p-5 h-screen max-h-[700px] flex flex-col-reverse md:flex-row items-center justify-center gap-28 md:gap-20">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            HI, I'M Bardaval Govind!
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Web Developer", 1000,
              "Reactjs Enthusiast", 2000,
              "DSA Problem Solver"
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-3xl md:text-4xl lg:text-5xl text-[#61CE70] block line"
          />
          <p className="text-justify pb-5 text-white">
            I'm a BTech third-year computer science student who loves building complete web apps.
            I enjoy working on everything from the design of the front end to setting up the back end.
            I've worked with the MERN stack and focus on making apps that are easy to use and can handle lots of users without issues.
          </p>
          {/* Enhanced Download Button */}
          <button
            onClick={handleDownload}
            disabled={isPreparing}
            data-aos="zoom-in"
            className={`mt-5 flex items-center gap-3 px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg
              ${
                isPreparing
                  ? "bg-[#61CE70] text-black cursor-not-allowed"
                  : "text-[#61CE70] border border-[#61CE70] hover:bg-[#61CE70] hover:text-black"
              }`}
          >
            {isPreparing ? (
              <>
                <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3-3-3h4z"
                  ></path>
                </svg>
                Preparing...
              </>
            ) : (
              <>
                <FaDownload /> Download Resume
              </>
            )}
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-24 lg:mt-0">
          <div
            data-aos="zoom-in"
            className="border-8 hover:translate-y-10 duration-300 p-4 border-[#61CE70] rounded-full w-80 h-80"
          >
            <img
              className="rounded-full h-full object-cover w-full"
              src={ProfileImage}
              alt="Profile of Govind"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
