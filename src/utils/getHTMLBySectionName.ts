import getElementById from "./getElementById";
import { sectionIds } from "../constants/constants";

const getHTMLBySectionName = (
  section: "Home" | "About" | "Projects" | "Contact"
) => {
  switch (section) {
    case "Home":
      return getElementById(sectionIds.MAIN);
    case "About":
      return getElementById(sectionIds.ABOUT);
    case "Projects":
      return getElementById(sectionIds.PROJECTS);
    default:
      return getElementById(sectionIds.CONTACT);
  }
};

export default getHTMLBySectionName;
