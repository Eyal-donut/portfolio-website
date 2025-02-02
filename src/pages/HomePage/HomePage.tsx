
import { FC } from "react";
import ScrollTrigger from "../../components/global components/ScrollTrigger/ScrollTrigger";
import About from "../../components/section-specific components/About/About";
import Contact from "../../components/section-specific components/Contact/Contact";
import Main from "../../components/section-specific components/Main/Main";
import Projects from "../../components/section-specific components/Projects/Projects";
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
