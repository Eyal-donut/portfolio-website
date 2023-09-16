import { FC, useState } from "react";
import classes from "./Project.module.css";
import ProjectHeaderAndText from "../ProjectHeaderAndText/ProjectHeaderAndText";
import ProjectNumber from "../ProjectNumber/ProjectNumber";
import ViewArrow from "../ViewArrow/ViewArrow";

interface ProjectProps {
  imageURL: string;
  header: string;
  description: string;
  projectNumber: number;
  link: string;
}

const Project: FC<ProjectProps> = ({
  imageURL,
  header,
  description,
  projectNumber,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a
      className={classes.projectWrapper}
      style={{
        background: `url(${imageURL}) no-repeat center center/cover`,
      }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      href={link}
      target="_blank"
    >
      <div
        className={classes.backgroundOverlay}
        style={{
          opacity: isHovered ? 0.75 : 1,
        }}
      ></div>
      <div className={classes.flexContainer}>
        <ProjectNumber projectNumber={projectNumber} isHovered={isHovered} />
        <ProjectHeaderAndText header={header} description={description} />
      </div>
      <ViewArrow />
    </a>
  );
};

export default Project;
