import { FC } from "react";
import NavButton from "../NavButton/NavButton";
import classes from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <nav className={classes.navbar}>
      <ul className="centered-flex-container">
        <NavButton name="Home"></NavButton>
        <NavButton name="About"></NavButton>
        <NavButton name="Projects"></NavButton>
        <NavButton name="Contact"></NavButton>
      </ul>
    </nav>
  );
};
export default Navbar;
