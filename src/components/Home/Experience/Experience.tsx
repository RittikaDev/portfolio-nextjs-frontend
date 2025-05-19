"use client";
import React from "react";

import { useTheme } from "@/context/theme-context";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { BriefcaseBusiness } from "lucide-react";
import { useSectionInView } from "@/lib/hooks";

interface IExpData {
	_id: string;
	title: string;
	location: string;
	date: string;
	startDate: Date;
	description: string;
}

const Experience = ({ expData }: { expData: IExpData[] }) => {
	const { inView } = useSectionInView("Experience", 0.1);
	const { theme } = useTheme();

	return (
		<section id="experience" className="mb-28 scroll-mt-28 sm:mb-40">
			<h1 className="mb-8 text-center font-bold text-4xl md:text-5xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-teal-900 to-teal-400 bg-clip-text leading-none text-transparent  dark:from-white dark:to-slate-900/10">
				My experience
			</h1>
			<VerticalTimeline lineColor="" animate={true}>
				{expData.map((item, index) => {
					const experience = item;
					// console.log(item);
					return (
						<VerticalTimelineElement
							key={item._id}
							visible={inView}
							position={index % 2 === 1 ? "right" : "left"}
							contentStyle={{
								background:
									theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
								boxShadow: "none",
								border: "1px solid rgba(0, 0, 0, 0.05)",
								textAlign: "left",
								padding: "1.3rem 2rem",
							}}
							contentArrowStyle={{
								borderRight:
									theme === "light"
										? "0.4rem solid #9ca3af"
										: "0.4rem solid rgba(255, 255, 255, 0.5)",
							}}
							date={experience.date}
							icon={<BriefcaseBusiness />}
							iconStyle={{
								background:
									theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
								fontSize: "1.5rem",
							}}
						>
							<div className={index % 2 === 1 ? "text-left" : "text-right"}>
								<h3 className="font-semibold capitalize">{experience.title}</h3>
								<p className="!mt-0 font-normal">{experience.location}</p>
								<p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
									{experience.description}
								</p>
							</div>
						</VerticalTimelineElement>
					);
				})}
			</VerticalTimeline>
		</section>
	);
};

export default Experience;
