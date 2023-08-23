import { FC } from "react";
import Main from "../../components/section-specific components/Main/MainSection/MainSection";
import About from "../../components/section-specific components/About/AboutSection/AboutSection";
import Projects from "../../components/section-specific components/Projects/ProjectsSection/ProjectsSection";
import Contact from "../../components/section-specific components/Contact/Contact";
import { projectsInfos } from "../../constants/constants";

const HomePage: FC = () => {
  return (
    <>
      <Main />
      <Projects projects={projectsInfos} />
      <About />
      <Contact />
    </>
  );
};
export default HomePage;
