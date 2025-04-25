import React from 'react';
import image1 from "../assets/image1.png"; // Update with actual image path
import image2 from "../assets/image2.png"; // Update with actual image path

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

            <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10 lg:my-10">
                {/* Image 1 */}
                <div className='w-full md:w-1/2 flex justify-center items-center p-5'>
                    <img 
                        src={image1} 
                        className='rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300' 
                        alt="Achievement Image 1" 
                    />
                </div>

                {/* Image 2 */}
                <div className='w-full md:w-1/2 flex justify-center items-center p-5'>
                    <img 
                        src={image2} 
                        className='rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300' 
                        alt="Achievement Image 2" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Achievement;
