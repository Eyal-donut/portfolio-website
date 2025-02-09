import { FC } from "react";
import IconFa from "../../../../global components/IconFa/IconFa";
import classes from "./Job.module.css";

interface JobProps {
  iconName: string;
  size: number;
  jobTitle: string;
  jobDescription: string;
  company: string;
}

const Job: FC<JobProps> = ({
  iconName,
  size,
  jobTitle,
  company,
  jobDescription}) => {
  return (
    <div className={classes.wrapper}>
      <IconFa iconName={iconName} size={size} />
      <h6>{jobTitle} </h6>
      <h6 className={classes.companyName}>{company}</h6>
      <p className="main-text">{jobDescription}</p>
    </div>
  );
};

export default Job;
