import InitialAnimation from "./initial-animation";

const TopSection = () => {
	return (
		<div className="flex justify-center">
			<InitialAnimation>
				<span
					className={`pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text md:text-center text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10  py-4`}
				>
					All Projects
				</span>
			</InitialAnimation>
		</div>
	);
};

export default TopSection;
