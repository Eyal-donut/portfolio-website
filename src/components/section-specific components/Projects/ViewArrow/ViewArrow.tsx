import classes from "./ViewArrow.module.css";

const ViewArrow = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.view}>VIEW</p>
      <div className={classes.arrow} />
    </div>
  );
};

export default ViewArrow;
