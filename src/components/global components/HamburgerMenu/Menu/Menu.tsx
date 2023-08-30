import { FC } from "react";
import classes from "./Menu.module.css";
import MenuNavButton from "../MenuNavButton/MenuNavButton";

interface MenuProps {
  isMenuVisible: boolean;
  onBtnClick: (name: "Home" | "About" | "Projects" | "Contact") => void
}

const Menu: FC<MenuProps> = ({ isMenuVisible, onBtnClick }) => {
 

  return (
    <div
      className={
        isMenuVisible ? `${classes.menu} ${classes.menuVisible}` : classes.menu
      }
    >
      <MenuNavButton name="Home" onBtnClick={onBtnClick} />
      <MenuNavButton name="Projects" onBtnClick={onBtnClick} />
      <MenuNavButton name="About" onBtnClick={onBtnClick} />
      <MenuNavButton name="Contact" onBtnClick={onBtnClick} />
    </div>
  );
};

export default Menu;
