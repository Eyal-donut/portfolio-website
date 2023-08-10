import { FC } from "react";

interface ProjectNumberProps {
  projectNumber: number;
}

const ProjectNumber: FC<ProjectNumberProps> = ({ projectNumber }) => {
  return <div>{projectNumber}</div>;
};

export default ProjectNumber;
