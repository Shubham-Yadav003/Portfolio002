import React from 'react';
import image from "../assets/profileImage.jpeg"

const AboutMe = () => {
    return (
        <div id="About" className='py-20 lg:py-10 lg:p-10'>
            <div className='text-center my-10 lg:my-0'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl mb-4'>About Me</h1>
                <p className='text-2xl md:text-4xl pb-10 lg:pb-0 lg:text-5xl text-[#61CE70]'>----- who I am -----</p>
            </div>

            <div className='flex md:p-5 max-h-[700px] justify-center items-center gap-10 lg:gap-28 flex-col-reverse md:flex-row-reverse mx-auto mt-20'>
                <div data-aos="fade-up" className='text-justify md:text-left md:w-1/2 space-y-5 lg:w-[700px] text-xl p-4'>
                    <p className="leading-relaxed text-justify">
                        Hey there! I'm Govind Bardaval, a full-stack web developer and problem-solving enthusiast with a strong foundation in C++, JavaScript, and the MERN stack. I'm passionate about building user-centric applications that are both visually appealing and highly functional.
                    </p>

                    <p className='leading-relaxed text-justify'>
                        From crafting intuitive frontends using React, Tailwind, and Bootstrap, to developing secure and scalable backends with Node.js, Express, and MongoDB — I love turning innovative ideas into impactful web solutions. I’ve also solved 500+ coding problems on platforms like LeetCode and GFG, which strengthens my logical and algorithmic thinking.
                    </p>

                    <p className='leading-relaxed text-justify'>
                        Currently exploring AI integrations and optimizing user experiences through accessible design, I'm always eager to learn, collaborate, and push boundaries in tech.
                    </p>
                </div>
                <div>
                    <div
                        data-aos="zoom-in"
                        className="border-8 hover:translate-y-10 duration-150 p-4 border-[#61CE70] rounded-full w-80 h-80"
                    >
                        <img
                            className="rounded-full h-full object-cover w-full"
                            src={image}
                            alt="Govind Bardaval"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
