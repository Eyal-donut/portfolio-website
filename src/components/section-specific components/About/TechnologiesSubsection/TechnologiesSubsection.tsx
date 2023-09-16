import { FC } from "react";
import { technologiesInfo } from "../../../../constants/constants";
import TechnologiesGroup from "../TechnologiesGroup/TechnologiesGroup";
import ExpandableSection from "../../../global components/ExpandableSection/ExpandableSection";

const TechnologiesSubsection: FC = () => {
  return (
    <>
      <h4 id="subsection-technologies">technologies</h4>
      <p className="main-text">
        I possess a solid and versatile skill set, honed
        through hands-on experience in production-level projects. My expertise
        extends to crafting seamless user interfaces with meticulous designs, exposing
        RESTful APIs, developing server-side applications, efficiently managing
        databases and collaborating with other developers, product managers, and
        customers.
      </p>
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
    </>
  );
};

export default TechnologiesSubsection;
