import { FC } from "react";
import classes from "./ProjectHeaderAndText.module.css";

interface ProjectHeaderAndTextProps {
  header: string;
  description: string;
}

const ProjectHeaderAndText: FC<ProjectHeaderAndTextProps> = ({
  header,
  description,
}) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.header}>{header}</h2>
      <p className={classes.descriptionText}>{description}</p>
    </div>
  );
};

export default ProjectHeaderAndText;
