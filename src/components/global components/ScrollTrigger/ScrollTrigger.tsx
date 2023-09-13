import { FC, ReactNode, useState } from "react";
import classes from "./ScrollTrigger.module.css";

interface ScrollTriggerProps {
  children: ReactNode;
}

const ScrollTrigger: FC<ScrollTriggerProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleTriggerEnter = () => {
    setIsVisible(true);
  };

  return (
    <div
      className={`${classes.slideUpContainer} ${
        isVisible ? "slideUpActive" : ""
      }`}
      onScroll={handleTriggerEnter}
    >
      {children}
    </div>
  );
};

export default ScrollTrigger;
