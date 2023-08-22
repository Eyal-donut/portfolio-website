import { FC } from "react";
import classes from "./TechBox.module.css";

interface TechBoxProps {
  technologies: { imageURL: string; name: string }[];
}

const TechBox: FC<TechBoxProps> = ({ technologies }) => {
  return (
    <>
      <div className={classes.container}>
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
    </>
  );
};

export default TechBox;
