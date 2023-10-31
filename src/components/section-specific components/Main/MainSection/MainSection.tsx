import { FC } from "react";
import { sectionIds } from "../../../../constants/constants";
import Header from "../Header/Header";
import classes from './MainSection.module.css'

const Main: FC = () => {
  return <main id={sectionIds.MAIN} className={classes.main}>
    <Header message="I AM EYAL LILA, Full stack WEB DEVELOPER"/>
  </main>;
};
export default Main;
