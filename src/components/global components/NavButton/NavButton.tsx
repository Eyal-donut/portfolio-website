import { FC } from "react";

import classes from "./NavButton.module.css";

interface NavButtonProps {
  name: "Home" | "About" | "Projects" | "Contact";
  onBtnClick: (name: "Home" | "About" | "Projects" | "Contact") => void;
}

const NavButton: FC<NavButtonProps> = ({ name, onBtnClick }) => {
  return (
    <button className={classes.button} onClick={() => onBtnClick(name)}>
      {name}
    </button>
  );
};

export default NavButton;
