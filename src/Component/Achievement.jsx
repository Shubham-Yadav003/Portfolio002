import React from 'react';
import image1 from "../assets/image1.png"; // Hackerrank certificate
import image2 from "../assets/image2.png"; // LeetCode certificate

const Achievement = () => {
    return (
        <div className='p-10' id='Achievement'>
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-white">
                    My Achievements
                </h1>
                <p className="text-2xl md:text-3xl lg:text-5xl text-[#61CE70]">
                    ----- My Notable Milestones ------
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-8 my-10">
                {/* HackerRank Achievement */}
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-5'>
                    <h3 className="text-xl font-semibold text-[#61CE70] mb-3">HackerRank</h3>
                    <img 
                        src={image1} 
                        className='rounded-xl w-full max-w-[400px] h-[300px] object-contain hover:scale-105 transition-transform duration-300' 
                        alt="HackerRank Certificate" 
                    />
                </div>

                {/* LeetCode Achievement */}
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-5'>
                    <h3 className="text-xl font-semibold text-[#61CE70] mb-3">LeetCode</h3>
                    <img 
                        src={image2} 
                        className='rounded-xl w-full max-w-[400px] h-[300px] object-contain hover:scale-105 transition-transform duration-300' 
                        alt="LeetCode Certificate" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Achievement;
