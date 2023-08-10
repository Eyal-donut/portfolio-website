import { FC } from "react";
import Main from "../../components/section-specific components/Main/Main";
import About from "../../components/section-specific components/About/About";
import Projects from "../../components/section-specific components/Projects/Projects";
import Contact from "../../components/section-specific components/Contact/Contact";

const HomePage: FC = () => {
  return (
    <>
      <Main />
      <About />
      <Projects />
      <Contact />
    </>
  );
};
export default HomePage;
