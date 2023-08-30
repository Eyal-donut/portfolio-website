import { FC } from "react";

import classes from "./NavButton.module.css";

interface MenuButtonProps {
  name: "Home" | "About" | "Projects" | "Contact";
  onBtnClick: (name: "Home" | "About" | "Projects" | "Contact") => void;
}

const MenuButton: FC<MenuButtonProps> = ({ name, onBtnClick }) => {
  return (
    <button className={classes.menuButton} onClick={() => onBtnClick(name)}>
      {name}
    </button>
  );
};

export default MenuButton;
