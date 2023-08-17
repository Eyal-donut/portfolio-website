import { FC } from "react";
import classes from "./ProjectNumber.module.css";

interface ProjectNumberProps {
  projectNumber: number;
  isHovered: boolean;
}

const ProjectNumber: FC<ProjectNumberProps> = ({
  projectNumber,
  isHovered,
}) => {
  return (
    <div className={classes.numberBoxContainer}>
      <div
        className={classes.line}
        style={{ width: isHovered ? "5rem" : "1.5rem" }}
      />
      <div className={classes.numberBox}>{`0${projectNumber}`}</div>
    </div>
  );
};

export default ProjectNumber;
