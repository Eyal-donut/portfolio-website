import { FC } from "react";
import { sectionIds } from "../../../../constants/constants";
import ScrollTrigger from "../../../global components/ScrollTrigger/ScrollTrigger";
import WhoIAm from "./WhoIAm/WhoIAm";
import WorkExperience from "./WorkExperience/WorkExperience";

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
        {/* <Button text="Open My CV" buttonLink={CV} className={classes.btn} /> */}
      </ScrollTrigger>
    </section>
  );
};
export default About;
