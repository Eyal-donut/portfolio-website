import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const getHTMLBySectionName = (
  section: "Home" | "About" | "Projects" | "Contact"
) => {
  const homeRef = useSelector((state: RootState) => state.sectionRefs.homeRef);
  const aboutRef = useSelector(
    (state: RootState) => state.sectionRefs.aboutRef
  );
  const projectsRef = useSelector(
    (state: RootState) => state.sectionRefs.projectsRef
  );
  const contactRef = useSelector(
    (state: RootState) => state.sectionRefs.contactRef
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
