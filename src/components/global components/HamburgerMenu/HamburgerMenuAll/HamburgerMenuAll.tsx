import { useState } from "react";
import MenuButton from "../MenuButton/MenuButton";
import Menu from "../Menu/Menu";
import classes from "./HamburgerMenuAll.module.css";

const HamburgerMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    setIsMenuVisible((prevState) => !prevState);
  };
  return (
    <div className={classes.menuWrap}>
      <MenuButton onBtnClick={handleClick} isMenuVisible={isMenuVisible} />
      <Menu isMenuVisible={isMenuVisible} />
    </div>
  );
};

export default HamburgerMenu;
