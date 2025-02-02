import { FC } from "react";
import classes from "./TechnologiesGroup.module.css";

interface TechBoxProps {
  technologies: { imageURL: string; name: string }[];
  header: string;
}

const TechnologiesGroup: FC<TechBoxProps> = ({ technologies, header }) => {
  return (
    <div className={classes.outerContainer}>
      <h5>{header}</h5>
      <div className={classes.innerContainer}>
        {technologies.map((tech) => {
          return (
            <div
              key={tech.name}
              style={{
                background: `url(${tech.imageURL}) no-repeat center center/contain`,
              }}
              className={classes.technologyImage}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnologiesGroup;
