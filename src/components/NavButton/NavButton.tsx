import { FC } from "react";
import scrollToHTML from "../../utils/ScrollToHTML";
import getHTMLBySectionName from "../../utils/getHTMLBySectionName";

interface NavButtonProps {
  sectionName: "Home" | "About" | "Projects" | "Contact";
}

const NavButton: FC<NavButtonProps> = ({ sectionName }) => {
  
  const clickHandler = () => {
    const targetHTML = getHTMLBySectionName(sectionName);
    if (!targetHTML) throw new Error("Error in get HTMLBySectionName");
    scrollToHTML(targetHTML);
  };

  return <button onClick={clickHandler}>{sectionName}</button>;
};

export default NavButton;
