import { FC } from "react";
import classes from "./Project.module.css";
import ProjectHeaderAndText from "../ProjectHeaderAndText/ProjectHeaderAndText";
import ProjectNumber from "../ProjectNumber/ProjectNumber";

interface ProjectProps {
  imageURL: string;
  header: string;
  description: string;
  projectNumber: number;
}

const Project: FC<ProjectProps> = ({
  imageURL,
  header,
  description,
  projectNumber,
}) => {
  return (
    <div
      className={classes.projectWrapper}
      style={{
        background: `url(${imageURL}) no-repeat center
      center/cover`,
      }}
    >
      <ProjectHeaderAndText header={header} description={description} />
      <ProjectNumber projectNumber={projectNumber} />
    </div>
  );
};

export default Project;
