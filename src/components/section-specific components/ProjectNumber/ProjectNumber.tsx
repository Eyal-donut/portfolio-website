import { FC } from "react";
import classes from "./ProjectNumber.module.css";

interface ProjectNumberProps {
  projectNumber: number;
}

const ProjectNumber: FC<ProjectNumberProps> = ({ projectNumber }) => {
  return (
    <div className={classes.numberBoxContainer}>
      <div className={classes.growLine} />
      <div className={classes.numberBox}>{`0${projectNumber}`}</div>
      
    </div>
  );
};

export default ProjectNumber;
