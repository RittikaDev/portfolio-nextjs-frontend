import { ProjectCard } from "@/components/Home/Projects/project-card";
import TopSection from "@/components/Home/Projects/top-section";
import envConfig from "@/config/env.config";
import { IProject } from "@/types";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Rittika Dev | All Projects",
};

const Projects = async () => {
	const res = await fetch(
		`${envConfig.baseApi}/api/projects/featured` as string,
		{
			cache: "no-store",
		}
	);
	const { data } = await res.json();
	return (
		<section className="md:pt-32 pb-10">
			<div className="max-w-7xl mx-auto">
				<TopSection />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
					{data?.map((project: IProject) => (
						<ProjectCard key={project._id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
