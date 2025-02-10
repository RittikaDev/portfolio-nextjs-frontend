/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

import { FaArrowLeft, FaClock } from "react-icons/fa";

import envConfig from "@/config/env.config";
import ShinyButton from "@/components/ui/shiny-button";

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

const BlogDetail = async ({ params }: IProps) => {
	const { id } = await params;

	// Fetch project details from API using id
	const res = await fetch(`${envConfig.baseApi}/api/blog/${id}` as string);
	const { data } = await res.json();
	const blog = data;

	if (!blog) return <p className="text-center text-lg">Loading...</p>;

	return (
		<section className="max-w-3xl mx-auto py-12 px-6 md:px-0 bg-gray-50 dark:bg-gray-800">
			{/* Back to Blogs Button */}
			{/* <div className="mb-6">
				<Link
					href="/blog"
					className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition transform hover:scale-105"
				>
					<FaArrowLeft className="text-xl" />
					Back to Blogs
				</Link>
			</div> */}

			{/* Title */}
			<h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
				{blog.title}
			</h1>

			{/* Meta Info */}
			<div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm mb-6">
				<span>{blog.publishedDate}</span>
				<span className="flex items-center gap-1">
					<FaClock />
					{blog.readTime}
				</span>
			</div>

			{/* Blog Cover Image */}
			<div className="relative w-full h-50 md:h-[400px] overflow-hidden rounded-xl shadow-lg mb-8">
				<Image
					src={blog.cover}
					alt={blog.title}
					width={1100}
					height={1200}
					priority
					className="rounded-xl transition-transform duration-500 hover:scale-110"
				/>
			</div>

			{/* Blog Content */}
			<article className="text-lg space-y-8 text-gray-800 dark:text-gray-200">
				{blog.content.map((section: any, index: any) => {
					switch (section.type) {
						case "heading1":
							return (
								<h2
									key={index}
									className="text-3xl font-semibold border-b-2 pb-2 border-blue-600 dark:border-blue-400"
								>
									{section.text}
								</h2>
							);
						case "heading2":
							return (
								<h3
									key={index}
									className="text-2xl font-semibold border-b-2 pb-2 border-blue-600 dark:border-blue-400"
								>
									{section.text}
								</h3>
							);
						case "heading3":
							return (
								<h4
									key={index}
									className="text-xl font-semibold border-b-2 pb-2 border-blue-600 dark:border-blue-400"
								>
									{section.text}
								</h4>
							);
						case "paragraph":
							return (
								<p key={index} className="mb-4">
									{section.text}
								</p>
							);
						case "list":
							return (
								<ul key={index} className="list-disc pl-6 mb-4">
									{section.items &&
										section.items.map((item: any, idx: any) => (
											<li key={idx}>{item}</li>
										))}
								</ul>
							);
						case "code":
							return (
								<div
									key={index}
									className="bg-gray-800 text-white p-6 rounded-lg mt-4 overflow-auto shadow-md"
								>
									<pre className="language-html">
										<code>{section.code}</code>
									</pre>
								</div>
							);
						default:
							return null;
					}
				})}
			</article>

			{/* Bottom Divider */}
			<hr className="my-12 border-gray-300 dark:border-gray-600" />

			{/* Back to Blogs Button */}
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
