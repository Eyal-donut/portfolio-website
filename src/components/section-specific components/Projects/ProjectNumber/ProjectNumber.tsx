import { FC } from "react";
import classes from "./ProjectNumber.module.css";
import isDesktopViewport from "../../../../utils/isDesktopViewport";

interface ProjectNumberProps {
  projectNumber: number;
  isHovered: boolean;
  isVisible: boolean;
}

const ProjectNumber: FC<ProjectNumberProps> = ({
  projectNumber,
  isHovered,
  isVisible,
}) => {
  return (
    <div className={classes.numberBoxContainer}>
      <div
        className={classes.line}
        style={{
          width: isDesktopViewport()
            ? isHovered
              ? "10rem"
              : "1.5rem"
            : isVisible
            ? "10rem"
            : "1.5rem",
        }}
      />
      <div className={classes.numberBox}>{`0${projectNumber}`}</div>
    </div>
  );
};

export default ProjectNumber;
