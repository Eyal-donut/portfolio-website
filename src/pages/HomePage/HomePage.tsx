import { FC } from "react";
import Main from "../../components/section-specific components/Main/Main";
import About from "../../components/section-specific components/About/About";
import Projects from "../../components/section-specific components/Projects/Projects";
import Contact from "../../components/section-specific components/Contact/Contact";
import { projectsInfos } from "../../constants/constants";

const HomePage: FC = () => {
  return (
    <>
      <Main />
      <Projects projects={projectsInfos}/>
      <About />
      <Contact />
    </>
  );
};
export default HomePage;
