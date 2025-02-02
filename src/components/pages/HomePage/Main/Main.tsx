import { FC } from "react";
import { sectionIds } from "../../../../constants/constants";
import Header from "./Header/Header";

import classes from './Main.module.css';

const Main: FC = () => {
  return <main id={sectionIds.MAIN} className={classes.main}>
    <Header message="I AM EYAL LILA, Full stack DEVELOPER"/>
  </main>;
};
export default Main;
