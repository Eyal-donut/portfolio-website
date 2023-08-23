import { FC } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  text: string;
  buttonLink: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ text, buttonLink, className }) => {
  return (
    <a href={buttonLink} target="_blank">
      <button className={`${className} ${classes.btn}`}>{text}</button>;
    </a>
  );
};

export default Button;
