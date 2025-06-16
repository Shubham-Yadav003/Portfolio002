import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import image from "../assets/mern.png"; // Update with actual image path

const Experience = () => {
    return (
        <div className='p-10' id='Experience'>
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-white">
                    Training
                </h1>
                <p className="text-2xl md:text-3xl lg:text-5xl text-[#61CE70]">
                    ----- What I’ve Done ------
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10 lg:my-10">
                <div className='w-full md:w-1/4 flex justify-center lg:justify-end items-center  lg:w-1/3 p-10 md:p-5 lg:p-10'>
                    <img src={image} className='rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300' alt="Code Asylumn Logo" />
                </div>
                <div className='w-full md:w-3/4 lg:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg'>
                    <h1 className='text-2xl md:text-3xl font-extrabold text-white'>Problem Setter Intern</h1>
                    <h2 className='text-lg hidden md:block my-3 font-medium text-gray-300'>Code Asylumn | May 2024 – July 2024 (3 months)</h2>

                    <h2 className='my-2 lg:hidden text-lg'>CSE Pathshala | Jun 25 - July 25</h2>

                    {/* for large device  */}
                    <ul className='list-disc hidden lg:block mt-5 md:ml-5 space-y-3 md:pl-5'>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Gained indepth understanding of MERN stack, and how to implement it in real world projects.
                            </span>
                        </li>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Designed and implemented 10+ RESTful APIs for secure data communication 
                            </span>
                        </li>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Developed 5+ robust, scalable web apps using MERN stack with efficient client-server interactions. 
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* for mobile view */}
            <ul className='list-disc lg:hidden space-y-3 md:pl-5'>
                <li className='flex items-center gap-3 leading-relaxed'>
                    <div className='w-5 h-5 flex-shrink-0'>
                        <FiCheckCircle className="text-primaryColor" />
                    </div>
                    <span className='flex-grow'>
                         Gained indepth understanding of MERN stack, and how to implement it in real world projects.
                    </span>
                </li>
                <li className='flex items-center gap-3 leading-relaxed'>
                    <div className='w-5 h-5 flex-shrink-0'>
                        <FiCheckCircle className="text-primaryColor" />
                    </div>
                    <span className='flex-grow'>
                         Designed and implemented 10+ RESTful APIs for secure data communication 
                    </span>
                </li>
                <li className='flex items-center gap-3 leading-relaxed'>
                    <div className='w-5 h-5 flex-shrink-0'>
                        <FiCheckCircle className="text-primaryColor" />
                    </div>
                    <span className='flex-grow'>
                        Developed 5+ robust, scalable web apps using MERN stack with efficient client-server interactions. 
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Experience;
