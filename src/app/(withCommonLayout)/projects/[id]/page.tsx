import ImageGallery from "@/components/modules/image-gallery";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import ShinyButton from "@/components/ui/shiny-button";
import { WobbleCard } from "@/components/ui/wobble-card";
import envConfig from "@/config/env.config";
import { cn } from "@/lib/utils";
import { ChevronRight, Github } from "lucide-react";

interface IProps {
	params: Promise<{
		id: string;
	}>;
}

const ProjectDetails = async ({ params }: IProps) => {
	const { id } = await params;

	// Fetch project details from API using id
	const res = await fetch(`${envConfig.baseApi}/api/projects/${id}` as string);
	const { data } = await res.json();

	return (
		<section className="pb-20 pt-10">
			<div className="max-w-7xl mx-auto">
				<div className="grid md:grid-cols-5 md:gap-x-10 items-center pb-6">
					<div
						className={`col-span-5 md:col-span-3 inline-block [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] text-5xl lg:text-7xl mb-4`}
					>
						<div className=" text-left block pointer-events-none whitespace-pre-wrap bg-clip-text leading-none text-transparent bg-gradient-to-b py-4 from-black to-gray-300/80 dark:from-white dark:to-slate-900/10">
							<span className="font-bold leading-tight md:leading-none">
								{data?.title}
							</span>
						</div>
					</div>

					<div className="col-span-5 md:col-span-2 space-y-6">
						<div
							className={cn(
								"inline-block group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
							)}
						>
							<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
								<span>✨ {data?.type}</span>
							</AnimatedShinyText>
						</div>
						<div className="space-y-4">
							{data?.frontend && (
								<div>
									<h3 className={` font-semibold text-xl mb-2`}>Frontend</h3>
									<div className="flex space-x-4">
										<a
											href={data?.frontend?.github}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ShinyButton className="rounded-full">
												<div className="flex space-x-1 items-center">
													<Github />
													<span className="capitalize">Source Code</span>
												</div>
											</ShinyButton>
										</a>
										<a
											href={data?.frontend?.deploymentLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ShinyButton className="rounded-full">
												<div className="flex space-x-1 items-center">
													<ChevronRight />
													<span className="capitalize">Live Preview</span>
												</div>
											</ShinyButton>
										</a>
									</div>
								</div>
							)}
							{data?.backend && (
								<div>
									<h3 className={` font-semibold text-xl mb-2`}>Backend</h3>
									<div className="flex space-x-4">
										<a
											href={data?.backend?.github}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ShinyButton className="rounded-full">
												<div className="flex space-x-1 items-center">
													<Github />
													<span className="capitalize">Source Code</span>
												</div>
											</ShinyButton>
										</a>
										<a
											href={data?.backend?.deploymentLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ShinyButton className="rounded-full">
												<div className="flex space-x-1 items-center">
													<ChevronRight />
													<span className="capitalize">Live Preview</span>
												</div>
											</ShinyButton>
										</a>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-5 md:gap-x-10 gap-y-4 md:gap-y-0">
					<div className="col-span-5 md:col-span-3">
						<h3 className={` font-semibold text-2xl border-b mb-4 pb-2`}>
							Description
						</h3>
						<p className={` text-base text-muted-foreground`}>
							{data?.description}
						</p>
					</div>
					<div className={`col-span-5 md:col-span-2 `}>
						<h3 className={` font-semibold text-2xl border-b mb-4 pb-2`}>
							Technologies
						</h3>
						<div className="flex flex-col space-y-2 ">
							{data?.frontend && (
								<div className="flex space-x-2 w-full">
									<span>Frontend:</span>
									<ul className="flex space-x-1">
										{data?.frontend?.technologies?.map(
											(tech: string, index: number) => (
												<li key={tech} className="text-muted-foreground">
													{tech}
													{index !== data?.frontend?.technologies?.length - 1
														? ","
														: "."}
												</li>
											)
										)}
									</ul>
								</div>
							)}

							{data?.backend && (
								<div className="flex space-x-2 w-full">
									<span>Backend:</span>
									<ul className="flex space-x-1">
										{data?.backend?.technologies?.map(
											(tech: string, index: number) => (
												<li key={tech} className="text-muted-foreground">
													{tech}
													{index !== data?.backend?.technologies?.length - 1
														? ","
														: "."}
												</li>
											)
										)}
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="mt-10 w-full">
					<WobbleCard
						className={``}
						containerClassName="h-[200px] md:max-h-[600px] md:h-[600px]"
						style={{
							background: `url(${data?.cover})`,
							backgroundSize: "cover",
						}}
					>
						<></>
					</WobbleCard>

					<ImageGallery images={data?.images} />

					<div>
						<h3 className={` font-semibold text-2xl border-b mb-4 pb-2`}>
							Features
						</h3>
						<ul className={`space-y-2 `}>
							{data?.description?.map((feature: string) => (
								<li key={feature} className="text-muted-foreground">
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
