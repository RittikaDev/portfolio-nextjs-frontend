"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

interface Skill {
	_id: string;
	title: string;
}

const Skills = ({ skillData }: { skillData: Skill[] }) => {
	return (
		<div className="max-w-7xl mx-auto my-40">
			<h1 className="mb-8 pb-10 text-center font-bold text-4xl md:text-5xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-teal-900 to-teal-400 bg-clip-text leading-none text-transparent dark:from-white dark:to-slate-900/10">
				Things I am Good At
			</h1>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skillData.map((skill, index) => (
					<motion.li
						className=" border border-slate-200 rounded-2xl bg-slate-100 px-5 py-3 dark:bg-white/10 dark:text-white/80"
						key={skill._id}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}
					>
						{skill.title}
					</motion.li>
				))}
			</ul>
		</div>
	);
};

export default Skills;
