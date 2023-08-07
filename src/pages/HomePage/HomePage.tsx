import { FC } from "react";
import Main from "../../components/sections/Main/Main";
import About from "../../components/sections/About/About";
import Projects from "../../components/sections/Projects/Projects";
import Contact from "../../components/sections/Contact/Contact";

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
