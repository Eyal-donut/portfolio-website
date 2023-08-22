import { FC } from "react";
import {
  backendAndDatabaseTechnologies,
  frontendTechnologies,
  programmingLangs,
  sectionIds,
  testingScrapingAndAPI,
  versionControlTechnologies,
} from "../../../../constants/constants";
import TechnologiesGroup from "../TechnologiesGroup/TechnologiesGroup";
import ExpandableSection from "../../../global components/ExpandableSection/ExpandableSection";

const About: FC = () => {
  return (
    <section id={sectionIds.ABOUT}>
      <div className="header-border-bottom">
        <h3>about</h3>
      </div>
      <h4>who i am</h4>
      <p>
        Experienced and passionate Full Stack Developer with a proven ability to
        work agilely and collaborate effectively within teams. Combining a solid
        scientific background in biochemical research, entrepreneurial acumen as
        a business owner, and analytical expertise gained from military service
        as an aerial imagery analyst.
      </p>
      <h4 id="subsection-technologies">technologies</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nisi earum
        delectus vel, quibusdam aliquid non doloribus molestiae incidunt eaque
        at? Beatae commodi eius voluptates, modi ullam atque aut sunt!
      </p>
      <ExpandableSection expandedMaxHeight={25} collapsedMaxHeight={1000}>
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
    </section>
  );
};
export default About;
