import { FC } from "react";
import { sectionIds } from "../../../constants/constants";
import Button from "../../global components/Button/Button";
import ScrollTrigger from "../../global components/ScrollTrigger/ScrollTrigger";
import WhoIAm from "./WhoIAm/WhoIAm";
import WorkExperience from "./WorkExperience/WorkExperience";
import CV from "/src/assets/Eyal Lila CV.pdf";

import classes from "./About.module.css";
import TechnologiesSubsection from "./Technologies/Technologies";

const About: FC = () => {
  return (
    <section id={sectionIds.ABOUT}>
      <div className="header-border-bottom">
        <h3>about</h3>
      </div>
      <ScrollTrigger isReversibleEffect={false}>
        <WhoIAm />
      </ScrollTrigger>
      <ScrollTrigger isReversibleEffect={false}>
        <TechnologiesSubsection />
      </ScrollTrigger>
      <ScrollTrigger isReversibleEffect={false}>
        <WorkExperience />
        <Button text="Open My CV" buttonLink={CV} className={classes.btn} />
      </ScrollTrigger>
    </section>
  );
};
export default About;
