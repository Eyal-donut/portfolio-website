import { FC } from "react";
import scrollToHTML from "../../../utils/scrollToHTML";
import getHTMLBySectionName from "../../../utils/getHTMLBySectionName";
import classes from "./NavButton.module.css";

interface NavButtonProps {
  name: "Home" | "About" | "Projects" | "Contact";
}

const NavButton: FC<NavButtonProps> = ({ name }) => {
  const clickHandler = () => {
    const targetHTML = getHTMLBySectionName(name);
    if (!targetHTML) throw new Error("Error in getHTMLBySectionName");
    scrollToHTML(targetHTML);
  };

  return (
    <button className={classes.button} onClick={clickHandler}>
      {name}
    </button>
  );
};

export default NavButton;
