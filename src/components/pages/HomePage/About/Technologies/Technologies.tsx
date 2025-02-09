import { FC } from "react";
import { technologiesInfo } from "../../../../../constants/constants";
import ExpandableSection from "../../../../global components/ExpandableSection/ExpandableSection";
import TechnologiesGroup from "./TechnologiesGroup/TechnologiesGroup";

import classes from './Technologies.module.css';

const TechnologiesSubsection: FC = () => {
  return (
    <div className= {classes.subsectionWrap}>
      <div className={classes.wrapper}>
        <h4 id="subsection-technologies">technologies</h4>
        <p className="main-text">
        My expertise encompasses crafting seamless user interfaces with meticulous designs, exposing
        RESTful APIs, developing server-side applications, efficiently managing
        databases, performing code reviews, implementing unit tests and collaborating with other developers, product managers, and
        customers. Click on the list below to expand it and explore the full set of technologies I’ve mastered.
        </p>

      </div>
      <ExpandableSection expandedMaxHeight={1000} collapsedMaxHeight={25}>
        {technologiesInfo.map((tech) => {
          return (
            <TechnologiesGroup
              key={tech.header}
              header={tech.header}
              technologies={tech.technologies}
            />
          );
        })}
      </ExpandableSection>
    </div>
  );
};

export default TechnologiesSubsection;
