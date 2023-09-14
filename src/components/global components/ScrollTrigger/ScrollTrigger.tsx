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
      className={
        isVisible
          ? `${classes.slideUpContainer} ${classes.slideUpActive}`
          : classes.slideUpContainer
      }
      on={handleTriggerEnter}
    >
      {children}
    </div>
  );
};

export default ScrollTrigger;
