import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import prepmate from "../assets/prepmate.png";
import EcommerceImage from "../assets/EcommerceImage.png";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const Data = [
    {
      title: "DailyBlog",
      description:
        "It is a space where readers explore, and admins create. A place for sharing ideas, gaining insights, and building a vibrant community—one post at a time!",

        
      keyFeatures: [
        "Tech: React, Nodejs, Express, MongoDB, Tailwind CSS",
      ],
      thumbnailImage: prepmate,
      category: "FullStack",
      clintLink: "https://github.com/Shubham-Yadav003/DailyBlogs",
      LiveLInk: "",
    },
    {
      title: "EduBlaze",
      description:
        "It is a dynamic MERN-based e-learning platform designed for seamless learning and teaching. Learners explore interactive courses, while educators create, manage, and engage—all in a user-friendly digital space! ",
      keyFeatures: [
        "Tech: React, Nodejs, Express, MongoDB, Bootstrap",
      ],
      thumbnailImage: EcommerceImage,
      category: "FullStack",
      clintLink: "https://github.com/Shubham-Yadav003/EduBlaze",
      LiveLInk: "", // Same live link for both projects
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
          -----Things I've Built & Explored ------
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
                <h1 className="text-4xl font-semibold">{item?.title}</h1>
                <p className="text-lg mt-5">{item?.description}</p>

                {item?.keyFeatures && (
                  <ul className="list-disc list-inside mt-4 text-base">
                    {item.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Enhanced buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href={item?.clintLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 shadow-md transition-transform hover:scale-105"
                >
                  <FaGithub size={18} /> GitHub
                </a>

                {item?.serverLink && (
                  <a
                    href={item?.serverLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 shadow-md transition-transform hover:scale-105"
                  >
                    <FaGithub size={18} /> Server Code
                  </a>
                )}

                {item?.LiveLInk && (
                  <a
                    href={item?.LiveLInk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#61CE70] text-black rounded-lg hover:bg-[#4CAB58] shadow-md transition-transform hover:scale-105"
                  >
                    <FaExternalLinkAlt size={16} /> Visit Site
                  </a>
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
