"use client";

import Image from "next/image";

import logoRD from "@/../public/Logo-RD.png";
import header from "@/../public/header-bg-color.png";
import MenuBlack from "@/../public/menu-black.png";
import MenuWhite from "@/../public/menu-white.png";
import CloseBlack from "@/../public/close-black.png";
import CloseWhite from "@/../public/close-white.png";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/theme-context";
import Link from "next/link";

type UserProps = {
	user?: {
		name?: string | null | undefined;
		email?: string | null | undefined;
		image?: string | null | undefined;
	};
};

const Navbar = ({ session }: { session: UserProps | null }) => {
	// return (
	//   <div className="w-[90%] mx-auto flex items-center justify-between bg-white border-b py-4">
	//     <div className="flex items-center">
	//       <div className="relative lg:hidden">
	//         <div
	//           tabIndex={0}
	//           role="button"
	//           className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
	//         >
	//           <svg
	//             xmlns="http://www.w3.org/2000/svg"
	//             className="h-5 w-5"
	//             fill="none"
	//             viewBox="0 0 24 24"
	//             stroke="currentColor"
	//           >
	//             <path
	//               strokeLinecap="round"
	//               strokeLinejoin="round"
	//               strokeWidth="2"
	//               d="M4 6h16M4 12h8m-8 6h16"
	//             />
	//           </svg>
	//         </div>
	//         <ul
	//           tabIndex={0}
	//           className="absolute mt-3 z-10 p-2 shadow-md bg-white rounded-md w-52"
	//         >
	//           <li className="py-2 px-4 hover:bg-gray-100">
	//             <Link href="/">Home</Link>
	//           </li>
	//           <li className="py-2 px-4 hover:bg-gray-100">
	//             <Link href="/about">About Us</Link>
	//           </li>
	//           <li className="py-2 px-4 hover:bg-gray-100">
	//             <Link href="/support">Support</Link>
	//           </li>
	//         </ul>
	//       </div>
	//       <Link
	//         href="/"
	//         className="ml-4 text-xl font-semibold text-gray-800 hover:text-gray-600"
	//       >
	//         NextAuth
	//       </Link>
	//     </div>

	//     <div className="hidden lg:flex">
	//       <ul className="flex space-x-6 text-gray-800">
	//         <li className="hover:text-gray-600">
	//           <Link href="/">Home</Link>
	//         </li>
	//         <li className="hover:text-gray-600">
	//           <Link href="/about">About Us</Link>
	//         </li>
	//         <li className="hover:text-gray-600">
	//           <Link href="/support">Support</Link>
	//         </li>
	//         <li className="hover:text-gray-600">
	//           <Link href="/dashboard">Dashboard</Link>
	//         </li>
	//       </ul>
	//     </div>

	//     <div className="flex items-center">
	//       {session?.user ? (
	//         <button
	//           className="border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-black transition duration-200"
	//           onClick={() => signOut()}
	//         >
	//           Logout
	//         </button>
	//       ) : (
	//         <Link
	//           href="/login"
	//           className="border border-teal-500 text-teal-500 px-5 py-2 rounded-full hover:bg-teal-500 hover:text-black transition duration-200"
	//         >
	//           Login
	//         </Link>
	//       )}
	//     </div>
	//   </div>
	// );

	const [isScroll, setIsScroll] = useState(false);
	const sideMenuRef = useRef<HTMLUListElement>(null);
	const { theme, toggleTheme } = useTheme();

	const openMenu = () => {
		if (sideMenuRef.current)
			sideMenuRef.current.style.transform = "translate(-16rem";
	};
	const closeMenu = () => {
		if (sideMenuRef.current)
			sideMenuRef.current.style.transform = "translate(16rem";
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (scrollY > 50) setIsScroll(true);
			else setIsScroll(false);
		});
	}, []);

	return (
		<>
			<div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
				<Image src={header} alt="header" className="w-full" />
			</div>
			<nav
				className={`w-full fixed px-5 lg:px-8 xl:px-[8%] pb-4 flex items-center justify-between z-50 dark:bg-gray-900 dark:text-white ${
					isScroll ? "bg-white  bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
				}`}
			>
				<a href="#top">
					<Image
						src={logoRD}
						className="w-28 cursor-pointer mr-14"
						alt="logo"
					/>
				</a>
				<ul
					className={`hidden md:flex items-center gap-6 lg-gap-8 rounded-full px-12 py-3 ${
						!isScroll ? "bg-white shadow-sm bg-opacity-50" : ""
					}`}
				>
					<li>
						<Link href="/" className="font-Ovo">
							Home
						</Link>
					</li>
					{/* <li>
						<a href="#about" className="font-Ovo">
							About
						</a>
					</li>
					<li>
						<a href="#skills" className="font-Ovo">
							Skills
						</a>
					</li>
					<li>
						<a href="#experience" className="font-Ovo">
							Experience
						</a>
					</li> */}
					<li>
						<Link href="/projects">Projects</Link>
					</li>
					<li>
						<Link href="/blog" className="font-Ovo">
							Blogs
						</Link>
					</li>
					<li>
						<Link href="/contact" className="font-Ovo">
							Contact
						</Link>
					</li>
				</ul>

				<button className="block md:hidden ml-44" onClick={openMenu}>
					<Image
						src={theme === "light" ? MenuBlack : MenuWhite}
						alt="menu_black"
						width={35}
					/>
				</button>

				<div>
					<a
						href="#login"
						className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
					>
						Login
					</a>
				</div>
				{/* MOVILE MENU */}
				<ul
					ref={sideMenuRef}
					className="flex md:hidden flex-col gap-4 l py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
				>
					<div className="absolute right-6 top-6" onClick={closeMenu}>
						<Image
							src={theme === "light" ? CloseBlack : CloseWhite}
							className="w-5 cursor-pointer"
							alt="close_black"
						/>
					</div>
					<li>
						<a href="#top" className="font-Ovo" onClick={closeMenu}>
							Home
						</a>
					</li>
					<li>
						<a href="#about" className="font-Ovo" onClick={closeMenu}>
							About
						</a>
					</li>
					<li>
						<a href="#skills" className="font-Ovo" onClick={closeMenu}>
							Skills
						</a>
					</li>
					<li>
						<a href="#experience" className="font-Ovo" onClick={closeMenu}>
							Experience
						</a>
					</li>
					<li>
						<a href="#projects" className="font-Ovo" onClick={closeMenu}>
							Projects
						</a>
					</li>
					<li>
						<a href="#blog" className="font-Ovo" onClick={closeMenu}>
							Blogs
						</a>
					</li>
					<li>
						<a href="#contact" className="font-Ovo" onClick={closeMenu}>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
