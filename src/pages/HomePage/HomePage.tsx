
import { FC } from "react";
import ScrollTrigger from "../../components/global components/ScrollTrigger/ScrollTrigger";
import About from "../../components/pages/HomePage/About/About";
import Contact from "../../components/pages/HomePage/Contact/Contact";
import Main from "../../components/pages/HomePage/Main/Main";
import Projects from "../../components/pages/HomePage/Projects/Projects";
import { projectsInfos } from "../../constants/constants";

const HomePage: FC = () => {
  return (
    <>
      <Main />
      <ScrollTrigger isReversibleEffect={false}>
        <Projects projects={projectsInfos} />
      </ScrollTrigger>
      <ScrollTrigger isReversibleEffect={false}>
        <About />
      </ScrollTrigger>
      <Contact />
    </>
  );
};
export default HomePage;
