import { FC } from "react";
import { sectionIds } from "../../../../constants/constants";

import WhoIAm from "../WhoIAm/WhoIAm";
import TechnologiesSubsection from "../TechnologiesSubsection/TechnologiesSubsection";
import WorkExperience from "../WorkExperience/WorkExperience";

const About: FC = () => {
  return (
    <section id={sectionIds.ABOUT}>
      <div className="header-border-bottom">
        <h3>about</h3>
      </div>
      <WhoIAm />
      <TechnologiesSubsection />
      <WorkExperience />
    </section>
  );
};
export default About;
