import { useState } from "react";
import MenuButton from "../MenuButton/MenuButton";
import Menu from "../Menu/Menu";
import classes from "./HamburgerMenuAll.module.css";
import scrollToHTMLBySectionName from "../../../../utils/scrollToHTMLBySectionName";

const HamburgerMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    setIsMenuVisible((prevState) => !prevState);
  };
  const  handleMenuNavButtonClick = async(
    name: "Home" | "About" | "Projects" | "Contact"
  ) => {
    scrollToHTMLBySectionName(name);
    setIsMenuVisible(false)
  };
  return (
    <div className={classes.menuWrap}>
      <MenuButton onBtnClick={handleClick} isMenuVisible={isMenuVisible} />
      <Menu
        isMenuVisible={isMenuVisible}
        onBtnClick={handleMenuNavButtonClick}
      />
    </div>
  );
};

export default HamburgerMenu;
