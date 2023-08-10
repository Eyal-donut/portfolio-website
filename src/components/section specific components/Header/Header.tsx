import { FC } from "react";
import classes from "./Header.module.css";
import TypedMessage from "../TypedMessage/TypedMessage";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <h1>Hello</h1>
      <TypedMessage message="I AM EYAL LILA. A FULLSTACK DEVELOPER" />
    </header>
  );
};

export default Header;
