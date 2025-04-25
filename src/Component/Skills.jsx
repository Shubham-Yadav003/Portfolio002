import React from 'react';
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/js.svg";
import tailwind from "../assets/icons/tailwind.svg";
import redux from "../assets/icons/redux.svg";
import firebase from "../assets/icons/firebase.svg";
import mongoDB from "../assets/icons/mongoDB.svg";
import react from "../assets/icons/react.json";
import nodeJs from "../assets/icons/nodeJS.json";
import expressjs from "../assets/icons/expressjs.svg";
import nextjs from "../assets/icons/nextjs.webp";
import laravel from "../assets/icons/laravel.svg";
import Lottie from "lottie-react";

const Skills = () => {
	return (
		<div id="Skills" className="p-10">
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">My Skills</h1>
				<p className="text-2xl md:text-3xl lg:text-5xl text-[#61CE70]">
					----- What I Know -----
				</p>
			</div>

			<div className="max-w-[1000px] mx-auto mt-10">
				{/* Frontend Section */}
				<h2 className="text-3xl text-[#61CE70] font-bold my-6 text-center">Frontend Technologies</h2>
				<div className="grid justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
					{[
						{ icon: html, label: "HTML" },
						{ icon: css, label: "CSS" },
						{ icon: tailwind, label: "Tailwind" },
						{ icon: js, label: "JavaScript" },
						{ icon: react, label: "React", isLottie: true },
						{ icon: nextjs, label: "Next.js" },
						{ icon: redux, label: "Redux" },
						{ icon: firebase, label: "Firebase" }
					].map(({ icon, label, isLottie }, i) => (
						<div key={i}>
							<div className="w-36 h-36 border-2 border-[#61CE70]">
								{isLottie ? (
									<Lottie animationData={icon} loop autoplay style={{ width: "full", height: "full" }} />
								) : (
									<img src={icon} className="h-full animateSkillImage p-6 mx-auto" alt={label} />
								)}
							</div>
							<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">
								{label}
							</h1>
						</div>
					))}
				</div>

				{/* Backend Section */}
				<h2 className="text-3xl text-[#61CE70] font-bold my-6 text-center">Backend Technologies</h2>
				<div className="grid justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
					{[
						{ icon: nodeJs, label: "Node.js", isLottie: true },
						{ icon: expressjs, label: "Express.js" },
						{ icon: mongoDB, label: "MongoDB" },
						{ icon: laravel, label: "Laravel" }
					].map(({ icon, label, isLottie }, i) => (
						<div key={i}>
							<div className="w-36 h-36 border-2 border-[#61CE70]">
								{isLottie ? (
									<Lottie animationData={icon} loop autoplay style={{ width: "full", height: "full" }} />
								) : (
									<img src={icon} className="h-full animateSkillImage p-6 mx-auto" alt={label} />
								)}
							</div>
							<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">
								{label}
							</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
