import { FC } from "react";

import classes from "./WhoIAm.module.css";

const WhoIAm: FC = () => {
  return (
    <div className={classes.wrapper}>
      <h4>who i am</h4>
      <p className="main-text">
      A passionate Full Stack Developer with production-level experience, bringing both a creative and analytical approach to problem-solving. My professional journey extends
        beyond my programming skills, encompassing a diverse background that
        includes biochemical research in breast cancer, entrepreneurial
        experience, and analytical acumen honed during my military service in
        the Israeli intelligence unit. Just like I moved to Austria and got my chemistry degree in German,
        founded a business and became a software developer - each a unique challenge - whenever I set my mind to
        something, I make it happen.
      </p>
    </div>
  );
};

export default WhoIAm;
