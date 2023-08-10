import { FC } from "react";
import { sectionIds } from "../../../constants/constants";
import Header from "../Header/Header";
import classes from './Main.module.css'

const Main: FC = () => {
  return <main id={sectionIds.MAIN} className={classes.main}>
    <Header/>
  </main>;
};
export default Main;
