
import { FC } from "react";
import { projectsInfos } from "../../../constants/constants";
import ScrollTrigger from "../../global components/ScrollTrigger/ScrollTrigger";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Main from "./Main/Main";
import Projects from "./Projects/Projects";

const HomePage: FC = () => {
  return (
    <>
      <Main />
      <ScrollTrigger isReversibleEffect={false}>
        <About />
      </ScrollTrigger>
      <ScrollTrigger isReversibleEffect={false}>
        <Projects projects={projectsInfos} />
      </ScrollTrigger>
      <Contact />
    </>
  );
};
export default HomePage;
