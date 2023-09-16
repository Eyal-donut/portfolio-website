import { FC } from "react";
import { sectionIds } from "../../../../constants/constants";
import Project from "../Project/Project";
import classes from "./ProjectsSection.module.css";
import Button from "../../../global components/Button/Button";

interface ProjectType {
  imageURL: string;
  projectNumber: number;
  header: string;
  description: string;
  link: string;
}

interface ProjectsProps {
  projects: ProjectType[];
}

const ProjectsSection: FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id={sectionIds.PROJECTS} className={classes.wrapper}>
      <h3>selected projects</h3>
      <div className={classes.innerWrapper}>
        {projects.map((proj) => {
          return (
            <Project
              key={proj.header + +proj.projectNumber}
              imageURL={proj.imageURL}
              projectNumber={proj.projectNumber}
              description={proj.description}
              header={proj.header}
              link={proj.link}
            />
          );
        })}
      </div>
      <Button
        text="Projects Portfolio pdf"
        buttonLink="/src/assets/Eyal Lila Projects Portfolio.pdf"
      />
    </section>
  );
};
export default ProjectsSection;
