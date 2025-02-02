
import { FC } from "react";
import ScrollTrigger from "../../components/global components/ScrollTrigger/ScrollTrigger";
import About from "../../components/section-specific components/About/AboutSection/AboutSection";
import ContactSection from "../../components/section-specific components/Contact/ContactSection/ContactSection";
import Main from "../../components/section-specific components/Main/MainSection/MainSection";
import Projects from "../../components/section-specific components/Projects/ProjectsSection/ProjectsSection";
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
      <ContactSection />
    </>
  );
};
export default HomePage;
