import { FC } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  text: string;
  buttonLink: string;
}

const Button: FC<ButtonProps> = ({ text, buttonLink }) => {
  return (
    <a href={buttonLink} target="_blank">
      <button className={classes.btn}>{text}</button>;
    </a>
  );
};

export default Button;
