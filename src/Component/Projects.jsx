import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import prepmate from "../assets/prepmate.png";
import EcommerceImage from "../assets/EcommerceImage.png";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const Data = [
    {
      title: "PrepMate",
      description:
        "Developed a full-stack notes platform with CRUD features for 100+ users, supporting seamless notes management. Integrated PDF upload/viewing and voice-based features, including speech-to-text and text-to-speech, for 20+ visually impaired users.",
      thumbnailImage: prepmate,
      category: "FullStack",
      clintLink: "https://github.com/BardavalGovind/PrepMate",
      LiveLInk: "https://prepmateai.vercel.app/",
    },
    {
      title: "MegaMart",
      description:
        "Built a MERN-based e-commerce platform with category-wise browsing and secure Braintree payment integration. Optimized RESTful APIs for CRUD, authentication, and order processing, reducing server load by 30%. Added advanced filtering & personalized recommendations, boosting user engagement by 20%.",
      thumbnailImage: EcommerceImage,
      category: "FullStack",
      clintLink: "https://github.com/BardavalGovind/Ecommerce-Website",
    },
  ];

  const [activeButton, setActiveButton] = useState("all Product");

  const filteredData = Data.filter((item) => {
    if (activeButton === "all Product") return true;
    if (activeButton === "FrontEnd") return item.category === "FrontEnd";
    if (activeButton === "Full Stack") return item.category === "FullStack";
    return false;
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="Projects" className="bg-transparent py-10">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">My Projects</h1>
        <p className="text-2xl md:text-3xl lg:text-5xl text-[#61CE70]">
          -----what I know ------
        </p>
      </div>

      <div className="mt-10 flex flex-col px-5 gap-20 lg:gap-10">
        {filteredData?.map((item, inx) => (
          <div
            className={`${
              inx % 2 === 0 ? "lg:flex-row-reverse" : ""
            } flex flex-col lg:flex-row justify-center h-full lg:gap-5`}
            key={inx}
          >
            {/* Image container */}
            <div className="lg:w-[700px] min-h-[340px]">
              <img
                src={item?.thumbnailImage}
                alt={item?.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Text content container */}
            <div className="lg:w-[450px] min-h-[340px] h-full flex flex-col justify-between">
              <div className="bg-[#61CE70]/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg flex-1">
                <h1 className="text-4xl">{item?.title}</h1>
                <p className="text-lg mt-5">{item?.description}</p>
              </div>

              <div className="flex justify-between mt-4">
                <Link
                  to={item?.clintLink}
                  className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]"
                >
                  <FaGithub /> Client side
                </Link>

                {item?.serverLink && (
                  <Link
                    to={item?.serverLink}
                    className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]"
                  >
                    <FaGithub /> Server side
                  </Link>
                )}

                {item?.LiveLInk && (
                  <Link
                    to={item?.LiveLInk}
                    className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]"
                  >
                    <FaExternalLinkAlt /> Visit website
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
