import { FC } from "react";
import { sectionIds } from "../../../constants/constants";

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
    </section>
  );
};
export default About;
