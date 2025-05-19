/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

import { FaArrowLeft, FaClock } from "react-icons/fa";

import envConfig from "@/config/env.config";
import ShinyButton from "@/components/ui/shiny-button";
import "tailwindcss/tailwind.css";
import BlogContent from "@/components/BlogContent";

export interface IBlog {
	_id: string;
	title: string;
	brief: string;
	cover: string;
	slug: string;
	publishedDate: string;
	readTime: string;
	content: {
		type: string;
		text?: string;
		language?: string;
		code?: string;
		items?: string[];
	}[];
}

interface IProps {
	params: Promise<{
		id: string;
	}>;
}

export const generateStaticParams = async () => {
	const res = await fetch(
		"https://portfolio-v2-alpha-woad.vercel.app/api/blog"
	);
	const blogs = await res.json();

	return blogs.data.slice(0, 5).map((blog: IBlog) => ({
		id: blog._id,
	}));
};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const res = await fetch(
		`https://portfolio-v2-alpha-woad.vercel.app/api/blog/${id}`
	);
	const blog = await res.json();

	return {
		title: `Rittika Dev Blogs |  ${blog.data.title}`,
	};
}

const BlogDetail = async ({ params }: IProps) => {
	const { id } = await params;

	// FETCH PROJECT DETAILS FROM API USING ID
	const res = await fetch(`${envConfig.baseApi}/api/blog/${id}` as string);
	const { data } = await res.json();
	const blog = data;
	// console.log(blog.content);

	// BELOW CODE WAS FOR CONVERTING THE CONTENT ARRAY TO HTML STRING, BECAUSE CONTENT WAS NOT COMING AS AN HTML STRING
	// const htmlString = Array.isArray(blog.content)
	// 	? blog.content
	// 			.map((block: any) => {
	// 				const { _id, ...rest } = block;
	// 				console.log(_id);
	// 				return Object.values(rest).flat().join("");
	// 			})
	// 			.join("")
	// 	: "";

	// console.log(htmlString);

	if (!blog) return <p className="text-center text-lg">Loading...</p>;

	return (
		<section className="max-w-3xl mx-auto py-12 px-6 md:px-0 bg-gray-50 dark:bg-gray-800">
			{/* TITLE */}
			<h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
				{blog.title}
			</h1>

			{/* META INFO */}
			<div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm mb-6">
				<span>{blog.publishedDate}</span>
				<span className="flex items-center gap-1">
					<FaClock />
					{blog.readTime}
				</span>
			</div>

			{/* BLOG COVER IMAGE */}
			<div className="relative w-full h-50 md:h-[400px] overflow-hidden rounded-xl shadow-lg mb-8">
				<Image
					src={blog?.cover || null}
					alt={blog.title}
					width={1100}
					height={1200}
					priority
					className="rounded-xl transition-transform duration-500 hover:scale-110"
				/>
			</div>

			{/* BLOG CONTENT */}
			<BlogContent htmlString={blog.content} />
			{/* BOTTOM DIVIDER */}
			<hr className="my-12 border-gray-300 dark:border-gray-600" />

			{/* BACK TO BLOGS BUTTON */}
			<div className="mt-6 text-center">
				<Link href={`/projects`}>
					<ShinyButton>
						<div className="flex space-x-2">
							<FaArrowLeft className="mr-2 mt-1" />
							<span className="capitalize text-base font-medium inline-block">
								Back to Blogs
							</span>
						</div>
					</ShinyButton>
				</Link>
			</div>
		</section>
	);
};

export default BlogDetail;
