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
    <>
      <h2>{header}</h2>
      <p className={classes.projectDescription}>{description}</p>
    </>
  );
};

export default ProjectHeaderAndText;
