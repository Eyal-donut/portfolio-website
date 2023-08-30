import { FC } from "react";
import classes from "./Menu.module.css";
import MenuButton from "../MenuButton/MenuButton";
import scrollToHTMLBySectionName from "../../../../utils/scrollToHTMLBySectionName";

interface MenuProps {
  isMenuVisible: boolean;
  
}

const Menu: FC<MenuProps> = ({ isMenuVisible }) => {

  const handleClick = (name: "Home" | "About" | "Projects" | "Contact") => {
    scrollToHTMLBySectionName(name);
  };
  
  return (
    <div
      className={
        isMenuVisible ? `${classes.menu} ${classes.menuVisible}` : classes.menu
      }
    >
      <MenuButton name="Home" onBtnClick={handleClick} />
    </div>
  );
};

export default Menu;
