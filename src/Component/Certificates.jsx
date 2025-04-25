import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import frontend from "../assets/frontend.png";
import Learnyard from "../assets/Learnyard.png";
import Mern from "../assets/Mern.png";
import dsa from "../assets/dsa.png";
import nptel from "../assets/nptel.png";

const certificatesData = [
    {
        title: "Responsible & Safe AI Systems",
        organization: "NPTEL",
        Completion: "October 2024",
        mobileDuration: "October 2024",
        image: nptel,
        bullets: [
            "Studied ethical, social, and safety aspects of AI systems, including fairness, transparency, and interpretability.",
            "Explored the impact of modern AI models like ChatGPT and DALL·E, and learned approaches for safer AI development."
        ],
        technologies: ["AI Ethics", "Responsible AI", "ChatGPT", "DALL·E"]
    },
    {
        title: "Frontend Development Bootcamp",
        organization: "Coursera",
        Completion: "April 2024",
        mobileDuration: "April 2024",
        image: frontend,
        bullets: [
            "Learned core frontend technologies including HTML, CSS, and JavaScript.",
            "Created responsive websites and interactive components with React.",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        title: "Full Stack Web Development: MERN Stack",
        organization: "CSE Pathshala",
        Completion: "July 2024",
        mobileDuration: "July 2024",
        image: Mern,
        bullets: [
            "Built full-stack web applications using the MERN stack, implementing RESTful APIs and integrating front end with backend.",
            "Gained experience with modern practices like Git, responsive design, and deployment strategies.",
            // "Learned to design, develop, and deploy web apps from scratch using the MERN stack."
        ],
        technologies: ["MongoDB", "Express", "React", "Node.js", "REST API", "Git", "Responsive Design"]
    },
    {
        title: "Mastering DSA using C and C++",
        organization: "Udemy",
        Completion: "November 2023",
        mobileDuration: "November 2023",
        image: dsa,
        bullets: [
            "Learned foundational Data Structures and Algorithms using C and C++, including arrays, linked lists, and sorting techniques.",
            "Explored basic algorithm analysis concepts like time and space complexity."
        ],
        technologies: ["C", "C++", "Data Structures", "Algorithms"]
    },
    {
        title: "Intermediate DSA",
        organization: "LearnYard",
        Completion: "July 2024",
        mobileDuration: "July 2024",
        image: Learnyard,
        bullets: [
            "Learned intermediate-level DSA concepts including STL, trees, graphs, and dynamic programming.",
            "Solved 500+ problems across platforms like LeetCode, HackerRank, and Codeforces, strengthening problem-solving skills.",
        ],
        technologies: ["C++", "STL", "Trees", "Graphs", "DP", "LeetCode", "HackerRank"]
    },
];

const Certificates = () => {
    return (
        <div className='p-10' id='Certificates'>
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-white">
                    Certificates
                </h1>
                <p className="text-2xl md:text-3xl lg:text-5xl text-[#61CE70]">
                    ----- My Learning Journey ------
                </p>
            </div>

            {certificatesData.map((cert, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10">
                    <div className='w-full md:w-1/4 flex justify-center lg:justify-end items-center lg:w-1/3 p-10 md:p-5 lg:p-10'>
                        <img src={cert.image} className='rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300' alt={`${cert.organization} Logo`} />
                    </div>
                    <div className='w-full md:w-3/4 lg:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg'>
                        <h1 className='text-2xl md:text-3xl font-extrabold text-white'>{cert.title}</h1>
                        <h2 className='text-lg hidden md:block my-3 font-medium text-gray-300'>
                            {cert.organization} | {cert.Completion}
                        </h2>
                        <h2 className='my-2 lg:hidden text-lg'>{cert.organization} | {cert.mobileDuration}</h2>

                        {/* for large device */}
                        <ul className='list-disc hidden lg:block mt-5 md:ml-5 space-y-3 md:pl-5'>
                            {cert.bullets.map((point, idx) => (
                                <li key={idx} className='flex items-start gap-3 leading-relaxed'>
                                    <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                        <FiCheckCircle className="text-primaryColor" />
                                    </div>
                                    <span className='flex-grow'>{point}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Technologies used */}
                        <div className="mt-4 text-sm text-gray-300">
                            <span className="font-semibold text-white">Technologies:</span> {cert.technologies.join(", ")}
                        </div>
                    </div>

                    {/* for mobile view */}
                    <ul className='list-disc lg:hidden space-y-3 md:pl-5'>
                        {cert.bullets.map((point, idx) => (
                            <li key={idx} className='flex items-center gap-3 leading-relaxed'>
                                <div className='w-5 h-5 flex-shrink-0'>
                                    <FiCheckCircle className="text-primaryColor" />
                                </div>
                                <span className='flex-grow'>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Certificates;
