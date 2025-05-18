import AboutMe from "@/components/Home/AboutMe";
import ExperienceServer from "@/components/Home/Experience/ExperienceServer";
// import Experience from "@/components/Home/Experience";
import Header from "@/components/Home/Header";
import FeaturedProjects from "@/components/Home/Projects/FeaturedProjects";
import SkillsServerRender from "@/components/Home/Skills/SkillsServerRender";
// import Skills from "@/components/Home/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rittika Dev | Home",
};

const HomePage = () => {
  return (
    <div>
      {/* <h1 className="text-4xl text-center mt-10">Welcome To Home Page</h1> */}
      <Header />
      <AboutMe />
      {/* <Skills /> */}
      <SkillsServerRender />
      {/* <Experience /> */}
      <ExperienceServer />
      <FeaturedProjects />
    </div>
  );
};

export default HomePage;
