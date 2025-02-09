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

const Skills = () => {
	const skills = {
		data: [
			{ id: "1", title: "JavaScript" },
			{ id: "2", title: "TypeScript" },
			{ id: "3", title: "React" },
			{ id: "4", title: "Next.js" },
			{ id: "5", title: "Angular" },
			{ id: "6", title: "Vue.js" },
			{ id: "7", title: "Node.js" },
			{ id: "8", title: "Express.js" },
			{ id: "9", title: "NestJS" },
			{ id: "10", title: "MongoDB" },
			{ id: "11", title: "PostgreSQL" },
			{ id: "12", title: "Firebase" },
			{ id: "13", title: "Tailwind CSS" },
			{ id: "14", title: "SCSS" },
			{ id: "15", title: "Framer Motion" },
			{ id: "16", title: "Redux" },
			{ id: "17", title: "Jest" },
			{ id: "18", title: "Cypress" },
			{ id: "19", title: "Docker" },
			{ id: "20", title: "GraphQL" },
		],
	};

	return (
		<div className="max-w-7xl mx-auto">
			<h2 className="mb-8 text-center text-3xl font-medium capitalize">
				Things I am Good At
			</h2>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skills.data.map((skill, index) => (
					<motion.li
						className=" border border-slate-200 rounded-2xl bg-slate-100 px-5 py-3 dark:bg-white/10 dark:text-white/80"
						key={skill.id}
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
