import { FC } from "react";
import {
  backendAndDatabaseTechnologies,
  frontendTechnologies,
  programmingLangs,
  testingScrapingAndAPI,
  versionControlTechnologies,
} from "../../../../constants/constants";
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
        <TechnologiesGroup
          header="programming languages"
          technologies={programmingLangs}
        />
        <TechnologiesGroup
          header="front-end"
          technologies={frontendTechnologies}
        />
        <TechnologiesGroup
          header="back-end & database"
          technologies={backendAndDatabaseTechnologies}
        />
        <TechnologiesGroup
          header="version control"
          technologies={versionControlTechnologies}
        />
        <TechnologiesGroup
          header="testing, web-scraping and api"
          technologies={testingScrapingAndAPI}
        />
      </ExpandableSection>
    </>
  );
};

export default TechnologiesSubsection;
