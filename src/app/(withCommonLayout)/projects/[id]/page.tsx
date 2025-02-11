/* eslint-disable @typescript-eslint/no-explicit-any */
import ImageGallery from "@/components/modules/image-gallery";
// import AnimatedShinyText from "@/components/ui/animated-shiny-text";
// import { WobbleCard } from "@/components/ui/wobble-card";
import envConfig from "@/config/env.config";
// import { cn } from "@/lib/utils";
import { ChevronRight, Github } from "lucide-react";

interface IProps {
	params: Promise<{
		id: string;
	}>;
}

export const generateStaticParams = async () => {
	const res = await fetch(
		"https://portfolio-v2-alpha-woad.vercel.app/api/projects/featured"
	);
	const projects = await res.json();

	return projects.data.slice(0, 5).map((project: any) => ({
		id: project._id,
	}));
};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const res = await fetch(
		`https://portfolio-v2-alpha-woad.vercel.app/api/projects/${id}`
	);
	const project = await res.json();

	return {
		title: `Rittika Dev Project | ${project.data.title}`,
	};
}

const ProjectDetails = async ({ params }: IProps) => {
	const { id } = await params;

	// Fetch project details from API using id
	const res = await fetch(`${envConfig.baseApi}/api/projects/${id}` as string);
	const { data } = await res.json();

	return (
		<section className="pb-20 pt-40">
			<div className="max-w-7xl mx-auto">
				<div className="relative grid md:grid-cols-5 md:gap-x-10 items-center pb-6">
					<div
						className="absolute inset-0 bg-cover bg-center"
						style={{
							backgroundImage: `url(${data?.cover})`,
							opacity: 0.1, // Very low opacity for the background image
							zIndex: -1, // Ensure it stays behind the content
							height: "500px",
						}}
					></div>

					<div className="col-span-5 md:col-span-3 text-5xl lg:text-7xl text-white relative">
						<h1 className="mt-10 text-left block font-bold text-5xl md:text-6xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-teal-900 to-teal-400">
							{data?.title}
						</h1>
					</div>

					<div className="col-span-5 md:col-span-2 space-y-6 dark:text-white text-slate-700">
						<div className="space-y-4">
							{data?.frontend && (
								<div>
									<h3 className="font-semibold text-xl mb-2">Frontend</h3>
									<div className="flex space-x-4">
										<a
											href={data?.frontend?.github}
											target="_blank"
											rel="noopener noreferrer"
											className="px-4 flex items-center space-x-2 bg-gray-800 text-white  rounded-md hover:bg-gray-700 transition duration-300"
										>
											<Github className="w-5 h-5" />
											<span className="capitalize">Source Code</span>
										</a>
										<a
											href={data?.frontend?.deploymentLink}
											target="_blank"
											rel="noopener noreferrer"
											className="px-4 flex items-center space-x-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
										>
											<ChevronRight className="w-5 h-5" />
											<span className="capitalize">Live Preview</span>
										</a>
									</div>
								</div>
							)}

							{data?.backend && (
								<div>
									<h3 className="font-semibold text-xl mb-2">Backend</h3>
									<div className="flex space-x-4">
										<a
											href={data?.backend?.github}
											target="_blank"
											rel="noopener noreferrer"
											className="px-4 flex items-center space-x-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
										>
											<Github className="w-5 h-5" />
											<span className="capitalize">Source Code</span>
										</a>

										<a
											href={data?.backend?.deploymentLink}
											target="_blank"
											rel="noopener noreferrer"
											className="px-4 flex items-center space-x-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
										>
											<ChevronRight className="w-5 h-5" />
											<span className="capitalize">Live Preview</span>
										</a>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<div>
					<div className="col-span-5 md:col-span-3 mb-10">
						<h3 className={` font-semibold text-2xl border-b mb-4 pb-2`}>
							Brief
						</h3>
						<p className={` text-base text-muted-foreground`}>
							{data?.description}
						</p>
					</div>

					<div className="col-span-1 md:col-span-1">
						<h3 className="font-semibold text-2xl border-b mb-4 pb-2">
							Technologies
						</h3>
						<div className="space-y-3">
							{data?.frontend && (
								<div className="flex flex-wrap items-center space-x-2">
									<span>Frontend:</span>
									<ul className="flex space-x-2">
										{data?.frontend?.technologies?.map((tech: string) => (
											<li
												key={tech}
												className="bg-gray-100 dark:bg-slate-800 dark:text-slate-300 p-2 rounded-md"
											>
												{tech}
											</li>
										))}
									</ul>
								</div>
							)}

							{data?.backend && (
								<div className="flex flex-wrap items-center space-x-2">
									<span>Backend:</span>
									<ul className="flex space-x-2">
										{data?.backend?.technologies?.map((tech: string) => (
											<li
												key={tech}
												className="bg-gray-100 dark:bg-slate-800 dark:text-slate-300 p-2 rounded-md"
											>
												{tech}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="mt-10 w-full">
					{/* <WobbleCard
            containerClassName="h-[200px] md:max-h-[600px] md:h-[600px] mb-10"
            style={{
              background: `url(${data?.cover})`,
              backgroundSize: "cover",
            }}
          >
            <></>
          </WobbleCard> */}

					<h1 className="mt-24 text-center block font-bold text-3xl md:text-5xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-teal-900 to-teal-400 bg-clip-text leading-none text-transparent dark:from-white dark:to-slate-900/10">
						Snapshots
					</h1>
					<ImageGallery images={data?.images} />

					<div className="p-4 mt-10 bg-white dark:bg-slate-700 rounded-lg shadow-md">
						<h3 className="text-3xl text-center font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-teal-900 to-teal-400 bg-clip-text leading-none text-transparent border-b-2 border-gray-300 pb-2 mb-4">
							Features
						</h3>
						<ul className="space-y-3 list-disc list-inside text-gray-600">
							{data?.description?.map((feature: string) => (
								<li
									key={feature}
									className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-300 dark:bg-slate-800 dark:hover:bg-slate-900 dark:text-slate-300"
								>
									{feature}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectDetails;
