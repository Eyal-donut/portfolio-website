import { FC } from "react";
import classes from "./TechnologiesGrid.module.css";

const TechnologiesGrid: FC = () => {
  return (
    <div className={classes.background}>
      <div className={classes.grid}>
        <div className={classes.html}></div>
        <div className={classes.css}></div>
        <div className={classes.js}></div>
        <div className={classes.react}></div>
        <div className={classes.node}></div>
      </div>
    </div>
  );
};

export default TechnologiesGrid;
