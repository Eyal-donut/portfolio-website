import getHTMLBySectionName from "./getHTMLBySectionName";
import scrollToHTML from "./scrollToHTML";

const scrollToHTMLBySectionName = (
  section: "Home" | "About" | "Projects" | "Contact" | "Technologies"
) => {
  const targetHTML = getHTMLBySectionName(section);
  if (!targetHTML) throw new Error("Error in getHTMLBySectionName");
  scrollToHTML(targetHTML);
};

export default scrollToHTMLBySectionName;
