import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface IProps {
	project: IProject;
}

export function ProjectCard({ project }: IProps) {
	return (
		<CardContainer className="inter-var">
			<CardBody className="bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black h-auto rounded-xl p-6 border border-zinc-100 dark:border-zinc-900 w-auto ">
				<CardItem
					translateZ="50"
					className="text-2xl font-bold text-neutral-600 dark:text-white"
				>
					{project?.title}
				</CardItem>
				<CardItem
					as="p"
					translateZ="60"
					className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
				>
					{project?.brief}
				</CardItem>
				<CardItem translateZ="100" className="w-full mt-4">
					<Image
						src={project?.cover}
						height="1000"
						width="1000"
						className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
						alt="thumbnail"
					/>
				</CardItem>
				<div className="flex justify-between items-center mt-20">
					<CardItem
						translateZ={20}
						as={Link}
						href={`${project?.frontend?.deploymentLink}`}
						target="__blank"
						className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
					>
						Live Preview →
					</CardItem>
					<CardItem
						translateZ={20}
						as={Link}
						href={`/projects/${project?._id}`}
						className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
					>
						View Details
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}
