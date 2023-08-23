import waitFunction from "../../../hooks/useTypedMessage/waitFunction";
import scrollToHTMLBySectionName from "../../../utils/scrollToHTMLBySectionName";
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

  const handleClick = async() => {
    if (isExpanded) {
      setIsExpanded(false);
      await waitFunction(250)
      scrollToHTMLBySectionName("Technologies");
    } else setIsExpanded(true);
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
