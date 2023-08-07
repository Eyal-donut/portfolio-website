import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const getHTMLBySectionName = (
  section: "Home" | "About" | "Projects" | "Contact"
) => {
  const homeRef = useSelector((state: RootState) => state.sectionRefs.home);
  const aboutRef = useSelector((state: RootState) => state.sectionRefs.about);
  const projectsRef = useSelector(
    (state: RootState) => state.sectionRefs.projects
  );
  const contactRef = useSelector(
    (state: RootState) => state.sectionRefs.contact
  );
  switch (section) {
    case "Home":
      return homeRef?.current;
    case "About":
      return aboutRef?.current;
    case "Projects":
      return projectsRef?.current;
    default:
      return contactRef?.current;
  }
};

export default getHTMLBySectionName;
