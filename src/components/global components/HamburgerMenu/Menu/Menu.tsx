import { FC } from "react";
import classes from "./Menu.module.css";

interface MenuProps {
  isMenuVisible: boolean;
}

const Menu: FC<MenuProps> = ({ isMenuVisible }) => {
  return (
    <div
      className={
        isMenuVisible ? `${classes.menu} ${classes.menuVisible}` : classes.menu
      }
    ></div>
  );
};

export default Menu;
