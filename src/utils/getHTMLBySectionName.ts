import { sectionIds } from "../constants/constants";

const getHTMLBySectionName = (
  section: "Home" | "About" | "Projects" | "Contact"
) => {
  const getElementById = (id: string) => {
    return document.getElementById(id);
  };

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
