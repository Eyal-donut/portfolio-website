import { FC } from "react";
import NavButton from "../NavButton/NavButton";
import getHTMLBySectionName from "../../../utils/getHTMLBySectionName";
import scrollToHTML from "../../../utils/scrollToHTML";
import classes from "./Navbar.module.css";

const Navbar: FC = () => {
  
  const handleClick = (name: "Home" | "About" | "Projects" | "Contact") => {
    const targetHTML = getHTMLBySectionName(name);
    if (!targetHTML) throw new Error("Error in getHTMLBySectionName");
    scrollToHTML(targetHTML);
  };

  return (
    <nav className={classes.navbar}>
      <ul className="centered-flex-container">
        <NavButton name="Home" onBtnClick={handleClick}></NavButton>
        <NavButton name="About" onBtnClick={handleClick}></NavButton>
        <NavButton name="Projects" onBtnClick={handleClick}></NavButton>
        <NavButton name="Contact" onBtnClick={handleClick}></NavButton>
      </ul>
    </nav>
  );
};
export default Navbar;
