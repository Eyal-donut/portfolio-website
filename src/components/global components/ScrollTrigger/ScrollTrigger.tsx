import { FC, ReactNode, useState } from "react";
import classes from "./ScrollTrigger.module.css";

interface ScrollTriggerComponentProps {
  children: ReactNode;
}

const ScrollTriggerComponent: FC<ScrollTriggerComponentProps> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleTriggerEnter = () => {
    setIsVisible(true);
  };

  return (
    <div
      className={`${classes.slideUpContainer} ${
        isVisible ? "slideUpActive" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollTriggerComponent;
