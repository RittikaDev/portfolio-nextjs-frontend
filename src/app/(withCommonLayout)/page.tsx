import AboutMe from "@/components/Home/AboutMe";
import Experience from "@/components/Home/Experience";
import Header from "@/components/Home/Header";
import FeaturedProjects from "@/components/Home/Projects/FeaturedProjects";
import Skills from "@/components/Home/Skills";

const HomePage = () => {
	return (
		<div>
			{/* <h1 className="text-4xl text-center mt-10">Welcome To Home Page</h1> */}
			<Header />
			<AboutMe />
			<Skills />
			<Experience />
			<FeaturedProjects />
		</div>
	);
};

export default HomePage;
