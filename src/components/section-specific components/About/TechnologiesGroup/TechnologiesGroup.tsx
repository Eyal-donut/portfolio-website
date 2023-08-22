import { FC } from "react";
import classes from "./TechnologiesGroup.module.css";

interface TechBoxProps {
  technologies: { imageURL: string; name: string }[];
  header: string;
  marginTop?: number;
}

const TechnologiesGroup: FC<TechBoxProps> = ({
  technologies,
  header,
  marginTop,
}) => {
  return (
    <div
      className={classes.outerContainer}
      style={{ marginTop: `${marginTop}rem` }}
    >
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
