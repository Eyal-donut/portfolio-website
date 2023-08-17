import { FC } from "react";
import { sectionIds } from "../../../constants/constants";
import Project from "../Project/Project";
import classes from "./Projects.module.css";

interface ProjectType {
  imageURL: string;
  projectNumber: number;
  header: string;
  description: string;
}

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
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
            />
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
