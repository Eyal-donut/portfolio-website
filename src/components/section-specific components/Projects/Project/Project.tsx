import React, { FC, useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={
        isHovered
          ? `${classes.projectWrapperHovered} ${classes.projectWrapper}`
          : classes.projectWrapper
      }
      style={{
        background: `url(${imageURL}) no-repeat center center/cover`,
      }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={classes.backgroundOverlay}
        style={{
          opacity: isHovered ? 0.7 : 1,
        }}
      ></div>
      <div className={classes.flexContainer}>
        <ProjectNumber projectNumber={projectNumber} isHovered={isHovered} />
        <ProjectHeaderAndText header={header} description={description} />
      </div>
    </div>
  );
};

export default Project;
