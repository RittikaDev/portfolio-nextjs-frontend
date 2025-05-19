import React from "react";
import Experience from "./Experience";
import envConfig from "@/config/env.config";

const ExperienceServer = async () => {
	const res = await fetch(
		`${envConfig.baseApi}/api/experience` as string,
		// `http://localhost:5000/api/experience` as string,
		{
			next: {
				revalidate: 120,
			},
		}
	);
	const { data } = await res.json();
	return <Experience expData={data} />;
};

export default ExperienceServer;
