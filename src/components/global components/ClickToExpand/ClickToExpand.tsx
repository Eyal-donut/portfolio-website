import { FC } from "react";
import classes from "./ClickToExpand.module.css";
import JumpingArrow from "../JumpingArrow/JumpingArrow";

interface ClickToExpandProps {
  isExpanded: boolean;
}

const ClickToExpand: FC<ClickToExpandProps> = ({ isExpanded }) => {
  return (
    <div className={classes.container}>
      <p>{isExpanded ? "collapse" : "click to expand"}</p>

      <JumpingArrow isExpanded={isExpanded} />
    </div>
  );
};

export default ClickToExpand;
