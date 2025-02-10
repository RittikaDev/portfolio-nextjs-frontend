"use client";

import { File, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHome, FaTasks } from "react-icons/fa";

const Sidebar = () => {
	const pathName = usePathname();
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<div>
			{isClient ? (
				<div className="min-h-screen p-4 rounded-xl">
					<ul className="space-y-4">
						<li>
							<Link
								href="/"
								className={`flex items-center space-x-2 p-3 rounded-md hover:bg-slate-400 text-gray-700 dark:text-gray-200 ${
									pathName === "/" ? "bg-zinc-400 text-white" : ""
								}`}
							>
								<FaHome className="h-5 w-5" />
								<span>Home</span>
							</Link>
						</li>
						<li>
							<Link
								href="/dashboard"
								className={`flex items-center space-x-2 p-3 rounded-md hover:bg-slate-400 text-gray-700 dark:text-gray-200 ${
									pathName === "/dashboard" ? "bg-zinc-400 text-white" : ""
								}`}
							>
								<FaHome className="h-5 w-5" />
								<span>Dashboard</span>
							</Link>
						</li>
						<li>
							<Link
								href="/dashboard/projects"
								className={`flex items-center space-x-2 p-3 rounded-md hover:bg-slate-400 text-gray-700 dark:text-gray-200 ${
									pathName === "/dashboard/projects"
										? "bg-zinc-400 text-white"
										: ""
								}`}
							>
								<FaTasks className="h-5 w-5" />
								<span>Projects</span>
							</Link>
						</li>
						<li>
							<Link
								href="/dashboard/blogs"
								className={`flex items-center space-x-2 p-3 rounded-md hover:bg-slate-400 text-gray-700 dark:text-gray-200 ${
									pathName === "/dashboard/blogs"
										? "bg-zinc-400 text-white"
										: ""
								}`}
							>
								<File className="h-5 w-5" />
								<span>Blogs</span>
							</Link>
						</li>
						<li>
							<Link
								href="/dashboard/messages"
								className={`flex items-center space-x-2 p-3 rounded-md hover:bg-slate-400 text-gray-700 dark:text-gray-200 ${
									pathName === "/dashboard/messages"
										? "bg-zinc-400 text-white"
										: ""
								}`}
							>
								<MessageCircle className="h-5 w-5" />
								<span>Messages</span>
							</Link>
						</li>
					</ul>
				</div>
			) : null}
		</div>
	);
};

export default Sidebar;
