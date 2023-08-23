import { FC } from "react";
import classes from "./JumpingArrow.module.css";

interface JumpingArrowProps {
  isExpanded: boolean;
}

const JumpingArrow: FC<JumpingArrowProps> = ({ isExpanded }) => {
  return (
    <div
      className={classes.arrows}
      style={{ rotate: isExpanded ? "0deg" : "180deg" }}
    >
      <div className={classes.secondArrow} />

      <div className={classes.arrow} />
    </div>
  );
};

export default JumpingArrow;
