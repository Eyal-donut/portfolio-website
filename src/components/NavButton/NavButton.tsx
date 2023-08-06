import { FC, MouseEvent } from "react";
import scrollToSection from "../../utils/ScrollToSection";

interface NavbuttonProps {
  sectionName: "Home" | "About" | "Projects" | "Contact";
}

const NavButton: FC<NavbuttonProps> = ({ sectionName }) => {

    const clickHandler: MouseEvent<HTMLButtonElement> = (sectionName) => {
        // scrollToSection()
    }

  return <button onClick={clickHandler}>{sectionName}</button>;
};

export default NavButton;
