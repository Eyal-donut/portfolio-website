import { FC, useState, useRef } from "react";
import useOnScreen from "../../../../hooks/useOnScreen/useOnScreen";
import classes from "./Project.module.css";
import ProjectHeaderAndText from "../ProjectHeaderAndText/ProjectHeaderAndText";
import ProjectNumber from "../ProjectNumber/ProjectNumber";
import ViewArrow from "../ViewArrow/ViewArrow";
import isDesktopViewport from "../../../../utils/isDesktopViewport";
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
  const ref = useRef<HTMLDivElement>(null);
  const { isInMiddle } = useOnScreen(ref);

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
        ref={ref}
        className={classes.backgroundOverlay}
        style={{
          opacity: isDesktopViewport()
            ? isHovered
              ? 0.75
              : 1
            : isInMiddle
            ? 0.75
            : 1,
        }}
      ></div>
      <div className={classes.flexContainer}>
        <ProjectNumber
          projectNumber={projectNumber}
          isHovered={isHovered}
          isVisible={isInMiddle}
        />
        <ProjectHeaderAndText header={header} description={description} />
      </div>
      <ViewArrow />
    </a>
  );
};

export default Project;
