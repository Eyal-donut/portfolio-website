import classes from "./ScrollTrigger.module.css";
import { FC, ReactNode, useRef } from "react";
import useOnScreen from "../../../hooks/useOnScreen/useOnScreen";

interface ScrollTriggerProps {
  children: ReactNode;
}

const ScrollTrigger: FC<ScrollTriggerProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      className={
        isVisible
          ? `${classes.slideUpContainer} ${classes.slideUpActive}`
          : classes.slideUpContainer
      }
      ref={ref}
    >
      {children}
    </div>
  );
};

export default ScrollTrigger;
