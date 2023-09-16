import { FC } from "react";
import Main from "../../components/section-specific components/Main/MainSection/MainSection";
import About from "../../components/section-specific components/About/AboutSection/AboutSection";
import Projects from "../../components/section-specific components/Projects/ProjectsSection/ProjectsSection";
import { projectsInfos } from "../../constants/constants";
import ContactSection from "../../components/section-specific components/Contact/ContactSection/ContactSection";
import ScrollTrigger from "../../components/global components/ScrollTrigger/ScrollTrigger";

const HomePage: FC = () => {
  return (
    <>
      <Main />
      <ScrollTrigger>
        <Projects projects={projectsInfos} />
      </ScrollTrigger>
      <ScrollTrigger>
        <About />
      </ScrollTrigger>
      <ContactSection />
    </>
  );
};
export default HomePage;
