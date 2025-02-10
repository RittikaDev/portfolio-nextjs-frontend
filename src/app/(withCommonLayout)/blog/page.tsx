import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import envConfig from "@/config/env.config";
import { IBlog } from "@/types";
import { FileTextIcon } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface IBento {
	name: string;
	className: string;
	background: ReactNode;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Icon: any;
	description: string;
	href: string;
	cta: string;
}

const page = async () => {
	const res = await fetch(`${envConfig.baseApi}/api/blog` as string, {
		next: {
			revalidate: 120,
		},
	});
	const { data } = await res.json();

	const dynamicBlogs = data?.map((blog: IBlog, index: number) => {
		const pattern = [
			"md:col-span-1",
			"md:col-span-2",
			"md:col-span-2",
			"md:col-span-1",
		];
		return {
			name: blog?.title,
			description: blog?.brief,
			href: `/blog/${blog?._id}`,
			cta: "Learn more",
			className: `col-span-3 ${pattern[index % pattern.length]}`,
			background: (
				<div className="absolute right-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
					<Image
						width={800}
						height={500}
						src={blog?.cover}
						alt={blog?.slug + "cover-image"}
					/>
				</div>
			),
			Icon: FileTextIcon,
		};
	});

	return (
		<section className="py-20">
			<div className="max-w-7xl mx-auto">
				<div className="space-y-6">
					<div>
						<h1 className="my-12 text-center font-bold text-4xl md:text-5xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-teal-900 to-teal-400 bg-clip-text leading-none text-transparent  dark:from-white dark:to-slate-900/10">
							Recent Blogs
						</h1>
					</div>
					<div className="mt-10">
						<BentoGrid>
							{dynamicBlogs?.map((bento: IBento, index: number) => (
								<BentoCard key={index} {...bento} />
							))}
						</BentoGrid>
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
