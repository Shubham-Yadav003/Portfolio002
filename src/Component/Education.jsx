import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
	return (
		<div className="bg-base-100 mt-20">
			<div
				id="Education"
				className="flex md:bg-base-100 bg-[#61CE61] text-black md:text-inherit md:bg-inherit gap-5 flex-col md:flex-row h-screen max-h-[600px]"
			>
				{/* Icon & Heading */}
				<div className="md:w-1/2 pb-5 flex justify-center items-center bg-[#61CE61]">
					<div>
						<FaGraduationCap size={200} className="text-white" />
						<h1 className="text-5xl -mt-10 text-white font-bold tracking-wide shadow-lg">Education</h1>
					</div>
				</div>

				{/* Education Details */}
				<div className="md:w-1/2 bg-[#61CE61] md:bg-base-100 overflow-hidden text-center md:text-left text-xl flex flex-col justify-center items-center">
					<div className="space-y-6 md:space-y-10">
						{/* B.Tech Section */}
						<div className="bg-white shadow-lg rounded-lg p-5 md:p-8 hover:scale-105 transform transition-all duration-300">
							<h1 className="text-3xl mb-3 font-semibold text-[#2d2d2d] hover:text-[#61CE70] transition-colors duration-300">
								Currently Pursuing
							</h1>
							<p className="text-lg text-gray-700 font-medium">B.Tech 3rd Year in Computer Science</p>
							<p className="text-lg text-gray-500">Lovely Professional University, India</p>
						</div>

						{/* Intermediate Section */}
						<div className="bg-white shadow-lg rounded-lg p-5 md:p-8 hover:scale-105 transform transition-all duration-300">
							<h1 className="text-3xl mb-3 font-semibold text-[#2d2d2d] hover:text-[#61CE70] transition-colors duration-300">
								Intermediate
							</h1>
							<p className="text-lg text-gray-700 font-medium">Sri Venkateshwara Junior College</p>
							<p className="text-lg text-gray-500">Nizamabad, Telangana</p>
						</div>

						{/* 10th Standard Section */}
						<div className="bg-white shadow-lg rounded-lg p-5 md:p-8 hover:scale-105 transform transition-all duration-300">
							<h1 className="text-3xl mb-3 font-semibold text-[#2d2d2d] hover:text-[#61CE70] transition-colors duration-300">
								10th Standard
							</h1>
							<p className="text-lg text-gray-700 font-medium">TSRS Boys Madnoor</p>
							<p className="text-lg text-gray-500">Kamareddy, Telangana</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
