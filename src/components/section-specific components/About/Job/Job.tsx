import { FC } from "react";
import classes from "./Job.module.css";
import IconFa from "../../../global components/IconFa/IconFa";

interface JobProps {
  iconName: string;
  size: number;
  JobTitle: string;
  JobDescription: string;
  company: string;
}

const Job: FC<JobProps> = ({
  iconName,
  size,
  JobTitle,
  company,
  JobDescription,
}) => {
  return (
    <div className={classes.wrapper}>
      <IconFa iconName={iconName} size={size} />
      <h6>{JobTitle} </h6>
      <h6 className={classes.companyName}>{company}</h6>
      <p>{JobDescription}</p>
    </div>
  );
};

export default Job;
