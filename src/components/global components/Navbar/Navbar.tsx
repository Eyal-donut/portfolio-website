import { FC } from "react";
import NavButton from "../NavButton/NavButton";
import classes from "./Navbar.module.css";
import scrollToHTMLBySectionName from "../../../utils/scrollToHTMLBySectionName";

const Navbar: FC = () => {
  const handleClick = (name: "Home" | "About" | "Projects" | "Contact") => {
    scrollToHTMLBySectionName(name);
  };

  return (
    <nav className={classes.navbar}>
      <ul className="centered-flex-container">
        <NavButton name="Home" onBtnClick={handleClick}></NavButton>
        <NavButton name="Projects" onBtnClick={handleClick}></NavButton>
        <NavButton name="About" onBtnClick={handleClick}></NavButton>
        <NavButton name="Contact" onBtnClick={handleClick}></NavButton>
      </ul>
    </nav>
  );
};
export default Navbar;
