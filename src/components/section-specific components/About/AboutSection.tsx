import { FC } from "react";
import { sectionIds } from "../../../constants/constants";
import TechnologiesGrid from "./TechnologiesGrid/TechnologiesGrid";

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
      <h4>technologies</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nisi earum
        delectus vel, quibusdam aliquid non doloribus molestiae incidunt eaque
        at? Beatae commodi eius voluptates, modi ullam atque aut sunt!
      </p>
      <TechnologiesGrid />
    </section>
  );
};
export default About;
