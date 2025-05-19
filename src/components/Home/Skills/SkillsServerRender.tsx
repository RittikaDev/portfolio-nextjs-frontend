import envConfig from "@/config/env.config";
import React from "react";
import Skills from "./Skills";

const SkillsServerRender = async () => {
	const res = await fetch(
		`${envConfig.baseApi}/api/skills` as string,
		// `http://localhost:5000/api/skills` as string,
		{
			next: {
				revalidate: 120,
			},
		}
	);
	const { data } = await res.json();
	return <Skills skillData={data} />;
};
export default SkillsServerRender;
