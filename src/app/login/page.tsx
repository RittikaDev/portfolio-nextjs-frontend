"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
	return (
		<div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-rose-100 to-yellow-100">
			<div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
				<h1 className="text-center text-4xl font-extrabold text-gray-800 mb-6">
					Login <span className="text-teal-500">Here</span>
				</h1>

				<p className="text-center text-lg text-gray-600 mb-4">
					Login using Your Socials
				</p>

				{/* Social Login Buttons */}
				<div className="flex justify-center gap-8 mt-6">
					<button
						className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg hover:scale-110 transform transition-all duration-300"
						onClick={() =>
							signIn("google", {
								callbackUrl: "http://localhost:3000/dashboard",
							})
						}
					>
						<Image
							src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
							width={30}
							height={30}
							alt="Google logo"
						/>
					</button>

					<button
						className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg hover:scale-110 transform transition-all duration-300"
						onClick={() =>
							signIn("github", {
								callbackUrl: "http://localhost:3000/dashboard",
							})
						}
					>
						<Image
							src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
							width={30}
							height={30}
							alt="GitHub logo"
						/>
					</button>
				</div>

				<p className="text-center mt-6 text-sm text-gray-600">
					Don&apos;t have an account?{" "}
					<Link href="/register" className="text-teal-500 hover:underline">
						Create an account
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
