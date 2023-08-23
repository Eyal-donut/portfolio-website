import { FC } from "react";
import classes from "./Job.module.css";
import IconFa from "../../../global components/IconFa/IconFa";

interface JobProps {
  iconName: string;
  size: number;
  color?: string;
}

const Job: FC<JobProps> = ({ iconName, size, color }) => {
  return (
    <div className={classes.wrapper}>
      <IconFa iconName={iconName} size={size} color={color} />
      
    </div>
  );
};

export default Job;
