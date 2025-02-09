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

const Experience = () => {
	const { inView } = useSectionInView("Experience", 0.1);
	const { theme } = useTheme();

	const experiences = {
		data: [
			{
				id: "1",
				title: "Software Engineer",
				location: "Dhaka, Bangladesh",
				date: "Jan 2022 - Present",
				description:
					"Developing and maintaining enterprise applications using Angular and .NET Core. Implementing new features, optimizing performance, and collaborating with cross-functional teams.",
			},
			{
				id: "2",
				title: "Frontend Developer",
				location: "Remote",
				date: "Jul 2020 - Dec 2021",
				description:
					"Built interactive user interfaces using React.js and Tailwind CSS. Worked on improving user experience and enhancing application performance.",
			},
			{
				id: "3",
				title: "Intern - Web Developer",
				location: "Dhaka, Bangladesh",
				date: "Jan 2020 - Jun 2020",
				description:
					"Gained hands-on experience in full-stack development. Worked with a team on a CRM system using Vue.js and Firebase.",
			},
		],
	};

	return (
		<section id="experience" className="mb-28 scroll-mt-28 sm:mb-40">
			<h2 className="mb-8 text-center text-3xl font-medium capitalize">
				My experience
			</h2>
			<VerticalTimeline lineColor="" animate={true}>
				{experiences.data.map((item) => {
					const experience = item;
					return (
						<React.Fragment key={item.id}>
							<VerticalTimelineElement
								visible={inView}
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
								<h3 className="font-semibold capitalize">{experience.title}</h3>
								<p className="!mt-0 font-normal">{experience.location}</p>
								<p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
									{experience.description}
								</p>
							</VerticalTimelineElement>
						</React.Fragment>
					);
				})}
			</VerticalTimeline>
		</section>
	);
};

export default Experience;
