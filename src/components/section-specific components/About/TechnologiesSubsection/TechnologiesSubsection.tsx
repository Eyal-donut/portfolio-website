import { FC } from "react";
import { technologiesInfo } from "../../../../constants/constants";
import TechnologiesGroup from "../TechnologiesGroup/TechnologiesGroup";
import ExpandableSection from "../../../global components/ExpandableSection/ExpandableSection";

const TechnologiesSubsection: FC = () => {
  return (
    <>
      <h4 id="subsection-technologies">technologies</h4>
      <p className="main-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nisi earum
        delectus vel, quibusdam aliquid non doloribus molestiae incidunt eaque
        at? Beatae commodi eius voluptates, modi ullam atque aut sunt!
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
