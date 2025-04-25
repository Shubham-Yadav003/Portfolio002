import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
	return (
		<div className="bg-base-100 mt-20">
			<div
				id="Education"
				className="flex md:bg-base-100 bg-[#61CE61] text-black md:text-inherit md:bg-inherit gap-5 flex-col md:flex-row h-screen max-h-[500px]"
			>
				{/* Icon & Heading */}
				<div className="md:w-1/2 pb-5 flex justify-center items-center bg-[#61CE61]">
					<div>
						<FaGraduationCap size={200} className="text-black" />
						<h1 className="text-5xl -mt-10 text-black">Education</h1>
					</div>
				</div>

				{/* Education Details */}
				<div className="md:w-1/2 bg-[#61CE61] md:bg-base-100 overflow-hidden text-center md:text-left text-xl flex flex-col justify-center items-center">
					<div className="space-y-4 md:space-y-10">
						<div>
							<h1 className="text-3xl mb-2">Currently Pursuing</h1>
							<p>Bachelor of Technology (B.Tech) in Computer Science</p>
							<p>Lovely Professional University, India</p> {/* Replace with your real college name if you want */}
						</div>
						<div>
							<h1 className="text-3xl mb-2">Completed Higher Secondary</h1>
							<p>Sri Venkateshwara Junior College, India</p> {/* Replace with your real school name if needed */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Education;
