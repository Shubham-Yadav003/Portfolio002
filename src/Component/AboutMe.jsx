import React from 'react';
import ProfileImg from "../assets/profileImage.jpg";

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
                        I'm <strong className='text-[#61CE70]'>Shubham </strong>, a <strong className='text-[#61CE70]'>full-stack web developer</strong> skilled in <strong className='text-[#61CE70]'>C++, JavaScript</strong>, and the <strong className='text-[#61CE70]'>MERN stack</strong>. I specialize in building user-friendly, functional applications with modern technologies like <strong className='text-[#61CE70]'>ReactJS, Node.js</strong>, and <strong className='text-[#61CE70]'>MongoDB</strong>.
                    </p>

                    <p className='leading-relaxed text-justify'>
                        I’ve solved <strong className='text-[#61CE70]'>430+ coding problems</strong> across platforms like <strong className='text-[#61CE70]'>LeetCode</strong> and <strong className='text-[#61CE70]'>GFG</strong>, enhancing my problem-solving skills and algorithms expertise.
                    </p>

                    <p className='leading-relaxed text-justify'>
                        Always keen to learn, I’m currently exploring <strong className='text-[#61CE70]'>AI integrations</strong> and optimizing user experiences in tech. I enjoy building intuitive, scalable solutions with a focus on <strong className='text-[#61CE70]'>accessibility</strong> and <strong className='text-[#61CE70]'>performance</strong>.
                    </p>
                </div>

                <div>
                    <div
                        data-aos="zoom-in"
                        className="border-8 hover:translate-y-10 duration-150 p-4 border-[#61CE70] rounded-full w-80 h-80"
                    >
                        <img
                            className="rounded-full h-full object-cover w-full"
                            src={ProfileImg}
                            alt="Shubham Kumar Yadav"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
