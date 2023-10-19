import { FC } from "react";
import { sectionIds } from "../../../../constants/constants";
import Button from "../../../global components/Button/Button";
import WhoIAm from "../WhoIAm/WhoIAm";
import TechnologiesSubsection from "../TechnologiesSubsection/TechnologiesSubsection";
import WorkExperience from "../WorkExperience/WorkExperience";
import classes from "./AboutSection.module.css";
import CV from "/src/assets/Eyal Lila CV.pdf";
import ScrollTrigger from "../../../global components/ScrollTrigger/ScrollTrigger";

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
