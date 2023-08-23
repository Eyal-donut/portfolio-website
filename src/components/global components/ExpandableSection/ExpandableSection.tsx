import getHTMLBySectionName from "../../../utils/getHTMLBySectionName";
import scrollToHTML from "../../../utils/scrollToHTML";
import ClickToExpand from "../ClickToExpand/ClickToExpand";
import classes from "./ExpandableSection.module.css";
import { FC, useState, ReactNode } from "react";

interface ExpandableSectionProps {
  children: ReactNode;
  expandedMaxHeight: number;
  collapsedMaxHeight: number;
}

const ExpandableSection: FC<ExpandableSectionProps> = ({
  children,
  expandedMaxHeight,
  collapsedMaxHeight,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((prevState) => !prevState);
    if (!isExpanded) {
      const targetHTML = getHTMLBySectionName("Technologies");
      if (!targetHTML) throw new Error("Error in getHTMLBySectionName");
      scrollToHTML(targetHTML);
    }
  };
  return (
    <div
      style={{
        maxHeight: isExpanded
          ? `${expandedMaxHeight}rem`
          : `${collapsedMaxHeight}rem`,
      }}
      className={classes.container}
      onClick={handleClick}
    >
      {children}
      <ClickToExpand isExpanded={isExpanded} />
    </div>
  );
};

export default ExpandableSection;
