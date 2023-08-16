import { FC } from "react";
import classes from "./Header.module.css";
import TypedMessage from "../TypedMessage/TypedMessage";

interface HeaderProps{
  message: string
}

const Header: FC<HeaderProps> = ({message}) => {
  return (
    <header className={classes.header}>
      <h1>Hello</h1>
      <TypedMessage message={message} />
    </header>
  );
};

export default Header;
