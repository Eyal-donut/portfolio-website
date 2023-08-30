import { FC } from "react";
import classes from "./MenuNavButton.module.css";

interface MenuNavButtonProps {
  name: "Home" | "About" | "Projects" | "Contact";
  onBtnClick: (name: "Home" | "About" | "Projects" | "Contact") => void;
}

const MenuNavButton: FC<MenuNavButtonProps> = ({
  name,
  onBtnClick,
}) => {
  return (
    <button className={classes.menuButton} onClick={() => onBtnClick(name)}>
      {name}
    </button>
  );
};

export default MenuNavButton;
