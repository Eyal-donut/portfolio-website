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
    <div className={classes.projectWrapper}>
      <div
        className={classes.projectBackground}
        style={{
          background: `url(/src/assets/images/background1.jfif) no-repeat center
  center/cover`,
        }}
      />
      <ProjectNumber projectNumber={projectNumber} />
      <ProjectHeaderAndText header={header} description={description} />
    </div>
  );
};

export default Project;
