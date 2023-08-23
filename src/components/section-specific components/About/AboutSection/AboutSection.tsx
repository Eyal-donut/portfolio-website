import { FC } from "react";
import { sectionIds } from "../../../../constants/constants";
import Button from "../../../global components/Button/Button";
import WhoIAm from "../WhoIAm/WhoIAm";
import TechnologiesSubsection from "../TechnologiesSubsection/TechnologiesSubsection";
import WorkExperience from "../WorkExperience/WorkExperience";
import classes from './AboutSection.module.css'

const About: FC = () => {
  return (
    <section id={sectionIds.ABOUT}>
      <div className="header-border-bottom">
        <h3>about</h3>
      </div>
      <WhoIAm />
      <TechnologiesSubsection />
      <WorkExperience />
      <Button
        text="Open My CV"
        buttonLink="/src/assets/Eyal Lila CV.pdf"
        className={classes.btn}
      />
    </section>
  );
};
export default About;
